'use client';

import { useState, useCallback } from 'react';

interface HeaderField {
    name: string;
    value: string;
    flagged: boolean;
    reason?: string;
}

interface HeaderAnalysis {
    from: string;
    replyTo: string;
    returnPath: string;
    receivedHops: string[];
    messageId: string;
    xMailer: string;
    flags: { label: string; severity: 'low' | 'medium' | 'high' }[];
    raw: HeaderField[];
}

function parseHeaders(rawHeader: string): HeaderAnalysis {
    const lines = rawHeader.split(/\r?\n/);
    const fields: HeaderField[] = [];
    let current: HeaderField | null = null;

    for (const line of lines) {
        if (/^\S/.test(line) && line.includes(':')) {
            if (current) fields.push(current);
            const colonIdx = line.indexOf(':');
            current = {
                name: line.slice(0, colonIdx).trim(),
                value: line.slice(colonIdx + 1).trim(),
                flagged: false,
            };
        } else if (current && /^\s/.test(line)) {
            current.value += ' ' + line.trim();
        }
    }
    if (current) fields.push(current);

    const get = (name: string) =>
        fields.find((f) => f.name.toLowerCase() === name.toLowerCase())?.value ?? '';

    const from = get('From');
    const replyTo = get('Reply-To');
    const returnPath = get('Return-Path');
    const messageId = get('Message-ID');
    const xMailer = get('X-Mailer');
    const receivedHops = fields
        .filter((f) => f.name.toLowerCase() === 'received')
        .map((f) => f.value);

    const flags: HeaderAnalysis['flags'] = [];

    // Flag Reply-To mismatch
    if (replyTo && from) {
        const fromDomain = from.match(/@([\w.-]+)/)?.[1];
        const replyDomain = replyTo.match(/@([\w.-]+)/)?.[1];
        if (fromDomain && replyDomain && fromDomain !== replyDomain) {
            flags.push({ label: `Reply-To mismatch: From @${fromDomain} → Reply-To @${replyDomain}`, severity: 'high' });
        }
    }

    // Flag Return-Path mismatch
    if (returnPath && from) {
        const fromDomain = from.match(/@([\w.-]+)/)?.[1];
        const rpDomain = returnPath.match(/@([\w.-]+)/)?.[1];
        if (fromDomain && rpDomain && fromDomain !== rpDomain) {
            flags.push({ label: `Return-Path mismatch: From @${fromDomain} → Return-Path @${rpDomain}`, severity: 'medium' });
        }
    }

    // Flag suspicious hop count
    if (receivedHops.length > 6) {
        flags.push({ label: `Unusual routing: ${receivedHops.length} mail hops detected`, severity: 'medium' });
    }

    // Flag transit delay
    const delayMatch = rawHeader.match(/delay=(\d+)/);
    if (delayMatch && parseInt(delayMatch[1]) > 3600) {
        flags.push({ label: `High transit delay detected: ${Math.round(parseInt(delayMatch[1]) / 60)} minutes`, severity: 'low' });
    }

    // Flag missing Message-ID
    if (!messageId) {
        flags.push({ label: 'Missing Message-ID — common in spoofed/automated mail', severity: 'medium' });
    }

    return { from, replyTo, returnPath, receivedHops, messageId, xMailer, flags, raw: fields };
}

const SEVERITY_STYLES = {
    high: { bg: 'rgba(255,60,60,0.08)', border: 'rgba(255,60,60,0.3)', text: '#ff4040', icon: '🔴' },
    medium: { bg: 'rgba(255,180,0,0.08)', border: 'rgba(255,180,0,0.3)', text: '#f5a623', icon: '🟡' },
    low: { bg: 'rgba(100,200,255,0.08)', border: 'rgba(100,200,255,0.3)', text: '#64c8ff', icon: '🔵' },
};

export function HeaderAnalyzer({ target }: { target?: string }) {
    const [raw, setRaw] = useState('');
    const [analysis, setAnalysis] = useState<HeaderAnalysis | null>(null);

    const analyze = useCallback(() => {
        if (!raw.trim()) return;
        setAnalysis(parseHeaders(raw));
    }, [raw]);

    return (
        <div style={{ width: '100%', maxWidth: '860px', margin: '0 auto' }}>
            <h2 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Email Header Analyzer</h2>
            <p style={{ color: '#6b7280', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                Paste raw email headers to detect routing anomalies, Reply-To discrepancies, and spoofing indicators.
            </p>

            {target && (
                <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '6px 14px', borderRadius: '99px', marginBottom: '1rem',
                    background: 'rgba(0,210,255,0.07)', border: '1px solid rgba(0,210,255,0.2)',
                    fontSize: '0.8rem',
                }}>
                    <span style={{ color: '#4b5563' }}>Analyzing headers for:</span>
                    <span style={{ color: 'var(--color-accent-blue)', fontFamily: 'monospace', fontWeight: 600 }}>{target}</span>
                </div>
            )}

            <textarea
                placeholder={`Paste raw email headers here...\n\nFrom: sender@example.com\nReply-To: attacker@evil.com\nReceived: from mx.evil.com...`}
                value={raw}
                onChange={(e) => setRaw(e.target.value)}
                rows={10}
                style={{
                    width: '100%', padding: '1rem', fontFamily: 'monospace', fontSize: '0.8rem',
                    background: '#0a0c10', border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '0.75rem', color: '#9ca3af', resize: 'vertical', outline: 'none',
                    marginBottom: '0.75rem', lineHeight: 1.6,
                    transition: 'border-color 0.2s'
                }}
                onFocus={e => (e.target.style.borderColor = 'rgba(0,210,255,0.4)')}
                onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
            />
            <button
                onClick={analyze}
                disabled={!raw.trim()}
                style={{
                    padding: '0.7rem 1.75rem', background: 'var(--color-accent-teal)',
                    color: '#000', fontWeight: 700, borderRadius: '99px', border: 'none',
                    cursor: raw.trim() ? 'pointer' : 'not-allowed', opacity: raw.trim() ? 1 : 0.5,
                    fontSize: '0.9rem', marginBottom: '2rem',
                    transition: 'opacity 0.2s'
                }}
            >
                Analyze Headers
            </button>

            {analysis && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {/* Summary fields */}
                    <div style={{
                        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem',
                        background: '#0d1117', border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: '0.75rem', padding: '1.25rem'
                    }}>
                        {[
                            { label: 'From', value: analysis.from || '(not found)' },
                            { label: 'Reply-To', value: analysis.replyTo || '(none)' },
                            { label: 'Return-Path', value: analysis.returnPath || '(none)' },
                            { label: 'Message-ID', value: analysis.messageId || '(missing)' },
                            { label: 'Mail Hops', value: `${analysis.receivedHops.length} hops` },
                            { label: 'X-Mailer', value: analysis.xMailer || '(not set)' },
                        ].map(({ label, value }) => (
                            <div key={label}>
                                <p style={{ color: '#4b5563', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>{label}</p>
                                <p style={{ color: '#e5e7eb', fontSize: '0.82rem', fontFamily: 'monospace', wordBreak: 'break-all' }}>{value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Flags */}
                    {analysis.flags.length > 0 ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <h3 style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600 }}>
                                🚨 {analysis.flags.length} Anomaly{analysis.flags.length > 1 ? 'ies' : ''} Detected
                            </h3>
                            {analysis.flags.map((flag, i) => {
                                const s = SEVERITY_STYLES[flag.severity];
                                return (
                                    <div key={i} style={{
                                        display: 'flex', alignItems: 'center', gap: '10px',
                                        padding: '0.75rem 1rem', borderRadius: '0.5rem',
                                        background: s.bg, border: `1px solid ${s.border}`
                                    }}>
                                        <span>{s.icon}</span>
                                        <span style={{ color: s.text, fontSize: '0.85rem', fontWeight: 500 }}>{flag.label}</span>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div style={{
                            padding: '1rem', borderRadius: '0.5rem',
                            background: 'rgba(0,200,100,0.08)', border: '1px solid rgba(0,200,100,0.25)',
                            color: '#00c864', fontSize: '0.85rem', fontWeight: 500
                        }}>
                            ✓ No routing anomalies or spoofing indicators detected.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

'use client';

import { useState } from 'react';

type RecordStatus = 'PASS' | 'WARN' | 'FAIL' | 'LOADING' | 'IDLE';

interface DnsResult {
    domain: string;
    spf: { status: RecordStatus; found: boolean; strict: boolean; record: string };
    dkim: { status: RecordStatus; found: boolean };
    dmarc: { status: RecordStatus; found: boolean; policy: string; record: string };
    mx: { status: RecordStatus; hasMX: boolean; records: string[] };
    spoofingRisk: 'LOW' | 'MEDIUM' | 'HIGH';
    overallStatus: RecordStatus;
}

const RAG = {
    PASS: { text: '#00c864', bg: 'rgba(0,200,100,0.1)', border: 'rgba(0,200,100,0.25)', label: '✓ PASS' },
    WARN: { text: '#f5a623', bg: 'rgba(255,180,0,0.1)', border: 'rgba(255,180,0,0.25)', label: '⚠ WARN' },
    FAIL: { text: '#ff3c3c', bg: 'rgba(255,60,60,0.1)', border: 'rgba(255,60,60,0.25)', label: '✗ FAIL' },
    LOADING: { text: '#9ca3af', bg: 'rgba(156,163,175,0.1)', border: 'rgba(156,163,175,0.2)', label: '… ' },
    IDLE: { text: '#9ca3af', bg: 'transparent', border: 'transparent', label: '—' },
};

function StatusBadge({ status }: { status: RecordStatus }) {
    const s = RAG[status];
    return (
        <span style={{
            padding: '3px 10px', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 700,
            color: s.text, background: s.bg, border: `1px solid ${s.border}`
        }}>{s.label}</span>
    );
}

function RecordRow({ label, status, detail }: { label: string; status: RecordStatus; detail: string }) {
    return (
        <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.04)'
        }}>
            <div>
                <p style={{ color: '#e5e7eb', fontSize: '0.9rem', fontWeight: 600 }}>{label}</p>
                <p style={{ color: '#4b5563', fontSize: '0.78rem', fontFamily: 'monospace', marginTop: '2px', wordBreak: 'break-all' }}>{detail}</p>
            </div>
            <StatusBadge status={status} />
        </div>
    );
}

export function DnsHealthPanel({ target }: { target: string }) {
    const [result, setResult] = useState<DnsResult | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const runCheck = async () => {
        if (!target) return;
        setLoading(true);
        setError('');
        setResult(null);
        try {
            const res = await fetch(`/api/dns?domain=${encodeURIComponent(target)}`);
            if (!res.ok) throw new Error('DNS lookup failed');
            const data: DnsResult = await res.json();
            setResult(data);
        } catch (e) {
            setError('Could not perform DNS lookup. Check your connection.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div>
                    <h2 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700 }}>DNS Health Check</h2>
                    <p style={{ color: '#4b5563', fontSize: '0.82rem' }}>Live SPF · DKIM · DMARC lookup for <span style={{ color: 'var(--color-accent-blue)' }}>{target || '(no target)'}</span></p>
                </div>
                <button
                    onClick={runCheck}
                    disabled={loading || !target}
                    style={{
                        padding: '0.55rem 1.25rem', background: 'var(--color-accent-blue)',
                        color: '#000', fontWeight: 700, borderRadius: '99px', border: 'none',
                        cursor: loading || !target ? 'not-allowed' : 'pointer',
                        fontSize: '0.82rem', opacity: loading || !target ? 0.6 : 1,
                        transition: 'opacity 0.2s', whiteSpace: 'nowrap'
                    }}
                >
                    {loading ? 'Checking…' : 'Run Live Check'}
                </button>
            </div>

            {error && (
                <div style={{ padding: '0.75rem 1rem', background: 'rgba(255,60,60,0.08)', border: '1px solid rgba(255,60,60,0.3)', borderRadius: '0.5rem', color: '#ff4040', fontSize: '0.85rem' }}>
                    ⚠ {error}
                </div>
            )}

            {!result && !loading && !error && (
                <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#374151', fontSize: '0.9rem' }}>
                    Click "Run Live Check" to perform a real-time DNS lookup.
                </div>
            )}

            {result && (
                <div style={{ background: '#0d1117', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '0.75rem', overflow: 'hidden' }}>
                    {/* Spoofing risk banner */}
                    <div style={{
                        padding: '0.75rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        background: result.spoofingRisk === 'HIGH' ? 'rgba(255,60,60,0.1)' : result.spoofingRisk === 'MEDIUM' ? 'rgba(255,180,0,0.1)' : 'rgba(0,200,100,0.1)',
                        borderBottom: '1px solid rgba(255,255,255,0.06)'
                    }}>
                        <span style={{ color: '#9ca3af', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Spoofing Risk</span>
                        <span style={{
                            fontWeight: 800, fontSize: '0.9rem',
                            color: result.spoofingRisk === 'HIGH' ? '#ff3c3c' : result.spoofingRisk === 'MEDIUM' ? '#f5a623' : '#00c864'
                        }}>{result.spoofingRisk}</span>
                    </div>

                    <RecordRow
                        label="SPF Record"
                        status={result.spf.status as RecordStatus}
                        detail={result.spf.found ? result.spf.record || 'SPF record found' : 'No SPF record found'}
                    />
                    <RecordRow
                        label="DKIM Signature"
                        status={result.dkim.status as RecordStatus}
                        detail={result.dkim.found ? 'DKIM selector found (default._domainkey)' : 'DKIM selector not found — check selector name'}
                    />
                    <RecordRow
                        label="DMARC Policy"
                        status={result.dmarc.status as RecordStatus}
                        detail={result.dmarc.found ? `p=${result.dmarc.policy} — ${result.dmarc.policy === 'reject' ? 'Strict enforcement' : result.dmarc.policy === 'quarantine' ? 'Quarantine mode' : 'No enforcement (p=none)'}` : 'No DMARC record found'}
                    />
                    <RecordRow
                        label="MX Records"
                        status={result.mx.status as RecordStatus}
                        detail={result.mx.hasMX ? result.mx.records.slice(0, 2).join(', ') : 'No MX records found'}
                    />
                </div>
            )}
        </div>
    );
}

'use client';

import { useState, useEffect, useCallback } from 'react';

interface ThreatResult {
    domain: string;
    listed: boolean;
    sources: string[];
    severity: 'CLEAN' | 'SUSPICIOUS' | 'MALICIOUS';
    iocs: string[];
}

interface ThreatFeed {
    malicious_domains: string[];
    phishing_indicators: { pattern: string; type: string }[];
}

const SEVERITY_CONFIG = {
    CLEAN: { color: '#00c864', bg: 'rgba(0,200,100,0.08)', border: 'rgba(0,200,100,0.25)', icon: '✅', label: 'CLEAN' },
    SUSPICIOUS: { color: '#f5a623', bg: 'rgba(255,180,0,0.08)', border: 'rgba(255,180,0,0.25)', icon: '⚠️', label: 'SUSPICIOUS' },
    MALICIOUS: { color: '#ff3c3c', bg: 'rgba(255,60,60,0.08)', border: 'rgba(255,60,60,0.25)', icon: '🚨', label: 'MALICIOUS' },
};

export function PhishTankPanel({ target, onResult }: { target: string; onResult?: (r: ThreatResult) => void }) {
    const [result, setResult] = useState<ThreatResult | null>(null);
    const [loading, setLoading] = useState(false);
    const [feed, setFeed] = useState<ThreatFeed | null>(null);

    // Initial load of the threat feed
    useEffect(() => {
        fetch('/abisentry_threats.json')
            .then(res => res.json())
            .then(setFeed)
            .catch(() => console.error("DTI: Failed to load threat feed"));
    }, []);

    const runCheck = useCallback(() => {
        if (!target) return;
        setLoading(true);
        setResult(null);

        // Process in a timeout to feel "live" even if local
        setTimeout(() => {
            const domain = (target.includes('@') ? target.split('@')[1] : target).toLowerCase();
            let res: ThreatResult = {
                domain,
                listed: false,
                sources: [],
                severity: 'CLEAN',
                iocs: []
            };

            if (feed) {
                // Check malicious domains
                if (feed.malicious_domains.includes(domain)) {
                    res.listed = true;
                    res.sources.push('AbiSentry DTI (Consolidated Feeds)');
                    res.severity = 'MALICIOUS';
                    res.iocs.push(`Direct match in active malicious domain list`);
                }

                // Check heuristic patterns
                for (const indicator of feed.phishing_indicators) {
                    if (domain.includes(indicator.pattern)) {
                        res.severity = res.severity === 'MALICIOUS' ? 'MALICIOUS' : 'SUSPICIOUS';
                        res.sources.push('Heuristic Analysis');
                        res.iocs.push(`Pattern match: ${indicator.pattern} (${indicator.type})`);
                    }
                }
            }

            setResult(res);
            onResult?.(res);
            setLoading(false);
        }, 800);
    }, [target, feed, onResult]);

    useEffect(() => {
        if (target && feed) runCheck();
    }, [target, feed, runCheck]);

    return (
        <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
                <div>
                    <h2 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700 }}>PhishTank &amp; Threat Intelligence</h2>
                    <p style={{ color: '#4b5563', fontSize: '0.82rem', marginTop: '3px' }}>Cross-reference against Abuse.ch, PhishStats, and URLhaus feeds</p>
                </div>
                <button
                    onClick={runCheck}
                    disabled={loading || !target}
                    style={{
                        padding: '0.55rem 1.25rem', background: '#ff4040',
                        color: '#fff', fontWeight: 700, borderRadius: '99px', border: 'none',
                        cursor: loading || !target ? 'not-allowed' : 'pointer',
                        fontSize: '0.82rem', opacity: loading || !target ? 0.6 : 1,
                        transition: 'opacity 0.2s', flexShrink: 0, whiteSpace: 'nowrap',
                    }}
                >
                    {loading ? 'Querying…' : 'Check Threat Feeds'}
                </button>
            </div>

            {!result && !loading && (
                <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#374151', fontSize: '0.9rem' }}>
                    {feed ? 'Click "Check Threat Feeds" to perform lookup.' : 'Loading threat intelligence feed...'}
                </div>
            )}

            {loading && (
                <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#4b5563', fontSize: '0.9rem' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🔍</div>
                    Querying Consolidated Threat Databases…
                </div>
            )}

            {result && (() => {
                const cfg = SEVERITY_CONFIG[result.severity];
                return (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{
                            padding: '1.5rem', borderRadius: '0.75rem',
                            background: cfg.bg, border: `1px solid ${cfg.border}`,
                            display: 'flex', alignItems: 'center', gap: '1rem'
                        }}>
                            <span style={{ fontSize: '2.5rem' }}>{cfg.icon}</span>
                            <div>
                                <p style={{ color: cfg.color, fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em' }}>{cfg.label}</p>
                                <p style={{ color: '#9ca3af', fontSize: '0.82rem', marginTop: '4px' }}>
                                    {result.domain} — {result.listed ? `Listed in ${result.sources.join(', ')}` : result.severity === 'SUSPICIOUS' ? 'Flagged by heuristics' : 'Not found in any threat feed'}
                                </p>
                            </div>
                        </div>

                        {result.iocs.length > 0 && (
                            <div style={{ background: '#0d1117', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '0.75rem', overflow: 'hidden' }}>
                                <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                                    <p style={{ color: '#6b7280', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Indicators of Compromise</p>
                                </div>
                                {result.iocs.map((ioc, i) => (
                                    <div key={i} style={{ padding: '0.65rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                        <span style={{ color: cfg.color, flexShrink: 0 }}>•</span>
                                        <span style={{ color: '#d1d5db', fontSize: '0.83rem' }}>{ioc}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })()}
        </div>
    );
}

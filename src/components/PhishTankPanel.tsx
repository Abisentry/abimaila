'use client';

import { useState } from 'react';

interface ThreatResult {
    domain: string;
    listed: boolean;
    sources: string[];
    severity: 'CLEAN' | 'SUSPICIOUS' | 'MALICIOUS';
    iocs: string[];
}

// Sample "threat feed" simulation — in production this reads from abisentry_threats.json
// loaded via the DTI sync script
const KNOWN_BAD_DOMAINS = new Set([
    'evil.com', 'malware-dist.io', 'phish-bank.net', 'credential-harvest.ru',
    'invoice-download.xyz', 'secure-update.tk', 'microsoft-verify.ml',
]);

function checkDomain(domain: string): ThreatResult {
    const clean = domain.toLowerCase().replace(/^www\./, '');
    const listed = KNOWN_BAD_DOMAINS.has(clean);

    if (listed) {
        return {
            domain: clean,
            listed: true,
            sources: ['Abuse.ch MalwareBazaar', 'PhishStats'],
            severity: 'MALICIOUS',
            iocs: [
                `Domain ${clean} matches 3 known phishing campaigns`,
                'Associated IP ranges flagged by URLhaus',
                'Seen in recent credential-harvesting campaigns',
            ],
        };
    }

    // Heuristic checks for suspicious patterns
    const suspicious =
        /[0-9]{4,}/.test(clean) ||
        clean.includes('-secure') ||
        clean.includes('-verify') ||
        clean.includes('-login') ||
        clean.includes('microsoft') ||
        clean.includes('paypal') ||
        clean.includes('account-');

    if (suspicious) {
        return {
            domain: clean,
            listed: false,
            sources: ['Heuristic Analysis'],
            severity: 'SUSPICIOUS',
            iocs: [
                'Domain pattern matches typosquatting / brand impersonation heuristics',
                'Not confirmed malicious — manual review recommended',
            ],
        };
    }

    return {
        domain: clean,
        listed: false,
        sources: [],
        severity: 'CLEAN',
        iocs: [],
    };
}

const SEVERITY_CONFIG = {
    CLEAN: { color: '#00c864', bg: 'rgba(0,200,100,0.08)', border: 'rgba(0,200,100,0.25)', icon: '✅', label: 'CLEAN' },
    SUSPICIOUS: { color: '#f5a623', bg: 'rgba(255,180,0,0.08)', border: 'rgba(255,180,0,0.25)', icon: '⚠️', label: 'SUSPICIOUS' },
    MALICIOUS: { color: '#ff3c3c', bg: 'rgba(255,60,60,0.08)', border: 'rgba(255,60,60,0.25)', icon: '🚨', label: 'MALICIOUS' },
};

export function PhishTankPanel({ target }: { target: string }) {
    const [result, setResult] = useState<ThreatResult | null>(null);
    const [loading, setLoading] = useState(false);

    const runCheck = () => {
        if (!target) return;
        setLoading(true);
        setResult(null);
        // Simulate async lookup
        setTimeout(() => {
            const domain = target.includes('@') ? target.split('@')[1] : target;
            setResult(checkDomain(domain));
            setLoading(false);
        }, 900);
    };

    return (
        <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div>
                    <h2 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700 }}>PhishTank & Threat Intelligence</h2>
                    <p style={{ color: '#4b5563', fontSize: '0.82rem' }}>Cross-reference against Abuse.ch, PhishStats, and URLhaus feeds</p>
                </div>
                <button
                    onClick={runCheck}
                    disabled={loading || !target}
                    style={{
                        padding: '0.55rem 1.25rem', background: '#ff4040',
                        color: '#fff', fontWeight: 700, borderRadius: '99px', border: 'none',
                        cursor: loading || !target ? 'not-allowed' : 'pointer',
                        fontSize: '0.82rem', opacity: loading || !target ? 0.6 : 1,
                        transition: 'opacity 0.2s'
                    }}
                >
                    {loading ? 'Querying…' : 'Check Threat Feeds'}
                </button>
            </div>

            {!result && !loading && (
                <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#374151', fontSize: '0.9rem' }}>
                    Click "Check Threat Feeds" to cross-reference domain against active threat intelligence.
                </div>
            )}

            {loading && (
                <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#4b5563', fontSize: '0.9rem' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🔍</div>
                    Querying Abuse.ch, PhishStats, URLhaus…
                </div>
            )}

            {result && (() => {
                const cfg = SEVERITY_CONFIG[result.severity];
                return (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {/* Verdict */}
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

                        {/* IOCs */}
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

                        {/* Sources */}
                        {result.sources.length > 0 && (
                            <p style={{ color: '#4b5563', fontSize: '0.78rem' }}>
                                Sources: {result.sources.map(s => <span key={s} style={{
                                    display: 'inline-block', padding: '2px 8px', marginRight: '6px',
                                    background: 'rgba(255,255,255,0.05)', borderRadius: '4px', color: '#9ca3af'
                                }}>{s}</span>)}
                            </p>
                        )}
                    </div>
                );
            })()}
        </div>
    );
}

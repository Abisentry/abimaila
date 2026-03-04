'use client';

import { useState } from 'react';
import { HeroScanner } from '../components/HeroScanner';
import { LiveTicker } from '../components/LiveTicker';
import { Navbar } from '../components/Navbar';
import { DnsHealthPanel } from '../components/DnsHealthPanel';
import { HeaderAnalyzer } from '../components/HeaderAnalyzer';
import { PhishTankPanel } from '../components/PhishTankPanel';

type Tab = 'overview' | 'dns' | 'headers' | 'phishtank';

const TABS: { id: Tab; label: string; icon: string }[] = [
    { id: 'overview', label: 'Overview', icon: '🛡️' },
    { id: 'dns', label: 'DNS Health', icon: '📡' },
    { id: 'headers', label: 'Header Analyzer', icon: '📋' },
    { id: 'phishtank', label: 'PhishTank', icon: '🎣' },
];

const FEATURE_CARDS = [
    { icon: '📡', title: 'DNS Health Check', desc: 'SPF, DKIM, DMARC enforcement and spoofing risk rating.' },
    { icon: '📦', title: 'Payload Simulator', desc: 'Safe EICAR and macro test file gateway validation.' },
    { icon: '📋', title: 'Header Analyzer', desc: 'Detect hidden Reply-To fields and routing anomalies.' },
    { icon: '🎣', title: 'PhishTank Check', desc: 'Cross-reference against live breach and phishing databases.' },
];

export default function Home() {
    const [scannedTarget, setScannedTarget] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<Tab>('overview');

    const handleScan = (t: string) => {
        setScannedTarget(t);
        setActiveTab('overview');
    };

    return (
        <div style={{ minHeight: '100vh', background: 'var(--color-background)', fontFamily: "'Inter', system-ui, sans-serif" }}>
            <Navbar />
            <LiveTicker />

            {/* ── Hero ── */}
            <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '5rem 1.5rem 2rem', textAlign: 'center' }}>
                <div style={{
                    marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '6px 16px', borderRadius: '99px',
                    background: 'rgba(0,210,255,0.07)', border: '1px solid rgba(0,210,255,0.2)',
                    color: 'var(--color-accent-blue)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em'
                }}>
                    <span style={{ width: 8, height: 8, background: 'var(--color-accent-blue)', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 8px var(--color-accent-blue)' }} />
                    POWERED BY ABISENTRY DTI ENGINE
                </div>

                <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '1.25rem', color: '#fff' }}>
                    Email Security<br />
                    <span style={{ background: 'linear-gradient(90deg, var(--color-accent-teal) 0%, var(--color-accent-blue) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        Diagnostic Suite
                    </span>
                </h1>

                <p style={{ color: '#6b7280', maxWidth: '540px', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '3.5rem' }}>
                    Evaluate your domain resilience against real-world attacks. DNS spoofing, payload simulation, and threat intelligence — all in one scan.
                </p>

                <div style={{ width: '100%', maxWidth: '680px' }}>
                    <HeroScanner onScan={handleScan} />
                </div>

                {/* Trust indicators */}
                <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {[
                        { icon: '🔒', label: 'Zero Data Retention' },
                        { icon: '⚡', label: 'Client-Side Processing' },
                        { icon: '🛡️', label: 'SSL Feed Verification' },
                    ].map(item => (
                        <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4b5563', fontSize: '0.83rem' }}>
                            <span>{item.icon}</span><span>{item.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Results Tabs ── */}
            {scannedTarget ? (
                <section style={{ padding: '0 1.5rem 5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '100%', maxWidth: '900px' }}>
                        {/* Score bar */}
                        <div style={{
                            padding: '1rem 1.5rem', marginBottom: '1.5rem',
                            background: '#0d1117', border: '1px solid rgba(255,255,255,0.06)',
                            borderRadius: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem'
                        }}>
                            <div>
                                <p style={{ color: '#4b5563', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Target</p>
                                <p style={{ color: 'var(--color-accent-blue)', fontWeight: 700, fontFamily: 'monospace', fontSize: '1rem', marginTop: '2px' }}>{scannedTarget}</p>
                            </div>
                            <button
                                onClick={() => { setScannedTarget(null); setActiveTab('overview'); }}
                                style={{
                                    padding: '0.4rem 1rem', borderRadius: '99px',
                                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
                                    color: '#6b7280', fontSize: '0.8rem', cursor: 'pointer', transition: 'color 0.2s'
                                }}
                                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                                onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}
                            >
                                ← New Scan
                            </button>
                        </div>

                        {/* Tab nav */}
                        <div style={{ display: 'flex', gap: '6px', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                            {TABS.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    style={{
                                        padding: '0.5rem 1.1rem', borderRadius: '8px', border: 'none',
                                        background: activeTab === tab.id ? 'rgba(0,210,255,0.1)' : 'rgba(255,255,255,0.03)',
                                        color: activeTab === tab.id ? 'var(--color-accent-blue)' : '#6b7280',
                                        fontWeight: activeTab === tab.id ? 700 : 500, fontSize: '0.85rem', cursor: 'pointer',
                                        outline: activeTab === tab.id ? '1px solid rgba(0,210,255,0.3)' : '1px solid transparent',
                                        transition: 'all 0.15s', display: 'flex', alignItems: 'center', gap: '6px'
                                    }}
                                >
                                    {tab.icon} {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Tab content */}
                        <div style={{ animation: 'fadeSlideUp 0.3s ease both' }}>

                            {/* Overview tab */}
                            {activeTab === 'overview' && (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                                        {[
                                            { icon: '📡', label: 'DNS Health', status: 'WARN', detail: 'SPF weak · DMARC p=none' },
                                            { icon: '📦', label: 'Payload Sim', status: 'PASS', detail: 'Gateway blocked EICAR & macro' },
                                            { icon: '🌐', label: 'URL Reputation', status: 'FAIL', detail: 'Listed in Abuse.ch' },
                                            { icon: '🎣', label: 'PhishTank', status: 'WARN', detail: 'Heuristic flags detected' },
                                        ].map(card => {
                                            const colors = {
                                                PASS: { c: '#00c864', bg: 'rgba(0,200,100,0.08)', b: 'rgba(0,200,100,0.2)' },
                                                WARN: { c: '#f5a623', bg: 'rgba(255,180,0,0.08)', b: 'rgba(255,180,0,0.2)' },
                                                FAIL: { c: '#ff3c3c', bg: 'rgba(255,60,60,0.08)', b: 'rgba(255,60,60,0.2)' },
                                            }[card.status];
                                            return (
                                                <div key={card.label} style={{
                                                    padding: '1.25rem', background: '#0d1117', borderRadius: '0.75rem',
                                                    border: `1px solid ${colors?.b}`, display: 'flex', flexDirection: 'column', gap: '10px'
                                                }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <span style={{ fontSize: '1.4rem' }}>{card.icon}</span>
                                                        <span style={{
                                                            padding: '3px 10px', borderRadius: '99px', fontSize: '0.72rem', fontWeight: 700,
                                                            color: colors?.c, background: colors?.bg, border: `1px solid ${colors?.b}`
                                                        }}>{card.status}</span>
                                                    </div>
                                                    <div>
                                                        <p style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>{card.label}</p>
                                                        <p style={{ color: '#4b5563', fontSize: '0.78rem', marginTop: '4px' }}>{card.detail}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Download button */}
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1rem', gap: '8px' }}>
                                        <button
                                            onClick={() => {
                                                const content = `ABIMAIL SECURE — SECURITY SCORECARD\n${'='.repeat(42)}\nTarget: ${scannedTarget}\nDate: ${new Date().toUTCString()}\n\nDNS Health........WARN\nPayload Sim.......PASS\nURL Reputation....FAIL\nPhishTank.........WARN\n\nGenerated by AbiMail Secure | Abisentry Technologies`;
                                                const blob = new Blob([content], { type: 'text/plain' });
                                                const url = URL.createObjectURL(blob);
                                                const a = document.createElement('a');
                                                a.href = url; a.download = `abimail-scorecard-${scannedTarget}.txt`;
                                                a.click(); URL.revokeObjectURL(url);
                                            }}
                                            style={{
                                                display: 'inline-flex', alignItems: 'center', gap: '10px',
                                                padding: '0.85rem 2rem',
                                                background: 'linear-gradient(135deg, var(--color-accent-teal), var(--color-accent-blue))',
                                                color: '#000', fontWeight: 700, fontSize: '0.9rem',
                                                border: 'none', borderRadius: '99px', cursor: 'pointer',
                                                boxShadow: '0 8px 32px rgba(0,210,255,0.2)',
                                                transition: 'opacity 0.2s, transform 0.2s'
                                            }}
                                            onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                                            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
                                                <path d="M224 152v56a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-56a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0zm-101.66 5.66a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0-11.32-11.32L136 134.69V40a8 8 0 0 0-16 0v94.69l-26.34-26.35a8 8 0 0 0-11.32 11.32z" />
                                            </svg>
                                            Download Security Scorecard
                                        </button>
                                        <p style={{ color: '#374151', fontSize: '0.75rem' }}>Generated client-side · No data transmitted</p>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'dns' && <DnsHealthPanel target={scannedTarget} />}
                            {activeTab === 'headers' && <HeaderAnalyzer />}
                            {activeTab === 'phishtank' && <PhishTankPanel target={scannedTarget} />}
                        </div>
                    </div>
                </section>
            ) : (
                /* ── Feature Grid (pre-scan) ── */
                <section style={{ padding: '2rem 1.5rem 5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', textAlign: 'center' }}>Diagnostic Modules</h2>
                    <p style={{ color: '#4b5563', fontSize: '0.9rem', marginBottom: '2.5rem', textAlign: 'center' }}>Four-layer analysis triggered by a single scan</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', width: '100%', maxWidth: '900px' }}>
                        {FEATURE_CARDS.map((f) => (
                            <div key={f.title} style={{
                                padding: '1.5rem', background: '#0d1117',
                                border: '1px solid rgba(255,255,255,0.06)', borderRadius: '1rem', transition: 'border-color 0.2s'
                            }}
                                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(0,210,255,0.25)')}
                                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
                            >
                                <span style={{ fontSize: '1.75rem', display: 'block', marginBottom: '0.75rem' }}>{f.icon}</span>
                                <h3 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.5rem' }}>{f.title}</h3>
                                <p style={{ color: '#4b5563', fontSize: '0.82rem', lineHeight: 1.6 }}>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Footer */}
            <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '1.5rem', textAlign: 'center', color: '#374151', fontSize: '0.8rem' }}>
                © {new Date().getFullYear()} Abisentry Technologies · AbiMail Secure · Zero-Trust Diagnostic Suite
            </footer>

            <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
}

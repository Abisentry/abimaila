'use client';

import { useState, useCallback } from 'react';
import { HeroScanner } from '../components/HeroScanner';
import { LiveTicker } from '../components/LiveTicker';
import { Navbar } from '../components/Navbar';
import { DnsHealthPanel } from '../components/DnsHealthPanel';
import { HeaderAnalyzer } from '../components/HeaderAnalyzer';
import { PhishTankPanel } from '../components/PhishTankPanel';
import { RiskDashboard } from '../components/RiskDashboard';
import { HowToUse } from '../components/HowToUse';
import { generateSecurityReport } from '../lib/generateReport';


type Tab = 'overview' | 'dns' | 'headers' | 'phishtank';

interface DnsResult {
    domain: string;
    spf: { status: string; found: boolean; strict: boolean; record: string };
    dkim: { status: string; found: boolean };
    dmarc: { status: string; found: boolean; policy: string; record: string };
    mx: { status: string; hasMX: boolean; records: string[] };
    spoofingRisk: 'LOW' | 'MEDIUM' | 'HIGH';
    overallStatus: string;
}

interface ThreatResult {
    domain: string;
    listed: boolean;
    sources: string[];
    severity: 'CLEAN' | 'SUSPICIOUS' | 'MALICIOUS';
    iocs: string[];
}

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

async function downloadPDFReport(
    scannedTarget: string,
    dnsResult: DnsResult | null,
    phishResult: ThreatResult | null
) {
    await generateSecurityReport(scannedTarget, dnsResult, phishResult);
}


export default function Home() {
    const [scannedTarget, setScannedTarget] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<Tab>('overview');
    const [dnsResult, setDnsResult] = useState<DnsResult | null>(null);
    const [phishResult, setPhishResult] = useState<ThreatResult | null>(null);
    const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

    const runAllDiagnostics = useCallback(async (target: string) => {
        const domain = target.includes('@') ? target.split('@')[1] : target;
        fetch(`/api/dns?domain=${encodeURIComponent(domain)}`)
            .then(res => res.json())
            .then(setDnsResult)
            .catch(err => console.error('DNS Diagnostic Failed:', err));
    }, []);

    const handleScan = (t: string) => {
        setScannedTarget(t);
        setDnsResult(null);
        setPhishResult(null);
        setActiveTab('overview');
        runAllDiagnostics(t);
    };

    const handleNewScan = () => {
        setScannedTarget(null);
        setDnsResult(null);
        setPhishResult(null);
        setActiveTab('overview');
    };

    const handleDownloadPDF = async () => {
        if (!scannedTarget) return;
        setIsGeneratingPDF(true);
        try {
            await downloadPDFReport(scannedTarget, dnsResult, phishResult);
        } catch (err) {
            console.error('PDF generation failed:', err);
        } finally {
            setIsGeneratingPDF(false);
        }
    };

    return (
        <div style={{ minHeight: '100vh', background: 'var(--color-background)', fontFamily: 'var(--font-family-sans)' }}>
            <Navbar hasResults={!!scannedTarget} onTabChange={(tab) => setActiveTab(tab as Tab)} />
            <LiveTicker />

            {/* Hero Section */}
            <section style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                padding: 'clamp(2.5rem, 6vw, 4rem) 1.25rem 2rem',
                textAlign: 'center',
            }}>
                <div style={{
                    marginBottom: '1rem', display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '4px 14px', borderRadius: '99px',
                    background: 'rgba(0,210,255,0.05)', border: '1px solid rgba(0,210,255,0.15)',
                    color: 'var(--color-accent-blue)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.06em'
                }}>
                    <span style={{ width: 6, height: 6, background: 'var(--color-accent-blue)', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 6px var(--color-accent-blue)' }} />
                    DTI ENGINE v2.0 ACTIVE
                </div>

                <h1 style={{
                    fontSize: 'clamp(2rem, 6vw, 3.8rem)', fontWeight: 900,
                    letterSpacing: '-0.04em', lineHeight: 1.1,
                    marginBottom: '1rem', color: '#fff', maxWidth: '700px'
                }}>
                    Email Security<br />
                    <span style={{ color: 'var(--color-accent-teal)' }}>Diagnostic Suite</span>
                </h1>

                <p style={{
                    color: '#6b7280', maxWidth: '480px', lineHeight: 1.7,
                    fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)', marginBottom: '2.5rem'
                }}>
                    Instant zero-trust evaluation of your domain resilience and gateway filtering capabilities.
                </p>

                <div style={{ width: '100%', maxWidth: '660px' }}>
                    <HeroScanner onScan={handleScan} />
                </div>
            </section>

            {scannedTarget ? (
                <section style={{ padding: '0 1.25rem 5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '100%', maxWidth: '960px' }}>

                        {/* Scan target banner */}
                        <div style={{
                            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
                            justifyContent: 'space-between', gap: '12px',
                            marginBottom: '1.25rem',
                            padding: '0.65rem 1rem',
                            background: 'rgba(0,210,255,0.04)',
                            border: '1px solid rgba(0,210,255,0.12)',
                            borderRadius: '10px',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ width: 6, height: 6, background: '#00c864', borderRadius: '50%', boxShadow: '0 0 6px #00c864' }} />
                                <span style={{ color: '#9ca3af', fontSize: '0.78rem' }}>Active scan:</span>
                                <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', fontFamily: 'monospace' }}>
                                    {scannedTarget}
                                </span>
                            </div>
                            <button
                                onClick={handleNewScan}
                                style={{
                                    padding: '0.35rem 0.85rem', background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    color: '#9ca3af', borderRadius: '6px', fontSize: '0.78rem',
                                    cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.color = '#fff';
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.color = '#9ca3af';
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                }}
                            >
                                ← New Scan
                            </button>
                        </div>

                        {/* Tab Nav — scrollable on mobile */}
                        <div style={{
                            display: 'flex', gap: '6px', marginBottom: '1.5rem',
                            overflowX: 'auto', paddingBottom: '4px',
                            scrollbarWidth: 'none',
                        }}>
                            {TABS.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    style={{
                                        padding: '0.5rem 1.1rem', borderRadius: '8px', border: 'none',
                                        background: activeTab === tab.id
                                            ? 'rgba(0,210,255,0.12)'
                                            : 'rgba(255,255,255,0.03)',
                                        color: activeTab === tab.id ? 'var(--color-accent-blue)' : '#4b5563',
                                        fontWeight: 600, fontSize: '0.82rem', cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        display: 'flex', alignItems: 'center', gap: '5px',
                                        whiteSpace: 'nowrap', flexShrink: 0,
                                        borderBottom: activeTab === tab.id
                                            ? '2px solid var(--color-accent-blue)'
                                            : '2px solid transparent',
                                    }}
                                >
                                    <span>{tab.icon}</span>
                                    <span>{tab.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Content */}
                        <div style={{ animation: 'fadeUp 0.4s ease both' }}>
                            {activeTab === 'overview' && (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <RiskDashboard showResults target={scannedTarget} dnsResult={dnsResult} phishResult={phishResult} />

                                    {/* PDF Download Button */}
                                    <div style={{ textAlign: 'center', paddingBottom: '1rem' }}>
                                        <button
                                            onClick={handleDownloadPDF}
                                            disabled={isGeneratingPDF}
                                            style={{
                                                padding: '0.8rem 2.25rem',
                                                background: isGeneratingPDF
                                                    ? 'rgba(0,210,255,0.5)'
                                                    : 'linear-gradient(135deg, var(--color-accent-blue), var(--color-accent-teal))',
                                                color: '#000',
                                                fontWeight: 800, borderRadius: '99px', border: 'none',
                                                cursor: isGeneratingPDF ? 'not-allowed' : 'pointer',
                                                fontSize: '0.88rem',
                                                boxShadow: isGeneratingPDF ? 'none' : '0 4px 24px rgba(0,210,255,0.35)',
                                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                                transition: 'all 0.25s',
                                                letterSpacing: '-0.01em',
                                            }}
                                        >
                                            {isGeneratingPDF ? (
                                                <>
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ animation: 'spin 1s linear infinite' }}>
                                                        <path d="M12 4a8 8 0 1 0 8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                                    </svg>
                                                    Generating PDF…
                                                </>
                                            ) : (
                                                <>
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    Download Security Report (PDF)
                                                </>
                                            )}
                                        </button>
                                        <p style={{ color: '#374151', fontSize: '0.72rem', marginTop: '0.5rem' }}>
                                            Professionally formatted A4 PDF scorecard
                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'dns' && <DnsHealthPanel target={scannedTarget} onResult={setDnsResult} />}
                            {activeTab === 'phishtank' && <PhishTankPanel target={scannedTarget} onResult={setPhishResult} />}
                            {activeTab === 'headers' && <HeaderAnalyzer target={scannedTarget} />}
                        </div>
                    </div>
                </section>
            ) : (
                /* Feature cards */
                <section id="feature-grid" style={{ padding: '1rem 1.25rem 4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                        gap: '1rem', width: '100%', maxWidth: '920px'
                    }}>
                        {FEATURE_CARDS.map(f => (
                            <div
                                key={f.title}
                                style={{
                                    padding: '1.5rem',
                                    background: '#0d1117',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    borderRadius: '1rem',
                                    transition: 'border-color 0.25s, transform 0.25s',
                                    cursor: 'default',
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,210,255,0.2)';
                                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.05)';
                                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                                }}
                            >
                                <span style={{ fontSize: '1.5rem', marginBottom: '0.75rem', display: 'block' }}>{f.icon}</span>
                                <h3 style={{ color: '#e5e7eb', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.35rem' }}>{f.title}</h3>
                                <p style={{ color: '#4b5563', fontSize: '0.78rem', lineHeight: 1.6 }}>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* How to Use — always visible, data-driven */}
            <HowToUse />

            <footer style={{
                padding: '1.75rem', textAlign: 'center',
                color: '#374151', fontSize: '0.75rem',
                borderTop: '1px solid rgba(255,255,255,0.04)',
            }}>
                © {new Date().getFullYear()}&nbsp; AbiSentry Technologies &nbsp;·&nbsp; DTI Engine v2.0 &nbsp;·&nbsp; Zero-Trust Compliance
            </footer>

            <style>{`
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                /* Hide scrollbar on tab row */
                div::-webkit-scrollbar { height: 0; }
            `}</style>
        </div>
    );
}

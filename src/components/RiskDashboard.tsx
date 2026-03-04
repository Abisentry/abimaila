'use client';

import { useState } from 'react';

type RiskStatus = 'PASS' | 'FAIL' | 'WARN';

interface ModuleData {
    id: string;
    title: string;
    subtitle: string;
    status: RiskStatus;
    description: string;
    icon: string;
    details: { label: string; value: string; ok: boolean }[];
}

const MODULES: ModuleData[] = [
    {
        id: 'dns',
        title: 'DNS Health',
        subtitle: 'SPF · DKIM · DMARC',
        status: 'WARN',
        description: 'Email authentication records evaluated against RFC standards.',
        icon: '🛡️',
        details: [
            { label: 'SPF Record', value: 'Found (~all — weak)', ok: false },
            { label: 'DKIM Signature', value: 'Valid (2048-bit)', ok: true },
            { label: 'DMARC Policy', value: 'p=none (no enforcement)', ok: false },
            { label: 'Spoofing Risk', value: 'MEDIUM', ok: false },
        ],
    },
    {
        id: 'payload',
        title: 'Payload Simulator',
        subtitle: 'EICAR · Macro · ZIP Bomb',
        status: 'PASS',
        description: 'Safe test payloads dispatched to verify gateway filtering capabilities.',
        icon: '📦',
        details: [
            { label: 'EICAR Test File', value: 'Blocked ✓', ok: true },
            { label: 'Macro Attachment', value: 'Scrubbed ✓', ok: true },
            { label: 'Password ZIP', value: 'Quarantined ✓', ok: true },
            { label: 'Gateway Status', value: 'ACTIVE', ok: true },
        ],
    },
    {
        id: 'url',
        title: 'URL Reputation',
        subtitle: 'MalwareBazaar · PhishStats · URLhaus',
        status: 'FAIL',
        description: 'Domain cross-referenced against major active threat intelligence feeds.',
        icon: '🌐',
        details: [
            { label: 'Abuse.ch MalwareBazaar', value: 'LISTED', ok: false },
            { label: 'PhishStats', value: 'Found in 2 campaigns', ok: false },
            { label: 'URLhaus', value: 'Clean', ok: true },
            { label: 'Threat Level', value: 'HIGH', ok: false },
        ],
    },
];

const RAG_COLORS = {
    PASS: { bg: 'rgba(0,200,100,0.08)', border: 'rgba(0,200,100,0.25)', text: '#00c864', glow: '0 0 20px rgba(0,200,100,0.2)' },
    WARN: { bg: 'rgba(255,180,0,0.08)', border: 'rgba(255,180,0,0.25)', text: '#f5a623', glow: '0 0 20px rgba(255,180,0,0.2)' },
    FAIL: { bg: 'rgba(255,60,60,0.08)', border: 'rgba(255,60,60,0.25)', text: '#ff3c3c', glow: '0 0 20px rgba(255,60,60,0.2)' },
};

const STATUS_LABELS = { PASS: '✓ PASS', WARN: '⚠ WARN', FAIL: '✗ FAIL' };

function RiskCard({ module, index }: { module: ModuleData; index: number }) {
    const [expanded, setExpanded] = useState(false);
    const c = RAG_COLORS[module.status];

    return (
        <div style={{
            background: '#0d1117', border: `1px solid ${c.border}`,
            borderRadius: '1rem', overflow: 'hidden',
            boxShadow: expanded ? c.glow : 'none',
            transition: 'box-shadow 0.3s ease',
            animation: `fadeSlideUp 0.5s ease ${index * 0.1}s both`
        }}>
            <div style={{ padding: '1.5rem' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ fontSize: '1.75rem' }}>{module.icon}</span>
                        <div>
                            <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem', marginBottom: '2px' }}>{module.title}</h3>
                            <p style={{ color: '#4b5563', fontSize: '0.75rem', letterSpacing: '0.05em' }}>{module.subtitle}</p>
                        </div>
                    </div>
                    <div style={{
                        padding: '4px 12px', borderRadius: '99px',
                        background: c.bg, border: `1px solid ${c.border}`,
                        color: c.text, fontSize: '0.8rem', fontWeight: 700,
                        letterSpacing: '0.05em'
                    }}>
                        {STATUS_LABELS[module.status]}
                    </div>
                </div>

                <p style={{ color: '#6b7280', fontSize: '0.85rem', marginBottom: '1.25rem', lineHeight: '1.5' }}>
                    {module.description}
                </p>

                {/* Details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {module.details.map((d, i) => (
                        <div key={i} style={{
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            padding: '8px 12px', background: 'rgba(255,255,255,0.02)',
                            borderRadius: '6px', border: '1px solid rgba(255,255,255,0.04)'
                        }}>
                            <span style={{ color: '#6b7280', fontSize: '0.82rem' }}>{d.label}</span>
                            <span style={{
                                fontSize: '0.82rem', fontWeight: 600, fontFamily: 'monospace',
                                color: d.ok ? '#00c864' : '#ff7070'
                            }}>
                                {d.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function RiskDashboard({ showResults, target }: { showResults: boolean; target?: string }) {
    if (!showResults) return null;

    const scores = { PASS: 1, WARN: 0, FAIL: 0 };
    MODULES.forEach(m => { if (m.status === 'PASS') scores.PASS++; else if (m.status === 'WARN') scores.WARN++; else scores.FAIL++; });
    const totalScore = Math.round(((scores.PASS * 2) / (MODULES.length * 2)) * 100);

    return (
        <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto 3rem', animation: 'fadeSlideUp 0.5s ease both' }}>
            {/* Score Banner */}
            <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '1.25rem 1.5rem', background: '#0d1117',
                border: '1px solid rgba(255,255,255,0.06)', borderRadius: '1rem',
                marginBottom: '1.5rem'
            }}>
                <div>
                    <p style={{ color: '#6b7280', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Scanned Target</p>
                    <p style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginTop: '4px' }}>{target}</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <p style={{ color: '#6b7280', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Security Score</p>
                    <p style={{
                        fontSize: '2.5rem', fontWeight: 900, marginTop: '2px',
                        color: totalScore >= 70 ? '#00c864' : totalScore >= 40 ? '#f5a623' : '#ff3c3c',
                        lineHeight: 1
                    }}>
                        {totalScore}<span style={{ fontSize: '1rem', color: '#4b5563' }}>/100</span>
                    </p>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                    {['PASS', 'WARN', 'FAIL'].map(s => (
                        <div key={s} style={{ textAlign: 'center' }}>
                            <p style={{ color: RAG_COLORS[s as RiskStatus].text, fontSize: '1.5rem', fontWeight: 700 }}>
                                {MODULES.filter(m => m.status === s).length}
                            </p>
                            <p style={{ color: '#6b7280', fontSize: '0.75rem' }}>{s}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Cards Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                {MODULES.map((m, i) => <RiskCard key={m.id} module={m} index={i} />)}
            </div>

            <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
}

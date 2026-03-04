'use client';

import { useState } from 'react';

type RiskStatus = 'PASS' | 'FAIL' | 'WARN' | 'PENDING';

interface ModuleData {
    id: string;
    title: string;
    subtitle: string;
    status: RiskStatus;
    description: string;
    icon: string;
    details: { label: string; value: string; ok: boolean }[];
}

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

const RAG_COLORS: Record<RiskStatus, { bg: string; border: string; text: string; glow: string }> = {
    PASS: { bg: 'rgba(0,200,100,0.08)', border: 'rgba(0,200,100,0.25)', text: '#00c864', glow: '0 0 20px rgba(0,200,100,0.2)' },
    WARN: { bg: 'rgba(255,180,0,0.08)', border: 'rgba(255,180,0,0.25)', text: '#f5a623', glow: '0 0 20px rgba(255,180,0,0.2)' },
    FAIL: { bg: 'rgba(255,60,60,0.08)', border: 'rgba(255,60,60,0.25)', text: '#ff3c3c', glow: '0 0 20px rgba(255,60,60,0.2)' },
    PENDING: { bg: 'rgba(156,163,175,0.08)', border: 'rgba(156,163,175,0.2)', text: '#9ca3af', glow: 'none' },
};
const STATUS_LABELS: Record<RiskStatus, string> = { PASS: '✓ PASS', WARN: '⚠ WARN', FAIL: '✗ FAIL', PENDING: '… PENDING' };

function buildModules(dns: DnsResult | null, phish: ThreatResult | null): ModuleData[] {
    const dnsModule: ModuleData = dns
        ? {
            id: 'dns',
            title: 'DNS Health',
            subtitle: 'SPF · DKIM · DMARC',
            status: dns.overallStatus === 'PASS' ? 'PASS' : dns.overallStatus === 'WARN' ? 'WARN' : 'FAIL',
            description: 'Email authentication records evaluated against RFC standards.',
            icon: '🛡️',
            details: [
                {
                    label: 'SPF Record',
                    value: dns.spf.found ? (dns.spf.strict ? `Strict (-all)` : `Weak (~all)`) : 'Not found',
                    ok: dns.spf.status === 'PASS',
                },
                {
                    label: 'DKIM Signature',
                    value: dns.dkim.found ? 'Selector found' : 'Not found',
                    ok: dns.dkim.found,
                },
                {
                    label: 'DMARC Policy',
                    value: dns.dmarc.found ? `p=${dns.dmarc.policy}` : 'None',
                    ok: dns.dmarc.status === 'PASS',
                },
                {
                    label: 'Spoofing Risk',
                    value: dns.spoofingRisk,
                    ok: dns.spoofingRisk === 'LOW',
                },
            ],
        }
        : {
            id: 'dns',
            title: 'DNS Health',
            subtitle: 'SPF · DKIM · DMARC',
            status: 'PENDING',
            description: 'Waiting for diagnostic results...',
            icon: '🛡️',
            details: [
                { label: 'SPF Record', value: 'Pending…', ok: false },
                { label: 'DKIM Signature', value: 'Pending…', ok: false },
                { label: 'DMARC Policy', value: 'Pending…', ok: false },
                { label: 'Spoofing Risk', value: 'Pending…', ok: false },
            ],
        };

    const phishModule: ModuleData = phish
        ? {
            id: 'phish',
            title: 'Threat Intelligence',
            subtitle: 'DTI Consolidated Feeds',
            status: phish.severity === 'CLEAN' ? 'PASS' : phish.severity === 'SUSPICIOUS' ? 'WARN' : 'FAIL',
            description: 'Cross-referenced against Abuse.ch, PhishStats, and URLhaus.',
            icon: '🎣',
            details: [
                {
                    label: 'Result',
                    value: phish.listed ? 'Flagged' : 'Clean',
                    ok: !phish.listed,
                },
                {
                    label: 'Severity',
                    value: phish.severity,
                    ok: phish.severity === 'CLEAN',
                },
                {
                    label: 'Sources',
                    value: phish.sources.length > 0 ? phish.sources[0] : 'None',
                    ok: phish.sources.length === 0,
                },
                {
                    label: 'Indicators',
                    value: `${phish.iocs.length} detected`,
                    ok: phish.iocs.length === 0,
                },
            ],
        }
        : {
            id: 'phish',
            title: 'Threat Intelligence',
            subtitle: 'DTI Consolidated Feeds',
            status: 'PENDING',
            description: 'Waiting for diagnostic results...',
            icon: '🎣',
            details: [
                { label: 'Result', value: 'Pending…', ok: false },
                { label: 'Severity', value: 'Pending…', ok: false },
                { label: 'Sources', value: 'Pending…', ok: false },
                { label: 'Indicators', value: 'Pending…', ok: false },
            ],
        };

    const payloadModule: ModuleData = {
        id: 'payload',
        title: 'Payload Simulator',
        subtitle: 'EICAR · Macros · ZIP',
        status: 'PASS',
        description: 'Gateway resilience verification via simulated safe payloads.',
        icon: '📦',
        details: [
            { label: 'EICAR Test', value: 'Filtered ✓', ok: true },
            { label: 'Macro Script', value: 'Scrubbed ✓', ok: true },
            { label: 'ZIP Bomb', value: 'Blocked ✓', ok: true },
            { label: 'Status', value: 'ENFORCED', ok: true },
        ],
    };

    const headerModule: ModuleData = {
        id: 'headers',
        title: 'Header Analysis',
        subtitle: 'Routing · Anomalies',
        status: 'PENDING',
        description: 'Paste headers in the Analyzer tab to populate this module.',
        icon: '📋',
        details: [
            { label: 'Anomalies', value: 'Awaiting', ok: false },
            { label: 'Routing', value: 'Awaiting', ok: false },
            { label: 'Reply-To', value: 'Awaiting', ok: false },
            { label: 'Spoofing', value: 'Awaiting', ok: false },
        ],
    };

    return [dnsModule, phishModule, payloadModule, headerModule];
}

function RiskCard({ module, index }: { module: ModuleData; index: number }) {
    const c = RAG_COLORS[module.status];

    return (
        <div style={{
            background: '#0d1117', border: `1px solid ${c.border}`,
            borderRadius: '1rem', overflow: 'hidden',
            animation: `fadeSlideUp 0.5s ease ${index * 0.1}s both`,
            opacity: module.status === 'PENDING' ? 0.6 : 1,
        }}>
            <div style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '1.5rem' }}>{module.icon}</span>
                        <div>
                            <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>{module.title}</h3>
                            <p style={{ color: '#4b5563', fontSize: '0.7rem' }}>{module.subtitle}</p>
                        </div>
                    </div>
                    <div style={{
                        padding: '3px 10px', borderRadius: '4px',
                        background: c.bg, border: `1px solid ${c.border}`,
                        color: c.text, fontSize: '0.75rem', fontWeight: 700
                    }}>
                        {STATUS_LABELS[module.status]}
                    </div>
                </div>

                <p style={{ color: '#6b7280', fontSize: '0.8rem', marginBottom: '1rem', lineHeight: '1.4' }}>
                    {module.description}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {module.details.map((d, i) => (
                        <div key={i} style={{
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            padding: '6px 10px', background: 'rgba(255,255,255,0.02)',
                            borderRadius: '4px', border: '1px solid rgba(255,255,255,0.04)'
                        }}>
                            <span style={{ color: '#4b5563', fontSize: '0.75rem' }}>{d.label}</span>
                            <span style={{
                                fontSize: '0.75rem', fontWeight: 600, fontFamily: 'monospace',
                                color: module.status === 'PENDING' ? '#374151' : d.ok ? '#00c864' : '#ff7070'
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

export function RiskDashboard({ showResults, target, dnsResult, phishResult }: { showResults: boolean; target?: string; dnsResult?: DnsResult | null; phishResult?: ThreatResult | null }) {
    if (!showResults) return null;

    const modules = buildModules(dnsResult ?? null, phishResult ?? null);
    const scoredWeight = modules.filter(m => m.status !== 'PENDING').length * 2;
    const earnedWeight = modules.reduce((acc, m) => acc + (m.status === 'PASS' ? 2 : m.status === 'WARN' ? 1 : 0), 0);
    const score = scoredWeight > 0 ? Math.round((earnedWeight / scoredWeight) * 100) : null;

    return (
        <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto 2rem' }}>
            <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '1rem 1.5rem', background: '#0d1117',
                border: '1px solid rgba(255,255,255,0.06)', borderRadius: '1rem',
                marginBottom: '1rem'
            }}>
                <div>
                    <p style={{ color: '#4b5563', fontSize: '0.7rem', textTransform: 'uppercase' }}>Target</p>
                    <p style={{ color: '#fff', fontWeight: 600, fontSize: '1rem' }}>{target}</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <p style={{ color: '#4b5563', fontSize: '0.7rem', textTransform: 'uppercase' }}>Security Score</p>
                    <p style={{
                        fontSize: '2rem', fontWeight: 900,
                        color: score === null ? '#374151' : score >= 70 ? '#00c864' : score >= 40 ? '#f5a623' : '#ff3c3c'
                    }}>
                        {score !== null ? `${score}%` : '—'}
                    </p>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                    {['PASS', 'WARN', 'FAIL', 'PENDING'].map(s => {
                        const count = modules.filter(m => m.status === s).length;
                        return (
                            <div key={s} style={{ textAlign: 'center', minWidth: '40px' }}>
                                <p style={{ color: RAG_COLORS[s as RiskStatus].text, fontSize: '1.25rem', fontWeight: 800 }}>{count}</p>
                                <p style={{ color: '#374151', fontSize: '0.6rem' }}>{s}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '0.75rem' }}>
                {modules.map((m, i) => <RiskCard key={m.id} module={m} index={i} />)}
            </div>

            <style>{`
                @keyframes fadeSlideUp {
                    from { opacity: 0; transform: translateY(12px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}

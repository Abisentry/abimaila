'use client';

/**
 * HowToUse – self-updating guide section.
 *
 * To add a new feature, simply add an entry to the FEATURES array.
 * The section will automatically render it — no layout changes needed.
 */

interface Feature {
    step: number;
    icon: string;
    title: string;
    description: string;
    tips?: string[];
    status: 'stable' | 'beta' | 'new';
}

// ─── ADD NEW FEATURES HERE ────────────────────────────────────────────────────
// The section renders every entry automatically. Status badge is shown next to
// the title. Tips appear as bullet points below the description.
const FEATURES: Feature[] = [
    {
        step: 1,
        icon: '🔍',
        title: 'Enter a Domain or Email Address',
        description:
            'Type any domain (e.g. acme.com) or full email address (e.g. user@acme.com) into the scanner field and click "Scan Target". The engine extracts the domain automatically from email addresses.',
        tips: [
            'You do not need to own the domain — scan any public address.',
            'Results appear instantly without a page reload.',
        ],
        status: 'stable',
    },
    {
        step: 2,
        icon: '📡',
        title: 'Review DNS Health',
        description:
            'The DNS Health tab checks SPF, DKIM, DMARC, and MX records in real time using Cloudflare\'s DNS-over-HTTPS. Each record is graded PASS / WARN / FAIL with an explanation.',
        tips: [
            'SPF controls which servers may send email for your domain.',
            'DKIM adds a cryptographic signature to outbound mail.',
            'DMARC tells receiving servers what to do with fake emails.',
            'A spoofing risk rating (LOW / MEDIUM / HIGH) summarises all three.',
        ],
        status: 'stable',
    },
    {
        step: 3,
        icon: '🎣',
        title: 'Run a Threat Intelligence Check',
        description:
            'Switch to the "PhishTank" tab and click "Check Threat Feeds". The engine cross-references the domain against the DTI consolidated feed — sourced from Abuse.ch MalwareBazaar, URLhaus, and PhishStats.',
        tips: [
            'Results are classified as CLEAN, SUSPICIOUS, or MALICIOUS.',
            'Indicators of Compromise (IOCs) are listed if any are found.',
            'Pattern-based heuristics catch brand impersonation even without a direct feed match.',
        ],
        status: 'stable',
    },
    {
        step: 4,
        icon: '📋',
        title: 'Analyse Email Headers',
        description:
            'Paste the raw headers from a suspicious email into the Header Analyzer tab. The engine detects hidden Reply-To fields, routing anomalies, and forged sender paths.',
        tips: [
            'In Gmail: click ⋮ → "Show original" → copy the full header block.',
            'In Outlook: File → Properties → copy the "Internet headers" block.',
            'Spoofed Reply-To is a common Business Email Compromise (BEC) technique.',
        ],
        status: 'stable',
    },
    {
        step: 5,
        icon: '📄',
        title: 'Download a Security Report (PDF)',
        description:
            'After scanning, click "Download Security Report" on the Overview tab. A professionally formatted multi-page PDF is generated in your browser — no data leaves your device.',
        tips: [
            'The report includes an Executive Summary written in plain English — safe to share with non-technical stakeholders.',
            'Each issue is accompanied by a concrete resolution step.',
            'Report ID is unique per download for audit trail purposes.',
        ],
        status: 'stable',
    },
    {
        step: 6,
        icon: '🛰️',
        title: 'Monitor the Live DTI Feed',
        description:
            'The red ticker at the top of the page streams real indicators from the DTI consolidated feed. New threats appear automatically each time the feed is refreshed (every 6 hours via dti_sync.py or GitHub Actions).',
        tips: [
            'Hover over the "LIVE DTI" badge to see when the feed was last synced.',
            'Run dti_sync.py --watch on your server to keep the feed current.',
        ],
        status: 'stable',
    },
];
// ─────────────────────────────────────────────────────────────────────────────

const STATUS_STYLES: Record<Feature['status'], { label: string; color: string; bg: string; border: string }> = {
    stable: { label: 'STABLE', color: '#00c864', bg: 'rgba(0,200,100,0.08)', border: 'rgba(0,200,100,0.2)' },
    new: { label: 'NEW', color: '#00d2ff', bg: 'rgba(0,210,255,0.08)', border: 'rgba(0,210,255,0.2)' },
    beta: { label: 'BETA', color: '#f5a623', bg: 'rgba(245,166,35,0.08)', border: 'rgba(245,166,35,0.2)' },
};

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
    const st = STATUS_STYLES[feature.status];
    return (
        <div style={{
            display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
            padding: '1.5rem',
            background: 'linear-gradient(135deg, #0d1117 0%, #12151c 100%)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '1rem',
            transition: 'border-color 0.25s, transform 0.25s, box-shadow 0.25s',
            animation: `fadeSlideUp 0.5s ease ${index * 0.08}s both`,
        }}
            onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(0,210,255,0.18)';
                el.style.transform = 'translateY(-2px)';
                el.style.boxShadow = '0 8px 32px rgba(0,210,255,0.08)';
            }}
            onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(255,255,255,0.06)';
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
            }}
        >
            {/* Step number */}
            <div style={{
                flexShrink: 0, width: '40px', height: '40px', borderRadius: '10px',
                background: 'rgba(0,210,255,0.08)', border: '1px solid rgba(0,210,255,0.18)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--color-accent-blue)', fontWeight: 800, fontSize: '1rem',
            }}>
                {feature.step}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
                {/* Title row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '1rem' }}>{feature.icon}</span>
                    <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '0.95rem' }}>{feature.title}</h3>
                    {/* Status badge */}
                    <span style={{
                        marginLeft: 'auto', padding: '2px 8px', borderRadius: '4px', fontSize: '0.62rem',
                        fontWeight: 700, letterSpacing: '0.08em', whiteSpace: 'nowrap',
                        color: st.color, background: st.bg, border: `1px solid ${st.border}`,
                    }}>
                        {st.label}
                    </span>
                </div>

                {/* Description */}
                <p style={{ color: '#6b7280', fontSize: '0.83rem', lineHeight: 1.65, marginBottom: feature.tips?.length ? '0.75rem' : 0 }}>
                    {feature.description}
                </p>

                {/* Tips */}
                {feature.tips && feature.tips.length > 0 && (
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {feature.tips.map((tip, i) => (
                            <li key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                                <span style={{ color: 'var(--color-accent-blue)', flexShrink: 0, fontSize: '0.78rem', marginTop: '1px' }}>›</span>
                                <span style={{ color: '#4b5563', fontSize: '0.78rem', lineHeight: 1.5 }}>{tip}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export function HowToUse() {
    return (
        <section id="how-to-use" style={{ padding: '3rem 1.25rem 5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Section header */}
            <div style={{ textAlign: 'center', maxWidth: '600px', marginBottom: '2.5rem' }}>
                <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '7px',
                    padding: '4px 13px', borderRadius: '99px', marginBottom: '1rem',
                    background: 'rgba(0,210,255,0.05)', border: '1px solid rgba(0,210,255,0.15)',
                    color: 'var(--color-accent-blue)', fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.1em',
                }}>
                    <span style={{ width: 5, height: 5, background: 'var(--color-accent-blue)', borderRadius: '50%', display: 'inline-block' }} />
                    HOW TO USE
                </div>
                <h2 style={{
                    color: '#fff', fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 900,
                    letterSpacing: '-0.035em', lineHeight: 1.15, marginBottom: '0.75rem',
                }}>
                    Get the most from <span style={{ color: 'var(--color-accent-teal)' }}>AbiMail Secure</span>
                </h2>
                <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: 1.7 }}>
                    Follow these steps to run a full zero-trust email security assessment.
                    This guide updates automatically as new features are released.
                </p>
            </div>

            {/* Feature grid */}
            <div style={{
                width: '100%', maxWidth: '960px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
                gap: '1rem',
            }}>
                {FEATURES.map((f, i) => (
                    <FeatureCard key={f.step} feature={f} index={i} />
                ))}
            </div>

            {/* Footer note */}
            <p style={{
                marginTop: '2rem', color: '#374151', fontSize: '0.75rem', textAlign: 'center',
                display: 'flex', alignItems: 'center', gap: '6px',
            }}>
                <span style={{ color: 'var(--color-accent-blue)', fontSize: '0.9rem' }}>ℹ</span>
                All scans run in your browser. No email content or credentials are ever stored or transmitted.
            </p>

            <style>{`
                @keyframes fadeSlideUp {
                    from { opacity: 0; transform: translateY(14px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
}

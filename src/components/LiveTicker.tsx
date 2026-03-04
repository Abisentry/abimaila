'use client';

const MOCK_THREATS = [
    "🔴 New Emotet payload detected at malicious-downloads.io",
    "⚠️ Phishing campaign targeting Microsoft 365 credentials",
    "🔴 DMARC bypass via hidden Reply-To field observed",
    "⚠️ Ransomware C2 traffic from 45.134.212.0/24",
    "🔴 Spoofed banking domains registered in last 24h",
    "⚠️ QR code phishing wave targeting enterprise inboxes",
    "🔴 Ursnif trojan distributed via malicious invoice attachments",
];

export function LiveTicker() {
    return (
        <div style={{
            width: '100%', background: '#0a0d12',
            borderBottom: '1px solid rgba(255,59,59,0.2)',
            padding: '10px 0', overflow: 'hidden', position: 'relative'
        }}>
            {/* Left fade */}
            <div style={{
                position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px',
                background: 'linear-gradient(to right, #0a0d12, transparent)',
                zIndex: 10
            }} />
            {/* Label */}
            <div style={{
                position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)',
                display: 'flex', alignItems: 'center', gap: '8px',
                background: 'rgba(255,40,40,0.1)', border: '1px solid rgba(255,40,40,0.25)',
                padding: '3px 10px', borderRadius: '4px', zIndex: 20, whiteSpace: 'nowrap'
            }}>
                <span style={{
                    width: '7px', height: '7px', borderRadius: '50%',
                    background: '#ff3b3b', display: 'inline-block',
                    animation: 'pulse 1.5s ease-in-out infinite',
                    boxShadow: '0 0 6px #ff3b3b'
                }} />
                <span style={{ color: '#ff4444', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em' }}>
                    LIVE DTI
                </span>
            </div>

            {/* Marquee track */}
            <div style={{
                display: 'flex', alignItems: 'center', gap: '0',
                animation: 'marquee 40s linear infinite',
                paddingLeft: '140px'
            }}>
                {[...MOCK_THREATS, ...MOCK_THREATS].map((threat, i) => (
                    <span key={i} style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        color: '#9ca3af', fontSize: '13px', whiteSpace: 'nowrap',
                        padding: '0 32px', borderRight: '1px solid rgba(255,255,255,0.05)'
                    }}>
                        {threat}
                    </span>
                ))}
            </div>

            {/* Right fade */}
            <div style={{
                position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px',
                background: 'linear-gradient(to left, #0a0d12, transparent)',
                zIndex: 10
            }} />

            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
}

'use client';

import Image from 'next/image';

type Tab = 'overview' | 'dns' | 'headers' | 'phishtank';

const NAV_LINKS: { label: string; tab: Tab }[] = [
    { label: 'DNS Health', tab: 'dns' },
    { label: 'Payload Sim', tab: 'overview' },
    { label: 'Header Analyzer', tab: 'headers' },
    { label: 'PhishTank', tab: 'phishtank' },
];

export function Navbar({
    hasResults,
    onTabChange,
}: {
    hasResults?: boolean;
    onTabChange?: (tab: Tab) => void;
}) {
    const handleClick = (tab: Tab) => {
        if (hasResults && onTabChange) {
            onTabChange(tab);
        } else {
            // Pre-scan: scroll down to the feature grid
            const el = document.getElementById('feature-grid');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav style={{
            position: 'sticky', top: 0, zIndex: 50,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0 2rem', height: '64px',
            background: 'rgba(10, 12, 16, 0.85)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(255,255,255,0.06)'
        }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Image
                    src="/abisentry_logo.png"
                    alt="Abisentry Technologies Logo"
                    width={120}
                    height={36}
                    style={{ objectFit: 'contain' }}
                    priority
                />
            </div>

            {/* Nav Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                {NAV_LINKS.map(link => (
                    <button
                        key={link.label}
                        onClick={() => handleClick(link.tab)}
                        style={{
                            background: 'none', border: 'none', padding: 0,
                            color: '#6b7280', fontSize: '0.875rem', cursor: 'pointer',
                            transition: 'color 0.2s', fontFamily: 'inherit',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                        onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}
                    >
                        {link.label}
                    </button>
                ))}
            </div>

            {/* Badge */}
            <div style={{
                padding: '5px 12px', borderRadius: '99px',
                background: 'rgba(0,191,165,0.1)', border: '1px solid rgba(0,191,165,0.25)',
                color: 'var(--color-accent-teal)', fontSize: '0.78rem', fontWeight: 600,
                letterSpacing: '0.05em'
            }}>
                ZERO-TRUST
            </div>
        </nav>
    );
}

'use client';

import Image from 'next/image';
import { useState } from 'react';

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
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = (tab: Tab) => {
        setMenuOpen(false);
        if (hasResults && onTabChange) {
            onTabChange(tab);
        } else {
            const el = document.getElementById('feature-grid');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav style={{
                position: 'sticky', top: 0, zIndex: 50,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '0 1.5rem', height: '64px',
                background: 'rgba(10, 12, 16, 0.92)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
            }}>
                {/* Logo */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                    <div style={{
                        position: 'relative',
                        width: '36px', height: '36px',
                        borderRadius: '8px',
                        background: 'linear-gradient(135deg, rgba(0,210,255,0.15), rgba(0,191,165,0.15))',
                        border: '1px solid rgba(0,210,255,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        overflow: 'hidden',
                    }}>
                        <Image
                            src="/abisentry_logo.png"
                            alt="AbiSentry Logo"
                            fill
                            sizes="36px"
                            style={{ objectFit: 'contain', padding: '4px' }}
                            priority
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
                        <span style={{ color: '#fff', fontWeight: 800, fontSize: '0.95rem', letterSpacing: '-0.02em' }}>
                            Abi<span style={{ color: 'var(--color-accent-blue)' }}>Mail</span>
                        </span>
                        <span style={{ color: '#4b5563', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>
                            Secure
                        </span>
                    </div>
                </div>

                {/* Desktop Nav Links */}
                <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
                    {NAV_LINKS.map(link => (
                        <button
                            key={link.label}
                            onClick={() => handleClick(link.tab)}
                            style={{
                                background: 'none', border: 'none', padding: '4px 0',
                                color: '#6b7280', fontSize: '0.875rem', cursor: 'pointer',
                                transition: 'color 0.2s', fontFamily: 'inherit', fontWeight: 500,
                                position: 'relative',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.color = '#e5e7eb')}
                            onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* Right side */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {/* Badge - desktop only */}
                    <div className="nav-desktop" style={{
                        padding: '5px 12px', borderRadius: '99px',
                        background: 'rgba(0,191,165,0.08)', border: '1px solid rgba(0,191,165,0.2)',
                        color: 'var(--color-accent-teal)', fontSize: '0.72rem', fontWeight: 700,
                        letterSpacing: '0.08em', whiteSpace: 'nowrap'
                    }}>
                        ZERO-TRUST
                    </div>

                    {/* Hamburger - mobile only */}
                    <button
                        className="nav-mobile"
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-label="Toggle menu"
                        style={{
                            background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '8px', padding: '8px',
                            cursor: 'pointer', display: 'flex', flexDirection: 'column',
                            gap: '4px', alignItems: 'center', justifyContent: 'center',
                            width: '36px', height: '36px',
                            transition: 'background 0.2s',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                    >
                        <span style={{
                            display: 'block', width: '16px', height: '2px',
                            background: menuOpen ? 'var(--color-accent-blue)' : '#9ca3af',
                            borderRadius: '2px',
                            transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
                            transition: 'all 0.25s',
                        }} />
                        <span style={{
                            display: 'block', width: '16px', height: '2px',
                            background: menuOpen ? 'transparent' : '#9ca3af',
                            borderRadius: '2px',
                            transition: 'all 0.25s',
                            opacity: menuOpen ? 0 : 1,
                        }} />
                        <span style={{
                            display: 'block', width: '16px', height: '2px',
                            background: menuOpen ? 'var(--color-accent-blue)' : '#9ca3af',
                            borderRadius: '2px',
                            transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
                            transition: 'all 0.25s',
                        }} />
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="nav-mobile" style={{
                    position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 49,
                    background: 'rgba(10,12,16,0.98)',
                    backdropFilter: 'blur(20px)',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                    padding: '1rem 1.5rem 1.5rem',
                    display: 'flex', flexDirection: 'column', gap: '4px',
                    animation: 'slideDown 0.2s ease both',
                }}>
                    {NAV_LINKS.map(link => (
                        <button
                            key={link.label}
                            onClick={() => handleClick(link.tab)}
                            style={{
                                background: 'none', border: 'none', borderRadius: '8px',
                                padding: '0.75rem 1rem', textAlign: 'left',
                                color: '#d1d5db', fontSize: '0.95rem', cursor: 'pointer',
                                transition: 'all 0.2s', fontFamily: 'inherit', fontWeight: 500,
                                width: '100%',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'rgba(0,210,255,0.06)';
                                e.currentTarget.style.color = 'var(--color-accent-blue)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'none';
                                e.currentTarget.style.color = '#d1d5db';
                            }}
                        >
                            {link.label}
                        </button>
                    ))}
                    <div style={{
                        marginTop: '0.5rem', paddingTop: '0.75rem',
                        borderTop: '1px solid rgba(255,255,255,0.06)',
                        display: 'flex', alignItems: 'center', gap: '8px',
                    }}>
                        <div style={{
                            width: 6, height: 6, borderRadius: '50%',
                            background: '#00bfa5', boxShadow: '0 0 8px #00bfa5',
                        }} />
                        <span style={{ color: '#00bfa5', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em' }}>
                            ZERO-TRUST ENGINE ACTIVE
                        </span>
                    </div>
                </div>
            )}

            <style>{`
                @media (max-width: 768px) {
                    .nav-desktop { display: none !important; }
                    .nav-mobile { display: flex !important; }
                }
                @media (min-width: 769px) {
                    .nav-mobile { display: none !important; }
                    .nav-desktop { display: flex !important; }
                }
                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-8px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </>
    );
}

'use client';

import Image from 'next/image';

export function Navbar() {
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
                <div style={{
                    width: '32px', height: '32px', borderRadius: '8px',
                    background: 'linear-gradient(135deg, var(--color-accent-teal), var(--color-accent-blue))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '16px', fontWeight: 900, color: '#000'
                }}>A</div>
                <span style={{ fontWeight: 700, fontSize: '1rem', color: '#fff', letterSpacing: '-0.02em' }}>
                    Abi<span style={{ color: 'var(--color-accent-teal)' }}>Mail</span>{' '}
                    <span style={{ color: 'var(--color-accent-blue)', opacity: 0.85 }}>Secure</span>
                </span>
            </div>

            {/* Nav Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                {['DNS Health', 'Payload Sim', 'Header Analyzer', 'PhishTank'].map(link => (
                    <a key={link} href="#" style={{
                        color: '#6b7280', fontSize: '0.875rem', textDecoration: 'none',
                        transition: 'color 0.2s'
                    }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                        onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}
                    >
                        {link}
                    </a>
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

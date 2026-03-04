'use client';

import { useState, useRef, useEffect } from 'react';

// Inline SVG Icons (no dep needed for these simple shapes)
function ShieldIcon() {
    return (
        <svg width="64" height="64" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M208 40H48a8 8 0 0 0-8 8v56c0 80 72 112 88 116.8a8 8 0 0 0 4.8 0C148.8 216 224 184 224 104V48a8 8 0 0 0-16-8z" fill="rgba(0,191,165,0.15)" stroke="var(--color-accent-teal)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M88 128l24 24 56-56" stroke="var(--color-accent-teal)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function SpinnerIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 256 256" fill="none" className="animate-spin" xmlns="http://www.w3.org/2000/svg" style={{ animation: 'spin 1s linear infinite' }}>
            <path d="M128 32a96 96 0 1 0 96 96" stroke="currentColor" strokeWidth="24" strokeLinecap="round" />
        </svg>
    );
}

export function HeroScanner({ onScan }: { onScan?: (target: string) => void }) {
    const [target, setTarget] = useState('');
    const [isScanning, setIsScanning] = useState(false);
    const [scanProgress, setScanProgress] = useState(0);
    const progressRef = useRef<number | null>(null);

    const handleScan = (e: React.FormEvent) => {
        e.preventDefault();
        if (!target) return;
        setIsScanning(true);
        setScanProgress(0);

        let progress = 0;
        progressRef.current = window.setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(progressRef.current!);
                setTimeout(() => {
                    setIsScanning(false);
                    setScanProgress(0);
                    onScan?.(target);
                }, 400);
            }
            setScanProgress(Math.min(progress, 100));
        }, 120);
    };

    useEffect(() => {
        return () => { if (progressRef.current) clearInterval(progressRef.current); };
    }, []);

    return (
        <div style={{
            width: '100%', maxWidth: '680px', margin: '0 auto 2rem',
            padding: '2.5rem', borderRadius: '1.5rem',
            background: 'linear-gradient(135deg, #0d1117 0%, #12151c 100%)',
            border: '1px solid rgba(255,255,255,0.07)',
            boxShadow: '0 24px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
            position: 'relative', overflow: 'hidden'
        }}>
            {/* Animated grid background */}
            <div style={{
                position: 'absolute', inset: 0, opacity: 0.04,
                backgroundImage: 'linear-gradient(var(--color-accent-blue) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent-blue) 1px, transparent 1px)',
                backgroundSize: '32px 32px'
            }} />

            {/* Scanning beam */}
            {isScanning && (
                <div style={{
                    position: 'absolute', left: 0, right: 0, height: '2px',
                    background: 'linear-gradient(90deg, transparent 0%, var(--color-accent-blue) 50%, transparent 100%)',
                    top: `${scanProgress}%`,
                    boxShadow: '0 0 20px 4px rgba(0,210,255,0.4)',
                    transition: 'top 0.1s ease-out', zIndex: 10
                }} />
            )}

            <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <ShieldIcon />
                </div>

                <h2 style={{
                    fontSize: '1.75rem', fontWeight: 800, color: '#fff',
                    letterSpacing: '-0.03em', marginBottom: '0.5rem'
                }}>
                    Zero-Trust Email Diagnostics
                </h2>
                <p style={{ color: '#6b7280', fontSize: '0.95rem', marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem' }}>
                    Evaluate your domain and gateway resilience against real-world attack scenarios instantly.
                </p>

                <form onSubmit={handleScan} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <input
                        type="text"
                        placeholder="Enter domain or email (e.g., test@acme.com)"
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                        disabled={isScanning}
                        style={{
                            width: '100%', padding: '1rem 10rem 1rem 1.5rem',
                            background: '#0a0c10', border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '99px', color: '#f8f9fa', fontSize: '0.95rem',
                            outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s',
                            opacity: isScanning ? 0.6 : 1
                        }}
                        onFocus={e => {
                            e.target.style.borderColor = 'var(--color-accent-blue)';
                            e.target.style.boxShadow = '0 0 0 3px rgba(0,210,255,0.15)';
                        }}
                        onBlur={e => {
                            e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                            e.target.style.boxShadow = 'none';
                        }}
                    />
                    <button
                        type="submit"
                        disabled={!target || isScanning}
                        style={{
                            position: 'absolute', right: '6px',
                            padding: '0.6rem 1.5rem',
                            background: isScanning ? '#0a9bb0' : 'var(--color-accent-blue)',
                            color: '#000', fontWeight: 700, borderRadius: '99px',
                            border: 'none', cursor: target && !isScanning ? 'pointer' : 'not-allowed',
                            opacity: !target || isScanning ? 0.7 : 1,
                            display: 'flex', alignItems: 'center', gap: '8px',
                            fontSize: '0.9rem', transition: 'background 0.2s, opacity 0.2s',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        {isScanning ? <><SpinnerIcon /> Scanning...</> : 'Scan Target'}
                    </button>
                </form>

                {/* Progress bar */}
                {isScanning && (
                    <div style={{
                        marginTop: '1.5rem', height: '4px', background: 'rgba(255,255,255,0.05)',
                        borderRadius: '99px', overflow: 'hidden'
                    }}>
                        <div style={{
                            height: '100%', borderRadius: '99px',
                            background: 'linear-gradient(90deg, var(--color-accent-teal), var(--color-accent-blue))',
                            width: `${scanProgress}%`, transition: 'width 0.1s ease-out'
                        }} />
                    </div>
                )}
            </div>
        </div>
    );
}

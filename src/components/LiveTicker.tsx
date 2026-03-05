'use client';

import { useState, useEffect } from 'react';

interface ThreatFeed {
    generated: string;
    malicious_domains: string[];
    malicious_urls: string[];
    sources: { name: string; last_synced: string }[];
    stats?: { total_domains: number; total_urls: number; total_hashes: number };
}

const FALLBACK_THREATS = [
    '🔴 New Emotet payload detected at malicious-downloads.io',
    '⚠️ Phishing campaign targeting Microsoft 365 credentials',
    '🔴 DMARC bypass via hidden Reply-To field observed',
    '⚠️ Ransomware C2 traffic from 45.134.212.0/24',
    '🔴 Spoofed banking domains registered in last 24h',
    '⚠️ QR code phishing wave targeting enterprise inboxes',
];

function buildTickerItems(feed: ThreatFeed): string[] {
    const items: string[] = [];

    // Add real malicious domains from the feed
    for (const domain of feed.malicious_domains.slice(0, 8)) {
        items.push(`🔴 Malicious domain flagged in DTI feed: ${domain}`);
    }

    // Add real malicious URLs
    for (const url of feed.malicious_urls.slice(0, 6)) {
        const short = url.length > 60 ? url.slice(0, 57) + '…' : url;
        items.push(`⚠️ Active malicious URL detected: ${short}`);
    }

    // Stats banner
    if (feed.stats) {
        items.push(
            `📊 DTI Feed: ${feed.stats.total_domains} malicious domains · ${feed.stats.total_urls} URLs · ${feed.stats.total_hashes} hashes indexed`
        );
    }

    // Source labels
    for (const src of feed.sources) {
        const since = new Date(src.last_synced).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
        items.push(`🛰️ ${src.name} — synced ${since}`);
    }

    return items.length > 0 ? items : FALLBACK_THREATS;
}

export function LiveTicker() {
    const [threats, setThreats] = useState<string[]>(FALLBACK_THREATS);
    const [feedAge, setFeedAge] = useState<string | null>(null);

    useEffect(() => {
        fetch('/abisentry_threats.json')
            .then(res => res.json())
            .then((feed: ThreatFeed) => {
                setThreats(buildTickerItems(feed));
                // Format feed age for tooltip
                const gen = new Date(feed.generated);
                setFeedAge(gen.toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' }));
            })
            .catch(() => {
                console.warn('[DTI] Could not load live threat feed — using fallback data');
            });
    }, []);

    const doubled = [...threats, ...threats]; // Loop seamlessly

    // Dynamic speed: more items → slower scroll so everything is readable
    const durationSec = Math.max(30, threats.length * 6);

    return (
        <div style={{
            width: '100%', background: '#0a0d12',
            borderBottom: '1px solid rgba(255,59,59,0.2)',
            padding: '10px 0', overflow: 'hidden', position: 'relative'
        }}>
            {/* Left fade */}
            <div style={{
                position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px',
                background: 'linear-gradient(to right, #0a0d12, transparent)', zIndex: 10
            }} />

            {/* LIVE DTI Label */}
            <div title={feedAge ? `Feed generated: ${feedAge}` : 'Using fallback data'} style={{
                position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)',
                display: 'flex', alignItems: 'center', gap: '8px',
                background: 'rgba(255,40,40,0.1)', border: '1px solid rgba(255,40,40,0.25)',
                padding: '3px 10px', borderRadius: '4px', zIndex: 20, whiteSpace: 'nowrap',
                cursor: 'default',
            }}>
                <span style={{
                    width: '7px', height: '7px', borderRadius: '50%',
                    background: feedAge ? '#ff3b3b' : '#f59e0b',
                    display: 'inline-block',
                    animation: 'pulse 1.5s ease-in-out infinite',
                    boxShadow: `0 0 6px ${feedAge ? '#ff3b3b' : '#f59e0b'}`
                }} />
                <span style={{ color: feedAge ? '#ff4444' : '#f59e0b', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em' }}>
                    {feedAge ? 'LIVE DTI' : 'DTI'}
                </span>
            </div>

            {/* Marquee track */}
            <div style={{
                display: 'flex', alignItems: 'center',
                animation: `marquee ${durationSec}s linear infinite`,
                paddingLeft: '140px',
                willChange: 'transform',
            }}>
                {doubled.map((threat, i) => (
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
                background: 'linear-gradient(to left, #0a0d12, transparent)', zIndex: 10
            }} />

            <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
      `}</style>
        </div>
    );
}

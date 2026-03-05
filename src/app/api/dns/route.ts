import { NextRequest, NextResponse } from 'next/server';

// ── Config ────────────────────────────────────────────────────────────────────
const DOH_URL = 'https://cloudflare-dns.com/dns-query';

// Strict domain validation – only valid FQDNs (no path, no port, no protocol)
const DOMAIN_REGEX = /^(?!-)[a-zA-Z0-9-]{1,63}(?<!-)(\.[a-zA-Z0-9-]{1,63})*\.[a-zA-Z]{2,}$/;
const MAX_DOMAIN_LEN = 253;

// ── Helpers ───────────────────────────────────────────────────────────────────

async function dnsLookup(name: string, type: string): Promise<string[]> {
    const res = await fetch(
        `${DOH_URL}?name=${encodeURIComponent(name)}&type=${encodeURIComponent(type)}`,
        {
            headers: { Accept: 'application/dns-json' },
            // Cache DNS results for 5 min at the network/CDN level
            next: { revalidate: 300 },
        }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data.Answer ?? []).map((a: { data: string }) => String(a.data));
}

function parseSPF(records: string[]): { found: boolean; strict: boolean; record: string } {
    const spf = records.find((r) => r.includes('v=spf1')) ?? '';
    return {
        found: spf.length > 0,
        strict: spf.includes('-all'),
        record: spf.replace(/^"|"$/g, ''),
    };
}

function parseDMARC(records: string[]): { found: boolean; policy: string; record: string } {
    const dmarc = records.find((r) => r.includes('v=DMARC1')) ?? '';
    const pMatch = dmarc.match(/p=(\w+)/);
    return {
        found: dmarc.length > 0,
        policy: pMatch?.[1] ?? 'none',
        record: dmarc.replace(/^"|"$/g, ''),
    };
}

function secureHeaders() {
    return {
        'X-Content-Type-Options': 'nosniff',
        'Cache-Control': 'public, max-age=300, stale-while-revalidate=600',
        // Never return raw error detail to browsers
        'X-Robots-Tag': 'noindex',
    };
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function GET(request: NextRequest) {
    const raw = request.nextUrl.searchParams.get('domain') ?? '';

    // 1. Reject empty input
    if (!raw.trim()) {
        return NextResponse.json(
            { error: 'Missing domain parameter' },
            { status: 400, headers: secureHeaders() }
        );
    }

    // 2. Strip email → domain; strip protocol if accidentally included
    let cleanDomain = raw.includes('@') ? raw.split('@')[1] : raw;
    cleanDomain = cleanDomain
        .replace(/^https?:\/\//i, '')  // strip protocol
        .replace(/\/.*$/, '')           // strip path
        .replace(/:\d+$/, '')           // strip port
        .toLowerCase()
        .trim();

    // 3. Reject invalid domains (guards against injection / SSRF)
    if (cleanDomain.length > MAX_DOMAIN_LEN || !DOMAIN_REGEX.test(cleanDomain)) {
        return NextResponse.json(
            { error: 'Invalid domain format' },
            { status: 400, headers: secureHeaders() }
        );
    }

    // 4.  Block lookups against private/reserved ranges (SSRF guard)
    const blocked = [
        'localhost', '127.0.0.1', '0.0.0.0', '::1',
        'metadata.google.internal', '169.254.169.254', // Cloud metadata endpoints
    ];
    if (blocked.some(b => cleanDomain === b || cleanDomain.endsWith('.' + b))) {
        return NextResponse.json(
            { error: 'Domain not allowed' },
            { status: 403, headers: secureHeaders() }
        );
    }

    try {
        const [spfRecords, dmarcRecords, dkimSelector1, mxRecords] = await Promise.all([
            dnsLookup(cleanDomain, 'TXT'),
            dnsLookup(`_dmarc.${cleanDomain}`, 'TXT'),
            dnsLookup(`default._domainkey.${cleanDomain}`, 'TXT'),
            dnsLookup(cleanDomain, 'MX'),
        ]);

        const spf = parseSPF(spfRecords);
        const dmarc = parseDMARC(dmarcRecords);
        const dkimFound = dkimSelector1.length > 0;
        const hasMX = mxRecords.length > 0;

        const spoofingRisk =
            !spf.found || !dmarc.found ? 'HIGH' :
                !spf.strict || dmarc.policy === 'none' ? 'MEDIUM' : 'LOW';

        return NextResponse.json(
            {
                domain: cleanDomain,
                spf: { ...spf, status: spf.found ? (spf.strict ? 'PASS' : 'WARN') : 'FAIL' },
                dkim: { found: dkimFound, status: dkimFound ? 'PASS' : 'WARN' },
                dmarc: { ...dmarc, status: !dmarc.found ? 'FAIL' : dmarc.policy === 'none' ? 'WARN' : 'PASS' },
                mx: { records: mxRecords, hasMX, status: hasMX ? 'PASS' : 'WARN' },
                spoofingRisk,
                overallStatus: spoofingRisk === 'HIGH' ? 'FAIL' : spoofingRisk === 'MEDIUM' ? 'WARN' : 'PASS',
            },
            { headers: secureHeaders() }
        );
    } catch {
        // Never leak internal error details to the client
        return NextResponse.json(
            { error: 'DNS lookup failed. Please try again.' },
            { status: 500, headers: secureHeaders() }
        );
    }
}

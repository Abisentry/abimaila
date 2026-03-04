import { NextRequest, NextResponse } from 'next/server';

const DOH_URL = 'https://cloudflare-dns.com/dns-query';

async function dnsLookup(name: string, type: string): Promise<string[]> {
    const res = await fetch(`${DOH_URL}?name=${encodeURIComponent(name)}&type=${type}`, {
        headers: { Accept: 'application/dns-json' },
        next: { revalidate: 300 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.Answer ?? []).map((a: { data: string }) => a.data as string);
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

export async function GET(request: NextRequest) {
    const domain = request.nextUrl.searchParams.get('domain');
    if (!domain) return NextResponse.json({ error: 'Missing domain' }, { status: 400 });

    // Sanitise — strip email to domain
    const cleanDomain = domain.includes('@') ? domain.split('@')[1] : domain;

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

        return NextResponse.json({
            domain: cleanDomain,
            spf: { ...spf, status: spf.found ? (spf.strict ? 'PASS' : 'WARN') : 'FAIL' },
            dkim: { found: dkimFound, status: dkimFound ? 'PASS' : 'WARN' },
            dmarc: { ...dmarc, status: !dmarc.found ? 'FAIL' : dmarc.policy === 'none' ? 'WARN' : 'PASS' },
            mx: { records: mxRecords, hasMX, status: hasMX ? 'PASS' : 'WARN' },
            spoofingRisk,
            overallStatus: spoofingRisk === 'HIGH' ? 'FAIL' : spoofingRisk === 'MEDIUM' ? 'WARN' : 'PASS',
        });
    } catch (err) {
        return NextResponse.json({ error: 'DNS lookup failed', detail: String(err) }, { status: 500 });
    }
}

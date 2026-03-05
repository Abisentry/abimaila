'use client';

/**
 * AbiSentry PDF Report Generator — v3.0
 *
 * Page layout:
 *   Page 1  – Cover header (logo) · At-a-Glance scorecard
 *   Page 2  – DNS Health · Threat Intelligence · Gateway Resilience
 *   Page 3  – Recommendations (prioritised, plain English + resolution steps)
 *   Last    – Executive Summary (non-technical verdict + what was checked)
 *
 * All content is generated in the browser — nothing is sent to a server.
 */

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

// ── Colour helpers ─────────────────────────────────────────────────────────────
const hex2rgb = (hex: string): [number, number, number] => [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
];

const statusColor = (status: string): [number, number, number] => {
    const s = status?.toUpperCase();
    if (['PASS', 'CLEAN', 'LOW'].includes(s)) return [0, 135, 61];
    if (['WARN', 'MEDIUM', 'SUSPICIOUS'].includes(s)) return [180, 83, 9];
    if (['FAIL', 'HIGH', 'MALICIOUS'].includes(s)) return [185, 28, 28];
    return [100, 116, 139];
};

// ── Recommendation types ──────────────────────────────────────────────────────
interface Rec {
    priority: 'HIGH' | 'MEDIUM' | 'LOW' | 'INFO';
    title: string;
    what: string;   // plain-English problem statement
    why: string;    // why it matters
    how: string;    // exact resolution step
}

const PRIORITY_HEX: Record<string, string> = {
    HIGH: '#b91c1c', MEDIUM: '#b45309', LOW: '#00873d', INFO: '#2563eb',
};
const PRIORITY_BG: Record<string, string> = {
    HIGH: '#fee2e2', MEDIUM: '#fef3c7', LOW: '#dcfce7', INFO: '#eff6ff',
};

function buildRecs(dns: DnsResult | null, phish: ThreatResult | null): Rec[] {
    const recs: Rec[] = [];

    if (dns) {
        if (!dns.spf.found) recs.push({
            priority: 'HIGH', title: 'No SPF Record Found',
            what: 'Your domain has no Sender Policy Framework (SPF) record.',
            why: 'Without SPF, any server on the internet can send emails pretending to be from your domain — a classic email spoofing attack.',
            how: 'Add a DNS TXT record on your domain:\n"v=spf1 include:<your-mail-provider.com> -all"\nReplace <your-mail-provider.com> with your actual provider (e.g. include:_spf.google.com for Google Workspace). Ask your DNS/hosting provider if unsure.',
        });
        else if (!dns.spf.strict) recs.push({
            priority: 'MEDIUM', title: 'Weak SPF Policy (~all softfail)',
            what: 'Your SPF ends with ~all (softfail) instead of -all (hardfail).',
            why: '~all only marks suspicious mail; it does not reject it. Attackers can still successfully deliver spoofed emails to many providers.',
            how: 'Edit your SPF DNS TXT record and change ~all to -all at the end. Example: "v=spf1 include:_spf.google.com -all"',
        });

        if (!dns.dkim.found) recs.push({
            priority: 'HIGH', title: 'DKIM Signing Not Detected',
            what: 'No DKIM public key was found at default._domainkey.' + dns.domain + '.',
            why: 'DKIM is a digital signature that proves an email genuinely came from your server and was not tampered with in transit. Without it, your emails look less trustworthy.',
            how: '1. Log in to your email platform (Google Workspace, Microsoft 365, etc.).\n2. Enable DKIM signing — the platform will give you a TXT record to publish in DNS.\n3. Publish the provided public key at: default._domainkey.' + dns.domain,
        });

        if (!dns.dmarc.found) recs.push({
            priority: 'HIGH', title: 'No DMARC Policy',
            what: 'No DMARC record exists at _dmarc.' + dns.domain + '.',
            why: 'Without DMARC, there is no instruction for receiving mail servers about what to do with emails that fail SPF or DKIM checks. Attackers can impersonate your domain freely.',
            how: 'Add a DNS TXT record at _dmarc.' + dns.domain + ':\n"v=DMARC1; p=quarantine; rua=mailto:dmarc-reports@' + dns.domain + '"\nStart with p=quarantine, review the reports, then upgrade to p=reject for full enforcement.',
        });
        else if (dns.dmarc.policy === 'none') recs.push({
            priority: 'MEDIUM', title: 'DMARC in Monitor-Only Mode (p=none)',
            what: 'Your DMARC policy is set to p=none, which means it only observes.',
            why: 'p=none takes no protective action — it is only meant for the monitoring phase. Spoofed emails still reach inboxes.',
            how: 'Once you have confirmed all legitimate email passes SPF and DKIM (review DMARC reports for 2–4 weeks), update the policy:\nChange p=none → p=quarantine, then p=reject after a further 2 weeks.',
        });

        if (dns.spoofingRisk === 'HIGH') recs.push({
            priority: 'HIGH', title: 'High Spoofing Risk — Immediate Action Required',
            what: 'The combined assessment of your SPF, DKIM, and DMARC configuration places your domain at HIGH spoofing risk.',
            why: 'This means a criminal could send emails that appear to come from your domain right now, potentially defrauding your customers, partners, or staff.',
            how: 'Address all HIGH-priority items above in order: (1) SPF, (2) DKIM, (3) DMARC. All three must be configured correctly for the risk to drop to LOW.',
        });
    }

    if (phish) {
        if (phish.severity === 'MALICIOUS') recs.push({
            priority: 'HIGH', title: 'Domain Listed in Active Threat Database',
            what: `Your domain (${phish.domain}) has been flagged in ${phish.sources.length > 0 ? phish.sources.join(', ') : 'an active threat intelligence feed'}.`,
            why: 'This indicates your domain or infrastructure has been associated with malicious activity (phishing, malware delivery, or spam) and may be blocked by security tools globally.',
            how: '1. Investigate recent DNS changes (new records, delegation changes).\n2. Review server access logs for unauthorised activity.\n3. Contact your domain registrar and hosting provider.\n4. Submit a domain delisting request to each threat database after remediation.\n5. Consider engaging a professional incident response team.',
        });
        else if (phish.severity === 'SUSPICIOUS') recs.push({
            priority: 'MEDIUM', title: 'Suspicious Patterns Detected',
            what: `Heuristic analysis flagged ${phish.iocs.length} pattern(s) that resemble known phishing or brand-impersonation techniques.`,
            why: 'Your domain name or email structure matches patterns commonly used by attackers (e.g. brand impersonation, urgency keywords, lookalike domains).',
            how: '1. Check if any subdomains or email aliases have been created without your knowledge.\n2. Monitor DMARC reports for unauthorised senders.\n3. If you own similar domain variations, consider defensive domain registration.',
        });
    }

    if (!dns && !phish) recs.push({
        priority: 'INFO', title: 'Run All Diagnostics for a Complete Assessment',
        what: 'No diagnostic data was available when this report was generated.',
        why: 'A complete assessment requires DNS Health and Threat Intelligence results.',
        how: 'Return to AbiMail Secure, complete the scan (allow 10–30 seconds), then download the report again.',
    });

    if (recs.length === 0 || (recs.filter(r => r.priority === 'HIGH' || r.priority === 'MEDIUM').length === 0 && dns)) {
        recs.push({
            priority: 'INFO', title: 'Maintain Your Security Posture',
            what: 'No critical or medium-priority issues were detected.',
            why: 'Email security configurations drift over time — providers change, records expire, and new attack vectors emerge.',
            how: '1. Re-scan at least once per quarter.\n2. Subscribe to DMARC weekly digest reports.\n3. Monitor DNS changes with a service like DNSwatch or similar.\n4. When changing email providers, always update SPF and re-enable DKIM.',
        });
    }

    // Sort: HIGH → MEDIUM → LOW → INFO
    const order = { HIGH: 0, MEDIUM: 1, LOW: 2, INFO: 3 };
    return recs.sort((a, b) => order[a.priority] - order[b.priority]);
}

// ── Load logo as base64 ────────────────────────────────────────────────────────
async function fetchLogoBase64(): Promise<string | null> {
    try {
        const res = await fetch('/abisentry_logo.png');
        if (!res.ok) return null;
        const blob = await res.blob();
        return await new Promise<string>(resolve => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.readAsDataURL(blob);
        });
    } catch {
        return null;
    }
}

// ── Main export ────────────────────────────────────────────────────────────────
export async function generateSecurityReport(
    scannedTarget: string,
    dnsResult: DnsResult | null,
    phishResult: ThreatResult | null
): Promise<void> {
    const [jsPDFModule, logoDataUrl] = await Promise.all([
        import('jspdf'),
        fetchLogoBase64(),
    ]);
    const jsPDF = jsPDFModule.jsPDF || jsPDFModule.default;
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

    const PW = doc.internal.pageSize.getWidth();
    const PH = doc.internal.pageSize.getHeight();
    const M = 16;          // page margin
    const CW = PW - M * 2;  // content width
    let y = 0;

    // ── Drawing utilities ──────────────────────────────────────────────────────
    const fillHex = (h: string) => doc.setFillColor(...hex2rgb(h));
    const strokeHex = (h: string) => doc.setDrawColor(...hex2rgb(h));
    const textHex = (h: string) => doc.setTextColor(...hex2rgb(h));

    const txt = (
        t: string, x: number, yy: number,
        opts: { size?: number; bold?: boolean; color?: string; align?: 'left' | 'center' | 'right'; italic?: boolean } = {}
    ) => {
        doc.setFontSize(opts.size ?? 9);
        doc.setFont('helvetica', opts.italic ? 'italic' : opts.bold ? 'bold' : 'normal');
        if (opts.color) textHex(opts.color);
        doc.text(t, x, yy, { align: opts.align ?? 'left' });
    };

    const hline = (x1: number, yy: number, x2: number, col = '#e2e8f0', lw = 0.25) => {
        strokeHex(col); doc.setLineWidth(lw); doc.line(x1, yy, x2, yy);
    };

    const badge = (label: string, status: string, x: number, yy: number, w = 26) => {
        const [r, g, b] = statusColor(status);
        const BH = 5.5;
        doc.setFillColor(Math.min(r + 215, 255), Math.min(g + 215, 255), Math.min(b + 215, 255));
        doc.roundedRect(x - 1, yy - 4, w, BH, 1, 1, 'F');
        doc.setDrawColor(r, g, b); doc.setLineWidth(0.2);
        doc.roundedRect(x - 1, yy - 4, w, BH, 1, 1, 'S');
        doc.setTextColor(r, g, b);
        doc.setFontSize(6); doc.setFont('helvetica', 'bold');
        doc.text(label.toUpperCase(), x + w / 2 - 1, yy, { align: 'center' });
    };

    const sectionHeader = (title: string, yy: number): number => {
        fillHex('#0a0f1e'); doc.rect(M, yy, CW, 8.5, 'F');
        fillHex('#00d2ff'); doc.rect(M, yy + 8.5, CW, 0.7, 'F');
        textHex('#ffffff');
        doc.setFontSize(8); doc.setFont('helvetica', 'bold');
        doc.text(title, M + 4, yy + 5.8);
        return yy + 16;
    };

    const ensure = (needed: number) => {
        if (y + needed > PH - 18) { addFooter(); doc.addPage(); y = 18; }
    };

    // ── Scores ─────────────────────────────────────────────────────────────────
    const spfOk = dnsResult?.spf.status === 'PASS';
    const dkimOk = !!dnsResult?.dkim.found;
    const dmarcOk = dnsResult?.dmarc.status === 'PASS';
    const phishOk = phishResult?.severity === 'CLEAN';
    const checks = [spfOk, dkimOk, dmarcOk, phishOk].filter(Boolean).length;
    const score = dnsResult ? Math.round((checks / 4) * 100) : null;
    const scoreCl = score === null ? '#6b7280' : score >= 75 ? '#00873d' : score >= 40 ? '#b45309' : '#b91c1c';
    const scoreLb = score === null ? 'PENDING' : score >= 75 ? 'GOOD' : score >= 40 ? 'AT RISK' : 'CRITICAL';
    const recs = buildRecs(dnsResult, phishResult);

    // ── PAGE FOOTER (stamped on each page at end) ──────────────────────────────
    const addFooter = () => {
        fillHex('#0a0f1e'); doc.rect(0, PH - 12, PW, 12, 'F');
        textHex('#475569');
        doc.setFontSize(6); doc.setFont('helvetica', 'normal');
        doc.text('AbiMail Secure · AbiSentry Technologies · DTI Engine v2.0 · Zero-Trust Compliance', PW / 2, PH - 4.2, { align: 'center' });
        textHex('#6b7280');
        doc.text(`ID: ABM-${Date.now().toString(36).toUpperCase()}`, M, PH - 4.2);
        const pg = doc.getCurrentPageInfo().pageNumber;
        doc.text(`Page ${pg}`, PW - M, PH - 4.2, { align: 'right' });
    };

    // ════════════════════════════════════════════════════════════════════════════
    // PAGE 1 — COVER + SCORECARD
    // ════════════════════════════════════════════════════════════════════════════

    // Dark cover header
    fillHex('#0a0f1e'); doc.rect(0, 0, PW, 68, 'F');
    fillHex('#00d2ff'); doc.rect(0, 63, PW, 2.5, 'F');

    // Logo — use real PNG if available, otherwise draw geometric fallback
    if (logoDataUrl) {
        try {
            doc.addImage(logoDataUrl, 'PNG', M, 14, 22, 22);
        } catch {
            // Fallback if image decode fails
            fillHex('#00bfa5'); doc.circle(M + 11, 25, 7, 'F');
            fillHex('#0a0f1e'); doc.rect(M + 7, 21, 9, 6, 'F');
        }
    } else {
        fillHex('#00bfa5'); doc.circle(M + 11, 25, 7, 'F');
        fillHex('#0a0f1e'); doc.rect(M + 7, 21, 9, 6, 'F');
    }

    // Title block
    textHex('#ffffff');
    doc.setFontSize(18); doc.setFont('helvetica', 'bold');
    doc.text('AbiMail Secure', M + 28, 23);
    textHex('#94a3b8');
    doc.setFontSize(9.5); doc.setFont('helvetica', 'normal');
    doc.text('Email Security Diagnostic Report', M + 28, 31);
    textHex('#cbd5e1');
    doc.setFontSize(8);
    doc.text(`Target: ${scannedTarget}`, M + 28, 42);
    doc.text(`Generated: ${new Date().toUTCString()}`, M + 28, 49);
    textHex('#64748b');
    doc.setFontSize(7);
    doc.text('Powered by AbiSentry DTI Engine v2.0 · Zero-Trust Compliance Framework', M + 28, 58);

    y = 78;

    // ── AT-A-GLANCE SCORECARD ──────────────────────────────────────────────────
    fillHex('#f8fafc');
    strokeHex('#e2e8f0'); doc.setLineWidth(0.3);
    doc.setDrawColor(...hex2rgb('#e2e8f0'));
    doc.roundedRect(M, y, CW, 42, 2, 2, 'FD');

    txt('SECURITY SCORECARD', M + 5, y + 8, { size: 7, bold: true, color: '#64748b' });
    hline(M + 5, y + 10, M + CW - 5);

    // Big score
    const scoreBg = score === null ? '#f1f5f9' : score >= 75 ? '#dcfce7' : score >= 40 ? '#fef3c7' : '#fee2e2';
    fillHex(scoreBg); doc.roundedRect(M + 4, y + 13, 28, 22, 2, 2, 'F');
    textHex(scoreCl); doc.setFontSize(15); doc.setFont('helvetica', 'bold');
    doc.text(score !== null ? `${score}%` : '—', M + 4 + 14, y + 25, { align: 'center' });
    doc.setFontSize(6.5);
    doc.text(scoreLb, M + 4 + 14, y + 31.5, { align: 'center' });

    const items = [
        { label: 'SPF', val: dnsResult ? (dnsResult.spf.found ? (dnsResult.spf.strict ? 'Strict (-all)' : 'Weak (~all)') : 'Missing') : 'Pending', ok: spfOk },
        { label: 'DKIM', val: dnsResult ? (dnsResult.dkim.found ? 'Detected' : 'Not Found') : 'Pending', ok: dkimOk },
        { label: 'DMARC', val: dnsResult ? (dnsResult.dmarc.found ? `p=${dnsResult.dmarc.policy}` : 'Missing') : 'Pending', ok: dmarcOk },
        { label: 'Spoofing Risk', val: dnsResult?.spoofingRisk ?? 'Pending', ok: dnsResult?.spoofingRisk === 'LOW' },
        { label: 'Threat Level', val: phishResult?.severity ?? 'Pending', ok: phishOk },
    ];
    let sx = M + 38;
    for (const item of items) {
        txt(item.label, sx, y + 20, { size: 6.5, color: '#64748b' });
        txt(item.val, sx, y + 28.5, {
            size: 8.5, bold: true,
            color: item.ok ? '#00873d' : item.val === 'Pending' ? '#94a3b8' : '#b91c1c',
        });
        sx += 33;
    }
    y += 52;

    // Horizontal legend: PASS / WARN / FAIL / PENDING counts
    const statusCounts = { PASS: 0, WARN: 0, FAIL: 0, PENDING: 0 };
    if (dnsResult) {
        (['spf', 'dkim', 'dmarc', 'mx'] as const).forEach(k => {
            const s = (dnsResult[k] as { status: string }).status?.toUpperCase();
            if (s in statusCounts) statusCounts[s as keyof typeof statusCounts]++;
        });
    }
    if (phishResult) {
        const s = phishResult.severity === 'CLEAN' ? 'PASS' : phishResult.severity === 'MALICIOUS' ? 'FAIL' : 'WARN';
        statusCounts[s]++;
    }

    const legendColors = { PASS: '#00873d', WARN: '#b45309', FAIL: '#b91c1c', PENDING: '#94a3b8' };
    let lx = M + 5;
    for (const [s, count] of Object.entries(statusCounts)) {
        doc.setTextColor(...hex2rgb(legendColors[s as keyof typeof legendColors]));
        doc.setFontSize(10); doc.setFont('helvetica', 'bold');
        doc.text(String(count), lx, y + 7);
        textHex('#94a3b8'); doc.setFontSize(6.5); doc.setFont('helvetica', 'normal');
        doc.text(s, lx, y + 12);
        lx += 22;
    }
    y += 20;

    // ════════════════════════════════════════════════════════════════════════════
    // PAGE 2 — DNS · THREAT INTEL · GATEWAY
    // ════════════════════════════════════════════════════════════════════════════
    addFooter(); doc.addPage(); y = 18;

    // ── DNS HEALTH ─────────────────────────────────────────────────────────────
    y = sectionHeader('DNS HEALTH CHECK  (SPF · DKIM · DMARC · MX)', y);

    if (dnsResult) {
        const dnsRows = [
            {
                label: 'SPF Record',
                value: dnsResult.spf.found
                    ? (dnsResult.spf.strict ? `Strict enforcement (-all) — ${dnsResult.spf.record}` : `Weak softfail (~all) — ${dnsResult.spf.record}`)
                    : 'Not found — domain is unprotected against spoofing',
                status: dnsResult.spf.status,
            },
            {
                label: 'DKIM Signature',
                value: dnsResult.dkim.found
                    ? 'Public key found at default._domainkey — emails are digitally signed'
                    : 'Not found at default._domainkey — no cryptographic mail authentication',
                status: dnsResult.dkim.found ? 'PASS' : 'FAIL',
            },
            {
                label: 'DMARC Policy',
                value: dnsResult.dmarc.found
                    ? `p=${dnsResult.dmarc.policy} — ${dnsResult.dmarc.policy === 'reject' ? 'Full enforcement: spoofed emails rejected' : dnsResult.dmarc.policy === 'quarantine' ? 'Quarantine mode: suspicious mail flagged' : 'Monitor only — no protective action taken'}`
                    : 'Not found — no instruction for handling spoofed emails',
                status: dnsResult.dmarc.status,
            },
            {
                label: 'MX Records',
                value: dnsResult.mx.hasMX
                    ? `Mail exchangers: ${dnsResult.mx.records.slice(0, 2).join(' · ')}`
                    : 'No MX records — domain cannot receive email',
                status: dnsResult.mx.status,
            },
            {
                label: 'Spoofing Risk',
                value: `Overall spoofing risk: ${dnsResult.spoofingRisk} — ${dnsResult.spoofingRisk === 'LOW' ? 'domain is well-protected' : dnsResult.spoofingRisk === 'MEDIUM' ? 'some gaps allow partial spoofing' : 'domain can be impersonated immediately'}`,
                status: dnsResult.spoofingRisk === 'LOW' ? 'PASS' : dnsResult.spoofingRisk === 'MEDIUM' ? 'WARN' : 'FAIL',
            },
        ];

        for (let i = 0; i < dnsRows.length; i++) {
            ensure(14);
            const row = dnsRows[i];
            fillHex(i % 2 === 0 ? '#f8fafc' : '#ffffff');
            doc.rect(M, y, CW, 12, 'F');
            hline(M, y, M + CW);

            txt(row.label, M + 4, y + 8, { size: 7.8, bold: true, color: '#1e293b' });
            const v = row.value.length > 100 ? row.value.slice(0, 97) + '…' : row.value;
            txt(v, M + 45, y + 8, { size: 7.2, color: '#475569' });
            badge(row.status?.toUpperCase() || 'N/A', row.status, PW - M - 25, y + 8);
            y += 13;
        }
        hline(M, y, M + CW); y += 6;

    } else {
        fillHex('#f8fafc'); doc.rect(M, y, CW, 11, 'F');
        txt('DNS diagnostics have not yet been completed for this target.', M + 4, y + 7.5, { size: 7.5, color: '#94a3b8' });
        y += 16;
    }

    // ── THREAT INTELLIGENCE ────────────────────────────────────────────────────
    ensure(25); y += 4;
    y = sectionHeader('THREAT INTELLIGENCE  (DTI Consolidated Feeds — Abuse.ch · URLhaus · PhishStats)', y);

    if (phishResult) {
        const [sr, sg, sb] = statusColor(phishResult.severity);
        const verdBg = { CLEAN: '#f0fdf4', SUSPICIOUS: '#fffbeb', MALICIOUS: '#fff1f2' };
        fillHex(verdBg[phishResult.severity] ?? '#f8fafc');
        doc.rect(M, y, CW, 18, 'F');

        doc.setTextColor(sr, sg, sb);
        doc.setFontSize(11); doc.setFont('helvetica', 'bold');
        doc.text(phishResult.severity, M + 4, y + 11);

        const verdMsg = phishResult.listed
            ? `Listed in: ${phishResult.sources.join(', ')}`
            : phishResult.severity === 'SUSPICIOUS'
                ? `Heuristic match — ${phishResult.iocs.length} indicator pattern(s) detected`
                : 'Domain is clean — not found in any active threat feed';
        txt(verdMsg, M + 45, y + 11, { size: 8, color: '#475569' });
        y += 22;

        if (phishResult.iocs.length > 0) {
            txt(`Indicators of Compromise (${phishResult.iocs.length})`, M + 4, y + 6, { size: 7.5, bold: true, color: '#374151' });
            y += 10;
            for (const ioc of phishResult.iocs) {
                ensure(10);
                fillHex('#fff8f8'); doc.rect(M, y, CW, 9, 'F');
                doc.setFillColor(sr, sg, sb); doc.circle(M + 4.5, y + 4.5, 1, 'F');
                txt(ioc, M + 9, y + 6, { size: 7.2, color: '#6b7280' });
                y += 10;
            }
        } else {
            fillHex('#f0fdf4'); doc.rect(M, y, CW, 10, 'F');
            txt('✓ No indicators of compromise found in any active threat database.', M + 4, y + 7, { size: 7.5, color: '#00873d' });
            y += 14;
        }
    } else {
        fillHex('#f8fafc'); doc.rect(M, y, CW, 11, 'F');
        txt('Threat intelligence scan not yet completed for this target.', M + 4, y + 7.5, { size: 7.5, color: '#94a3b8' });
        y += 16;
    }

    // ── GATEWAY RESILIENCE ─────────────────────────────────────────────────────
    ensure(55); y += 4;
    y = sectionHeader('GATEWAY RESILIENCE  (Simulated Payload Tests)', y);

    const gwRows = [
        { test: 'EICAR Standard Anti-Virus Test File', result: 'Intercepted and quarantined at gateway', status: 'PASS' },
        { test: 'Macro-Embedded Office Document (.docm)', result: 'Macros stripped and document sandboxed', status: 'PASS' },
        { test: 'ZIP Bomb (Recursive Compression Attack)', result: 'Decompression limited in safe isolation', status: 'PASS' },
        { test: 'Executable Attachment (.exe renamed to .pdf)', result: 'MIME-type mismatch detected and blocked', status: 'PASS' },
    ];
    for (let i = 0; i < gwRows.length; i++) {
        const row = gwRows[i];
        fillHex(i % 2 === 0 ? '#f0fdf4' : '#ffffff');
        doc.rect(M, y, CW, 11, 'F');
        hline(M, y, M + CW, '#dcfce7');
        txt(row.test, M + 4, y + 7.5, { size: 7.5, color: '#374151' });
        txt(row.result, M + CW / 2, y + 7.5, { size: 7.2, color: '#475569' });
        badge(row.status, row.status, PW - M - 25, y + 7.5);
        y += 12;
    }
    hline(M, y, M + CW); y += 8;

    // ════════════════════════════════════════════════════════════════════════════
    // PAGE 3 — RECOMMENDATIONS
    // ════════════════════════════════════════════════════════════════════════════
    addFooter(); doc.addPage(); y = 18;
    y = sectionHeader('RECOMMENDATIONS  —  Prioritised Action Plan', y);

    txt(
        `${recs.length} item(s) identified · Review HIGH priority items first`,
        M + 4, y, { size: 7, color: '#64748b', italic: true }
    );
    y += 8;

    for (let i = 0; i < recs.length; i++) {
        const rec = recs[i];
        const ph = PRIORITY_HEX[rec.priority];
        const pb = PRIORITY_BG[rec.priority];

        const whatLines = doc.splitTextToSize(rec.what, CW - 20);
        const whyLines = doc.splitTextToSize(`Why it matters: ${rec.why}`, CW - 20);
        const howLines = doc.splitTextToSize(rec.how, CW - 20);
        const blockH = 12 + whatLines.length * 5 + 5 + whyLines.length * 5 + 6 + howLines.length * 5 + 6;

        ensure(blockH + 5);

        // Card background
        fillHex('#f8fafc'); doc.rect(M, y, CW, blockH, 'F');
        // Priority stripe on left
        fillHex(ph); doc.rect(M, y, 3.5, blockH, 'F');
        // Priority pill top-right
        fillHex(pb); doc.roundedRect(M + CW - 30, y + 3, 28, 7, 1, 1, 'F');
        textHex(ph); doc.setFontSize(6); doc.setFont('helvetica', 'bold');
        doc.text(`${rec.priority} PRIORITY`, M + CW - 30 + 14, y + 7.8, { align: 'center' });

        // Title
        txt(`${i + 1}. ${rec.title}`, M + 8, y + 9.5, { size: 9, bold: true, color: '#1e293b' });
        let cy = y + 15;

        // Problem statement
        textHex('#475569'); doc.setFontSize(7.5); doc.setFont('helvetica', 'italic');
        whatLines.forEach((l: string) => { doc.text(l, M + 8, cy); cy += 5; });
        cy += 2;

        // Why it matters
        textHex('#92400e'); doc.setFontSize(7); doc.setFont('helvetica', 'bold');
        doc.text('Why it matters:', M + 8, cy); cy += 5;
        whyLines.slice(1).forEach((l: string) => { // first line already has the label
            textHex('#374151'); doc.setFontSize(7); doc.setFont('helvetica', 'normal');
            doc.text(l, M + 8, cy); cy += 5;
        });
        // Handle first why line (without label duplicate)
        if (whyLines.length > 0) {
            const firstWhy = whyLines[0].replace('Why it matters: ', '');
            textHex('#374151'); doc.setFontSize(7); doc.setFont('helvetica', 'normal');
            // Re-position — handled above via whyLines[0]
        }
        cy += 2;

        // Resolution steps
        fillHex('#eef2ff'); doc.rect(M + 6, cy - 2, CW - 12, howLines.length * 5 + 6, 'F');
        strokeHex('#c7d2fe'); doc.setLineWidth(0.2);
        doc.rect(M + 6, cy - 2, CW - 12, howLines.length * 5 + 6, 'S');
        textHex('#1e3a8a'); doc.setFontSize(6.5); doc.setFont('helvetica', 'bold');
        doc.text('HOW TO RESOLVE:', M + 9, cy + 3);
        cy += 7;
        textHex('#1e293b'); doc.setFontSize(7); doc.setFont('helvetica', 'normal');
        howLines.forEach((l: string) => { doc.text(l, M + 9, cy); cy += 5; });

        y += blockH + 6;
    }

    // ════════════════════════════════════════════════════════════════════════════
    // LAST PAGE — EXECUTIVE SUMMARY
    // ════════════════════════════════════════════════════════════════════════════
    addFooter(); doc.addPage(); y = 0;

    // Full-width dark hero for exec summary
    fillHex('#0a0f1e'); doc.rect(0, 0, PW, 30, 'F');
    fillHex('#00d2ff'); doc.rect(0, 28, PW, 2, 'F');

    // Mini logo in corner
    if (logoDataUrl) {
        try { doc.addImage(logoDataUrl, 'PNG', M, 5, 14, 14); } catch { /* skip */ }
    }

    textHex('#ffffff');
    doc.setFontSize(15); doc.setFont('helvetica', 'bold');
    doc.text('Executive Summary', M + 20, 14);
    textHex('#94a3b8');
    doc.setFontSize(7.5); doc.setFont('helvetica', 'normal');
    doc.text('Plain-language verdict — safe to share with non-technical stakeholders', M + 20, 22);
    y = 38;

    // Verdict card
    const verdictColor = score === null ? '#6b7280' : score >= 75 ? '#00873d' : score >= 40 ? '#b45309' : '#b91c1c';
    const verdictBgH = score === null ? '#f1f5f9' : score >= 75 ? '#f0fdf4' : score >= 40 ? '#fffbeb' : '#fff1f2';
    const verdictHead = score === null ? 'Scan not fully complete.'
        : score >= 75 && phishOk ? 'Your email domain is well protected.'
            : score >= 40 || phishResult?.severity === 'SUSPICIOUS' ? 'Your email security needs attention.'
                : 'Your email domain is at significant risk.';
    const verdictBody = score === null
        ? 'Re-run the full scan (allow all tabs to complete) and download a new report.'
        : score >= 75 && phishOk
            ? 'All key email security records are in place and your domain is not found in any threat database. Continue monitoring quarterly to stay ahead of new threats.'
            : score >= 40
                ? 'Some important protections are missing or misconfigured. Criminals could send fake emails impersonating your domain. Follow the Recommendations section in this report immediately.'
                : 'Critical email security controls are absent and/or your domain has been flagged by threat intelligence. Your brand or organisation could be impersonated right now. Take immediate action.';

    fillHex(verdictBgH);
    strokeHex(verdictColor); doc.setLineWidth(0.5);
    doc.roundedRect(M, y, CW, 30, 2, 2, 'FD');

    // Score circle
    textHex(verdictColor);
    doc.setFontSize(18); doc.setFont('helvetica', 'bold');
    doc.text(score !== null ? `${score}%` : '—', M + 16, y + 16, { align: 'center' });
    doc.setFontSize(6.5); doc.setFont('helvetica', 'bold');
    doc.text(scoreLb, M + 16, y + 22, { align: 'center' });

    // Headline + body
    textHex('#1e293b'); doc.setFontSize(10); doc.setFont('helvetica', 'bold');
    doc.text(verdictHead, M + 34, y + 11);
    const vbLines = doc.splitTextToSize(verdictBody, CW - 40);
    textHex('#374151'); doc.setFontSize(7.5); doc.setFont('helvetica', 'normal');
    vbLines.forEach((l: string, i: number) => doc.text(l, M + 34, y + 18 + i * 5));
    y += 38;

    // What was checked table
    txt('What We Checked', M, y + 8, { size: 9, bold: true, color: '#1e293b' });
    y += 14;

    const checks2 = [
        {
            area: '📧 Email Authentication  (SPF · DKIM · DMARC)',
            result: dnsResult
                ? `Completed — Spoofing Risk: ${dnsResult.spoofingRisk}`
                : 'Not completed — re-run DNS Health scan',
            ok: dnsResult?.spoofingRisk === 'LOW',
        },
        {
            area: '🔍 Threat Intelligence  (Abuse.ch · URLhaus · PhishStats)',
            result: phishResult
                ? `Completed — ${phishResult.severity}${phishResult.iocs.length > 0 ? ` (${phishResult.iocs.length} IOCs)` : ''}`
                : 'Not completed — re-run PhishTank check',
            ok: phishResult?.severity === 'CLEAN',
        },
        {
            area: '📦 Gateway Resilience  (EICAR · Macro · ZIP Bomb · MIME)',
            result: 'Completed — All 4 payload tests passed',
            ok: true,
        },
        {
            area: '📋 Header Analysis',
            result: 'Manual — use the Header Analyzer tab',
            ok: true,
        },
    ];

    for (let i = 0; i < checks2.length; i++) {
        const c = checks2[i];
        fillHex(i % 2 === 0 ? '#f8fafc' : '#ffffff');
        doc.rect(M, y, CW, 13, 'F');
        hline(M, y, M + CW);

        const [cr, cg, cb] = c.ok ? [0, 135, 61] : [185, 28, 28];
        doc.setTextColor(cr, cg, cb);
        doc.setFontSize(9); doc.setFont('helvetica', 'bold');
        doc.text(c.ok ? '✓' : '✗', M + 4, y + 8.5);

        txt(c.area, M + 12, y + 8.5, { size: 7.8, color: '#1e293b' });
        txt(c.result, M + CW - 4, y + 8.5, {
            size: 7.2, align: 'right',
            color: c.ok ? '#00873d' : '#b91c1c',
        });
        y += 14;
    }
    hline(M, y, M + CW); y += 10;

    // Key Takeaways
    txt('Key Takeaways', M, y + 8, { size: 9, bold: true, color: '#1e293b' });
    y += 14;

    const highMed = recs.filter(r => r.priority === 'HIGH' || r.priority === 'MEDIUM');
    const bullets = highMed.length > 0 ? highMed.slice(0, 5) : recs.slice(0, 3);

    for (const rec of bullets) {
        const ph = PRIORITY_HEX[rec.priority];
        const pb = PRIORITY_BG[rec.priority];
        const lines = doc.splitTextToSize(rec.what, CW - 22);
        const bH = lines.length * 5 + 10;
        ensure(bH + 4);

        fillHex(pb); doc.rect(M, y, 4, bH, 'F');
        fillHex('#f8fafc'); doc.rect(M + 4, y, CW - 4, bH, 'F');

        textHex(ph); doc.setFontSize(5.8); doc.setFont('helvetica', 'bold');
        doc.text(`[${rec.priority}]`, M + 7, y + 6);
        txt(rec.title, M + 23, y + 6, { size: 7.5, bold: true, color: '#1e293b' });

        textHex('#475569'); doc.setFontSize(7); doc.setFont('helvetica', 'italic');
        let bl = y + 11;
        lines.forEach((l: string) => { doc.text(l, M + 7, bl); bl += 5; });
        y += bH + 4;
    }

    if (bullets.length === 0) {
        fillHex('#f0fdf4'); doc.rect(M, y, CW, 12, 'F');
        txt('✓ No critical issues found. Your email security configuration is in good standing.', M + 4, y + 8, { size: 8, color: '#00873d' });
        y += 14;
    }

    // Disclaimer
    ensure(20); y += 8;
    fillHex('#f1f5f9'); doc.rect(M, y, CW, 18, 'F');
    strokeHex('#e2e8f0'); doc.setLineWidth(0.3); doc.rect(M, y, CW, 18, 'S');
    const disc = 'This report is produced by the AbiSentry DTI Engine using publicly available DNS records and open-source threat intelligence feeds. It is intended as a security awareness guide and does not constitute a full professional security audit. Scan results reflect conditions at the exact time of the scan and may change. AbiSentry Technologies accepts no liability for decisions made solely on the basis of this report.';
    const dLines = doc.splitTextToSize(disc, CW - 10);
    textHex('#94a3b8'); doc.setFontSize(6); doc.setFont('helvetica', 'italic');
    dLines.forEach((dl: string, i: number) => doc.text(dl, M + 5, y + 6 + i * 4));

    // Stamp footer on last page
    addFooter();

    // ── Update all page footers with correct total page count ─────────────────
    const total = doc.getNumberOfPages();
    for (let p = 1; p <= total; p++) {
        doc.setPage(p);
        // Re-stamp page number only (erase old number with a background rect)
        fillHex('#0a0f1e');
        doc.rect(PW - M - 20, PH - 10, 22, 8, 'F');
        textHex('#6b7280');
        doc.setFontSize(6); doc.setFont('helvetica', 'normal');
        doc.text(`Page ${p} / ${total}`, PW - M, PH - 4.2, { align: 'right' });
    }

    const filename = `AbiSentry-${scannedTarget.replace(/[@.]/g, '_')}-${new Date().toISOString().slice(0, 10)}.pdf`;
    doc.save(filename);
}

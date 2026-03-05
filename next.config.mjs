/** @type {import('next').NextConfig} */
const nextConfig = {
    // ── Turbopack (Next.js 16 default bundler) ────────────────────────────────
    // An explicit turbopack block is required when a webpack config is also
    // present; otherwise Next.js 16 throws a build error.
    // Turbopack automatically stubs Node built-ins (e.g. `fs`) for browser
    // bundles, so no resolveAlias entry is needed here.
    turbopack: {},

    // ── Webpack (non-Turbopack builds) ────────────────────────────────────────
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
            };
        }
        return config;
    },

    // ── Security headers ──────────────────────────────────────────────────────
    // Applied to every response. These are strong defaults for a security tool.
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    // Prevent clickjacking
                    { key: 'X-Frame-Options', value: 'DENY' },
                    // Block MIME sniffing
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    // Enforce HTTPS for 2 years, include subdomains
                    { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
                    // Disable browser features not needed by the app
                    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
                    // Referrer: send only origin on cross-origin requests
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                    // Remove "Powered by Next.js" server fingerprinting
                    { key: 'X-Powered-By', value: '' },
                    // Content Security Policy – tightened for a security-tool context
                    {
                        key: 'Content-Security-Policy',
                        value: [
                            "default-src 'self'",
                            // Next.js inline scripts + hydration + Paystack SDK
                            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.paystack.co",
                            // Google Fonts
                            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
                            "font-src 'self' https://fonts.gstatic.com",
                            // External APIs + Paystack endpoints
                            "connect-src 'self' https://cloudflare-dns.com https://urlhaus-api.abuse.ch https://bazaar.abuse.ch https://phishstats.info https://api.paystack.co https://checkout.paystack.com",
                            // Content + Paystack Assets
                            "img-src 'self' data: blob: https://checkout.paystack.com",
                            // Paystack Checkout window
                            "frame-src 'self' https://checkout.paystack.com",
                            "frame-ancestors 'none'",
                            "base-uri 'self'",
                            "form-action 'self'",
                        ].join('; '),
                    },
                ],
            },
            // Cache the static threat-feed file for 5 minutes – stale-while-revalidate
            {
                source: '/abisentry_threats.json',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=300, stale-while-revalidate=600' },
                ],
            },
        ];
    },
};

export default nextConfig;

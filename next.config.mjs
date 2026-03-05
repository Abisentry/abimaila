/** @type {import('next').NextConfig} */
const nextConfig = {
    // Next.js 16 enables Turbopack by default. An explicit `turbopack` block
    // is REQUIRED when a `webpack` config is also present, otherwise the build
    // errors. `turbopack: {}` is enough — Turbopack automatically stubs out
    // Node built-ins (fs, path, crypto, etc.) for browser bundles, so there
    // is nothing to configure here.
    turbopack: {},

    // Used only for non-Turbopack builds (e.g. `next build --webpack`).
    // jsPDF references the Node `fs` module; stub it out in the browser.
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
            };
        }
        return config;
    },
};

export default nextConfig;

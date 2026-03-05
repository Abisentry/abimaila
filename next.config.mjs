<<<<<<< HEAD
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
=======
/** @type {import('next').NextConfig} */
const nextConfig = {
    // Turbopack config (Next.js 16+ default bundler).
    // An explicit turbopack block is required when a webpack config is also
    // present; otherwise Next.js 16 throws a build error.
    turbopack: {
        resolveAlias: {
            // jsPDF references the Node `fs` module; stub it out in the browser.
            fs: { browser: false },
        },
    },

    // Kept for compatibility with non-Turbopack builds / older Next.js versions.
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // jsPDF uses a virtual `fs` that doesn't exist in browsers
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
            };
        }
        return config;
    },
};

export default nextConfig;
>>>>>>> 7c1d8f8eb442c6b91620095e0dc35ac0d60efeec

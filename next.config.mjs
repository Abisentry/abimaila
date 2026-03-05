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

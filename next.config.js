/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ ESLint xatolariga to‘xtamasin
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ TypeScript xatolariga to‘xtamasin
  },
};

module.exports = nextConfig;

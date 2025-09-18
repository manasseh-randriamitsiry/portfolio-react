/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    remotePatterns: [],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Ensure static files are properly handled
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: '/:path*',
      },
    ]
  },
};

module.exports = nextConfig;

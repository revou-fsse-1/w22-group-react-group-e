/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://w17-wareg.onrender.com/:path*', // Proxy target URL
      },
    ];
  },
};
module.exports = nextConfig;

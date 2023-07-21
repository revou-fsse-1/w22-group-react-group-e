/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'images.unsplash.com',
      'www.masakapahariini.com',
      'sweetrip.id',
      'awsimages.detik.net.id',
      'global-uploads.webflow.com',
      'cdn.sanity.io',
    ],
    async rewrites() {
      return [
        {
          source: '/:path*',
          destination: 'https://w17-wareg.onrender.com/:path*',
        },
        {
          source: '/:path*',
          destination: 'https://cdn.sanity.io/:path*',
        },
      ];
    },
  },
};
//module.exports = {
//async rewrites() {
//return [
//{
//source: '/:path*',
//destination: 'https://w17-wareg.onrender.com/:path*',
//},
//];
//},
//};
module.exports = nextConfig;

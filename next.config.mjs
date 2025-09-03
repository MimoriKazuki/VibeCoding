/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'blogger.googleusercontent.com',
      },
    ],
  },
  // Performance optimizations
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
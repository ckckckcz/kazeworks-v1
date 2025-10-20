/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
      {
        protocol: 'https',
        hostname: 'cdn.brandfetch.io',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'seaborn.pydata.org',
      },
      {
        protocol: 'https',
        hostname: 'images.plot.ly',
      },
      {
        protocol: 'https',
        hostname: 'cdn.worldvectorlogo.com',
      }
    ],
  },
};

export default nextConfig;

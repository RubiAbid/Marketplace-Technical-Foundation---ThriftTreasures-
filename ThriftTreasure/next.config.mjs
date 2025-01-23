/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // Allow images from this domain
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com', // Allow images from this domain
      },
    ],
  },
  // Optional: Enable static export if you need
  // output: 'export', // Use this for static exports, remove it if it's not required

  // Optional: Enabling React Strict Mode for better debugging
  reactStrictMode: true,
};

export default nextConfig;

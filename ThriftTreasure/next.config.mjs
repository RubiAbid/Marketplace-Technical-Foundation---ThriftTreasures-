/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io', 'encrypted-tbn0.gstatic.com'], // Allow images from these domains
  },
  // Optional: Enable static export if you need
  // output: 'export', // Use this for static exports, remove it if it's not required
  
  // Optional: Enabling React Strict Mode for better debugging
  reactStrictMode: true,
};

export default nextConfig;

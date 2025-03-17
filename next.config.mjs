/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable source maps in production builds
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: false,
};

export default nextConfig;

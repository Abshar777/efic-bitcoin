import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  eslint: {
    ignoreDuringBuilds: true, // This will ignore all ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true,
  },


  /* config options here */
};

export default nextConfig;

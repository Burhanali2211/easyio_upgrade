import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    unoptimized: true, // Required for static export
  },
  outputFileTracingRoot: path.resolve(__dirname, '../../'),
  // Uncomment the line below ONLY if you need static HTML export for Hostinger shared hosting
  // WARNING: This will break API routes, admin dashboard, contact forms, and all server features!
  // output: 'export',
};

export default nextConfig;
// Orchids restart: 1766864830909

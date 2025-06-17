import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Pozwoli zbudować projekt nawet gdy są błędy ESLint
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
      remotePatterns: [
        { hostname: 'loyal-dragon-783.convex.cloud', protocol: "https"},
      ],
    },
  };

export default nextConfig;

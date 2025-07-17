import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgcentauro-a.akamaihd.net",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;

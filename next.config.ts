import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "assets.coingecko.com",
            }, {
                protocol: "https",
                hostname: "coin-images.coingecko.com",
            },
        ]
     ,
  domains: ['images.cryptocompare.com'],

    }
};

export default nextConfig;

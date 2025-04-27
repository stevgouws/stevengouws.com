import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.mp3$/i,
      type: "asset/resource",
      generator: {
        filename: "static/sounds/[name].[hash][ext]",
      },
    });
    return config;
  },
};

export default nextConfig;

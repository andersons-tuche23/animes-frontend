import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**media.kitsu.app",
        port: "",
        search: "",
      },
    ],
  },
};

export default nextConfig;

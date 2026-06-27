import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      { pathname: "/team/**" },
      { pathname: "/images/**" },
      { pathname: "/slides/**" },
      { pathname: "/mobileslides/**" },
      { pathname: "/logo.png" },
    ],
  },
};

export default nextConfig;

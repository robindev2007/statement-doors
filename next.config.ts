import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ["10.10.13.24"],
  logging: {
    browserToTerminal: false,
  },
};

export default nextConfig;

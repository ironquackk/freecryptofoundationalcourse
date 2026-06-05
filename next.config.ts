import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  allowedDevOrigins: ["0.0.0.0", "localhost", "127.0.0.1", "21.0.8.178"],
};

export default nextConfig;

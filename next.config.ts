import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SSG (Static Site Generation)
  output: "export",
  images: {
    // `next export` doesn't support the built-in Image Optimization.
    // Keep local `/public/images/*` working by emitting plain <img> tags.
    unoptimized: true,
  },
};

export default nextConfig;

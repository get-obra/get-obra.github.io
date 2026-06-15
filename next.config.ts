import type { NextConfig } from "next";

// Static export so the site can ship to GitHub Pages on the get-obra.com
// custom domain, exactly like the current landing. No server runtime.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;

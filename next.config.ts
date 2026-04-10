import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for GitHub Pages — exports fully static HTML/CSS/JS
  output: "export",

  // GitHub Pages serves from root for username.github.io repos — no basePath needed
  trailingSlash: true,

  // next/image optimisation is server-side; disable it for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

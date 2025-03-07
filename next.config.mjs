import mdx from "@next/mdx";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

// Ensure compatibility with Next.js export mode
const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true, // Required for static export with images
  },
  experimental: {
    esmExternals: false, // Ensures compatibility with CJS plugins
  },
};

export default withMDX(nextConfig);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Required for GitHub Pages
  basePath: '/ecopolmex',
  assetPrefix: '/ecopolmex/',
  trailingSlash: true, // Add this to ensure proper path resolution
}

module.exports = nextConfig
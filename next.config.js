/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js'
  },
};

module.exports = nextConfig;

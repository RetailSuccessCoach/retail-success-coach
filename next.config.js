const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'], // 👈 Includes .mdx as valid pages
  async redirects() {
    return [
      {
        source: '/second-opinion-channel-audit',
        destination: '/second-opinion-audit',
        permanent: true,
      },
      {
        source: '/digital-channel-performance-audit',
        destination: '/second-opinion-audit',
        permanent: true,
      },
    ];
  },
};

// 👇 Wrap and export the final config with MDX support
module.exports = withMDX(nextConfig);

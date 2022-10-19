/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["upload.wikimedia.org", "flagcdn.com"],
    unoptimized: true,
  },
  basePath: "/rest-countries-api",
  assetPrefix: "/rest-countries-api",
};

module.exports = nextConfig;

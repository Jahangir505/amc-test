/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["dev.amcolubricants.com"],
  },
  // Add your new configurations here
  poweredByHeader: false,
  reactStrictMode: false,
  compress: true,
};

module.exports = nextConfig;

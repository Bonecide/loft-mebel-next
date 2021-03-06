/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
      images: {
        allowFutureImage: true,
      }
  },
  reactStrictMode: true,
  swcMinify: true,
  // Rest of the config
};
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: process.env.API_URL,
};

module.exports = nextConfig;

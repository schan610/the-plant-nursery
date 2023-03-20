/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["images.unsplash.com"],
  },

  env: {
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    SENDGRID_USER: process.env.SENDGRID_USER,
    SENDGRID_PASSWORD: process.env.SENDGRID_PASSWORD,
  },
};

module.exports = nextConfig;

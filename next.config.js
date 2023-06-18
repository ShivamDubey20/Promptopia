/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  }
}

const path = require('path');
const dotenv = require('dotenv');

// dotenv.config({ path: 'C:/Users/SHIVAM/Desktop/Projects/Promptopia/share_prompts/utils/.env' });
dotenv.config({ path: path.join(__dirname, '/env/.env') });
  
  module.exports = nextConfig
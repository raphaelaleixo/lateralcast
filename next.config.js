/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_DATOCMS_API_TOKEN: process.env.REACT_APP_DATOCMS_API_TOKEN,
  }
}

module.exports = nextConfig

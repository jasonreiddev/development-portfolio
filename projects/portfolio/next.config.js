/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withTM = require('next-transpile-modules')(['component-library']);
module.exports = withTM(nextConfig);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  pwa: {
    dest: 'public',
  },
};

const withTM = require('next-transpile-modules')(['component-library', 'helpers']);
const withPWA = require('next-pwa');
module.exports = withTM(withPWA(nextConfig));

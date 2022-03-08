/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['picsum.photos'],
  },
  experimental: {
    // https://github.com/vercel/next.js/issues/31552
    swcFileReading: false,
  },
};

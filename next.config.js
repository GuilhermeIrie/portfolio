// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM()

const withImages = require('next-images')


// module.exports = nextConfig
module.exports = withImages({
  // esModule: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    disableStaticImages: true,
    //  domains: ['assets.example'],
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
})

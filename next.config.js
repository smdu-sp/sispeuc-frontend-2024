/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: {
        external: true,
      },
    }
}

module.exports = nextConfig

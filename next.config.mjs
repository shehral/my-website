/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['placeholder.com'],
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/ai', destination: '/library', permanent: true },
      { source: '/ai/interpretability', destination: '/library', permanent: true },
      { source: '/ai/reading', destination: '/library', permanent: true },
      { source: '/ai/resources', destination: '/library', permanent: true },
      { source: '/rational-riffs', destination: '/aria', permanent: true },
    ]
  },
}

export default nextConfig

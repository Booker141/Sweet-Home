
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'Permissions-Policy',
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  }
]


module.exports = (phase, { defaultConfig }) => {
  /**
     * @type {import('next').NextConfig}
     */

  const nextConfig = {
    /* config options here */

    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'pbs.twimg.com'

        },
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com'
        }
      ]
    },
    swcMinify: false,
    async headers() {
      return [
          {
            source: '/:path*',
            headers: securityHeaders,
          },
        ];
    },   
  }

  return nextConfig
}


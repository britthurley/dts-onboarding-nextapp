const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '0',
  },
  {
    key: 'Content-Security-Policy',
    value:
      "default-src 'self'; base-uri 'self'; frame-ancestors 'self'; form-action 'self'; object-src 'none'; script-src-elem 'self'; script-src 'unsafe-eval'; connect-src 'self'; style-src 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com",
  },
]

module.exports = {
  reactStrictMode: true,
  //
  // i18n setup
  //
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    localDetection: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

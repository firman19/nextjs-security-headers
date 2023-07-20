/** @type {import('next').NextConfig} */
const nextConfig = {};

const CSP = `
default-src 'self';
script-src 'self' 'unsafe-inline' 'unsafe-eval'
  *.facebook.com *.jsdeliver.net;
style-src 'self' 'unsafe-inline' 
  *.jsdeliver.net;
img-src 'self'
  *.facebook.com;
connect-src 'self'
  wss://*.hotjar.com
font-src 'self'
  data: https://*.gstatic.com;
`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: CSP.replace(/\s/g," ").trim(),
  },
  {
    key: "Permissions-Policy",
    value: "geolocation=(),midi=(),sync-xhr=(),microphone=(),camera=(),magnetometer=(),gyroscope=(),fullscreen=(self),payment=()",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
];

module.exports = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

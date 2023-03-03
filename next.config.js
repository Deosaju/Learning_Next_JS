/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  reactStrictMode : true,
  redirects : async () => {
    return [
      {
        source: '/contact',
        destination: '/',
        permanent: true,
      },
    ]
  },

}
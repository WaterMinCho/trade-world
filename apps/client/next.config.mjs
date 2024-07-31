/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/server/:path*",
        destination: "http://localhost:3001/api/:path*", // Nest.js 서버 주소
      },
    ];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.rebrickable.com",
        pathname: "/**", // Optional: Allows any path under the hostname
      },
    ],
  },
  experimental: {
    runtime: "nodejs", // Ensure API routes run as a serverless function, not Edge
  },
};

export default nextConfig;

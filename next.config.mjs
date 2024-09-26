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
};

export default nextConfig;

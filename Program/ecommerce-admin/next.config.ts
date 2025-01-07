import type { NextConfig } from "next";



const nextConfig = {
  
  images: {
    // domains: ["res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "", // Opsional, jika tidak ada port tertentu
        pathname: "/**", // Match semua path
      },
    ],
  },
};


export default nextConfig;


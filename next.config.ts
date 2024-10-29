import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,  // 防止 Next.js 图像优化功能报错
  },
};

export default nextConfig;

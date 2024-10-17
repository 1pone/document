import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'webresource.c-ctrip.com',
      port: '',
    }]
  }
};

export default withMDX(config);

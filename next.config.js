/** @type {import('next').NextConfig} */
const nextConfig = {  images: {
    domains: [
      's3.ap-south-1.amazonaws.com',
      'www.google.com',
      'upload.wikimedia.org',
      'ir-feed.s3.ap-south-1.amazonaws.com',
      
    ],
  },
};

module.exports = nextConfig

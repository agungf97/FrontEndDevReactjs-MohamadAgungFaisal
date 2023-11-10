/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
     remotePatterns: [
      {
        hostname: 'media-cdn.tripadvisor.com'
      },
      {
        hostname: "avatars.githubusercontent.com"
      }
     ] 
    }
  }
  
  module.exports = nextConfig
  
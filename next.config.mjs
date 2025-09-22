/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "thrangra.sirv.com",
      "cdn.sanity.io"
    ]
  },
  // webpack: (config) => {
  //   config.resolve.fallback = {
  //     ...config.resolve.fallback,
  //     fs: false,
  //   };
  //   return config;
  // }
};

export default nextConfig;

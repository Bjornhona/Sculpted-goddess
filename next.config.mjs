/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./app', './app/*'],
    prependData: `
      @import './public/styles/colors';
      @import './public/styles/fontSizes';
      @import './public/styles/breakPoints';
    `
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

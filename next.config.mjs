/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./app'],
    prependData: `@import './public/styles/constants.module.scss';`
  },
};

export default nextConfig;

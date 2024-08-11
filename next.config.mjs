/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./app', './app/*'],
    prependData: `
      @import './public/styles/constants.module.scss';
      @import './public/styles/sharedContent.module.scss';`
  },
};

export default nextConfig;

import withSvgr from 'next-plugin-svgr';

/** @type {import('next').NextConfig} */
const nextConfig = withSvgr({
    reactStrictMode: true,
});

export default nextConfig;

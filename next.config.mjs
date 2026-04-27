/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // Change this to matches your repository name for GitHub Pages sub-directory hosting
    basePath: '/Design_Department',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

export default nextConfig;

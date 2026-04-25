/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    reactCompiler: true,
    allowedDevOrigins: ["*"],
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/Design_Department',
};

module.exports = nextConfig;

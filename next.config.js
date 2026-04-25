/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    reactCompiler: true,
    allowedDevOrigins: ["*"],
    output: 'export',
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;

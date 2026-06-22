/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // Since you are hosting everything inside the 'out' folder on Hostinger,
    // we set this to '/out' so the site knows to look there for its styles in production.
    basePath: process.env.NODE_ENV === 'production' ? '/out' : '',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    allowedDevOrigins: ['172.25.112.1'],
};

export default nextConfig;

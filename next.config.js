/** @type {import('next').NextConfig} */
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
    reactCompiler: true,
    // Explicitly allow local and network origins
    allowedDevOrigins: [
        "localhost:3000",
        "127.0.0.1:3000",
        "192.168.1.7",
        "192.168.1.7:3000",
        "*.localhost.run",
        "*.ngrok-free.app",
    ],
    output: 'export',
    images: {
        unoptimized: true,
    },
    // Only apply basePath when building on GitHub Actions
    basePath: isGitHubActions ? '/Design_Department' : '',
};

module.exports = nextConfig;

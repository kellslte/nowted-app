/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/dashboard',
                destination: '/sign-in',
                permanent: true,
            },
        ];
    }
};

export default nextConfig;

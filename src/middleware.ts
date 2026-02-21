import { withAuth } from "next-auth/middleware";

export default withAuth(
    function middleware() {
        // Automatically redirects if not authed, logic handled by callbacks.authorized
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token
        },
        pages: {
            signIn: '/intranet'
        },
        secret: process.env.NEXTAUTH_SECRET || "1234567890abcdef1234567890abcdef"
    }
);

export const config = {
    matcher: ['/intranet/dashboard/:path*'], // Only protect dashboard paths
};

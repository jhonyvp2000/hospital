import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/intranet',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }: any) {
            const isLoggedIn = !!auth?.user;

            const isProtectingIntranet = nextUrl.pathname.startsWith('/intranet/') && nextUrl.pathname !== '/intranet';

            if (isProtectingIntranet) {
                if (isLoggedIn) return true;
                return false;
            } else if (isLoggedIn && nextUrl.pathname === '/intranet') {
                return Response.redirect(new URL('/intranet/dashboard', nextUrl));
            }
            return true;
        },
    },
    providers: [],
} satisfies NextAuthConfig;

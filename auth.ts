import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { db } from "@/db";
import { employees } from "@/db/schema";
import { eq } from "drizzle-orm";
import { authConfig } from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                dni: { label: "DNI", type: "text" },
                password: { label: "Contraseña", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.dni || !credentials?.password) {
                    return null;
                }

                try {
                    // Fetch user from db
                    const user = await db.select().from(employees).where(eq(employees.dni, credentials.dni as string)).limit(1);

                    if (user.length === 0) {
                        return null; // No user found
                    }

                    const passwordsMatch = await bcrypt.compare(credentials.password as string, user[0].passwordHash);

                    if (!passwordsMatch) {
                        return null; // Password incorrect
                    }

                    // Return user object for session
                    return {
                        id: user[0].id,
                        name: user[0].name,
                        role: user[0].role,
                        dni: user[0].dni
                    };

                } catch (error) {
                    console.error("Auth error:", error);
                    return null;
                }
            }
        })
    ],
    callbacks: {
        ...authConfig.callbacks,
        async jwt({ token, user }) {
            // Initial sign in
            if (user) {
                token.role = (user as any).role;
                token.dni = (user as any).dni;
            }
            return token;
        },
        async session({ session, token }) {
            // Expose role to the client session
            if (token && session.user) {
                (session.user as any).role = token.role;
                (session.user as any).dni = token.dni;
            }
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    }
});

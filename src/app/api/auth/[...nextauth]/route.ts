import NextAuth from "next-auth";
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials";

import * as argon2 from "argon2";
import { Prisma } from "@prisma/client";
import { prisma } from '@/app/lib/db';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { pages } from "next/dist/build/templates/app-page";

export const authOptions = {
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "text", placeholder: "john@example.com" },
                password: { label: "Password", type: "text" },
            },
            authorize: async (credentials) => {
                // GET PRISMA DB
                const email = credentials?.email;
                const password = credentials?.password;
                if (!email || !password) {
                    return null;
                }
                try {
                    const user = await prisma.user.findUnique({
                        where: { email: email },
                        select: {
                            id: true,
                            email: true,
                            name: true,
                            password: true,
                            image: true,
                        },
                    });

                    if (user && user.password && await argon2.verify(user.password, password)) {
                        return user;
                    } else {
                        return null;
                    }
                } catch (e) {
                    if (e instanceof Prisma.PrismaClientKnownRequestError) {
                        // Handle known Prisma errors
                        console.error("Prisma error:", e.message);
                    } else {
                        // Handle other errors
                        console.error("Unexpected error:", e);
                    }
                    return null;
                }
            },
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID ?? "",
            clientSecret: process.env.GOOGLE_SECRET ?? "",
        }),
    ],
    adapter: PrismaAdapter(prisma),
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async signIn({ account, profile }: { account: any, profile?: any }) {
            if (account.provider === "google") {
                return profile.email_verified;
            }
            if (account.provider === "github") {
                // Check email verification somehow
                return true;
            }
            if (account.provider === "credentials") {
                // check for account blocked
                // TODO: Add backend for email verification
                //return user.email_verified
                return true
            }
        },
    }
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
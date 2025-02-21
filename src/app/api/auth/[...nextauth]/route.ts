import NextAuth from "next-auth";
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials";

import * as argon2 from "argon2";
import { prisma } from '@/app/lib/db';
import { PrismaAdapter } from '@auth/prisma-adapter';

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
                    return { message: "Invalid Email/Password" };
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

                    if (user && await argon2.verify(user.password, password)) {
                        return user;
                    } else {
                        return { message: "Wrong Credentials" };
                    }
                } catch (e) {
                    throw new Error(e);
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
    callbacks: {
        async signIn({ user, account, profile }) {
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
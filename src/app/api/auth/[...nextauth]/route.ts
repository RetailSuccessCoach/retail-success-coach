// src/app/api/auth/[...nextauth]/route.ts
import type { Session } from "next-auth";
import type { JWT } from "next-auth/jwt";
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import type { DefaultSession } from 'next-auth';

console.log("GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID);

declare module 'next-auth' {
  interface Session extends DefaultSession {
    accessToken?: string;
    refreshToken?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string;
    refreshToken?: string;
  }
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: 'openid email profile https://www.googleapis.com/auth/calendar',
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/signin', // ✅ points to the actual frontend page
  },
    callbacks: {
      async jwt({ token, account }) {
        if (account) {
          token.accessToken = account.access_token;
          token.refreshToken = account.refresh_token;
          console.log("🔑 Token acquired:", token); // 👈 Logs access + refresh tokens
        }
        return token;
      },
      async session({ session, token }) {
        if (token?.accessToken) session.accessToken = token.accessToken as string;
        if (token?.refreshToken) session.refreshToken = token.refreshToken as string;
        return session;
      },
    },
});

export { handler as GET, handler as POST };
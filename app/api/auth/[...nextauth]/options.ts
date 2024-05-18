import { Credentials } from "@/lib/types";
import { Axios } from "@/requests";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [CredentialsProvider({
    name: 'credentials',
    credentials: {
        email: {
            label: "Email",
            type: "email",
            placeholder: "Enter your email",
        },
        password: {
            label: "Password",
            type: "password",
            placeholder: "Enter your password",
        }
    },
    async authorize(credentials) {
        const { email, password } = credentials as Credentials;

        const { data } = await Axios.post('/auth/sign-in', {
            email,
            password,
        });

        if(data.success) return data.data;

        return null;
    }
  })],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) return { ...token, ...user };
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      session.authorization = token.authorization;
      return session;
    },
  },
};
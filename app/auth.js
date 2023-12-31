import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "./lib/utils";
import bcrypt from "bcrypt";
import { User } from "./lib/models";
import { authConfig } from "./authconfig";

const login = async (credentials) => {
  try {
    connectToDB(); //connect to mongodb
    const user = await User.findOne({ username: credentials.username });
    if (!user) throw new Error("Wrong credentials");
    const isCorrectPassword = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isCorrectPassword) throw new Error("Wrong credentials");
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null; //login process will fail
        }
      },
    }),
  ],
  callbacks: {
    // taking data from user and passing it to token
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.img = user.img;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.img = token.img;
      }
      return session;
    },
  },
});

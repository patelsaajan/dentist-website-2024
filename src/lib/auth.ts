import { NextAuthOptions, getServerSession } from "next-auth";
import { CredentialsProvider } from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { redirect } from "next/navigation";

export const authConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
};

export async function logInIsRequiredServer() {
  const session = await getServerSession(authConfig);
  if (!session) return redirect("/");
}

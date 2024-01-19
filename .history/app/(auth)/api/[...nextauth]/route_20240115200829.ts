import bcrypt from "bcrypt"
import NextAuth, {AuthOptions} from "next-auth"
import { CredentialsProvider } from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/lib/prismadb"

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {label: "email", type: "text"},
        password: {label: "password", type: "password"}
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid Password")
        }
      }
    })
  ]
}
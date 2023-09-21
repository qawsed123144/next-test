import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/prisma/client"
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'
import { NextAuthOptions } from "next-auth"


const authOptions:NextAuthOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }),
  
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "email", placeholder: "電子郵件" },
          password: { label: "Password", type: "password",placeholder: "密碼" }
        },
        async authorize(credentials, req){
          if(!credentials?.email || !credentials.password) return null
  
          const exist_user =await prisma.user.findUnique({where:{email:credentials.email}})
          if(!exist_user || !exist_user.hashedPass) return null
  
          const passMatch = await bcrypt.compare(credentials.password, exist_user.hashedPass)
          return passMatch? exist_user : null
        }
      })
    ],
    adapter: PrismaAdapter(prisma),
    session: {
      strategy: 'jwt',
    },
  }

export default authOptions
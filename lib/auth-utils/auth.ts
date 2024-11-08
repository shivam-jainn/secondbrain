import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import {PrismaAdapter} from '@auth/prisma-adapter' 
import { Adapter } from "next-auth/adapters";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const scopes = ['identify', 'email']



export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    secret : process.env.NEXTAUTH_SECRET!,
    session: {
      strategy: 'jwt',
      maxAge : 30*24*60*60,
    },
    providers: [
        GoogleProvider({          
          clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
      GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      })
    ],
    pages:{
      signIn:'/login',
      newUser:'/firsttime'
    },
    callbacks: {
      async jwt({ token,user }) {
        const dbUser = await prisma.user.findUnique({
          where: {
            email: token.email!,
          },
        });
        
        return token;

       
      },
      async session({session,token}){
        return session;
      }
    }
  };
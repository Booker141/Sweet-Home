import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials"
import TwitterProvider from "next-auth/providers/twitter";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../lib/MongoDB.js"
import MongoDB from "../lib/DBconnection.js"
import User from "../../../models/User"
import bcrypt from "bcrypt"

MongoDB();

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      TwitterProvider({
        clientId: process.env.TWITTER_ID,
        clientSecret: process.env.TWITTER_SECRET,
        version: "2.0", // opt-in to Twitter OAuth 2.0
      }),
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {

          const email = credentials.email;
          const password = credentials.password;
          const user = await User.findOneByEmail(email);

          if(user){

              const isMatch = await bcrypt.compare(password, user.password);

              if (isMatch) {

                return user;
              }

              throw new Error("Contraseña incorrecta");

          }else{

            throw new Error("No se ha encontrado ningún usuario");
            
          }
        
          
        }
      })
      // ...add more providers here
    ],
    secret: process.env.JWT_SECRET,
    database: process.env.MONGODB_URI,
    pages: {
      signIn: '/signIn',
      signOut: '/signOut',
      error: '/_error.js', // Error code passed in query string as ?error=
      verifyRequest: '/auth/verify-request', // (used for check email message)
      newUser: '/home' // New users will be directed here on first sign in (leave the property out if not of interest)
    },
    adapter: MongoDBAdapter(clientPromise),
  }

  export default NextAuth(authOptions)
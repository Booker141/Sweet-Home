import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials"
import TwitterProvider from "next-auth/providers/twitter";
import { connectionDB } from "../lib/MongoDB";
import bcrypt from "bcrypt"


export const authOptions = {

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
        id: "credentials",
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "email", placeholder: "jsmith@hotmail.com" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {

          const client = await connectionDB;
          const db = await client.db();
          const email = credentials.email;
          const password = credentials.password;
          const user = await db.collection('users').findOne({email: email});

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
  }

  export default NextAuth(authOptions)
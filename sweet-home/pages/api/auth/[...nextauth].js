import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials"
import TwitterProvider from "next-auth/providers/twitter";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../lib/MongoDB.js";
import bcrypt from "bcrypt"


export default NextAuth({

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
        async authorize(credentials) {
          
          let regEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

          const {email,password} = credentials;
          
          if(!regEmail.test(email)){
            
            throw new Error("Formato Email incorrecto");

          }

          const client = await clientPromise;
          const db = await client.db();
          const user = await db.collection('users').findOne({email: email});

          if(user){

              await bcrypt.compare(password, user.password, (err, data) => {
                //if error than throw error
                if (err) throw Error("Contraseña incorrecta")

                if (data) {
                    return user
                } else {
                    throw new Error("Datos incorrectos")
                }

            })

              

          }else{

            throw new Error("No se ha encontrado ningún usuario");

            
          }
        
          
        }
      })
    ],
    database: process.env.MONGODB_URI,
    pages: {
      signIn: '/auth/signIn',
      error: '/auth/error', // Error code passed in query string as ?error=
      verifyRequest: '/auth/verify-request', // (used for check email message)
      newUser: '/home' // New users will be directed here on first sign in (leave the property out if not of interest)
    },
    adapter: MongoDBAdapter(clientPromise,{
      databaseName: 'SweetHomeDB',
    }),
    secret: process.env.NEXT_PUBLIC_SECRET,
    session: {
      jwt: true,
    },
    jwt: {
      secret: process.env.NEXT_PUBLIC_SECRET,
    },
    callbacks: {
      async jwt(token, user) {
        if (user) {
          token.id = user._id;
        }
        return token;
      },
      async session(session, token) {
        session.user.id = token.id;
        return session;
      },
    },
  })

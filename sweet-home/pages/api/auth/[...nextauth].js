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
        async authorize(credentials) {

              const {email, password} = credentials;

              console.log(password);
              const client = await clientPromise;
              const db = await client.db();

              if(!email){

                throw new Error("Introduzca el email.");
              

              }

              if(!password){    

                  throw new Error("Introduzca la contraseña.");
                  
              }

              
                const user = await db.collection('users').findOne({email: email});

                console.log(user.password);

              if(!user){

                throw new Error("Usuario no encontrado.");

              } 

              if(user.status == "blocked"){

                  throw new Error("Usuario bloqueado.");
                      
              }

              const isValid = await bcrypt.compare(password, user.password);

              if(!isValid){

                   throw new Error("Contraseña incorrecta.");
                      
              }

 
              return user;


    
              }        

      })
    ],
    database: process.env.MONGODB_URI,
    pages: {
      signIn: '/auth/signIn',
      error: '/_error', // Error code passed in query string as ?error=
      newUser: '/home' // New users will be directed here on first sign in (leave the property out if not of interest)
    },
    adapter: MongoDBAdapter(clientPromise,{
      databaseName: 'SweetHomeDB',
    }),
    secret: process.env.NEXT_PUBLIC_SECRET,
    session: {
      jwt: "true",
      maxAge: 30 * 24 * 60 * 60, 
    },
    callbacks: {
    
      async jwt(token, user, account) {
        if (user) {
          token.user = {
            _id: user._id,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            image: user.image,
            status: user.status,
            role: user.role,
          }
        }

        if (account?.accessToken) {
          token.accessToken = account.accessToken;
        }
  
        return token;
      },
      async session(session, token) {

        if (token)
        {
            session.user = token.user;
        }

        return session;


      },
    },
   
  })

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
            try{
            const {email, password} = credentials;
            
            const client = await clientPromise;
            const db = await client.db();

            if(!password){    
                throw new Error("Introduzca la contraseña.");
            }

            if(!email){

              throw new Error("Introduzca el email.");

            }else{

              const user = await db.collection('users').findOne({email: email});

        
              if(user){

                  if(user.status == "blocked"){
                    throw new Error("Usuario bloqueado.");
                  }

                  if(!user.password){
                    throw new Error("Introduzca la contraseña.");
                  }
    
                  await bcrypt.compare(password, user.password, (err, data) => {
                    //if error than throw error
                    if (err) throw Error("Contraseña incorrecta.");

                    if (data) {

                        return user;

                    } else {

                        throw new Error("Datos incorrectos.");

                    }

                })

              }else{

                throw new Error("No se ha encontrado ningún usuario.");

                
              }
            }
          }catch(err){
            throw new Error("Ha habido un error con sus credenciales.");
          }
         
          
        }
      })
    ],
    database: process.env.MONGODB_URI,
    pages: {
      signIn: '/auth/signIn',
      error: '/_error', // Error code passed in query string as ?error=
      verifyRequest: '/auth/verify-request', // (used for check email message)
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
    jwt: {
      secret: process.env.NEXT_PUBLIC_SECRET,
    },
    callbacks: {
    
      async jwt(token, user, account) {
        if (user) {
          token.id = user._id;
        }
        if (account?.accessToken) {
          token.accessToken = account.accessToken;
        }
  
        return token;
      },
      async session(session, token) {

        if (token?.accessToken) {
          session.accessToken = token.accessToken;
        }
        
        const client = await clientPromise;
        const db = await client.db();
        
        const user = await db.collection('users').findOne({
          email: session.user.email,
        });

        if (user) {
          const sessionToken = generateSessionToken();
          const sessionMaxAge = 30 * 24 * 60 * 60; 
          const sessionExpiry = fromDate(sessionMaxAge);

          await adapter.createSession({
            id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            email: user.email,
            password: user.password,
            phone: user.phone,
            gender: user.gender,
            birthdate: user.birthdate,
            image: user.image,
            role: user.role,
            status: user.status,
            sessionToken: sessionToken,
            userId: user.id,
            expires: sessionExpiry,
          });
    
        }

        

      },
    },
   
  })

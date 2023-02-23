import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import TwitterProvider from 'next-auth/providers/twitter'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import { ObjectId } from 'mongodb'
import clientPromise from '../lib/MongoDB.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const authOptions = {

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
      version: '2.0'
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      async authorize (credentials) {
        const { email, password } = credentials
        const client = await clientPromise
        const db = await client.db()

        if (!email && !password) {
          throw new Error('Introduzca las credenciales.')
        }

        if (!email) {
          throw new Error('Introduzca el email.')
        }

        if (!password) {
          throw new Error('Introduzca la contraseña.')
        }

        const user = await db.collection('users').findOne({ email })

        if (!user) {
          throw new Error('Usuario no encontrado.')
        }

        if (user.status == 'blocked') {
          throw new Error('Usuario bloqueado.')
        }

        const isValid = await bcrypt.compare(password, user.password)

        if (!isValid) {
          throw new Error('Contraseña incorrecta.')
        }

        return user
      }

    })
  ],
  database: process.env.MONGODB_URI,
  pages: {
    signIn: '/auth/signIn',
    error: '/_error'
  },
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: 'SweetHomeDB'
  }),
  jwt: {
    secret: process.env.NEXTAUTH_SECRET
  },
  session: {
    strategy: 'jwt',
    maxAge: 3600 * 24,
    updateAge: 3600 * 24
  },
  jwt: {
    async encode ({ token, secret }) {
      const tokenJWT = {
        id: token.id,
        state: token.state,
        email: token.email,
        username: token.username,
        status: token.status,
        role: token.role,
        biography: token.biography,
        followers: token.followers,
        following: token.following,
        isCaretaker: token.isCaretaker
      }

      const codedToken = jwt.sign(tokenJWT, secret)

      return codedToken
    },
    async decode ({ token, secret }) {
      const decodedToken = jwt.verify(token, secret)

      return decodedToken
    }
  },
  callbacks: {

    async signIn ({ user, account, profile, credentials }) {
      const client = await clientPromise
      const db = await client.db()

      const accountExist = await db.collection('accounts').findOne({ providerAccountId: account.providerAccountId })
      const accountExist2 = await db.collection('accounts').findOne({ userId: user._id })
      const userExist = await db.collection('users').findOne({ _id: user._id })
      const userStatus = await db.collection('userStatus').findOne({ name: 'activo' })
      const userRole = await db.collection('userRole').findOne({ name: 'usuario' })

      console.log(user)
      console.log(account)

      const randomId = new ObjectId()
      const maxAge = 3600 * 24
      const expiryDate = new Date(Date.now() + (maxAge * 3000))

      const token = Math.random().toString(36).substring(2, 120)
      const token2 = Math.random().toString(36).substring(2, 120)

      if (account.provider === 'credentials') {
        if (!accountExist2) {
          const accountInserted = await db.collection('accounts').insertOne({
            provider: account.provider,
            type: account.type,
            access_token: token,
            expires_at: expiryDate,
            scope: 'user.read',
            token_type: 'Bearer',
            refresh_token: token2,
            providerAccountId: account.providerAccountId,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            image: user.image,
            createdAt: new Date(),
            userId: user._id
          })

          await db.collection('users').updateOne({ _id: user._id }, { $set: { accountId: accountInserted._id } })
        } else {
          await db.collection('accounts').updateOne({ userId: user._id }, { $set: { expires_at: expiryDate * 24 } })
          await db.collection('users').updateOne({ _id: user._id }, { $set: { accountId: accountExist2._id } })
        }
      }

      if (account.provider === 'google') {
        if (!accountExist) {
          const accountInserted = await db.collection('accounts').insertOne({
            provider: account.provider,
            type: account.type,
            access_token: account.access_token,
            expires_at: account.expires_at,
            scope: account.scope,
            token_type: account.token_type,
            refresh_token: account.id_token,
            providerAccountId: account.providerAccountId,
            email: user.email,
            firstname: '',
            lastname: '',
            username: user.name,
            image: user.image,
            createdAt: new Date(),
            userId: randomId
          })

          await db.collection('users').updateOne({ _id: user._id }, { $set: { accountId: accountInserted._id } })

          if (!userExist) {
            await db.collection('users').insertOne({
              _id: randomId,
              email: user.email,
              firstname: '',
              lastname: '',
              username: user.name,
              password: '',
              phone: '',
              gender: '',
              birthdate: new Date('<2012-12-12>'),
              image: user.image,
              status: userStatus,
              role: userRole,
              createdAt: new Date(),
              accountId: account._id,
              followers: [],
              following: [],
              likes: [],
              saves: [],
              pets: [],
              isCaretaker: false,
            })
          } else {
            if (accountExist.userId == userExist._id) {
              await db.collection('users').updateOne({ _id: userExist._id }, { $set: { accountId: accountExist._id } })
            }
          }
        } else {
          await db.collection('accounts').updateOne({ _id: accountExist.id }, { $set: { expires_at: account.expires_at * 2 } })
          await db.collection('users').updateOne({ _id: user._id }, { $set: { accountId: accountExist._id } })
        }
      }

      if (account.provider === 'twitter') {
        if (!accountExist) {
          const accountInserted = await db.collection('accounts').updateOne({ _id: account.id }, {
            $set: {
              provider: account.provider,
              type: account.type,
              access_token: account.access_token,
              expires_at: account.expires_at,
              scope: account.scope,
              token_type: account.token_type,
              refresh_token: account.refresh_token,
              providerAccountId: account.providerAccountId,
              email: user.email,
              firstname: '',
              lastname: '',
              username: user.name,
              image: user.image,
              createdAt: new Date(),
              userId: randomId
            }
          })

          await db.collection('users').updateOne({ _id: user._id }, { $set: { accountId: accountInserted._id } })

          if (!userExist) {
            await db.collection('users').insertOne({
              _id: randomId,
              email: user.email,
              firstname: '',
              lastname: '',
              username: user.name,
              password: '',
              phone: '',
              gender: '',
              birthdate: new Date('<2012-12-12>'),
              image: user.image,
              status: userStatus,
              role: userRole,
              createdAt: new Date(),
              accountId: account._id,
              followers: [],
              following: [],
              likes: [],
              saves: [],
              pets: [],
              isCaretaker: false
            })
          } else {
            if (accountExist.userId == userExist._id) {
              await db.collection('users').updateOne({ _id: userExist._id }, { $set: { accountId: accountExist._id } })
            }
          }
        } else {
          await db.collection('accounts').updateOne({ _id: account._id }, {
            $set: {
              provider: account.provider,
              type: account.type,
              access_token: account.access_token,
              expires_at: account.expires_at,
              scope: account.scope,
              token_type: account.token_type,
              refresh_token: account.refresh_token,
              providerAccountId: account.providerAccountId,
              email: user.email,
              firstname: user.firstname,
              lastname: user.lastname,
              username: user.name,
              image: user.image,
              status: user.status,
              role: user.role,
              createdAt: user.createdAt,
              userId: user._id
            }
          })
        }

        await db.collection('users').updateOne({ _id: user._id }, { $set: { accountId: accountExist._id } })
      }

      return true
    },
    async jwt ({ token, user }) {
      console.log(user)

      if (user) {
        token = {
          ...token,
          id: user._id,
          isCaretaker: user.isCaretaker,
          email: user.email,
          username: user.username,
          biography: user.biography,
          followers: user.followers,
          following: user.following,
          role: user.role.name
        }
      }

      console.log(token)

      return Promise.resolve(token)
    },
    async session ({ session, token }) {
      console.log(token)

      if (token) {
        session = {
          ...session,
          user: {
            id: token.id,
            email: token.email,
            username: token.username,
            biography: token.biography,
            followers: token.followers,
            following: token.following,
            isCaretaker: token.isCaretaker,
            role: token.role
          }
        }
      }

      console.log(session)

      return Promise.resolve(session)
    }
  }

}

export default NextAuth(authOptions)

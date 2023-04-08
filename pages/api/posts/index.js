import clientPromise from '../lib/MongoDB'
import { ObjectId } from 'mongodb'

export default async function handler (req, res) {

  const client = await clientPromise
  const db = await client.db()
  const body = req.body
  const user = await db.collection('users').findOne({ username: body.username })

  if (req.method == 'GET') {

    const data = await db.collection('posts').find({}).limit(50).toArray()

    const posts = JSON.parse(JSON.stringify(data))

    res.status(200).json(posts)

  }

  if (req.method === 'POST') {

    const post = await db.collection('posts').insertOne({ location: body.location, description: body.description, comments: [], likes: [], saves: [], userId: user._id, username: body.username, createdAt: new Date(), image: body.image })
    await db.collection('users').updateOne({_id: user._id}, {push: {posts: new ObjectId(post._id)}})

    res.status(201).json({ message: 'Creada con éxito.' })

  }
}

import clientPromise from '../lib/MongoDB'
import { ObjectId } from 'mongodb'
export default async function handler (req, res) {
  const client = await clientPromise
  const db = await client.db()
  const body = req.body

  const user = await db.collection('users').findOne({ username: body.username })

  if (req.method === 'GET') {
    const data = await db.collection('comments').find({}).limit(50).toArray()

    const comments = JSON.parse(JSON.stringify(data))

    res.status(200).json(comments)
  }

  if (req.method === 'POST') {
    const data = await db.collection('comments').insertOne({ description: body.description, username: body.username, userId: user._id, postId: ObjectId(body.postId) })

    const comment = JSON.parse(JSON.stringify(data))

    console.log(comment)

    await db.collection('posts').updateOne({ _id: ObjectId(body.postId) }, { $push: { comments: ObjectId(comment.insertedId) } })
  }
}

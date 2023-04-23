import clientPromise from '../../lib/MongoDB'
import {ObjectId} from 'mongodb'

export default async function handler (req, res) {

  const client = await clientPromise
  const db = await client.db()
  const body = req.body


  if (req.method === 'GET') {

   await db.collection('posts').updateOne({_id: ObjectId(body.postId)}, { $push: {saves: ObjectId(body.userId)}})
   await db.collection('users').updateOne({_id: ObjectId(body.userId)}, { $push: {saves: ObjectId(body.postId)}})

    res.status(201).json({ message: 'Creado con éxito.' })
  }



}
import clientPromise from '../lib/MongoDB'
import {ObjectId} from 'mongodb'

export default async function handler (req, res) {

  const client = await clientPromise
  const db = await client.db()
  const body = req.body


  if (req.method === 'POST') {

     await db.collection('posts').updateOne({_id: ObjectId(body.postId)}, { $push: {likes: ObjectId(body.userId)}})

    res.status(201).json({ message: 'Se ha añadido el like con éxito.' })
  }

    if (req.method === 'DELETE') {

    
    await db.collection('posts').updateOne({_id: ObjectId(body.postId)}, { $pull: {likes: ObjectId(body.userId)}})

    res.status(201).json({ message: 'Eliminado el like con éxito.' })


    }

}

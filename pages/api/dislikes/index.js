
import clientPromise from '../lib/MongoDB'
import {ObjectId} from 'mongodb'

export const config = {
  api: {
    responseLimit: false,
  },
}

export default async function handler (req, res) {

  res.setHeader('Cache-Control', 's-maxage=10'); 

  const client = await clientPromise
  const db = await client.db()
  const body = req.body


  if (req.method === 'PUT') {

    
    await db.collection('posts').updateOne({_id: ObjectId(body.postId)}, { $pull: {likes: ObjectId(body.userId)}})

    res.status(201).json({ message: 'Eliminado el like con éxito.' })


    }

}




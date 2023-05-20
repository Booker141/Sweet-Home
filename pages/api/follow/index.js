import clientPromise from '../lib/MongoDB'
import {ObjectId} from 'mongodb'

export default async function handler (req, res) {

  const client = await clientPromise
  const db = await client.db()
  const body = req.body


  if (req.method === 'PUT') {

   await db.collection('users').updateOne({_id: ObjectId(body.idFrom)}, { $push: {following: ObjectId(body.idTo)}})
   await db.collection('users').updateOne({_id: ObjectId(body.idTo)}, { $push: {followers: ObjectId(body.idFrom)}})

    res.status(201).json({ message: 'Eliminado con éxito.' })
  }

}
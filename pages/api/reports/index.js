import clientPromise from '../lib/MongoDB'
import {ObjectId} from 'mongodb'

export default async function handler (req, res) {

  const client = await clientPromise
  const db = await client.db()
  const body = req.body
  const user = await db.collection('users').findOne({ username: body.username})


  if(req.method === 'GET'){
    const data = await db.collection('reports').find({}).toArray()
    res.status(200).json(data)
  }
  if (req.method === 'POST') {

    await db.collection('reports').insertOne({userId: new ObjectId(user._id), username: body.username, reason: body.report, image: body.image, createdAt: new Date()})
    res.status(201).json({ message: 'Informe creado con éxito.' })

  }



}
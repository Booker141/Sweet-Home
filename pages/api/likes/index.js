import clientPromise from '../lib/MongoDB'
import {ObjectId} from 'mongodb'

export default async function handler (req, res) {

  const client = await clientPromise
  const db = await client.db()
  const body = req.body
  const id = new ObjectId()

  const postOwner = await db.collection('posts').findOne({_id: ObjectId(body.postId)})
  const typeNotification = await db.collection('typeNotification').findOne({name: "me gusta"})


  if (req.method === 'PUT') {

     await db.collection('posts').updateOne({_id: ObjectId(body.postId)}, { $push: {likes: ObjectId(body.userId)}})

     await db.collection('notifications').insertOne({_id: id, sender: ObjectId(body.userId), receiver: postOwner.userId, type: typeNotification, 
      description: `A @${body.username} le ha gustado una publicación`, isChecked: false, createdAt: new Date()})

    res.status(201).json({ message: 'Se ha añadido el like con éxito.' })
  }


}

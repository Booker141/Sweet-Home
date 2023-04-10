import clientPromise from '../../lib/MongoDB'
import { ObjectId } from 'mongodb'

export default async function handler (req, res) {

  const client = await clientPromise
  const db = await client.db()
  const body = req.body

  if (req.method == 'GET') {

    const data = await db.collection('pets').find({ ownerUsername: req.query.username }).limit(50).toArray()

    res.status(200).json(data)
  }

  if (req.method == 'POST') {

    const data = await db.collection('pets').insertOne({animal: body.animal, breed: body.breed, name: body.name, weight: parseFloat(body.weight), image: body.image, ownerId: ObjectId(body.userId), ownerUsername: body.username, birthdate: new Date(body.birthdate)})

    const pet = JSON.parse(JSON.stringify(data))

    res.status(201).json(pet)
  }
}

import clientPromise from '../lib/MongoDB'
import { ObjectId } from 'mongodb'

export default async function handler (req, res) {

  const client = await clientPromise
  const db = await client.db()
  const body = req.body
  const id = ObjectId('63b954df9f24e55518d5bde1')

  if (req.method === 'GET') {

    const users = await db.collection('users').find({}).toArray()

    const filteredUsers = users.filter(user => user.complaints.length >= 5 && user.status.name === "activo");

    const unblockedUsers = JSON.parse(JSON.stringify(filteredUsers))

    res.status(200).json(unblockedUsers)

  }

  if (req.method === 'PUT') {

    await db.collection('users').updateOne({_id: ObjectId(body._id)}, {$set: {status: {_id: id, name: "activo"}}})

    res.status(200).json(JSON.parse(JSON.stringify(filteredUsers)))

  }


}

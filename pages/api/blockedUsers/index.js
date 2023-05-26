import clientPromise from '../lib/MongoDB'
import { ObjectId } from 'mongodb'


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
  const id = ObjectId('63b954df9f24e55518d5bde2')

  if (req.method === 'GET') {

    const users = await db.collection('users').find({"status.name": "bloqueado"}).limit(50).toArray()

    const blockedUsers = JSON.parse(JSON.stringify(users))

    res.status(200).json(blockedUsers)

  }

  if (req.method === 'PUT') {


    await db.collection('users').updateOne({_id: ObjectId(body._id)}, {$set: {status: {_id: id, name: "bloqueado"}}})

    res.status(200).json(JSON.parse(JSON.stringify(filteredUsers)))

  }


}

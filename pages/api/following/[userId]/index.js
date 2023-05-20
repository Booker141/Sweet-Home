import clientPromise from '../../lib/MongoDB'
import { ObjectId } from 'mongodb'

export default async function handler (req, res) {

  const client = await clientPromise
  const db = await client.db()
  const id = new ObjectId(req.query.userId)

  if (req.method == 'GET') {

    const data = await db.collection('users').findOne({ _id: id })

    const user = JSON.parse(JSON.stringify(data))

    res.status(200).json(user)

  }

}

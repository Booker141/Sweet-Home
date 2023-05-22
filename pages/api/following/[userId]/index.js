import clientPromise from '../../lib/MongoDB'
import { ObjectId } from 'mongodb'

export const config = {
  api: {
    responseLimit: false,
  },
}

export default async function handler (req, res) {

  const client = await clientPromise
  const db = await client.db()
  const id = new ObjectId(req.query.userId)

  console.log(req.query.userId)

  if (req.method == 'GET') {

    const data = await db.collection('users').findOne({ _id: ObjectId(req.query.userId) })

    const user = JSON.parse(JSON.stringify(data))

    console.log(user)

    res.status(200).json(user)

  }

}

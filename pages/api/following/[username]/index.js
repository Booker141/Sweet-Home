import clientPromise from '../../lib/MongoDB'
import { ObjectId } from 'mongodb'

export default async function handler (req, res) {

  const client = await clientPromise
  const db = await client.db()
  const body = req.body

  if (req.method == 'GET') {

    const data = await db.collection('users').findOne({ username: req.query.username })
    const following = data.following

    res.status(200).json(following)

  }

}

import clientPromise from '../../lib/MongoDB'
import { ObjectId } from 'mongodb'

export default async function handler (req, res) {
  const client = await clientPromise
  const db = await client.db()
  const {thread} = req.query;
  const threadFound = await db.collection('threads').findOne({title: thread})

  if (req.method === 'GET') {
    const data = await db.collection('attendances').find({threadId: ObjectId(threadFound._id)}).limit(50).toArray()

    const attendances = JSON.parse(JSON.stringify(data))

    res.status(200).json(attendances)
  }
}

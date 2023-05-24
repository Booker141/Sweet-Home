import clientPromise from '../lib/MongoDB'
import { ObjectId } from 'mongodb'

export const config = {
  api: {
    responseLimit: false,
  },
}
export default async function handler (req, res) {

  const client = await clientPromise
  const db = await client.db()
  const body = req.body

  if (req.method == 'GET') {

    const res = await db.collection('messages').find({chatId: ObjectId(body.chatId)}).sort({ createdAt: -1 }).toArray()
    const messages = JSON.parse(JSON.stringify(res))

    res.status(200).json(messages)
  }


}

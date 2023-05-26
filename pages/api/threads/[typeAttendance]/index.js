import clientPromise from '../../lib/MongoDB'
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
  const {typeAttendance} = req.query
  const body = req.body
  const typeAttendanceThread = await db.collection('typeAttendance').findOne({ name: typeAttendance })
  const user = await db.collection('users').findOne({ username: body.username })

  if (req.method === 'GET') {
    const data = await db.collection('threads').find({ typeAttendanceId: ObjectId(typeAttendanceThread._id) }).limit(50).toArray()

    const threads = JSON.parse(JSON.stringify(data))
    res.status(200).json(threads)
  }

  if (req.method === 'POST') {
    const data = await db.collection('threads').insertOne({
      title: body.title,
      typeAttendanceId: ObjectId(typeAttendanceThread._id),
      createdAt: new Date(),
      attendances: [],
      userId: ObjectId(user._id),
      username: user.username,
    })

    const thread = JSON.parse(JSON.stringify(data))
    res.status(200).json(thread)
  }

  if (req.method === 'DELETE') {

    const data = await db.collection('threads').deleteOne({ _id: ObjectId(body.id) })

    const thread = JSON.parse(JSON.stringify(data))
    res.status(200).json(thread)
  }
}

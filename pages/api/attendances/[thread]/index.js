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

  if(req.method === 'POST'){

    const {userId, location, description, image, username, typeAttendanceId, threadId} = req.body;

    const data = await db.collection('attendances').insertOne({username, typeAttendanceId, threadId})

    res.status(200).json(data)

  }


  if (req.method === 'DELETE') {

    const { id } = req.body

    const data = await db.collection('attendances').deleteOne({ _id: ObjectId(id) })

    res.status(200).json(data)

  }
}

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
  const {thread} = req.query;
  const body = req.body;
  const user = await db.collection('users').findOne({username: body.username})
  const threadFound = await db.collection('threads').findOne({title: thread})
  const idAttendance = new ObjectId()


  if (req.method === 'GET') {

    const data = await db.collection('attendances').find({threadId: ObjectId(threadFound._id)}).limit(50).toArray()

    const attendances = JSON.parse(JSON.stringify(data))

    res.status(200).json(attendances)

  }

  if(req.method === 'POST'){

    const {location, description, image, animal, breed, username} = req.body;

    const data = await db.collection('attendances').insertOne({_id: idAttendance, location, description, animal, breed, image, username, userId: ObjectId(user._id) , threadId: ObjectId(threadFound._id), createdAt: new Date()})
    await db.collection('threads').updateOne({_id: threadFound._id},{$push: {attendances: idAttendance}})
    res.status(200).json(data)

  }


  if (req.method === 'DELETE') {

    const { id } = req.body


    await db.collection('attendances').deleteOne({ _id: ObjectId(id) })
    await db.collection('threads').updateOne({_id: threadFound._id}, {$pull: {attendances: ObjectId(id)}})

    res.status(200).json({message: 'Cuidado eliminado correctamente.'})
  }
}

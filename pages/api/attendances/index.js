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



  if(req.method === 'POST'){

    const {lastAttendance} = req.body;

    const data = await db.collection('attendances').findOne({_id: ObjectId(lastAttendance)})

    const attendance = JSON.parse(JSON.stringify(data))

    res.status(200).json(attendance)

  }



}

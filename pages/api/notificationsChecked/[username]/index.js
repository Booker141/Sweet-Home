import clientPromise from '../../lib/MongoDB'
import {ObjectId} from 'mongodb'

export const config = {
  api: {
    responseLimit: false,
  },
}

export default async function handler (req, res) {

  const client = await clientPromise
  const db = await client.db()

  const user = await db.collection('users').findOne({username: req.query.username})

  console.log(user)

  if (req.method === 'GET') {
    
    const data = await db.collection('notifications').find({receiver: user._id, isChecked: false}).limit(50).toArray()

    console.log(data)

    const notifications = JSON.parse(JSON.stringify(data))

    console.log(notifications)

    res.status(201).json(notifications)
  }


}

import clientPromise from '../../lib/MongoDB'
import {ObjectId} from 'mongodb'

export const config = {
  api: {
    responseLimit: false,
  },
}

export default async function handler (req, res) {

  res.setHeader('Cache-Control', 's-maxage=10'); 

  const client = await clientPromise
  const db = await client.db()
  const id = new ObjectId(req.query.userId)


  if (req.method === 'GET') {

    const data = await db.collection('users').findOne({_id: id})


    const users = JSON.parse(JSON.stringify(data))

    res.status(200).json(users)
  }

 
}

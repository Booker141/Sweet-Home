import clientPromise from '../../lib/MongoDB'

export default async function handler (req, res) {

  const client = await clientPromise
  const db = await client.db()
  const body = req.body


  if (req.method === 'GET') {

      const data = await db.collection('complaints').find({usernameTo: req.query.username}).toArray()
  
  
      res.status(200).json(data)
  
  }

 

}

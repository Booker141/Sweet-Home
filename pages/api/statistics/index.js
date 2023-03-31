import clientPromise from '../lib/MongoDB'

export default async function handler (req, res) {

  const client = await clientPromise
  const db = await client.db()
  const body = req.body
  const users = await db.collection('users').find({}).limit(50).toArray()
  const posts = await db.collection('posts').find({}).toArray()


  if (req.method === 'GET') {

    
    const usersStatistics = JSON.parse(JSON.stringify(users))

    

    res.status(200).json(usersStatistics)
    
  }

}
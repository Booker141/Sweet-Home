import clientPromise from '../lib/MongoDB'

export default async function handler (req, res) {

  const client = await clientPromise
  const db = await client.db()
  const body = req.body
  const users = await db.collection('users').find({}).limit(50).toArray()
  const posts = await db.collection('posts').find({}).toArray()
  const comments = await db.collection('comments').find({}).toArray()
  const complaints = await db.collection('complaints').find({}).toArray()
  const threads = await db.collection('threads').find({}).toArray()

  let statistics = {

    users: users.length,
    posts: posts.length,
    comments: comments.length,
    complaints: complaints.length,
    threads: threads.length

  }

  if (req.method === 'GET') {

    res.status(200).json(statistics)
    
  }

}
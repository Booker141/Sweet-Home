import clientPromise from '../../../lib/MongoDB'
import { ObjectId } from 'mongodb'

export const config = {
  api: {
    responseLimit: false,
  },
}

export default async function handler (req, res) {

  const client = await clientPromise
  const db = await client.db()
  const id = new ObjectId(req.query.postId)
  const post = await db.collection('posts').findOne({ _id: id })


  if (req.method === 'DELETE') {

    await db.collection('users').updateOne({username: post.username},{$pull: {posts: id}})
    await db.collection('posts').deleteOne({ _id: id })
    
    res.status(200).json({ message: 'Publicación eliminada correctamente' })
  }
}

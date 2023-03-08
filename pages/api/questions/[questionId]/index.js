import clientPromise from '../../lib/MongoDB'
import { ObjectId } from 'mongodb'

export default async function handler (req, res) {

  const client = await clientPromise
  const db = await client.db()
  const id = new ObjectId(req.query.questionId)


  if (req.method === 'DELETE') {

    await db.collection('questions').deleteOne({_id: id})
    res.status(200).json({ message: 'Noticia eliminada correctamente' })

  }
}
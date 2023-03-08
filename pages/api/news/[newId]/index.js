import clientPromise from '../../lib/MongoDB'
import {ObjectId} from "mongodb"

export default async function handler (req, res) {
  
  const client = await clientPromise
  const db = await client.db()
  const id = new ObjectId(req.query.newId)

  if (req.method === 'GET') {
    
    const data = await db.collection('news').findOne({ id: parseInt(req.query.newId) })

    const news = JSON.parse(JSON.stringify(data))

    res.status(200).json(news)
  }

  if (req.method === 'DELETE') {

    await db.collection('news').deleteOne({ _id: id })

    res.status(200).json({ message: 'Noticia eliminada correctamente' })

  }
}

import clientPromise from '../../lib/MongoDB'
import {ObjectId} from "mongodb"

export const config = {
  api: {
    responseLimit: false,
  },
}
export default async function handler (req, res) {

  res.setHeader('Cache-Control', 's-maxage=10'); 
  
  const client = await clientPromise
  const db = await client.db()
  const id = new ObjectId(req.query.newId)

  if (req.method === 'GET') {
    
    const data = await db.collection('news').findOne({_id: id})

    const news = JSON.parse(JSON.stringify(data))

    res.status(200).json(news)
  }

  if (req.method === 'DELETE') {

    await db.collection('news').deleteOne({ _id: id })

    res.status(200).json({ message: 'Noticia eliminada correctamente' })

  }

  if (req.method === 'PUT') {

    const { title, date, introduction, body, conclusion, author} = req.body

    await db.collection('news').updateOne({ _id: id }, { $set: { title, date, introduction, body, conclusion, author } })

    res.status(200).json({ message: 'Noticia actualizada correctamente' })
  }
}

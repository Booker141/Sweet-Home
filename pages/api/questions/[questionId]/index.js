import clientPromise from '../../lib/MongoDB'
import { ObjectId } from 'mongodb'

export const config = {
  api: {
    responseLimit: false,
  },
}

export default async function handler (req, res) {

  const client = await clientPromise
  const db = await client.db()
  const id = new ObjectId(req.query.questionId)


  if (req.method === 'DELETE') {

    await db.collection('questions').deleteOne({_id: id})
    res.status(200).json({ message: 'Noticia eliminada correctamente' })

  }

  if(req.method === 'GET'){

    const data = await db.collection('questions').findOne({_id: id})

    const question = JSON.parse(JSON.stringify(data))

    res.status(200).json(question)
  }

  if (req.method === 'PUT') {

    const { title, answer } = req.body

    await db.collection('questions').updateOne({_id: id}, {$set: {title: title, answer: answer}})
    res.status(200).json({ message: 'Pregunta editada correctamente' })

  }
}
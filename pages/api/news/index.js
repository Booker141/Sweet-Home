import clientPromise from '../lib/MongoDB'

export const config = {
  api: {
    responseLimit: false,
  },
}
export default async function handler (req, res) {
  
  const client = await clientPromise
  const db = await client.db()
  const body = req.body
  const data = await db.collection('news').find({}).limit(50).toArray()


  

  if (req.method === 'GET') {
    
    const news = JSON.parse(JSON.stringify(data))

    res.status(200).json(news)

  }

  if (req.method === 'POST') {

    await db.collection('news').insertOne({title: body.title, date: new Date(body.date), introduction: body.introduction, body: body.body, conclusion: body.conclusion, author: body.author})
    res.status(201).json({ message: 'Creada con éxito.' })

  }

  
}

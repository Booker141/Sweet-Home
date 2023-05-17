import clientPromise from '../lib/MongoDB'
import { ObjectId } from 'mongodb'

export const config = {
  api: {
      bodyParser: {
          sizeLimit: '20mb' 
      }
  }
}
export default async function handler (req, res) {

  const client = await clientPromise
  const db = await client.db()
  const body = req.body
  const user = await db.collection('users').findOne({ username: body.username })
  const id = new ObjectId()
  let typePost


  if (req.method == 'GET') {

    const data = await db.collection('posts').find({}).limit(50).toArray()

    const posts = JSON.parse(JSON.stringify(data))

    res.status(200).json(posts)

  }

  if (req.method === 'POST') {

    if(body.type === 'Normal' || body.type === '') {

      typePost = await db.collection('typePost').findOne({name: "Normal"})
  
    }
    if(body.type === 'Adopción') {

      typePost = await db.collection('typePost').findOne({name: "Adopción"})

    }

    if(body.type === 'Fauna silvestre'){

      typePost = await db.collection('typePost').findOne({name: "Silvestre"})

    }

    if(body.type === 'Animal perdido'){

      typePost = await db.collection('typePost').findOne({name: "Perdido"})

    }

    if(body.type === 'Animal abandonado'){

      typePost = await db.collection('typePost').findOne({name: "Abandonado"})

    }


    await db.collection('posts').insertOne({ _id: id, location: body.location, description: body.description, image: body.image, comments: [], likes: [], saves: [], userId: user._id, username: body.username, type: typePost, createdAt: new Date()})
    const post = await db.collection('posts').findOne({_id: id})
    await db.collection('users').updateOne({_id: user._id}, {$push: {posts: post._id}})

    res.status(201).json({ message: 'Creada con éxito.' })

  }
}

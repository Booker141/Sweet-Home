import clientPromise from '../../lib/MongoDB'
import {ObjectId} from 'mongodb'

export default async function handler (req, res) {

  const client = await clientPromise
  const db = await client.db()
  const body = req.body
  const id = ObjectId(body.id)


  if (req.method === 'GET') {

      const data = await db.collection('complaints').find({usernameFrom: req.query.username}).toArray()

      const complaints = JSON.parse(JSON.stringify(data))
  
      res.status(200).json(complaints)
  
  }

  if(req.method === 'DELETE'){

    await db.collection('users').updateOne({username: req.query.username}, {$pull: {complaints: id}})
    await db.collection('complaints').deleteOne({ _id: id })
    
    res.status(200).json({ message: 'Denuncia eliminada correctamente' })
  }

}

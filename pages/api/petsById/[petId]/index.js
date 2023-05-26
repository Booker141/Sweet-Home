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
  const id = new ObjectId(req.query.petId)

  if (req.method === 'GET') {
    
    const data = await db.collection('pets').findOne({_id: id})

    const pets = JSON.parse(JSON.stringify(data))

    res.status(200).json(pets)
  }

  
  if (req.method === 'PUT') {

    const { animal, breed, name, weight, image, ownerId, ownerUsername, birthdate} = req.body

    await db.collection('pets').updateOne({ _id: id }, { $set: { animal, breed, name, weight, image, ownerId, ownerUsername, birthdate } })

    res.status(200).json({ message: 'Mascota actualizada correctamente' })
  }
}

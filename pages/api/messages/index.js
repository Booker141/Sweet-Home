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
  const body = req.body



  if (req.method == 'POST') {

    await db.collection('messages').insertOne({_id: petId, animal: body.animal, breed: body.breed, name: body.name, weight: parseFloat(body.weight), image: body.image, ownerId: ObjectId(body.userId), ownerUsername: body.username, birthdate: new Date(body.birthdate)})
    await db.collection('users').updateOne({username: req.query.username}, {$push : {pets: petId}})


    res.status(200).json({message: "Mascota creada correctamente"})
  }

  if(req.method === 'DELETE'){

      const id = ObjectId(body.id)

      console.log(id.toString())

      await db.collection('pets').deleteOne({ _id: id })
      await db.collection('users').updateOne({username: req.query.username}, {$pull : {pets: id}})
  
      res.status(200).json({ message: 'Mascota eliminada correctamente' })
  

  }
}

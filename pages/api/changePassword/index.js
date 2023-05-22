import clientPromise from '../lib/MongoDB'
import { ObjectId } from 'mongodb'
import bcrypt from 'bcrypt'


export const config = {
  api: {
    responseLimit: false,
  },
}

export default async function handler (req, res) {

  const client = await clientPromise
  const db = await client.db()
  const body = req.body
  const user = await db.collection('users').findOne({email: body.email})

  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(body.newPassword, salt)


  if (req.method === 'PUT') {

    bcrypt.compare(body.oldPassword, user.password, async function(res, err) {

        if (err) {

            res.status(500).json({message: 'La contraseña antigua no coincide.'})
            return

        }

        if (res) {

            await db.collection('users').updateOne({_id: ObjectId(user._id)}, {$set: {password: hashPassword}})
            res.status(200).json({message: 'Contraseña cambiada correctamente.'})
            return

        }


    })



  }


}

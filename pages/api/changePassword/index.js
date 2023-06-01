import bcrypt from 'bcrypt'
import clientPromise from '../lib/MongoDB'

export default async function handler (req, res) {

  res.setHeader('Cache-Control', 's-maxage=10'); 
  
  if (req.method == 'PUT') {

    const client = await clientPromise
    const db = await client.db()
    const body = req.body

    const userExist = await db.collection('users').findOne({ email: body.email })



    if (userExist) {

      const isValidOld = await bcrypt.compare(body.oldPassword, userExist.password)

      if (!isValidOld) {

        res.status(400).json({message: 'Contraseña actual incorrecta.'})

      }else{

          const isValidNew = await bcrypt.compare(body.password, userExist.password)

          if(isValidNew)
            res.status(400).json({message: 'La nueva contraseña no puede ser igual a la actual.'})
          
          if(body.password != body.confirmPassword)
            res.status(400).json({message: 'La nueva contraseña no coincide.'})
          

          const salt = await bcrypt.genSalt(10)
          const hashPassword = await bcrypt.hash(body.password, salt)

          await db.collection('users').updateOne({ email: body.email }, {$set: { password: hashPassword}})

          res.status(200).json({message: 'Se ha cambiado la contraseña correctamente.'})
      

      }

    } else {

      res.status(400).json({ message: 'No existe el usuario' })

    }
  }
}

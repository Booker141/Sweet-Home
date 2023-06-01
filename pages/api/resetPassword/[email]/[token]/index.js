import clientPromise from '../../../lib/MongoDB'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export default async function handler (req, res) {

  res.setHeader('Cache-Control', 's-maxage=10'); 
  
  if (req.method == 'PUT') {

    const client = await clientPromise
    const db = await client.db()
    const body = req.body


        // Validate token


        const user = await db.collection('users').findOne({email: req.query.email})

        if(user.status.name === 'bloqueado'){

          return res.status(400).json({ message: 'Esta cuenta está bloqueada.' })

        }

        if(body.password != body.confirmPassword){

          return res.status(400).json({ message: 'Ambas contraseñas no coinciden.' })

        }

        const isValidNew = await bcrypt.compare(body.password, user.password)

        if(isValidNew){

            return res.status(400).json({ message: 'La nueva contraseña no puede ser igual a la antigua.' })
              
        }

        const secret = process.env.JWT_SECRET + user.password    
            
        const userExist = jwt.verify(req.query.token, secret)

        if (userExist) {

                const salt = await bcrypt.genSalt(10)
                const hashPassword = await bcrypt.hash(body.password, salt)
                await db.collection('users').updateOne({ email: userExist.email }, {$set: { password: hashPassword}})
                res.status(201).json({ message: 'Se ha restablecido la contraseña.' })

        } else {
      
            res.status(400).json({ message: 'No existe el usuario.' })
      
          }

    }

}
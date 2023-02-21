import bcrypt from 'bcrypt'
import clientPromise from './/lib/MongoDB'

export default async function handler (req, res) {
  if (req.method == 'PUT') {
    const client = await clientPromise
    const db = await client.db()
    const body = JSON.parse(req.body)

    const userExist = db.collection('users').findOne({ email: body.email })

    if (userExist) {
      const salt = await bcrypt.genSalt(10)
      const hashPassword = await bcrypt.hash(body.password, salt)

      userExist.update({ password: hashPassword })
    } else {
      res.status(200).json({ message: 'No existe el usuario' })
    }
  }
}

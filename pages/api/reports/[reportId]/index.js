import clientPromise from '../../lib/MongoDB'
import {ObjectId} from 'mongodb'

export const config = {
  api: {
    responseLimit: false,
  },
}

export default async function handler (req, res) {

  const client = await clientPromise
  const db = await client.db()

  if(req.method === 'DELETE'){

    await db.collection('reports').deleteOne({_id: new ObjectId(req.query.reportId)})

    res.status(200).json({ message: 'Informe eliminado correctamente' })

  }

}
import clientPromise from '../lib/MongoDB'

export const config = {
  api: {
    responseLimit: false,
  },
}
export default async function handler (req, res) {

  const client = await clientPromise
  const db = await client.db()
  const typeAttendances = await db.collection('typeAttendance').find({}).toArray()

  if (req.method === 'GET') {
    const data = await db.collection('typeAttendance').find({}).toArray()

    const typeAttendance = JSON.parse(JSON.stringify(data))

    res.status(200).json(typeAttendance)
  }

  if(req.method === 'POST') {

    const { name, description } = req.body

    typeAttendances.map((typeAttendance) => {
      if(typeAttendance.name.localeCompare(name)){
        res.status(200).json({message: 'Ya existe este tipo de cuidado'})
      }
    })

    const data = await db.collection('typeAttendance').insertOne({name: name, description: description})

    res.status(200).json(data)

  }
}

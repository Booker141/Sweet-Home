import clientPromise from '../lib/MongoDB'

export default async function handler (req, res) {
  const client = await clientPromise
  const db = await client.db()

  if (req.method === 'GET') {
    const data = await db.collection('typeAttendance').find({}).toArray()

    const typeAttendance = JSON.parse(JSON.stringify(data))

    res.status(200).json(typeAttendance)
  }
}

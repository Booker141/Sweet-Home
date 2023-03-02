import clientPromise from '../lib/MongoDB'

export default async function handler (req, res) {

  const client = await clientPromise
  const db = await client.db()
  const body = req.body

  if (req.method === 'GET') {

    const data = await db.collection('complaints').find({}).limit(50).toArray();

    const complaints = JSON.parse(JSON.stringify(data));

    res.status(200).json(complaints);

  }


  if (req.method === 'POST') {

    await db.collection('complaints').insertOne({ description: body.description, adminId: null, createdAt: new Date(), isApproved: false, isChecked: false, usernameFrom: body.usernameFrom, usernameTo: body.usernameTo})

    res.status(201).json({ message: 'Creada con éxito' })

  }
}

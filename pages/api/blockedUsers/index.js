import clientPromise from '../lib/MongoDB'

export default async function handler (req, res) {

  const client = await clientPromise
  const db = await client.db()
  const body = req.body
  const id = ObjectId('63b954df9f24e55518d5bde2')

  if (req.method === 'GET') {

    const users = await db.collection('users').find({}).toArray()

    const filteredUsers = users.filter(user => user.complaints.length >= 5);

    res.status(200).json(JSON.parse(JSON.stringify(filteredUsers)))

  }

  if (req.method === 'PUT') {

    const user = await db.collection('users').findOne({_id: body._id})

    await db.collection('users').updateOne({_id: user._id}, {$set: {status: {_id: id, name: "bloqueado"}}})

    res.status(200).json(JSON.parse(JSON.stringify(filteredUsers)))

  }


}

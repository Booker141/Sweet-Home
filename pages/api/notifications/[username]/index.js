import clientPromise from '../../lib/MongoDB'

export default async function handler (req, res) {
  const client = await clientPromise
  const db = await client.db()

  if (req.method === 'GET') {
    const data = await db.collection('notifications').find({ username: req.query.username }).limit(50).toArray()

    const notifications = JSON.parse(JSON.stringify(data))

    res.status(200).json(notifications)
  }
}

import clientPromise from '../../lib/MongoDB'

export default async function handler (req, res) {

  const client = await clientPromise
  const db = await client.db()
  const {keyword} = req.query

  if (req.method === 'GET') {

    const users = await db.collection('users').find({ username: keyword }).limit(50).toArray();
    const postByUser = await db.collection('posts').find({username: keyword}).limit(50).toArray();
    const postsByLocation = await db.collection('posts').find({location: keyword}).limit(50).toArray();
    const attendancesByBreed = await db.collection('attendances').find({breed: keyword}).limit(50).toArray();
    
    const data = {
      users: users,
      postByUser: postByUser,
      postsByLocation: postsByLocation,
      attendancesByBreed: attendancesByBreed
    }


    res.status(200).json(JSON.parse(data))
  }

}
import clientPromise from '../../lib/MongoDB'

export default async function handler (req, res) {
  const client = await clientPromise
  const db = await client.db();
  const {typeAttendance} = req.query;

  if (req.method === 'GET') {

    const data = await db.collection('typeAttendance').findOne({urlName: typeAttendance});

    const typeAttendanceData = JSON.parse(JSON.stringify(data))

    res.status(200).json(typeAttendanceData);
  }

  if (req.method === 'DELETE') {

    await db.collection('typeAttendance').deleteOne({_id: typeAttendance});

    res.status(200).json({message: 'Categoría eliminada correctamente'});

  }
}
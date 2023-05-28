import clientPromise from '../../lib/MongoDB'

export const config = {
  api: {
    responseLimit: false,
  },
}

export default async function handler (req, res) {

  res.setHeader('Cache-Control', 's-maxage=10'); 

  const client = await clientPromise
  const db = await client.db()
  const {keyword} = req.query
  let postsAdoption
  let postsLost
  let postsAbandoned
  let postsWild


  if (req.method === 'GET') {

    //Buscar usuarios

    const usersByUsername = await db.collection('users').find({ username: { $regex: keyword, $options : 'i' }}).limit(50).toArray();
    const usersByEmail = await db.collection('users').find({ email: { $regex: keyword, $options : 'i' }}).limit(50).toArray();

    //Buscar publicaciones (según usuario)

    const postsByUser = await db.collection('posts').find({username: {$regex: keyword, $options : 'i'}}).limit(50).toArray();

    //Buscar publicaciones (según descripción)

    const postsByDescription = await db.collection('posts').find({description: {$regex: keyword, $options : 'i'}}).limit(50).toArray();

    //Buscar publicaciones (según tipo de publicación)


      const typePost = await db.collection('posts').find({"type.name": {$regex: keyword, $options : 'i'}}).limit(50).toArray();



    //Buscar publicaciones (según ubicación)

    const postsByLocation = await db.collection('posts').find({location: {$regex: keyword, $options : 'i'}}).limit(50).toArray();

      //Buscar cuidados (Según usuario)

      const attendancesByUser = await db.collection('attendances').find({username: {$regex: keyword, $options : 'i'}}).limit(50).toArray()


    //Buscar cuidados (Según descripción)

    const attendancesByDescription = await db.collection('attendances').find({description: {$regex: keyword, $options : 'i'}}).limit(50).toArray()

    //Buscar cuidados (según raza)

    const attendancesByBreed = await db.collection('attendances').find({breed: {$regex: keyword, $options : 'i'}}).limit(50).toArray();

    //Buscar cuidados  (según animal)

    const attendancesByAnimal = await db.collection('attendances').find({animal: {$regex: keyword, $options : 'i'}}).limit(50).toArray();

    // Buscar tipo de cuidado (por nombre)

    const typeAttendanceByTitle = await db.collection('typeAttendance').find({name: {$regex: keyword, $options : 'i'}}).limit(50).toArray();

    // Buscar tipo de cuidado (por descripción)

    const typeAttendanceByDescription = await db.collection('typeAttendance').find({description: {$regex: keyword, $options : 'i'}}).limit(50).toArray();

  
    //Buscar noticias relacionadas por título

    const newsByTitle = await db.collection('news').find({title: {$regex: keyword, $options : 'i'}}).limit(50).toArray()

    //Buscar noticias relacionadas por introducción

    const newsByIntroduction = await db.collection('news').find({introduction: {$regex: keyword, $options : 'i'}}).limit(50).toArray()

    //Buscar noticias relacionadas por contenido

    const newsByContent = await db.collection('news').find({body: {$regex: keyword, $options : 'i'}}).limit(50).toArray()

    //Buscar noticias relacionadas por conclusión

    const newsByConclusion = await db.collection('news').find({conclusion: {$regex: keyword, $options : 'i'}}).limit(50).toArray()

    //Buscar noticias relacionadas por autor

    const newsByAuthor = await db.collection('news').find({author: {$regex: keyword, $options : 'i'}}).limit(50).toArray()




    const data = {

      usersByUsername: usersByUsername,
      usersByEmail: usersByEmail,
      postsByUser: postsByUser,
      postsByDescription: postsByDescription,
      typePost: typePost,
      postsByLocation: postsByLocation,
      attendancesByUser: attendancesByUser,
      attendancesByDescription: attendancesByDescription,
      attendancesByBreed: attendancesByBreed,
      attendancesByAnimal: attendancesByAnimal,
      typeAttendanceByTitle: typeAttendanceByTitle,
      typeAttendanceByDescription: typeAttendanceByDescription,
      newsByTitle: newsByTitle,
      newsByIntroduction: newsByIntroduction,
      newsByContent: newsByContent,
      newsByConclusion: newsByConclusion,
      newsByAuthor: newsByAuthor,

    }




    res.status(200).json(data)
  }

}
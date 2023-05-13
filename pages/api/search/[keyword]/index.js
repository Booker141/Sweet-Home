import clientPromise from '../../lib/MongoDB'

export default async function handler (req, res) {

  const client = await clientPromise
  const db = await client.db()
  const {keyword} = req.query

  if (req.method === 'GET') {

    //Buscar usuarios

    const usersByUsername = await db.collection('users').find({ username: { $regex: keyword }}).limit(50).toArray();
    const usersByEmail = await db.collection('users').find({ email: { $regex: keyword }}).limit(50).toArray();

    //Buscar publicaciones (según usuario)

    const postsByUser = await db.collection('posts').find({username: {$regex: keyword}}).limit(50).toArray();

    //Buscar publicaciones (según descripción)

    const postsByDescription = await db.collection('posts').find({description: {$regex: keyword}}).limit(50).toArray();

    //Buscar publicaciones (según tipo de publicación)

    if(keyword.includes('adopci')){

      const postAdoption = await db.collection('posts').find({"type.name": 'Adopción'}).limit(50).toArray();

    }

    if(keyword.includes('perdido')){
    
      const postLost = await db.collection('posts').find({"type.name": 'Animal perdido'}).limit(50).toArray();

    }

    //Buscar publicaciones (según ubicación)

    const postsByLocation = await db.collection('posts').find({location: {$regex: keyword}}).limit(50).toArray();

    //Buscar cuidados (Según descripción)

    const attendancesByTypeAttendance = await db.collection('attendances').find({description: {$regex: keyword}}).limit(50).toArray()

    //Buscar cuidados (según raza)

    const attendancesByBreed = await db.collection('attendances').find({breed: {$regex: keyword}}).limit(50).toArray();

    //Buscar cuidados  (según animal)

    const attendancesByAnimal = await db.collection('attendances').find({animal: {$regex: keyword}}).limit(50).toArray();

    //Buscar hilos relacionados por título

    const threadsByTitle = await db.collection('threads').find({title: {$regex: keyword}}).limit(50).toArray()

    //Buscar hilos relacionados por usuarios

    const threadsByUser = await db.collection('threads').find({username: {$regex: keyword}}).limit(50).toArray()

    //Buscar noticias relacionadas por título

    const newsByTitle = await db.collection('news').find({title: {$regex: keyword}}).limit(50).toArray()

    //Buscar noticias relacionadas por introducción

    const newsByIntroduction = await db.collection('news').find({introduction: {$regex: keyword}}).limit(50).toArray()

    //Buscar noticias relacionadas por contenido

    const newsByContent = await db.collection('news').find({body: {$regex: keyword}}).limit(50).toArray()

    //Buscar noticias relacionadas por conclusión

    const newsByConclusion = await db.collection('news').find({conclusion: {$regex: keyword}}).limit(50).toArray()

    //Buscar noticias relacionadas por autor

    const newsByAuthor = await db.collection('news').find({author: {$regex: keyword}}).limit(50).toArray()

    //Buscar preguntas frecuentes relacionadas

    const faqsByTitle = await db.collection('faqs').find({title: {$regex: keyword}}).limit(50).toArray()
    
    //Buscar preguntas frecuentes relacionadas por respuesta

    const faqsByAnswer = await db.collection('faqs').find({answer: {$regex: keyword}}).limit(50).toArray()
        
    //Buscar páginas relacionadas



    
    
    

    const data = {

      usersByUsername: usersByUsername,
      usersByEmail: usersByEmail,
      postsByUser: postsByUser,
      postsByDescription: postsByDescription,
      postAdoption: postAdoption,
      postLost: postLost,
      postsByLocation: postsByLocation,
      attendancesByTypeAttendance: attendancesByTypeAttendance,
      attendancesByBreed: attendancesByBreed,
      attendancesByAnimal: attendancesByAnimal,
      threadsByTitle: threadsByTitle,
      threadsByUser: threadsByUser,
      newsByTitle: newsByTitle,
      newsByIntroduction: newsByIntroduction,
      newsByContent: newsByContent,
      newsByConclusion: newsByConclusion,
      newsByAuthor: newsByAuthor,
      faqsByTitle: faqsByTitle,
      faqsByAnswer: faqsByAnswer

    }


    res.status(200).json(JSON.parse(data))
  }

}
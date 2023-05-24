/* Static imports */

import { useSession, signIn } from 'next-auth/react'
import {useRouter} from 'next/router'
import { useState, useEffect } from 'react'
import {colors} from '/styles/frontend-conf'
import {server} from "/server"
import Head from 'next/head'
import global from '/styles/global.module.css'
import dynamic from 'next/dynamic'



/* Dynamic imports */

const Loader = dynamic(() => import('/components/Loader/Loader'))
const Layout = dynamic(() => import('/components/Layout/Layout'))
const Post = dynamic(() => import('/components/Post/Post'))
const UserCard = dynamic(() => import('/components/UserCard/UserCard'))
const Attendance = dynamic(() => import('/components/Attendance/Attendance'))
const TypeAttendance = dynamic(() => import('/components/TypeAttendance/TypeAttendance'))
const New = dynamic(() => import('/components/New/New'))
const Question = dynamic(() => import('/components/Question/Question'))
const FallbackImage = dynamic(() => import('/components/FallbackImage/FallbackImage'))
const LazyLoad = dynamic(() => import('react-lazyload'))



export default function Search () {

  const { data: session, status } = useSession({ required: true })

  const router = useRouter()

  console.log(router)


  const [search, setSearch] = useState(router.query.keyword)
  const [results, setResults] = useState([])


  const searchKeyword = async () => {

    const res = await fetch(`${server}/api/search/${router.query.keyword}`, 
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
        }
      })

    const data = await res.json()
    
    setResults(data)

    console.log(data)


  }


  useEffect(() => {
    searchKeyword()
  }, [search])


  if (status === 'loading') {
    return (
      <>
        <div className={global.loading}><p>Cargando..</p></div>
        <Loader />
      </>
    )
  }
  if (session) {
    return (
      <Layout>
        <Head><title>{router.query.keyword} | Búsqueda de Sweet Home</title></Head>
        <h1 className={global.title}>Búsquedas relacionadas</h1>
        {results === null && <div className={global.loading2}>No se han encontrado resultados.</div>}
        <div className={global.search__card}>
          <h2 className={global.title__search}>Usuarios</h2>
          <div className="results__container">
            <p className={global.secondary__search}>Por nombre de usuario</p>
            <div className="results__usersByUsername">
              {results.usersByUsername?.length === 0 && <div className={global.loading2}>No se han encontrado resultados.</div>}
              {results.usersByUsername?.length != 0 && results.usersByUsername?.map((user) => (
                <>
                    <UserCard key={user._id} image={user.image} banner={user.banner} username={user.username} role={user.role} />
                </>
              ))}
            </div>
            <p className={global.secondary__search}>Por correo electrónico</p>
            <div className="results__usersByEmail">
              {results.usersByEmail?.length === 0 && <div className={global.loading2}>No se han encontrado resultados.</div>}
              {results.usersByEmail?.length != 0 && results.usersByEmail?.map((user) => (
                      <>
                        <UserCard key={user._id} image={user.image} banner={user.banner} username={user.username} role={user.role} />
                      </>
              ))}
            </div>
          </div>
        </div>
        <div className={global.search__card}>
          <p className={global.title__search}>Publicaciones</p>
          <div className="results__container">
            <p className={global.secondary__search}>Por usuario</p>
            <div className="results__postsByUser">
              {results.postsByUser?.length === 0 && <div className={global.loading2}>No se han encontrado resultados.</div>}
              {results.postsByUser?.length != 0 && results.postsByUser?.map((post) => (
                <>
                  <Post key={post._id} id={post._id} username={post.username} location={post.location} image={post.image} description={post.description} createdAt={post.createdAt} comments={post.comments} likes={post.likes} saves={post.saves} type={post.type}/>
                </>
              ))}
            </div>
            <p className={global.secondary__search}>Por descripción</p>
            <div className="results__postsByDescription">
              {results.postsByDescription?.length === 0 && <div className={global.loading2}>No se han encontrado resultados.</div>}
              {results.postsByDescription?.length != 0 && results.postsByDescription?.map((post) => (
                <>
                  <Post key={post._id} id={post._id} username={post.username} location={post.location} image={post.image} description={post.description} createdAt={post.createdAt} comments={post.comments} likes={post.likes} saves={post.saves} type={post.type}/>
                </>
              ))}
            </div>
          </div>
          <div className="results__container">
            <p className={global.secondary__search}>Por tipo de publicación</p>
          
            <p className={global.tertiary__search}>Animales en adopción</p>
            <div className="results__postsByTypeAdoption">
              {results.postsAdoption?.length === 0 && <div className={global.loading2}>No se han encontrado resultados.</div>}
              {results.postsByAdoption?.length != 0 && results.postsAdoption?.map((post) => (
                <>
                  <Post key={post._id} id={post._id} username={post.username} location={post.location} image={post.image} description={post.description} createdAt={post.createdAt} comments={post.comments} likes={post.likes} saves={post.saves} type={post.type}/>
                </>
              ))}
            </div>
            <p className={global.tertiary__search}>Animales perdidos</p>
            <div className="results__postsByTypeLost">
              {results.postsLost?.length === 0 && <div className={global.loading2}>No se han encontrado resultados.</div>}
              {results.postsLost?.length != 0 && results.postsLost?.map((post) => (
                <>
                  <Post key={post._id} id={post._id} username={post.username} location={post.location} image={post.image} description={post.description} createdAt={post.createdAt} comments={post.comments} likes={post.likes} saves={post.saves} type={post.type}/>
                </>
              ))}
            </div>
            <p className={global.tertiary__search}>Animales abandonados</p>
            <div className="results__postsByTypeAbandoned">
              {results.postsAbandoned?.length === 0 && <div className={global.loading2}>No se han encontrado resultados.</div>}
              {results.postsAbandoned?.length != 0&& results.postsAbandoned?.map((post) => (
                <>
                <Post key={post._id} id={post._id} username={post.username} location={post.location} image={post.image} description={post.description} createdAt={post.createdAt} comments={post.comments} likes={post.likes} saves={post.saves} type={post.type}/>
                </>
              ))}
            </div>
            <p className={global.tertiary__search}>Animales silvestres</p>
            <div className="results__postsByTypeWild">
              {results.postsWild?.length === 0 && <div className={global.loading2}>No se han encontrado resultados.</div>}
              {results.postsWild?.length != 0 && results.postsWild?.map((post) => (
                <>
                  <Post key={post._id} id={post._id} username={post.username} location={post.location} image={post.image} description={post.description} createdAt={post.createdAt} comments={post.comments} likes={post.likes} saves={post.saves} type={post.type}/>
                </>
              ))}
            </div>
            <p className={global.secondary__search}>Por ubicación</p>
            <div className="results__postsByLocation">
              {results.postsByLocation?.length === 0 && <div className={global.loading2}>No se han encontrado resultados.</div>}
              {results.postsByLocation?.length != 0 && results.postsByLocation?.map((post) => (
                <>
                  <Post key={post._id} id={post._id} username={post.username} location={post.location} image={post.image} description={post.description} createdAt={post.createdAt} comments={post.comments} likes={post.likes} saves={post.saves} type={post.type}/>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className={global.search__card}>
          <p className={global.title__search}>Cuidados</p>
            <div className="results__container">
              <p className={global.secondary__search}>Por descripción</p>
              <div className="results__attendancesByDescription">
                {results.attendancesByDescription?.length === 0 && <div className={global.loading2}>No se han encontrado resultados.</div>}
                {results.attendancesByDescription?.length != 0 && results.attendancesByDescription?.map((attendance) => (
                  <>
                    <Attendance key={attendance._id} location={attendance.location} description={attendance.description} animal={attendance.animal} breed={attendance.breed} image={attendance.image} comments={attendance.comments} createdAt={attendance.createdAt} username={attendance.username} userId={attendance.userId} threadId={attendance.threadId} />
                  </>
                ))}
              </div>
              <p className={global.secondary__search}>Por animal</p>
              <div className="results__attendancesByAnimal">
                {results.attendancesByAnimal?.length === 0 && <div className={global.loading2}>No se han encontrado resultados.</div>}
                {results.attendancesByAnimal?.length != 0 && results.attendancesByAnimal?.map((attendance) => (
                  <>
                    <Attendance key={attendance._id} location={attendance.location} description={attendance.description} animal={attendance.animal} breed={attendance.breed} image={attendance.image} comments={attendance.comments} createdAt={attendance.createdAt} username={attendance.username} userId={attendance.userId} threadId={attendance.threadId} />
                  </>
                ))}
              </div>
              <p className={global.secondary__search}>Por raza</p>
              <div className="results__attendancesByBreed">
                {results.attendancesByBreed?.length === 0 && <div className={global.loading2}>No se han encontrado resultados.</div>}
                {results.attendancesByBreed?.length != 0 && results.attendancesByBreed?.map((attendance) => (
                  <>
                    <Attendance key={attendance._id} location={attendance.location} description={attendance.description} animal={attendance.animal} breed={attendance.breed} image={attendance.image} comments={attendance.comments} createdAt={attendance.createdAt} username={attendance.username} userId={attendance.userId} threadId={attendance.threadId} />
                  </>
                ))}
            </div>
          </div>
        </div>
        <div className={global.search__card}>
          <p className={global.title__search}>Tipos de cuidado</p>
          <div className="results__container">
            <p className={global.secondary__search}>Por nombre</p>
            <div className="results__typeAttendanceByName">
              {results.typeAttendanceByName?.length === 0 && <div className={global.loading2}>No se han encontrado resultados.</div>}
              {results.typeAttendanceByName?.length != 0 && results.typeAttendanceByName?.map((type) => (
                <>
                  <TypeAttendance key={type._id} name={type.name} description={type.description} />
                </>
              ))}
            </div>
            <p className={global.secondary__search}>Por descripción</p>
            <div className="results__typeAttendancesByDescription">
              {results.typeAttendanceByDescription?.length === 0 && <div className={global.loading2}>No se han encontrado resultados.</div>}
              {results.typeAttendanceByDescription?.length != 0 && results.typeAttendanceByDescription?.map((type) => (
                <>
                  <TypeAttendance key={type._id} name={type.name} description={type.description} />
                </>
              ))}
            </div>
          </div>
        </div>
        <div className={global.search__card}>
          <p className={global.title__search}>Noticias</p>
          <div className="results__container">
            <p className={global.secondary__search}>Por título</p>
            <div className="results__newsByTitle">
              {results.newsByTitle?.length === 0 && <div className={global.loading2}>No se han encontrado resultados.</div>}
              {results.newsByTitle?.length != 0 && results.newsByTitle?.map((news) => (
                <>
                  <New key={news._id} id={news._id} title={news.title} date={news.date} author={news.author} introduction={news.introduction} />
                </>
              ))}
            </div>

            <p className={global.secondary__search}>Por autor</p>
            <div className="results__newsByAuthor">
              {results.newsByAuthor?.length === 0 && <div className={global.loading2}>No se han encontrado resultados.</div>}
              {results.newsByAuthor?.length != 0 && results.newsByAuthor?.map((news) => (
                <>
                  <New key={news._id} id={news._id} title={news.title} date={news.date} author={news.author} introduction={news.introduction} />
                </>
              ))}
            </div>
          </div>
        </div>
        
        <style jsx>{`

            .results__usersByUsername, .results__usersByEmail
            {

              /*Box model*/

              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              gap: 1rem;

            }

            .results__postsByUser, .results__postsByDescription,
            .results__postsByTypeAdoption, .results__postsByTypeLost,
            .results__postsByTypeAbandoned, .results__postsByTypeWild,
            .results__postsByLocation, .results__attendancesByDescription,
            .results__attendancesByAnimal, .results__attendancesByBreed,
            .results__typeAttendanceByName, .results__typeAttendancesByDescription,
            .results__newsByTitle, .results__newsByAuthor,
            .results__faqsByTitle, .results__faqsByAnswer{

              /*Box model*/

              display: flex;
              flex-direction: column;
              gap: 1rem;

            }

            .results__container{

              /*Box model*/

              display: flex;
              flex-direction: column;
              padding: 1rem;
              margin-bottom: 1rem;
              margin-left: 1rem;
            }


            h1{

                            /*Text*/

                              font-size: 3.5rem;
                            font-weight: 600;
                            background-color: ${colors.primary};
                            font-family: "Archivo Black", sans-serif;
                            background-image: linear-gradient(180deg, #f0810f, #ffe45c 170%);
                            background-repeat: repeat;
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent; 
                            background-size: 100%
                            text-align: center;
                            
            }
      
      
       `}</style>
      </Layout>
      
    )
  } else {
    return (
      <Layout>
        <>
          <div className={global.content}>
            <div className='message'>
              <h1 className={global.title}>Para acceder a esta página debe iniciar sesión</h1>
              <button className={global.buttonPrimary} onClick={() => signIn()}>Iniciar sesión</button>
            </div>
          </div>
          <style jsx>{`

                        .message{

                            /*Box model*/

                            display: flex
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            
                            
                        }

                        
                    `}
          </style>
        </>
      </Layout>
    )
  }
}


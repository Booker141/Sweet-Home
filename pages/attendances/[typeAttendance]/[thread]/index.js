import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSession, signIn } from 'next-auth/react'
import { useState } from 'react'
import global from '/styles/global.module.css'
import {colors} from '/styles/frontend-conf'
import Layout from '/components/Layout/Layout'
import Loader from '/components/Loader/Loader'
import Attendance from '/components/Attendance/Attendance'
import { server } from '/server'

export default function Thread ({ attendances }) {

  const { data: session, status } = useSession({ required: true })

  const [isSortedByUsername, setIsSortedByUsername] = useState(false)
  const [sortedAttendances, setSortedAttendances] = useState(attendances)

  const router = useRouter()

  const sortAttendancesByUsername = () => {
    const sortedAttendances = attendances.sort((a, b) => {
      if (a.username > b.username) {
        return 1
      }
      if (a.username < b.username) {
        return -1
      }
      return 0
    })
    setIsSortedByUsername(!isSortedByUsername)
    setSortedAttendances(sortedAttendances)
  }


  if (status == 'loading') {
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
        <Head>
          <title>{router.query.thread}</title>
        </Head>
        <h1 className={global.title}>{router.query.thread}</h1>
        <div className='sort__buttons'>
          <button className={global.buttonPrimary} onClick={() => router.push(`/attendances/${router.query.typeAttendance}/${router.query.thread}/createAttendance`)} aria-label='Crear nuevo cuidado'>Crear</button>
          <button className={global.buttonPrimary} onClick={() => sortAttendancesByUsername()} aria-label='Ordenar categorías por usuario'>Ordenar por usuario</button>
        </div>
        {attendances.length === 0 && <div><p className={global.loading2}>No hay ningún cuidado en este momento.</p></div>}
        {isSortedByUsername && sortedAttendances.map(({ _id, location, description, animal, breed, image, comments, createdAt, username, userId, threadId}) => {
          return (
            <>
              <Attendance key={_id} location={location} description={description} animal={animal} breed={breed} image={image} comments={comments} createdAt={createdAt} username={username} userId={userId} threadId={threadId} />
            </>
          )
        })}
        {(!isSortedByUsername || !isSortedByDate) && attendances.map(({ _id, location, description, animal, breed, image, comments, createdAt, username, userId, threadId}) => {
          return (
            <>
              <Attendance key={_id} location={location} description={description} animal={animal} breed={breed} image={image} comments={comments} createdAt={createdAt} username={username} userId={userId} threadId={threadId}/>
            </>
          )
        })}

      <style jsx>{`
        
        .sort__buttons{

          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1rem;

        }

        h1{
                        /*Text*/

                        font-size: 3.5rem;
                        font-weight: 600;
                        background-color: ${colors.primary};
                        font-family: "Archivo Black", sans-serif;
                        background-image: linear-gradient(45deg, #f0810f, #ffe45c);
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

export async function getServerSideProps (context) {

  const { thread } = context.params;

  console.log(thread)

  const res = await fetch(`${server}/api/attendances/${thread}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const attendances = await res.json()

  return {
    props: {
      attendances: JSON.parse(JSON.stringify(attendances))
    }
  }
}

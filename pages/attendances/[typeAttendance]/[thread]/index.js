import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import global from '/styles/global.module.css'
import Layout from '/components/Layout/Layout'
import Loader from '/components/Loader/Loader'
import Attendance from '/components/Attendance/Attendance'
import { server } from '/server'

export default function Thread ({ attendances }) {
  const { data: session, status } = useSession({ required: true })

  const [isSortedByUsername, setIsSortedByUsername] = useState(false)
  const [isSortedByDate, setIsSortedByDate] = useState(false)
  const [sortedAttendances, setSortedAttendances] = useState(attendances)

  const router = useRouter()

  const sortAttendanceByUsername = () => {
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

  const sortAttendanceByDate = () => {
    const sortedAttendances = attendances.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return 1
      }
      if (a.createdAt < b.createdAt) {
        return -1
      }
      return 0
    })
    setIsSortedByDate(!isSortedByDate)
    setSortedAttendances(sortedAttendances)
  }

  if (status == 'loading') {
    return (
      <>
        <div className={global.loading}><p className={global.title}>Cargando..</p></div>
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
          <button className={global.buttonPrimary} onClick={() => router.push(`/attendances/${router.query.thread}/createAttendance`)} aria-label='Crear nuevo cuidado'>Crear nuevo cuidado</button>
          <button className={global.buttonPrimary} onClick={() => sortThreadByUsername()} aria-label='Ordenar categorías por usuario'>Ordenar por usuario</button>
          <button className={global.buttonPrimary} onClick={() => sortThreadByDate()} aria-label='Ordenar categorías por nombre'>Ordenar por fecha</button>
        </div>
        {attendances.length === 0 && <div><p className={global.loading2}>No hay ningún cuidado en este momento.</p></div>}
        {isSortedByUsername && sortedAttendances.map(({ _id, location, description, animal, breed, image, comments, createdAt, username, userId, threadId}) => {
          return (
            <>
              <Attendance key={_id} location={location} description={description} animal={animal} breed={breed} image={image} comments={comments} createdAt={createdAt} username={username} userId={userId} threadId={threadId} />
            </>
          )
        })}
        {isSortedByDate && sortedAttendances.map(({ _id, location, description, animal, breed, image, comments, createdAt, username, userId, threadId}) => {
          return (
            <>
              <Attendance key={_id} location={location} description={description} animal={animal} breed={breed} image={image} comments={comments} createdAt={createdAt} username={username} userId={userId} threadId={threadId}/>
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

  console.log(thread);

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

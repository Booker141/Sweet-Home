import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSession, signIn } from 'next-auth/react'
import { useState } from 'react'
import global from '/styles/global.module.css'
import { colors } from '/styles/frontend-conf.js'
import Layout from '/components/Layout/Layout'
import Thread from '/components/Thread/Thread'
import {toast} from 'react-toastify'
import { server } from '/server'

export default function TypeAttendance ({ threads, typeAttendance }) {

  const { data: session, status } = useSession({ required: true })

  const [isSortedByName, setIsSortedByName] = useState(false)
  const [isSortedByDate, setIsSortedByDate] = useState(false)
  const [isSortedByNumPosts, setIsSortedByNumPosts] = useState(false)
  const [sortedThreads, setSortedThreads] = useState(threads)
  const [numPosts, setNumPosts] = useState(0)

  const router = useRouter()


  const sortThreadByName = () => {
    const sortedThreads = threads.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1
      }
      return 0
    })
    setIsSortedByName(!isSortedByName)
    setSortedThreads(sortedThreads)
  }

  const sortThreadByDate = () => {
    const sortedThreads = threads.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return 1
      }
      if (a.createdAt < b.createdAt) {
        return -1
      }
      return 0
    })
    setIsSortedByDate(!isSortedByDate)
    setSortedThreads(sortedThreads)
  }

  const sortThreadByNumPosts = () => {
    const sortedThreads = threads.sort((a, b) => {
      if (a.numPosts > b.numPosts) {
        return 1
      }
      if (a.numPosts < b.numPosts) {
        return -1
      }
      return 0
    })
    setIsSortedByNumPosts(!isSortedByNumPosts)
    setSortedThreads(sortedThreads)
  }

  if (status === 'loading') {
    return <div className={global.loading}><p>Cargando..</p></div>
  }
  if (session) {
    return (
      <Layout>
        <Head>
          <title>Hilos sobre {typeAttendance}</title>
        </Head>
        <h1 className={global.title}>Hilos sobre {typeAttendance}</h1>
        <div className='sort__buttons'>
          <button className={global.buttonPrimary} onClick={() => router.push(`/attendances/${router.query.typeAttendance}/createThread`)} aria-label='Crear nuevo hilo'>Crear hilo</button>
          <button className={global.buttonPrimary} onClick={() => sortThreadByName()} aria-label='Ordenar categorías por nombre'>Ordenar por nombre</button>
          <button className={global.buttonPrimary} onClick={() => sortThreadByDate()} aria-label='Ordenar categorías por nombre'>Ordenar por fecha</button>
          <button className={global.buttonPrimary} onClick={() => sortThreadByNumPosts()} aria-label='Ordenar por actividad'>Ordenar por actividad</button>
        </div>
        {threads.length === 0 && <div className={global.loading2}><p>No hay ningún hilo en este momento.</p></div>}
        {isSortedByName && sortedThreads.map(({ _id, title, typeAttendanceId, createdAt, userId, username, attendances }) => {
          return (
            <>
              <Thread key={_id} id={_id} title={title} typeAttendanceId={typeAttendanceId} createdAt={createdAt} userId={userId} username={username} attendances={attendances}/>
            </>
          )
        })}
        {isSortedByDate && sortedThreads.map(({ _id, title, typeAttendanceId, createdAt, userId, username, attendances }) => {
          return (
            <>
              <Thread key={_id} id={_id} title={title} typeAttendanceId={typeAttendanceId} createdAt={createdAt} userId={userId} username={username} attendances={attendances}/>
            </>
          )
        })}
        {isSortedByNumPosts && sortedThreads.map(({ _id, title, typeAttendanceId, createdAt, userId, username, attendances }) => {
          return (
            <>
              <Thread key={_id} id={_id} title={title} typeAttendanceId={typeAttendanceId} createdAt={createdAt} userId={userId} username={username} attendances={attendances}/>
            </>
          )
        })}
        {!isSortedByNumPosts && threads.map(({ _id, title, typeAttendanceId, createdAt, userId, username, attendances }) => {
          return (
            <>
              <Thread key={_id} id={_id} title={title} typeAttendanceId={typeAttendanceId} createdAt={createdAt} userId={userId} username={username} attendances={attendances}/>
            </>
          )
        })}
        <style jsx>{`
                
                .sort__buttons{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    gap: 1rem;
                    align-items: center;
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


                
            `}
        </style>
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

  const { typeAttendance } = context.params

  const res = await fetch(`${server}/api/threads/${typeAttendance}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const threads = await res.json()

  return {
    props: {
      threads: JSON.parse(JSON.stringify(threads)), typeAttendance: typeAttendance
    }
  }
}

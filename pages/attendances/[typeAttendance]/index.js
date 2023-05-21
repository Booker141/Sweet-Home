import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSession, signIn } from 'next-auth/react'
import { useState } from 'react'
import global from '/styles/global.module.css'
import { colors, fonts } from '/styles/frontend-conf.js'
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

  /**
   * The function sorts an array of threads based on different filters such as name, date, and
   * activity.
   * @param e - The parameter `e` is a string that represents the type of filter to be applied to the
   * `threads` array. It can be one of three values: "name", "date", or "activity".
   */
  const sortByFilters = (e) =>{

    if(e === 'name'){
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
      setIsSortedByDate(false)
      setIsSortedByNumPosts(false)
      setSortedThreads(sortedThreads)

    }else if(e === 'date'){
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
      setIsSortedByName(false)
      setIsSortedByNumPosts(false)
      setSortedThreads(sortedThreads)

    }else if(e === 'activity'){
      const sortedThreads = threads.sort((a, b) => {
        if (a.numPosts > b.numPosts) {
          return 1
        }
        if (a.numPosts < b.numPosts) {
          return -1
        }
        return 0
      })
      setIsSortedByName(false)
      setIsSortedByDate(false)
      setIsSortedByNumPosts(!isSortedByNumPosts)
      setSortedThreads(sortedThreads)
    }
  }




  if (status === 'loading') {
    return <div className={global.loading}><p>Cargando..</p></div>
  }
  if (session) {
    return (
      <Layout>
        <Head>
          <title>Hilos sobre {typeAttendance} | Sweet Home</title>
        </Head>
        <h1 className={global.title}>Hilos sobre {typeAttendance}</h1>
        <div className='sort__buttons'>
          <button className={global.buttonPrimary} onClick={() => router.push(`/attendances/${router.query.typeAttendance}/createThread`)} aria-label='Crear nuevo hilo'>Crear hilo</button>
          <div className='filter__list'>
                  <select name="filters" onChange={(e) => sortByFilters(e.target.value)}>
                      <option default value="default">Selecciona un filtro</option>
                      <option value="name">Ordenar por nombre</option>
                      <option value="date">Ordenar por fecha</option>
                      <option value="activity">Ordenar por actividad</option>
                  </select>
          </div>
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
        {(!isSortedByName && !isSortedByNumPosts && !isSortedByDate) && threads.map(({ _id, title, typeAttendanceId, createdAt, userId, username, attendances }) => {
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
                    align-items: center;
                    justify-content: space-between;
                }

                .filter__list{

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;

                }

                select{

                /*Box model*/

                width: 10vw;
                height: 2rem;
                align-self: flex-end;

                /*Text*/

                font-family: ${fonts.default};
                color: ${colors.secondary};
                font-size: 0.8rem;

                /*Visuals*/

                border-radius: 20px;
                border: none;
                background-color: ${colors.primary};
                box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);

                }

                select:focus{

                /*Visuals*/

                border: 2px solid #4d97f7;
                outline: none;
                box-shadow: 10px 10px 20px 0px rgba(176,176,176,0.66);

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

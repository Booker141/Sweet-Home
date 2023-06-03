/* Static imports */

import { useRouter } from 'next/router'
import { useSession, signIn } from 'next-auth/react'
import { useState } from 'react'
import {colors, fonts} from '/styles/frontend-conf'
import { server } from '/server'
import dynamic from 'next/dynamic'
import global from '/styles/global.module.css'
import Head from 'next/head'

/*Dynamic imports*/

const Loader = dynamic(() => import('/components/Loader/Loader'))
const Layout = dynamic(() => import('/components/Layout/Layout'))
const Attendance = dynamic(() => import('/components/Attendance/Attendance'))
const CreateAttendanceCard = dynamic(() => import('/components/CreateAttendanceCard/CreateAttendanceCard'))
const LazyLoad = dynamic(() => import('react-lazyload'))



export default function Thread ({ attendances }) {

  const { data: session, status } = useSession({ required: true })

  const [isSortedByUsername, setIsSortedByUsername] = useState(false)
  const [sortedAttendances, setSortedAttendances] = useState(attendances)

  const router = useRouter()

  const sortByFilters = (e) =>{
    if(e === 'name'){
      const sortedAttendances = attendances?.sort((a, b) => {
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
          <title>{router.query.thread} | Sweet Home</title>
        </Head>
        <h1 className={global.title}>{router.query.thread}</h1>
        <div className='sort__buttons'>
          <button className={global.buttonPrimary} onClick={() => router.push(`/attendances/${router.query.typeAttendance}/${router.query.thread}/createAttendance`)} aria-label='Crear nuevo cuidado'>Crear cuidado</button>
          <div className='filter__list'>
                  <select name="filters" onChange={(e) => sortByFilters(e.target.value)}>
                      <option default value="default">Selecciona un filtro</option>
                      <option value="name">Ordenar por usuario</option>
                  </select>
          </div>
        </div>
        <CreateAttendanceCard thread={router.query.thread}/>
        {attendances?.length === 0 && <div><p className={global.loading2}>No hay ningún cuidado en este momento.</p></div>}
        {isSortedByUsername && sortedAttendances.map(({ _id, location, description, animal, breed, image, createdAt, username, userId, threadId}) => {
          return (
            <>
              <LazyLoad offset={100}><Attendance key={_id} id={_id} location={location} description={description} animal={animal} breed={breed} image={image} createdAt={createdAt} username={username} userId={userId} threadId={threadId} /></LazyLoad>
            </>
          )
        })}
        {!isSortedByUsername && attendances.map(({ _id, location, description, animal, breed, image, createdAt, username, userId, threadId}) => {
          return (
            <>
              <LazyLoad offset={100}><Attendance key={_id} id={_id} location={location} description={description} animal={animal} breed={breed} image={image} createdAt={createdAt} username={username} userId={userId} threadId={threadId}/></LazyLoad>
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
          margin-bottom: 2rem;

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
      
      `}</style>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <>
          <div className={global.content}>
            <div className='message'>
              <h1 className={global.title7}>Para acceder a esta página debe iniciar sesión</h1>
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

  context.res.setHeader('Cache-Control','public, s-maxage=10, stale-while-revalidate=59')

  const { thread } = context.params;

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

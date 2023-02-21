import Head from 'next/head'
import global from 'styles/global.module.css'
import Layout from '../../../../../../../components/Layout/Layout'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import TypeAttendance from 'components/TypeAttendance/TypeAttendance'
import Loader from 'components/Loader/Loader'
import { server } from '../../../../../../../server'

/*
    * @author Sergio García Navarro
    * @returns Attendances page
    * @version 1.0
    * @date 13/12/2020
    * @description This page is the attendances page of the application
*/
/**
 * It returns a Layout component, which contains a Head component, a Header component, and a Footer
 * component
 * @returns the Layout component, which is a wrapper for the Header, Footer and the content of the
 * page.
 */
export default function Attendances ({ typeAttendance }) {
  const { data: session, status } = useSession({ required: true })

  const [isSorted, setIsSorted] = useState(false)
  const [sortedAttendance, setSortedAttendance] = useState(typeAttendance)
  const Router = useRouter()

  const sortAttendanceByName = () => {
    const sortedAttendance = typeAttendance.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1
      }
      return 0
    })
    setIsSorted(!isSorted)
    setSortedAttendance(sortedAttendance)
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
          <title>Cuidados</title>
        </Head>
        <h1 className={global.title}>Foro de cuidados</h1>
        <h2 className={global.title2}>Categorías</h2>
        <button className={global.buttonPrimary} onClick={() => sortAttendanceByName()} aria-label='Ordenar categorías por nombre'>Ordenar por nombre</button>
        {typeAttendance.length === 0 && <div><p className={global.loading2}>No hay ninguna categoría en este momento.</p></div>}
        {isSorted && sortedAttendance.map(({ _id, name, description, urlName }) => {
          return (
            <>
              <TypeAttendance key={_id} name={name} description={description} urlName={urlName} />
            </>
          )
        })}
        {!isSorted && typeAttendance.map(({ _id, name, description, urlName }) => {
          return (
            <>
              <TypeAttendance key={_id} name={name} description={description} urlName={urlName} />
            </>
          )
        })}
        <style jsx>{`

                      button{

                        /*Box model*/

                        margin-bottom: 1rem;
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

export async function getServerSideProps () {
  const res = await fetch(`${server}/api/typeAttendance`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const typeAttendance = await res.json()

  return {
    props: {
      typeAttendance: JSON.parse(JSON.stringify(typeAttendance))
    }
  }
}

import Head from 'next/head'
import global from 'styles/global.module.css'
import {colors, fonts} from 'styles/frontend-conf.js'
import Layout from '/components/Layout/Layout'
import { useState, useEffect } from 'react'
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import TypeAttendance from 'components/TypeAttendance/TypeAttendance'
import Loader from 'components/Loader/Loader'
import { server } from '/server'

/*
    * @author Sergio García Navarro
    * @returns Attendances page
    * @version 1.0
    * @date 13/12/2022
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
  const [user, setUser] = useState({})
  const [isAdmin, setIsAdmin] = useState(false)
  const [sortedAttendance, setSortedAttendance] = useState(typeAttendance)
  const Router = useRouter()


/**
 * The function sorts an array of attendance objects by name.
 * @param e - e is a parameter representing the filter by which the attendance data needs to be sorted.
 * In this code snippet, it is used to sort the attendance data by name.
 */
  const sortByFilters = (e) => {

    if(e === 'name'){
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

  }

  const getRole = async () => {

    const res = await fetch(`${server}/api/users/${session.user.username}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  

    const data = await res.json()

    setIsAdmin(data.role.name === "administrador" ? true : false)

  } 

  useEffect(() => {

    getRole()

  }, [])



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
          <title>Cuidados | Sweet Home</title>
        </Head>
        <h1 className={global.title}>Foro de cuidados</h1>
        <h2 className={global.title2}>Categorías</h2>
        <div className="header__buttons">
          {isAdmin && <button className={global.buttonPrimary} onClick={() => Router.push(`${server}/dashboard/createTypeAttendance`)} aria-label='Crear categoría'>Crear tipo de cuidado</button>}
          <div className='filter__list'>
                  <select name="filters" onChange={(e) => sortByFilters(e.target.value)}>
                      <option default value="default">Selecciona un filtro</option>
                      <option value="name">Ordenar por nombre</option>
                  </select>
          </div>
        </div>
        
        {typeAttendance.length === 0 && <div><p className={global.loading2}>No hay ninguna categoría en este momento.</p></div>}
        {isSorted && sortedAttendance.map(({ _id, name, description, urlName }) => {
          return (
            <>
              <TypeAttendance key={_id} id={_id} name={name} description={description} urlName={urlName} />
            </>
          )
        })}
        {!isSorted && typeAttendance.map(({ _id,  name, description, urlName }) => {
          return (
            <>
              <TypeAttendance key={_id} id={_id} name={name} description={description} urlName={urlName} />
            </>
          )
        })}
        <style jsx>{`

                      .header__buttons{

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

                      button{

                        /*Box model*/

                        margin-bottom: 1rem;
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

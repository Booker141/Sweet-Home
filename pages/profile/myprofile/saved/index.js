import Head from 'next/head'
import { useSession, signIn} from 'next-auth/react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import global from 'styles/global.module.css'
import { colors, fonts } from 'styles/frontend-conf'
import SettingsLayout from 'components/SettingsLayout/SettingsLayout'
import Layout from 'components/Layout/Layout'
import SavedPost from 'components/SavedPost/SavedPost'
import Loader from 'components/Loader/Loader'
import { server } from '/server'

/*
    * @author Sergio García Navarro
    * @returns Saved posts page
    * @version 1.0
    * @date 13/12/2020
    * @description Saved posts page
*/

export default function Saved () {
  
  const { data: session, status } = useSession({ required: true })
  const [user, setUser] = useState({})
  const Router = useRouter()



  const fetchSavedPosts = async () => {

    const res = await fetch(`${server}/api/users/${session.user.username}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  
  
    const data = await res.json()

    console.log(data)

    setUser(data)
  }



  useEffect(() => {

    fetchSavedPosts()

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
      <SettingsLayout>
        <Head><title>Publicaciones guardadas | Sweet Home</title></Head>
        <div className='container'>

          <div className='container__column1'>

            <div className='column1__header'>
              <h1 className={global.title}>Publicaciones guardadas</h1>
            </div>

            {user.saves?.length === 0 && <div><p className={global.text}>No hay ninguna publicación</p></div>}
            {user?.saves.sort().map(({ _id }) => {
              return (
                <>
                  <SavedPost key={_id} id={_id} />
                </>
              )
            })}
          </div>


        </div>

        <style jsx>{`

              .container{

                /*Box model*/

                display: flex;
                flex-direction: row;
           

              }


              .container__column1{

                /*Box model*/

                display: flex;
                flex-direction: column;
                width: 70%;

              }

              .column1__header{

                /*Box model*/

                display: flex;
                flex-direction: row;
                gap: 1rem;
                width: 50rem;
                align-items: center;
              }





              .column1__buttons{

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                margin-bottom: 1rem;
                
               
              }

              .column1__buttons button{

                /*Box model*/

                margin-right: 1rem;

              }



              .column1__search{

                /*Box model*/

                display: flex;
                flex-direction: row;
                width: 26rem;

              }

              .search__icon{

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                margin-right: 0.5rem;

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



                ::placeholder{

                /*Text*/

                color: ${colors.primary};

                }



            `}
        </style>
      </SettingsLayout>

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

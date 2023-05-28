/* Static imports */

import { useSession, getSession, signIn} from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { colors } from 'styles/frontend-conf'
import { server } from '/server'
import global from 'styles/global.module.css'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Layout from '/components/Layout/Layout'

/* Dynamic imports */

const Loader = dynamic(() => import('/components/Loader/Loader'))
const SavedPost = dynamic(() => import('/components/SavedPost/SavedPost'))
const SettingsLayout = dynamic(() => import('/components/SettingsLayout/SettingsLayout'))
const LazyLoad = dynamic(() => import('react-lazyload'))


/*
    * @author Sergio García Navarro
    * @returns Saved posts page
    * @version 1.0
    * @date 13/12/2020
    * @description Saved posts page
*/

export default function Saved ({users}) {
  
  const { data: session, status } = useSession({ required: true })
  const [saves, setSaves] = useState(users?.saves)
  

  const Router = useRouter()


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
            

            {saves?.length === 0 && <div><p className={global.loading2}>No hay ninguna publicación.</p></div>}
            {saves.map((save) => {
              return (
                <>
                  <SavedPost key={save} id={save} />
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

              .filter__list{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            align-self: flex-end;

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

export async function getServerSideProps(context){

  context.res.setHeader('Cache-Control','public, s-maxage=10, stale-while-revalidate=59')

  const session = await getSession(context)

  const res = await fetch(`${server}/api/users/${session?.user.username}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })


  const data = await res.json()

  return{
    props: {
      users: JSON.parse(JSON.stringify(data))
  }
}
}
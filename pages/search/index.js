import { useSession, signIn } from 'next-auth/react'
import Head from 'next/head'
import Layout from 'components/Layout/Layout'
import global from '/styles/global.module.css'
import Loader from 'components/Loader/Loader'
import {server} from "/server"


export default function Search () {

  const { data: session, status } = useSession({ required: true })


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
        <Head><title>Búsqueda</title></Head>
        <p className={global.title}>Destacado</p>
        <p className={global.secondary}>Usuarios</p>
        <p className={global.secondary}>Publicaciones</p>
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

  const res = await fetch(`${server}/search/${context.query.keyword}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }})

  const data = await res.json();

  return {
    props: {
      data
    }
  }
}

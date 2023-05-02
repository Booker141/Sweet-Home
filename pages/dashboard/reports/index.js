import global from '/styles/global.module.css'
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import {colors, fonts} from '/styles/frontend-conf'
import Layout from '/components/Layout/Layout'
import Head from 'next/head'
import Loader from '/components/Loader/Loader'
import Report from '/components/Report/Report'
import {server} from '/server'


export default function Reports () {

  const { data: session, status } = useSession({ required: true })
  const router = useRouter()

  if (status == 'loading') {
    return (
      <>
        <div className={global.loading}><p>Cargando..</p></div>
        <Loader />
      </>
    )
  }
  if (session.user.role === 'administrador') {
    return (
      <>
        <Layout>
          <Head>
            <title>Panel de informes</title>
          </Head>
          <div className="report__header">
            <h1 className={global.title}>Panel de informes</h1>
          </div>
          
          <style jsx>{`

            

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
      </>
    )
  } else {
    return (
      <Layout>
        <>
          <div className={global.content}>
            <div className='message'>
              <h1 className={global.title}>Para acceder a esta página debe ser administrador</h1>
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
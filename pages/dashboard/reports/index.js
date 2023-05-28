/* Static imports */

import { useSession, signIn } from 'next-auth/react'
import {colors, fonts} from '/styles/frontend-conf'
import {server} from '/server'
import Head from 'next/head'
import global from '/styles/global.module.css'
import dynamic from 'next/dynamic'

/* Dynamic imports */

const Loader = dynamic(() => import('/components/Loader/Loader'))
const Layout = dynamic(() => import('/components/Layout/Layout'))
const Report = dynamic(() => import('/components/Report/Report'))
const LazyLoad = dynamic(() => import('react-lazyload'))



export default function Reports ({reports}) {

  const { data: session, status } = useSession({ required: true })

  if (status == 'loading') {
    return (
      <>
        <div className={global.loading}><p>Cargando..</p></div>
        <Loader />
      </>
    )
  }
  if (session?.user.role === 'administrador') {
    return (
      <>
        <Layout>
          <Head>
            <title>Panel de informes | Sweet Home</title>
          </Head>
          <div className="report__header">
            <h1 className={global.title}>Panel de informes</h1>
          </div>
          <div className='reports'>
                      {reports?.length === 0 && <div><p className={global.loading2}>No hay informes que consultar.</p></div>}
                      {reports.map(({_id, username, reason, image, createdAt}) => {
                          return(
                              <>
                                  <Report key={_id} id={_id} username={username} reason={reason} image={image} createdAt={createdAt}/>
                              </> 
                      )})}

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
              <h1 className={global.title7}>Para acceder a esta página debe ser administrador</h1>
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

  const res = await fetch(`${server}/api/reports`, {method: 'GET', headers: {'Content-Type': 'application/json'}})

  const data = await res.json()
  const reports = JSON.parse(JSON.stringify(data))

  return{
    props: {
      reports: reports
    }
  }
}
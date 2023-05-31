/* Static imports */

import {colors} from '/styles/frontend-conf.js'
import { useSession, getSession,  signIn } from 'next-auth/react'
import {useRouter} from 'next/router'
import {server} from "/server"
import Head from 'next/head'
import global from '/styles/global.module.css'
import dynamic from 'next/dynamic'

/* Dynamic imports */

const Loader = dynamic(() => import('/components/Loader/Loader'))
const Layout = dynamic(() => import('/components/Layout/Layout'))
const Complaint = dynamic(() => import('/components/Complaint/Complaint'))
const LazyLoad = dynamic(() => import('react-lazyload'))


export default function Complaints ({complaints}){

    const {data: session, status} = useSession({required: true})
    const Router = useRouter()
   
    if (status == 'loading') {
        return (
          <>
            <div className={global.loading}><p>Cargando..</p></div>
            <Loader />
          </>
        )
    }
    if(session){
        return(

            <Layout>
                <Head>
                    <title>Mis denuncias | Sweet Home</title>
                </Head>
                  <h1 className="title">Mis denuncias</h1>
                  <button className={global.buttonPrimary} onClick={() => Router.push('/createComplaintUsers')} aria-label='Crear nueva denuncia'>Crear denuncia</button>
                  <div className='complaints'>
                      
                      {complaints?.length === 0 && <div><p className={global.loading2}>No ha realizado ninguna denuncia.</p></div>}
                      {complaints.map(({_id, description, adminId, createdAt, isApproved, isChecked, usernameFrom, usernameTo, typeComplaint}) => {
                          return(
                              <>
                                  <Complaint key={_id} id={_id} description={description} adminId={adminId} createdAt={createdAt} isApproved={isApproved} isChecked={isChecked} usernameFrom={usernameFrom} usernameTo={usernameTo} typeComplaint={typeComplaint.name} />
                              </> 
                      )})}

                    </div>
                <style jsx>{`


                    .complaints{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        gap: 1rem;
                        margin-top: 2rem;
                        margin-bottom: 1rem;

                    }

                    .title{


                      /*Text*/

                      font-size: 3.5rem;
                      font-weight: bold;
                      background-color: ${colors.primary};
                      font-family: "Archivo Black", sans-serif;
                      background-image: linear-gradient(180deg, #f0810f, #ffe45c 130%);
                      background-repeat: repeat;
                      -webkit-background-clip: text;
                      -webkit-text-fill-color: transparent; 
                      background-size: 100%
                      margin-bottom: 2rem;
                    }

                `}
                </style>
            </Layout>
        )
        } else {
                    return (
                      <Layout>
                        <div className={global.content}>
                          <div className='message'>
                            <h1 className={global.title7}>Para acceder a esta página debe ser administrador de Sweet Home</h1>
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
                      </Layout>
                    )
                  }
}

/**
 * It fetches the data from the API and returns it as props to the page
 * @returns An object with a property called props.
 */
export async function getServerSideProps(context){

  context.res.setHeader('Cache-Control','public, s-maxage=10, stale-while-revalidate=59')

    const session = await getSession(context)

    const res = await fetch(`${server}/api/complaints/${session?.user.username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })


    const complaints = await res.json();

    return {
        props: {
            complaints: JSON.parse(JSON.stringify(complaints)), 
        }
    }
}
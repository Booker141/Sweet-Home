/* Static imports */

import {colors} from '/styles/frontend-conf.js'
import { useSession, signIn } from 'next-auth/react'
import {server} from "/server"
import dynamic from 'next/dynamic'
import Head from 'next/head'
import global from '/styles/global.module.css'

/*Dynamic imports*/

const Loader = dynamic(() => import('/components/Loader/Loader'))
const Layout = dynamic(() => import('/components/Layout/Layout'))
const BlockedUser = dynamic(() => import('/components/BlockedUser/BlockedUser'))
const UnblockedUser = dynamic(() => import('/components/UnblockedUser/UnblockedUser'))
const LazyLoad = dynamic(() => import('react-lazyload'))


export default function BlockedUsers ({blockedUsers, unblockedUsers}){

    const {data: session, status} = useSession({required: true})

    if (status == 'loading') {
        return (
          <>
            <div className={global.loading}><p>Cargando..</p></div>
            <Loader />
          </>
        )
    }
    if(session.user.role === "administrador"){
        return(

            <Layout>
                <Head>
                    <title>Usuarios bloqueados | Sweet Home</title>
                </Head>
                <div className="unblockedUsers">
                  <h1 className="title">Usuarios a bloquear</h1>
                    {unblockedUsers.length === 0 && <div><p className={global.loading2}>No hay usuarios con más de cinco denuncias y que no haya sido bloqueado.</p></div>}
                    {unblockedUsers.map(({_id, username, email, image, role, complaints}) => {
                        return(
                            <>
                                <BlockedUser key={_id} id={_id} username={username} email={email} image={image} role={role} complaints={complaints} />
                            </>
                        )
                    })}

                </div>
                <div className="blockedUsers">
                  <h1 className="title">Usuarios bloqueados</h1>
                    {blockedUsers.length === 0 && <div><p className={global.loading2}>No hay usuarios bloqueados.</p></div>}
                    {blockedUsers.map(({_id, username, email, role, image, complaints}) => {
                        return(
                            <>
                                <UnblockedUser key={_id} id={_id} username={username} email={email} image={image} role={role} complaints={complaints} />
                            </>
                        )
                    })}

                </div>

                <style jsx>{`


                    .blockedUsers{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
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
                      text-align: center;
                      margin-bottom: 3rem;
                      padding: 0;
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
                            <h1 className={global.title}>Para acceder a esta página debe ser administrador de Sweet Home</h1>
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
export async function getServerSideProps(){


      const res = await fetch(`${server}/api/unblockedUsers`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const block = await fetch(`${server}/api/blockedUsers`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

    const unblockedUsers = await res.json();
    const blockedUsers = await block.json();

    return {
        props: {
            unblockedUsers: JSON.parse(JSON.stringify(unblockedUsers)), blockedUsers: JSON.parse(JSON.stringify(blockedUsers))
        }
    }
}
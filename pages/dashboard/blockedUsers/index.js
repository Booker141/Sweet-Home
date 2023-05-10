import global from '/styles/global.module.css'
import {colors} from '/styles/frontend-conf.js'
import Layout from 'components/Layout/Layout'
import Head from 'next/head'
import { useSession, signIn } from 'next-auth/react'
import BlockedUser from "/components/BlockedUser/BlockedUser"
import Loader from '/components/Loader/Loader'
import {server} from "/server"



export default function BlockedUsers ({blockedUsers}){

    const {data: session, status} = useSession({required: true})

    if (status == 'loading') {
        return (
          <>
            <div className={global.loading}><p>Cargando..</p></div>
            <Loader />
          </>
        )
    }
    if(session.user.role === "admin"){
        return(

            <Layout>
                <Head>
                    <title>Usuarios bloqueados</title>
                </Head>
                <div className="blockedUsers">
                  <h1 className="title">Bloquear usuarios</h1>
                    {blockedUsers.length === 0 && <div><p className={global.loading2}>No hay usuarios bloqueados.</p></div>}
                    {blockedUsers.map(({_id, username, email, role, complaints}) => {
                        return(
                            <>
                                <BlockedUser key={_id} id={_id} username={username} email={email} firstname={firstname} lastname={lastname} role={role} complaints={complaints} />
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


      const res = await fetch(`${server}/api/blockedUsers`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

    const blockedUsers = await res.json();

    return {
        props: {
            blockedUsers: JSON.parse(JSON.stringify(blockedUsers))
        }
    }
}
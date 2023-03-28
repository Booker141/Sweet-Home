import global from '/styles/global.module.css'
import {colors} from '/styles/frontend-conf.js'
import Layout from 'components/Layout/Layout'
import Head from 'next/head'
import { useSession } from 'next-auth/react'
import {useState, useEffect} from 'react'
import Complaint from "/components/Complaint/Complaint"
import Loader from '/components/Loader/Loader'
import {server} from "/server"


export default function Complaints ({complaints}){

    const {data: session, status} = useSession({required: true})
    const [blockedUsers, setBlockedUsers] = useState({})

   /**
    * It fetches the data from the server and sets the state of the blockedUsers array to the data that
    * was fetched.
    */
    async function getBlockedUsers() {

        const response = await fetch(`${server}/api/blockedUsers`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
        })
    
        const data = await response.json()
    
        setBlockedUsers(data);
    }

    useEffect(() => {

        getBlockedUsers();

    }, []);

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
                    <title>Panel de denuncias</title>
                </Head>
                <div className="content">
                <div className="content__column1">
                  <div className='complaints'>
                      <h1 className="title">Denuncias</h1>
                      {complaints.length === 0 && <div><p className={global.loading}>No hay denuncias que revisar..</p></div>}
                      {complaints.map(({_id, description, adminId, createdAt, isApproved, isChecked, usernameFrom, usernameTo}) => {
                          return(
                              <>
                                  <Complaint key={_id} description={description} adminId={adminId} createdAt={createdAt} isApproved={isApproved} isChecked={isChecked} usernameFrom={usernameFrom} usernameTo={usernameTo} />
                              </> 
                      )})}
                  </div>
                </div>
                <div className="content__column2">
                    <h1 className="title">Bloquear usuarios</h1>

                </div>
                </div>

                <style jsx>{`

                    .content{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: 6rem;
                        padding: 3rem;

                        /*Visuals*/

                        border: 1px solid ${colors.primary};
                        border-radius: 20px;
                        box-shadow: 5px 10px 12px 0px rgba(153,153,153,0.65);


                    }

                    .complaints{

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

export async function getServerSideProps(){

    const res = await fetch(`${server}/api/complaints`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

    const complaints = await res.json();

    return {
        props: {
            complaints: JSON.parse(JSON.stringify(complaints))
        }
    }
}
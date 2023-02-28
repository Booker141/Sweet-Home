import global from '/styles/global.module.css'
import Layout from 'components/Layout/Layout'
import Head from 'next/head'
import { useSession } from 'next-auth/react'
import Complaint from "/components/Complaint/Complaint"
import {server} from "/server"

export default function Complaints ({complaints}){

    const {data: session, status} = useSession({required: true})

    if (status == 'loading') {
        return (
          <>
            <div className={global.loading}><p className={global.title}>Cargando..</p></div>
            <Loader />
          </>
        )
    }
    if(session.user.role === "admin"){
        return(

            <Layout>
                <Head>
                    <title>Denuncias</title>
                </Head>
                <div className='complaints'>
                    <h1 className={global.title4}>Denuncias</h1>
                    {complaints.length === 0 && <div><p className={global.loading}>No hay denuncias que revisar..</p></div>}
                    {complaints.map(({_id, description, adminId, createdAt, isApproved, isChecked, userIdFrom, userIdTo}) => {
                        return(
                            <>
                                <Complaint key={_id} description={description} adminId={adminId} createdAt={createdAt} isApproved={isApproved} isChecked={isChecked} usernameFrom={usernameFrom} usernameTo={usernameTo} />
                            </> 
                    )})}
                </div>

                <style jsx>{`

                    .complaints{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        gap: 1rem;
                        margin-top: 2rem;
                        margin-bottom: 1rem;

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

    const res = await fetch(`${server}/complaints`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

    const complaints = await res.json();

    return {
        props: {
            complaints
        }
    }
}
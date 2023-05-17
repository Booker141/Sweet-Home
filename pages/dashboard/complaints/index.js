import global from '/styles/global.module.css'
import {colors} from '/styles/frontend-conf.js'
import Layout from 'components/Layout/Layout'
import Head from 'next/head'
import { useSession, signIn } from 'next-auth/react'
import Complaint from "/components/Complaint/Complaint"
import Loader from '/components/Loader/Loader'
import {useRouter} from 'next/router'
import {server} from "/server"


/**
 * It renders the complaints page, which is only accessible by the admin
 * @returns It is being returned a layout with a content div that has two columns. The first column has
 * a title and a list of complaints. The second column has a title and a list of blocked users.
 */
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
    if(session.user.role === "administrador"){
        return(

            <Layout>
                <Head>
                    <title>Panel de denuncias | Sweet Home</title>
                </Head>
                  <h1 className="title">Denuncias</h1>
                  <button className={global.buttonPrimary} onClick={() => Router.push(`${server}/blockedUsers`)}>Usuarios bloqueados</button>
                  <div className='complaints'>
                      {complaints.length === 0 && <div><p className={global.loading2}>No hay denuncias que revisar.</p></div>}
                      {(complaints.filter(complaint => complaint.isChecked === true ).length === complaints.length ) && <div><p className={global.loading2}>No hay denuncias que revisar.</p></div>}
                      {complaints.filter(complaint => complaint.isChecked === false ).map(({_id, description, adminId, createdAt, isApproved, isChecked, usernameFrom, usernameTo}) => {
                          return(
                              <>
                                  <Complaint key={_id} id={_id} description={description} adminId={adminId} createdAt={createdAt} isApproved={isApproved} isChecked={isChecked} usernameFrom={usernameFrom} usernameTo={usernameTo} />
                              </> 
                      )})}

                    </div>
                    <h1 className="title">Denuncias comprobadas denegadas</h1>
                    <div className="complaints">
                      {complaints.length === 0 && <div><p className={global.loading2}>No hay denuncias que revisar.</p></div>}
                      {(complaints.filter(complaint => complaint.isChecked === true ).length === complaints.length ) && <div><p className={global.loading2}>No hay denuncias que revisar.</p></div>}
                      {complaints.filter(complaint => complaint.isChecked === true && complaint.isApproved === false ).map(({_id, description, adminId, createdAt, isApproved, isChecked, usernameFrom, usernameTo}) => {
                          return(
                              <>
                                  <Complaint key={_id} id={_id} description={description} adminId={adminId} createdAt={createdAt} isApproved={isApproved} isChecked={isChecked} usernameFrom={usernameFrom} usernameTo={usernameTo} />
                              </> 
                      )})}
                    </div>
                    <h1 className="title">Denuncias comprobadas validadas</h1>
                    <div className="complaints">
                        {complaints.length === 0 && <div><p className={global.loading2}>No hay denuncias que revisar.</p></div>}
                        {(complaints.filter(complaint => complaint.isChecked === true ).length === complaints.length ) && <div><p className={global.loading2}>No hay denuncias que revisar.</p></div>}
                        {complaints.filter(complaint => complaint.isChecked === true && complaint.isApproved === true ).map(({_id, description, adminId, createdAt, isApproved, isChecked, usernameFrom, usernameTo}) => {
                            return(
                                <>
                                    <Complaint key={_id} id={_id} description={description} adminId={adminId} createdAt={createdAt} isApproved={isApproved} isChecked={isChecked} usernameFrom={usernameFrom} usernameTo={usernameTo} />
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

    const res = await fetch(`${server}/api/complaints`, {
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
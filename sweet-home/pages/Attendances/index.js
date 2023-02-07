import Head from 'next/head'
import global from "styles/global.module.css"
import Layout from "/components/Layout/Layout"
import {useSession} from 'next-auth/react'
import {useRouter} from 'next/router';



/*
    * @author Sergio García Navarro
    * @returns Attendances page
    * @version 1.0
    * @date 13/12/2020
    * @description This page is the attendances page of the application
*/
/**
 * It returns a Layout component, which contains a Head component, a Header component, and a Footer
 * component
 * @returns the Layout component, which is a wrapper for the Header, Footer and the content of the
 * page.
 */
export default function Attendances({attendances}) {

        const {data: session, status} = useSession({required: true});
        const Router = useRouter();

        if(status == "loading"){
          return <div className={global.loading}><p className={global.title}>Cargando..</p></div>
        }
        if(session){
          return (
            <Layout>
                    <Head>
                        <title>Cuidados</title>
                    </Head>
                    <h1 className={global.title}>Foro de cuidados</h1>
                      {attendances.length === 0 && <div><p className={global.loading}>Cargando..</p></div>}
                      {attendances.map(({_id, location, description, animal, type, image, userId, breed, comments, username}) => {
                          return (
                            <>
                              <Attendance key={_id} id={_id} location={location} description={description} animal={animal} type={type} image={image} userId={userId} breed={breed} comments={comments} username={username}/>
                            </>
                          )
                        })}
            </Layout>
          )
        }  else {
          return(
              <Layout>
                  <>
                      <div className={global.content}>
                          <div className="message">
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
        
                          
                      `}</style>
                  </>
              </Layout>
          )
        
        }    
        

}

export async function getServerSideProps() {

    const res = await fetch('http://localhost:3000/api/attendances', {
      method: "GET",
      headers: {
          "Content-Type": "application/json"
      }
    });

    const attendances = await res.json();

    return {
        props: {
            attendances: JSON.parse(JSON.stringify(attendances))
        }
    }
}




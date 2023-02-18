import {useSession} from 'next-auth/react'
import Head from 'next/head'
import Layout from "components/Layout/Layout"
import global from "/styles/global.module.css"
import {server} from "/server"
import Loader from "components/Loader/Loader"
export default function Search(){

    const {data: session, status} = useSession({required: true});

    if(status == "loading"){
        return (
          <>
            <div className={global.loading}><p className={global.title}>Cargando..</p></div>
            <Loader/>
          </>
          )
    }
    if(session){
    return(
        <Layout>
            <Head><title>Buscar</title></Head>
            <p className={global.title}>Buscar</p>
        </Layout>
    )

    }else {
        return(
            <Layout>
                <>
                    <div className={global.content}>
                        <div className="message">
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

                        
                    `}</style>
                </>
            </Layout>
        )
      
      }

}
import {useSession} from 'next-auth/react'
import global from '../../../../styles/global.module.css'
import Layout from '../../../../components/Layout'
import Head from 'next/head'



export default function createThread(){

    const {data: session, status} = useSession({required: true});

    if(status == "loading"){
        return <div className={global.loading}><p className={global.title}>Cargando..</p></div>
    }
    if(session){
        return(
            <Layout>
                <Head>
                    <title>Crear hilo</title>
                </Head>
                <h1 className={global.title}>Crear hilo</h1>
            </Layout>
        )
    }else {
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
import Layout from '../../../components/Layout/Layout'
import Head from 'next/head'
import global from '../../../styles/global.module.css'
import {useSession} from 'next-auth/react'
export default function Statistics(){
    
    const {data: session, status} = useSession({required: true});

    if(status == "loading"){
        return <div className={global.loading}><p className={global.title}>Cargando..</p></div>
    }
    if(session.user.role === "gerente"){
        return(
            <Layout>
                <Head><title>Estadísticas</title></Head>
                <h1 className={global.title}>Estadísticas</h1>  
            </Layout>


        )
    }else {
        return(
            <Layout>
                <>
                    <div className={global.content}>
                        <div className="message">
                            <h1 className={global.title}>Para acceder a esta página debe ser gerente</h1>
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
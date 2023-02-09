import global from '../../styles/global.module.css';
import {colors} from '../../styles/frontend-conf';
import {useSession} from 'next-auth/react';
import {useRouter} from 'next/router';
import Layout from '../../components/Layout/Layout';
import Head from 'next/head';
import {useState} from 'react';


export default function Dashboard(){

    const {data: session, status} = useSession({required: true});

    if(status == "loading"){
        return <div className={global.loading}><p className={global.title}>Cargando..</p></div>
    }
    if(session.user.role === "admin"){
        return(
            <>
                <Layout>
                    <Head>
                        <title>Panel</title>
                    </Head>
                    <h1 className={global.title}>Panel de administración</h1>
                    <p className={global.text}>Bienvenido a tu dashboard</p>
                </Layout>
            </>
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
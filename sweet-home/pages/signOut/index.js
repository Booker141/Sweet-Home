import Head from 'next/head'
import {useSession, signIn} from 'next-auth/react'
import Router from 'next/router'
import styles from "styles/global.module.css"
import Layout from "components/Layout/Layout"

export default function SignOut(){

    const {data: session} = useSession({required: true});

    if (session){
        return(
            <Layout>
                <>
                    <Head>Cerrar sesión</Head>
                    <div className={styles.content}>
                        <div className="center">
                            <div className="card">
                                <h2 className={styles.title}>Cerrar sesión</h2>
                                <p className={styles.text}>¿Estás seguro de que quieres cerrar sesión?</p>
                                <div className="buttons">
                                    <button className={styles.buttonPrimary} onClick={() => Router.push("/")}>Sí</button>
                                    <button className={styles.buttonTertiary} onClick={() => Router.back()}>No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <style jsx>{`

                        .center{

                            /*Box model*/

                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 100%;
                            height: 100%;
                        }

                        .card{
                            
                            /*Box model*/

                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            width: 50rem;
                            height: 20rem;
                            padding: 1rem;

                            /*Visuals*/

                            border: 2px solid #f0810f;
                            border-radius: 10px;
                            box-shadow: 10px 10px 5px 0px rgba(214,214,214,0.42);
                        }

                        .buttons{

                            /* Box model*/

                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                            width: 50%;
                        }

                        .buttons button{

                            /*Box model*/

                            margin: 1rem;
                        }

                    
                    
                    `}</style>
                </>
            </Layout>
        )}
        else{
            return signIn();
        }
}
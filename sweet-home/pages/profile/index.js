import { useSession, signIn, signOut} from "next-auth/react"
import styles from "styles/global.module.css"
import Layout from "components/Layout/Layout"

export default function Profile(){

    const {data: session} = useSession({required: true});

    if (session){
        return(
            <Layout>
                <>
                    <div className={styles.content}>
                        <h1>Has iniciado sesión</h1>
                        <div>{session.user.image}</div>
                        <div>{session.user.email}</div>
                        <button onClick={() => signOut()}>Cerrar sesión</button>
                    </div>
                </>
            </Layout>
        )
    } else {
        return(
            <Layout>
                <>
                    <div className={styles.content}>
                        <div className="message">
                            <h1 className={styles.title}>Para acceder a esta página debe iniciar sesión</h1>
                        </div>
                    </div>
                    <style jsx>{`

                        .message{

                            /*Box model*/

                            display: flex;
                            justify-content: center;
                            align-items: center;
                            
                        }
                        
                    `}</style>
                </>
            </Layout>
        )
    }



}

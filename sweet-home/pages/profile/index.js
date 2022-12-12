import { getSession, signIn, signOut} from "next-auth/react"
import Image from "next/image"
import styles from "styles/global.module.css"
import Layout from "components/Layout/Layout"


export default function Profile({session}){

    if (session){
        return(
            <Layout>
                <>
                    <div className={styles.content}>
                        <h1 className={styles.title}>Perfil</h1>
                        <Image src={session.user.image} width={40} height={40}/>
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

export async function getServerSideProps(context) {
    const session = await getSession(context)
    return {
      props: {session},
    }
  }

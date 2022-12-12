import { useSession, signIn, signOut} from "next-auth/react"
import Image from "next/image"
import global from "styles/global.module.css"
import Layout from "components/Layout/Layout"


export default function Profile(){

    const {data: session, status} = useSession({required: true, onUnauthenticated(){ Router.push("/signIn")}});
    if (session){
        return(
            <Layout>
                <>
                    <div className={global.content}>
                        <h1 className={global.title}>Perfil</h1>
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


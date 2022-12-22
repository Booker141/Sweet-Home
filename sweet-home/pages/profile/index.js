import {useSession, signIn} from "next-auth/react"
import {useRouter} from 'next/router'
import Head from 'next/head'
import Image from "next/image"
import global from "styles/global.module.css"
import Layout from "components/Layout/Layout"

export default function Profile({posts}){

    const {data: session, status} = useSession({required: true});
    const router = useRouter();

    if (status == "authenticated"){
        return(
            <Layout>

                    <Head><title>Mi perfil</title></Head>

                       <div className="container__profile">
                            <Image style={{borderRadius: '50px'}} width={100} height={100}/>
                            <div className="profile__text">
                                <div className={global.title2}>Nombre</div>
                                <div className={global.title2}>Correo</div>
                                <p className={global.text}>Biografía</p>
                            </div>
                            <button className={global.buttonTertiary} onClick={() => router.push("/changeProfile")}>Editar perfil</button>
                        </div>
                        <div className="posts">
                            {posts.map(({_id, userImage, username, location, mediaUrl, description, comments}) => {
                                return (
                                    <>
                                    <div key={_id}>
                                        {username}
                                    </div>
                                    <div>
                                        {location}
                                    </div>
                                    <div>
                                        {mediaUrl}
                                    </div>
                                    <div>
                                        {description}
                                    </div>
                                    <div>
                                        {comments.map(({userImage, userName, description}) => {
                                            return (
                                                <>
                                                    <div key={_id}>
                                                        {userImage}
                                                    </div>
                                                    <div>
                                                        {userName}
                                                    </div>
                                                    <div>
                                                        {description}
                                                    </div>
                                                </>
                                            )})}
                                    </div>
                                    </>
                                )})}
                        </div>
                        
                <style jsx>{`

                    .container__profile{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                    
                    }

                    .profile__text{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        
                        align-items: center;

                    }
                `}</style>
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

export async function getServerSideProps(context){



    let res = await fetch("http://localhost:3000/api/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    });


    let posts = await res.json();

  
    return {
        props: {
             posts: JSON.parse(JSON.stringify(posts)),
        }
    }
}


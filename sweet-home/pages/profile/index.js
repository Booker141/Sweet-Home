import {useSession, getSession, signIn} from "next-auth/react"
import {useRouter} from 'next/router'
import Image from "next/image"
import global from "styles/global.module.css"
import Layout from "components/Layout/Layout"
import connectionDB from "../api/lib/MongoDB"


export default function Profile(user, posts){

    const {data: session, status} = useSession({required: true, onUnauthenticated(){ Router.push("/signIn")}});
    const router = useRouter();
    console.log(session);
    if (session){
        return(
            <Layout>
                <>
                    <div className={global.content}>
                       <div className="container__profile">
                            <Image style={{borderRadius: '50px'}} src={session.user.image} width={100} height={100}/>
                            <div className="profile__text">
                                <div className={global.title2}>{session.user.name}</div>
                                <div className={global.title2}>{session.user.email}</div>
                                <p className={global.text}>{user.biography}</p>
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
                                        {comments}
                                    </div>
                                    </>
                                )})}
                        </div>
                    </div>
                </>
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

    const session = getSession(context);
    const client = await connectionDB;
    console.log(session);

    let res = await fetch("http://localhost:3000/api/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    });
    let posts = await res.json();
    const db = client.db();
    const userEmail = session.user.email;
    const user = await db.collection("users").findOneByEmail(userEmail).toArray();


    return {
        props: {
            user, posts
        }
    }
}


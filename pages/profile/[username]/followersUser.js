import {useSession} from "next-auth/react"
import {useState, useEffect} from 'react'
import Head from 'next/head'
import global from "styles/global.module.css"
import Layout from "components/Layout/Layout"
import Follower from "components/Follower/Follower"


export default function FollowersUser({user}) {

    const {data: session, status} = useSession({required: true})
    const [followers, setFollowers] = useState([]);
    const numFollowers = followers.length;

    useEffect(() => {
        if (session){
            if(user.followers.length !== 0)
                setFollowers(user.followers);
        }
    }, [])

    console.log(user);
    if(status == "loading"){
        return <div className={global.loading}><p className={global.title}>Cargando..</p></div>
    }
    if (session){
        return(
            <Layout>
            <Head><title>Seguidores</title></Head>
                    <h1 className={global.title}>Seguidores</h1>
                    <p className={global.text}>Te siguen {numFollowers} personas</p>
                    <div className="followers">
                        {followers.map((_id) => (
                            <Follower key={_id} id={_id}/>
                        ))}
                    </div>
                    <style jsx>{`
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

    const res = await fetch(`http://localhost:3000/api/users/${context.query.username}`,
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const user = await res.json();

    return{
        props: {
            user,
        }
    }   
}
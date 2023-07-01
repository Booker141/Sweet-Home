/* Static imports */

import { useSession, signIn } from "next-auth/react";
import { useState } from "react";
import { colors } from "/styles/frontend-conf";
import { server } from "/server";
import Head from "next/head";
import global from "styles/global.module.css";
import dynamic from "next/dynamic";

/* Dynamic imports */

const Loader = dynamic(() => import("/components/Loader/Loader"));
const Layout = dynamic(() => import("/components/Layout/Layout"));
const Follower = dynamic(() => import("/components/Follower/Follower"));
const LazyLoad = dynamic(() => import("react-lazyload"));

/**
 * @author Sergio García Navarro
 * @returns Followers page
 * @version 1.0
 * @description Followers page
 */
export default function FollowerUser({ user }) {
  const { data: session, status } = useSession({ required: true });
  const [followers, setFollowers] = useState(user?.followers);
  const numFollowers = followers?.length;

  if (status === "loading") {
    return (
      <>
        <div className={global.loading}>
          <p>Cargando..</p>
        </div>
        <Loader />
      </>
    );
  }
  if (session) {
    return (
      <Layout>
        <Head>
          <title>Seguidores | Sweet Home</title>
        </Head>
        <h1 className="title">Seguidores</h1>
        {numFollowers === 0 && (
          <p className={global.text}>No le sigue ningún usuario</p>
        )}
        <p className={global.text}>
          Le siguen actualmente {numFollowers} usuarios.
        </p>
        <div className="follower">
          {followers.map((id) => (
              <Follower key={id} id={id} />
          ))}
        </div>
        <style jsx>{`
        
          .title{

             /*Text*/

             font-size: 3.5rem;
                        font-weight: 600;
                        background-color: ${colors.primary};
                        font-family: "Archivo Black", sans-serif;
                        background-image: linear-gradient(180deg, #f0810f, #ffe45c 170%);
                        background-repeat: repeat;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent; 
                        background-size: 100%
                        text-align: center;

          }

          p{

            /*Box model*/

            margin-bottom: 4rem;
          }
        
        
        
        
        
        `}</style>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <>
          <div className={global.content}>
            <div className="message">
              <h1 className={global.title7}>
                Para acceder a esta página debe iniciar sesión
              </h1>
              <button className={global.buttonPrimary} onClick={() => signIn()}>
                Iniciar sesión
              </button>
            </div>
          </div>
          <style jsx>
            {`

                        .message{

                            /*Box model*/

                            display: flex
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            
                            
                        }
                        
                    `}
          </style>
        </>
      </Layout>
    );
  }
}

export async function getServerSideProps(context) {


  const res = await fetch(`${server}/api/users/${context.query.username}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const user = await res.json();

  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
    },
  };
}

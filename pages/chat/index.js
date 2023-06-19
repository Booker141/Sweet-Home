/* Static imports */

import { useSession, getSession, signIn } from "next-auth/react";
import { server } from "/server";
import {colors} from '/styles/frontend-conf'
import chatImage from '/public/Chat-1.svg'
import Head from "next/head";
import Layout from "components/Layout/Layout";
import global from "/styles/global.module.css";
import Loader from "components/Loader/Loader";
import ChatSidebar from '/components/ChatSidebar/ChatSidebar';
import dynamic from 'next/dynamic'


/* Dynamic imports */

const FallbackImage = dynamic(() =>
  import("/components/FallbackImage/FallbackImage")
);

/**
 * @author Sergio García Navarro
 * @returns Abandoned page
 * @version 1.0
 * @description Abandoned page
 */
export default function Chat({users}) {
  const { data: session, status } = useSession({ required: true });

  
  if (status == "loading") {
    return (
      <>
        <div className={global.loading}>
          <p>Cargando..</p>
        </div>
        <Loader />
      </>
    );
  }
  if (session?.user.role === "usuario") {
    return (
      <Layout>
        <Head>
          <title>Chat | Sweet Home</title>
        </Head>

        <div className="chat__container">
          <ChatSidebar users={users}/>
          <div className="welcome__chat">
            <h1>Bienvenid@ a tus chats</h1>
            <FallbackImage
                src={chatImage}
                style={{ borderRadius: "50px" }}
                alt="Imagen de chat por defecto"
                width={1000}
                height={1000}
              />
          </div>
        </div>

        
        <style jsx>{`

              .chat__container{

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 1rem
                
              }

              .welcome__chat{

                /*Box model*/

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 80vh;
                width: 50vw;
                padding: 1rem;
            

                /*Visuals*/

                border-radius: 20px;
                border: 2px solid ${colors.primary};

                }
            
              h1{
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
            
            `}</style>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className={global.content}>
          <div className="message">
            <h1 className={global.title}>
              Para acceder a esta página debe ser administrador de Sweet Home
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
      </Layout>
    );
  }
}

export async function getServerSideProps(context){

context.res.setHeader(
  "Cache-Control",
  "public, s-maxage=10, stale-while-revalidate=59"
);

const session = await getSession(context);

const res = await fetch(`${server}/api/users/${session?.user.username}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
});

const user = await res.json();

return {
  props: {
    users: JSON.parse(JSON.stringify(user)),
  },
}
}

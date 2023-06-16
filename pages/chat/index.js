/* Static imports */

import { useSession, getSession, signIn } from "next-auth/react";
import {useRouter} from 'next/router'
import { server } from "/server";
import {colors} from '/styles/frontend-conf'
import {AiFillWechat} from 'react-icons/ai'
import Head from "next/head";
import Layout from "components/Layout/Layout";
import global from "/styles/global.module.css";
import Loader from "components/Loader/Loader";
import ChatSidebar from '/components/ChatSidebar/ChatSidebar';
import dynamic from 'next/dynamic'


/* Dynamic imports */

const ChatRoom = dynamic(() =>
import("/components/ChatRoom/ChatRoom", {ssr: false})
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
            <h1>Bienvenido a tus chats</h1>
            <AiFillWechat size={150} color={colors.primary}/>
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
                height: 100vh;
                width: 50vw;
            

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

/* Static imports */

import { useSession, getSession, signIn } from "next-auth/react";
import {useRouter} from 'next/router'
import { server } from "/server";
import { useState, useEffect } from "react";
import { colors } from "/styles/frontend-conf";
import dynamic from 'next/dynamic'
import Head from "next/head";
import Layout from "components/Layout/Layout";
import global from "/styles/global.module.css";
import Loader from "components/Loader/Loader";
import ChatContact from '/components/ChatContact/ChatContact'
import chatImage from '/public/Chat-1.svg'

/* Dynamic imports */

const FallbackImage = dynamic(() =>
  import("/components/FallbackImage/FallbackImage")
);

const ChatRoom = dynamic(() => import('/components/ChatRoom/ChatRoom'), { ssr: false });

/**
 * @author Sergio García Navarro
 * @returns Abandoned page
 * @version 1.0
 * @description Abandoned page
 */
export default function ChatChannel({actualUser, otherUser}) {

  const { data: session, status } = useSession({ required: true });

  const [isShelter, setIsShelter] = useState(false)
  const [isVet, setIsVet] = useState(false)
  const [user, setUser] = useState(otherUser);
  const [messagesList, setMessagesList] = useState([])
  const [chats, setChats] = useState(actualUser?.chats)
  const [chatId, setChatId] = useState("")
  const Router = useRouter()
  const [currentChannel, setCurrentChannel] = useState(Router?.query.channel)


  const loadCurrentChat = async(chatId) => {


    const res = await fetch(`${server}/api/chatsById/${chatId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });

    const chat = await res.json()
    setCurrentChannel(chat.channel)
    setChatId(chatId)

    const message = await fetch(`${server}/api/messagesByChannel/${chat.channel}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });

    const newMessages = await message.json()

    setMessagesList(newMessages)
    
    if(session?.user.id === chat?.receiverId){
    
      const res = await fetch(`${server}/api/usersById/${chat.senderId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const otherUser2 = await res.json();
      console.log(otherUser2)

      if(otherUser2?.role.name === "protectora")
      setIsShelter(true)
      if(otherUser2?.role.name === "veterinaria" )
        setIsVet(true)
      setUser(otherUser2)


      Router.push(`${server}/chat/${chat.channel}?username=${otherUser2?.username}`)

    }
    if(session?.user.id === chat?.senderId){

      const res = await fetch(`${server}/api/usersById/${chat.receiverId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const otherUser2 = await res.json();

      if(otherUser2?.role.name === "protectora")
      setIsShelter(true)
      if(otherUser2?.role.name === "veterinaria" )
        setIsVet(true)
      setUser(otherUser2)


      Router.push(`${server}/chat/${chat.channel}?username=${otherUser2?.username}`)

    }



  }

  useEffect(() => {
    setChats(actualUser?.chats)
  },[Router.asPath])


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
  if (session?.user.role === "usuario" || session?.user.role === "veterinaria" ||session?.user.role === "protectora") {
    return (
      <Layout>
        <Head>
          <title>Chat | Sweet Home</title>
        </Head>
        <div className="chat__container">
          <div className="chatSidebar__container">
              <h1 className={global.title5}>Contactos</h1>
              <div className="chats">
                {actualUser?.chats.length === 0 && (
                  <p className={global.text2}>
                    No tiene ningún chat abierto ni seguidores con los que establecer una conversación
                  </p>
                )}
              
                {actualUser?.chats.length > 0 && 
                  chats.map(
                    (
                      chat
                    ) => {
                      return (
                        <>
                          <div className="contact" onClick={() => loadCurrentChat(chat)}>
                            <ChatContact
                              key={chat}
                              id={chat}
                            />
                          </div>     
                        </>
                      );
                    }
                  )}
              </div>
            </div>
            {Router.asPath === '/chat/welcome' && <div className="welcome__chat">
            <h1>Bienvenid@ a tus chats</h1>
            <FallbackImage
                src={chatImage}
                style={{ borderRadius: "50px" }}
                alt="Imagen de chat por defecto"
                width={1000}
                height={1000}
              />
          </div>}
          {Router.asPath != '/chat/welcome' && <ChatRoom actualUser={actualUser} otherUser={user} currentChannel={currentChannel} messages={messagesList} chatId={chatId}/>}
          </div>
                  
       
        <style jsx>{`


        .chatSidebar__container{
        
        /*Box model*/

        display: flex;
        flex-direction: column;
        align-items: center;
        height: 80vh;
        width: 20vw;
        padding: 1rem;

        /*Visuals*/

        border-radius: 20px;
        background: linear-gradient(45deg, rgba(240, 129, 15, 1) 35%, rgba(249, 166, 3, 1) 100%);
        scroll-margin: 50px 0 0 50px;
      }

      ::-webkit-scrollbar {

        width: 10px; 
        left: 2rem;
        border-radius: 20px;
        

      }

      ::-webkit-scrollbar-track {

        box-shadow: inset 0 0 10px 10px #fafafa;
        border-radius: 20px;

      }

      ::-webkit-scrollbar-thumb {

        background: rgba(240, 129, 15, 1);
        border: 1px rgba(240, 129, 15, 1) solid;
        border-radius: 20px;

      }

      .contact{

        /*Visuals*/

        cursor: pointer;
      }

      
      .contact:hover{

        /*Visuals*/

        transform: scale(1.07);
        transition: 0.3s ease all;

        }


      .chats{

        /*Box model*/

        overflow-y: auto;
        padding: 1rem;
      }

        .myMessage__date{

          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-end;
          gap: 1rem;
        }

        .otherMessage__date{

        /*Box model*/

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        }

        .buttons{

          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1.5rem;
        }



        .myMessage{

        /*Box model*/

        display: flex;
        justify-content: flex-end;
        align-items: center;
        }

        .otherMessage{
          /*Box model*/

          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        .myMessages__container p {

        /*Box model*/

        display: flex;
        align-items: center;
        justify-content: flex-end;
        }

        .otherMessages__container p {

        /*Box model*/

        display: flex;
        align-items: center;
        justify-content: flex-start;
        }

     
        .user__info{

        /*Box model*/

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;

        }






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
                height: 83vh;
                width: 50vw;
            

                /*Visuals*/

                border-radius: 20px;
                border: 2px solid ${colors.primary};

                }

                .welcome__chat h1{

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
            <h1 className={global.title7}>
              Para acceder a esta página debe ser usuario de Sweet Home
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

  const session = await getSession(context)

  const currentUser = await fetch(`${server}/api/users/${session?.user.username}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const actualUser = await currentUser.json();

  
  const res = await fetch(`${server}/api/users/${context?.query.username}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const otherUser = await res.json();

  const message = await fetch(`${server}/api/messagesByChannel/${context?.query.channel}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const messages = await message.json()


  return {
    props: {
      actualUser: JSON.parse(JSON.stringify(actualUser)), otherUser: JSON.parse(JSON.stringify(otherUser)), messages: JSON.parse(JSON.stringify(messages))
    },
  }
}

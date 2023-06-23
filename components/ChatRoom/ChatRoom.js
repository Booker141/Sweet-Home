/* Static imports */

import { useSession } from "next-auth/react";
import {useRouter} from 'next/router'
import { server } from "/server";
import { BsPatchCheckFill } from "react-icons/bs";
import { MdHealthAndSafety, MdDeleteOutline, MdClose } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import { colors, fonts } from "/styles/frontend-conf";
import { toast } from "react-toastify";
import { useChannel, configureAbly } from "@ably-labs/react-hooks";
import {AiFillWechat} from 'react-icons/ai'
import InputEmoji from "react-input-emoji";
import dynamic from 'next/dynamic'
import Message from "/components/Message/Message";
import Head from "next/head";
import global from "/styles/global.module.css";


/* Dynamic imports */

const FallbackImage = dynamic(() =>
  import("/components/FallbackImage/FallbackImage")
);
const Modal = dynamic(() => import("/components/Modal/Modal"));


/**
 * @author Sergio García Navarro
 * @returns Chat Room component 
 * @version 1.0
 * @description Chat Room component
 */

/**
 * This function is a chat room channel that receive props from page chat and displays them
 * in a chat room format with user data
 * @param props - props received from page.
 * @returns A chat established by two users.
 */
export default function ChatRoom({actualUser, otherUser, currentChannel, messages, chatId}) {

  const { data: session } = useSession({ required: true });
  console.log(otherUser)
  const [messagesChat, setMessagesChat] = useState(messages);
  const [chatMessage, setChatMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [user, setUser] = useState(otherUser);
  const messageEnd = useRef(null)

  const Router = useRouter()

  configureAbly({authUrl: `${server}/api/chatServer`, log : {level:4}})

  const [channel] = useChannel(currentChannel, (message) => {
      console.log(message)
      setMessagesChat([...messages.slice(-199), message]);
  })

  const getFull = (num) => {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  };

  const deleteChat = async () => {
    await fetch(`${server}/api/chats`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        channel: currentChannel,
        user: actualUser,
        otherUser: otherUser,
        chatId: chatId
      }),
    });


    toast.error(`Se ha eliminado la conversación con ${otherUser?.username}`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    setIsModalVisible(false);


    Router.push(`${server}/chat/welcome`)
    


  };

  


  const sendMessageEnter = () => {

    if (chatMessage.trim() === "") {
      toast.error("Debe escribir un mensaje", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    createMessage(chatMessage);

  }

  const getMessages = async () => {

    const res = await fetch(`${server}/api/messagesByChannel/${currentChannel}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });

    const newMessages = await res.json()

    setMessagesChat(newMessages)


  }

  const createMessage = async () => {

    if (chatMessage.trim() === "") {
      toast.error("Debe escribir un mensaje", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }


    
  

    const res = await fetch(`${server}/api/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        channel: currentChannel,
        description: chatMessage,
        senderId: actualUser?._id,
        receiverId: user?._id,
        username: actualUser?.username
      }),
    });

    const data = await res.json();

    if (data.error) {
      console.log(data.error);
      toast.error("Ha ocurrido un error", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {

      channel.publish({ name: "chat-message", data: chatMessage}, (err) => { 
        if(!err){ 
          console.log("Mensaje publicado correctamente") 
        } 
        else { 
          console.log(err) 
        } 
      });

      setChatMessage("")
      getMessages()
    }
  };

  useEffect(() => {

      getMessages()
      messageEnd.current?.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    
    
  }, [currentChannel])

  useEffect(() => {
    if(messageEnd){
      messageEnd.current?.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'auto' });
      });
    }  
  },[])

    return (
      <>
        <Head>
          <title>Chat con {otherUser?.username} | Sweet Home</title>
        </Head>

        <div className="chatRoom__container">
          <div className="chat__header">
            <div className="user__info">
              <FallbackImage
                  src={otherUser?.image}
                  style={{ borderRadius: "50px" }}
                  alt="Imagen de usuario"
                  width={40}
                  height={40}
                />
                <p className={global.text2__bold}>{otherUser?.username}</p>
                {otherUser?.role.name === "protectora" && (
                        <BsPatchCheckFill size={15} color={colors.secondary} />
                      )}
                {otherUser?.role.name === "veterinaria" && <MdHealthAndSafety size={20} color={colors.secondary} />}
              </div>
              <div className="buttons">
                <button onClick={() => Router.push(`${server}/profile/${otherUser?.username}`)} className={global.buttonTertiary}>
                  Ir al perfil
                </button>
                <button
                    className="delete__button"
                    onClick={() => setIsModalVisible(true)}
                  >
                    <MdDeleteOutline size={20} color={colors.secondary} />
                  </button>
              </div>   
          </div>
          <div className="default__message">
            {messagesChat?.length === 0 && (
              <div className="default__message__container">
                <AiFillWechat size={150} color={colors.primary}/>
                <p className={global.loading2}>No hay ningún mensaje.</p>
              </div>            
            )}          
          </div>
          <div className="messages__list" ref={messageEnd}> 
          {messagesChat?.length > 0 && messagesChat.map((message) => {
                if(session?.user.id === message.senderId){
                  return (
                    <>
                      <div className="myMessages__container">
                        <div className="myMessage">
                          <Message key={message._id} id={message._id} description={message.description} senderId={message.senderId} author={"me"}/>
                        </div>  
                        <div className="myMessage__date">
                          <p className={global.date}>{new Date(message.createdAt).toLocaleDateString()}</p>
                          <p className={global.date}>{getFull(new Date(message.createdAt).getHours()).toLocaleString()}:{getFull(new Date(message.createdAt).getMinutes()).toLocaleString()}</p>
                        </div>
                      </div>   
                          
                    </>
                  );}
                if(user?._id === message.senderId){
                  return (
                  <>
                    <div className="otherMessages__container">
                      <div className="otherMessage">
                        <Message key={message._id} id={message._id} description={message.description} senderId={message.senderId} author={"other"}/>
                      </div>  
                      <div className="otherMessage__date">
                          <p className={global.date}>{new Date(message.createdAt).toLocaleDateString()}</p>
                          <p className={global.date}>{getFull(new Date(message.createdAt).getHours()).toLocaleString()}:{getFull(new Date(message.createdAt).getMinutes()).toLocaleString()}</p>
                      </div>
                    </div>  
                       
                  </>
                );}           
              }  
              )}            
          </div>
            
          <div className="message__input">
            <InputEmoji
              title="Enviar un mensaje"
              type="text"
              name="text"
              id="message"
              value={chatMessage}
              onChange={(e) => setChatMessage(e)}
              onEnter={(e) => sendMessageEnter(e)}
              cleanOnEnter
              placeholder={`Escribe un mensaje 😄`}
              fontFamily={`${fonts.default}`}
              borderColor={`${colors.primary}`}
            />

            <button onClick={createMessage} className={global.buttonTertiary}>
              Enviar
            </button>
          </div>
        </div>

        {isModalVisible && (
        <Modal>
          <button
            className="close__modal"
            onClick={() => setIsModalVisible(false)}
          >
            <MdClose size={30} color={`${colors.secondary}`} />
          </button>
          <h2 className={global.title3}>Eliminar chat</h2>
          <p className={global.text2}>
            Eliminando este chat, se eliminaran todos los mensajes que se hayan enviado a través de este
          </p>
          <p className={global.text2__bold}>
            ¿Estás seguro de eliminar este chat?
          </p>
          <div className="buttons">
            <button
              className={global.buttonSecondary}
              onClick={() => deleteChat()}
            >
              Sí
            </button>
            <button
              className={global.buttonTertiary}
              onClick={() => setIsModalVisible(false)}
            >
              No
            </button>
          </div>
        </Modal>
      )}
        <style jsx>{`


        .chatRoom__container{

          /*Box model*/

          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          height: 83vh;
          width: 50vw;


          /*Visuals*/

          border: 2px solid ${colors.primary};
          border-radius: 20px;

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

        .chat__header{

        /*Box model*/

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        width: 48.5vw;

        /*Visuals*/

        border-radius: 17px 17px 0 0;
        background: linear-gradient(125deg, rgba(240, 129, 15, 1) 35%, rgba(249, 166, 3, 1) 100%);
        }

        .close__modal {
            /*Box model*/

            display: flex;
            flex-direction: row;
            align-self: flex-end;
            margin-right: 2rem;

            /*Visuals*/

            border: none;
            background: transparent;
            cursor: pointer;
            box-shadow: 0px 5px 10px 0px rgba(168, 97, 20, 1);
            border-radius: 70px;
            padding: 1rem;
          }

          .delete__button {
            /*Box model*/

            display: flex;
            align-items: center;
            padding: 1rem;

            /*Visuals*/

            border: none;
            background: transparent;
            cursor: pointer;
            box-shadow: 0px 5px 10px 0px rgba(168, 97, 20, 1);
            border-radius: 70px;
          }

        .user__info{

        /*Box model*/

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;

        }



        .message__input{

        /*Box model*/

        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        gap: 1rem;
        padding: 3rem;
        height: 5vh;
        max-height: 5vh;
        width: 45vw;
        max-width: 45vw;
        word-break: break-all;
        overflow-wrap: break-word;


        /*Visuals*/

        border-radius: 0 0 17px 17px;
        background: linear-gradient(45deg, rgba(240, 129, 15, 1) 35%, rgba(249, 166, 3, 1) 100%);

        }




        .messages__list{

          /*Box model*/

          display: flex;
          flex-direction: column;
          overflow-y: auto; 
          padding: 1rem; 

        }

        .default__message{

          /*Box model*/

          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin: auto;

        }

        .default__message__container{

        /*Box model*/

        display: flex;
        flex-direction: column;
        align-items: center;
        }

        .messages__list::-webkit-scrollbar {

          /*Box model*/

          width: 10px; 
          left: 2rem;


        }

        .messages__list::-webkit-scrollbar-track {

          /*Box model*/        

          box-shadow: inset 0 0 10px 10px transparent;
          border-left: 2px solid ${colors.primary};

        }

        .messages__list::-webkit-scrollbar-thumb {

          /*Box model*/

          background: ${colors.primary};
          border: 2px ${colors.primary} solid;
          border-radius: 20px;

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
      </>
    );
  } 
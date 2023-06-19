/* Static imports */


import { useEffect, useState, useRef } from "react";
import {useRouter} from 'next/router'
import { server } from "../../server";
import { colors, fonts } from "../../styles/frontend-conf";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { useChannel } from "@ably-labs/react-hooks";
import {AiFillWechat} from 'react-icons/ai'
import global from "../../styles/global.module.css";
import InputEmoji from "react-input-emoji";
import dynamic from 'next/dynamic'
import Message from "/components/Message/Message";

/* Dynamic imports */

const FallbackImage = dynamic(() =>
  import("/components/FallbackImage/FallbackImage")
);

/**
 * @author Sergio García Navarro
 * @returns Chat Room component
 * @version 1.0
 * @description Chat Room component
 */

export default function ChatRoom(props) {

  const { data: session, status } = useSession({ required: true });
  const [messagesList, setMessagesList] = useState([]);
  const [isMessage, setIsMessage] = useState(true)
  const [chats, setChats] = useState([]);
  const [author, setAuthor] = useState("")
  const [chatMessage, setChatMessage] = useState("");
  const [isConnected, setIsConnected] = useState(false)
  const [user, setUser] = useState({});
  const messageEnd = useRef(null)

  const [channel] = useChannel(props?.channel, (message) => {

    const prevMessages = messagesList.slice(-199);
    setMessagesList([...prevMessages, message]);

  });
  
  const Router = useRouter()

  const chatServer = async () => {

    const res = await fetch('/api/chatServer')

    messageEnd.current.scrollIntoView({ behavior: 'smooth' })

    
  };

  const getUser = async () => {
    const res = await fetch(`${server}/api/users/${Router?.query.username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json()

    setUser(data)

  }


  const getMessages = async () => {
    const res = await fetch(`${server}/api/messagesByChannel/${props?.channel}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const messages = await res.json();

    setMessagesList(messages);

      
  };

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


    setChatMessage("")
  

    const res = await fetch(`${server}/api/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        channel: props?.channel,
        description: chatMessage,
        senderId: session?.user.id,
        receiverId: user?._id,
        username: session?.user.username
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

      channel.publish({ name: "chat-message", data: chatMessage });

      toast.success("Se ha enviado el mensaje", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      getMessages();
    }
  };

  useEffect(() => {
    getMessages()
    getUser()
    chatServer();
  }, []);

    return (
        <>

        {isConnected && <div className={global.text}>Conectado al servidor</div>}
        <div className="chat__container">
          <div className="chat__header">
          <div className="user__info">
              <FallbackImage
                  src={user?.image}
                  style={{ borderRadius: "50px" }}
                  alt="Imagen de usuario"
                  width={40}
                  height={40}
                />
                <p className={global.text2__bold}>{user?.username}</p>
              </div>
              <div className="profile__button">
                <button onClick={() => Router.push(`${server}/profile/${user?.username}`)} className={global.buttonTertiary}>
                  Ir al perfil
                </button>
              </div>   
          </div>
          <div className="default__message">
            {messagesList?.length === 0 && (
              <div className="default__message__container">
                <AiFillWechat size={150} color={colors.primary}/>
                <p className={global.loading2}>No hay ningún mensaje.</p>
              </div>            
            )}          
          </div>
          <div className="messages__list">         
              {messagesList.map((message) => {
                return (
                  <>
                    <div className="message__container">
                      <div className="message">
                        <Message key={message._id} id={message._id} description={message.description} senderId={message.senderId} />
                      </div>  
                        <p className={global.date}>{new Date(message.createdAt).getHours().toLocaleString()}:{new Date(message.createdAt).getMinutes().toLocaleString()}</p>
                    </div>       
                  </>
                );
              })}
              <div ref={messageEnd} />             
          </div>
          <div className="message__input">
            <InputEmoji
              title="Enviar un mensaje"
              type="text"
              name="text"
              id="message"
              value={chatMessage}
              onChange={setChatMessage}
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

        <style jsx>{`

        .chat__container{

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

        .message{

          /*Box model*/

          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .message__container p {

          /*Box model*/

          display: flex;
          align-items: center;
          justify-content: flex-end;
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
          width: 45vw;

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

            box-shadow: inset 0 0 10px 10px #fafafa;
            border-left: 2px solid ${colors.primary};

          }

          .messages__list::-webkit-scrollbar-thumb {

            /*Box model*/

            background: ${colors.primary};
            border: 2px ${colors.primary} solid;
            border-radius: 20px;

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
import { useSession, signIn } from "next-auth/react";
import global from "../../styles/global.module.css";
import InputEmoji from "react-input-emoji";
import Message from "/components/Message/Message";
import { useEffect, useState, useRef } from "react";
import { useChannel } from "@ably-labs/react-hooks";
import { server } from "../../server";
import { colors, fonts } from "../../styles/frontend-conf";
import { toast } from "react-toastify";

/**
 * @author Sergio García Navarro
 * @returns Chat Room component
 * @version 1.0
 * @description Chat Room component
 */
export default function ChatRoom(props) {
  
  const { data: session, status } = useSession({ required: true });
  const [messagesList, setMessagesList] = useState([]);
  const [chats, setChats] = useState([]);

  const [chatMessage, setChatMessage] = useState("");
  const [isConnected, setIsConnected] = useState(false)
  const [user, setUser] = useState({});
  const messageEnd = useRef(null)

 

  



  const chatServer = async () => {

    await fetch('/api/chatServer')

    const [channel] = useChannel(props?.channel, (message) => {

      const prevMessages = messagesList.slice(-199);
      setMessagesList([...prevMessages, message]);

    });

    messageEnd.current.scrollIntoView({ behavior: 'smooth' })

    console.log(messagesList)
    
  };

  const getMessages = async () => {
    const res = await fetch(`${server}/messages/${props?.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const messages = res.json();
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
    chatServer();
    
  }, []);

    return (
        <>

        {isConnected && <div className={global.text}>Conectado al servidor</div>}
        <div className="chat__container">
        <div className="chat__header">
          
        </div>
          <div className="default__message">
            {messagesList?.length === 0 && (
              <div className={global.loading2}>No hay ningún mensaje.</div>
            )}          
          </div>
          <div className="messages__list">
            {messagesList.map((message) => {
              return (
                <>
                  <Message description={message.description} createdAt={message.createdAt} senderId={message.senderId} />
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

            <button onClick={createMessage} className={global.buttonPrimary}>
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
          align-items: center;
          height: 100vh;
          width: 50vw;
          

          /*Visuals*/

          border: 2px solid ${colors.primary};
          border-radius: 20px;
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

        .default__message{

          /*Position*/

          position: relative:
          left: 50%;
          top: 50%;
          transform: translate(50, 50);

          /*Box model*/

          display: flex;
          align-items: center;
          justify-content: center;
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
import { useSession, signIn } from "next-auth/react";
import Head from "next/head";
import Layout from "components/Layout/Layout";
import global from "/styles/global.module.css";
import InputEmoji from "react-input-emoji";
import Loader from "components/Loader/Loader";
import Message from "components/Message/Message";
import { useEffect, useState } from "react";
import { server } from "/server";
import { colors, fonts } from "/styles/frontend-conf";
import io from "socket.io-client";
import { toast } from "react-toastify";

/**
 * @author Sergio García Navarro
 * @returns Abandoned page
 * @version 1.0
 * @description Abandoned page
 */
export default function Chat() {
  const { data: session, status } = useSession({ required: true });
  const [messagesList, setMessagesList] = useState([]);
  const [chatMessage, setChatMessage] = useState("");
  const [user, setUser] = useState({});

  let socket;

  const chatServer = async () => {
    await fetch("/api/socket/");

    socket = io();

    // send a message to the server
    socket.on("receiveMessage", (message) => {
      setMessagesList((pre) => [...pre, message]);
    });
  };

  const getMessages = async () => {
    const res = await fetch(`${server}/messages/${chatId}`, {
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

    const res = await fetch(`${server}/api/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chatId: "",
        description: chatMessage,
        senderId: session.user.id,
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
      socket.emit("sendMessage", { chatMessage });

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
  if (session) {
    return (
      <Layout>
        <Head>
          <title>Chat | Sweet Home</title>
        </Head>
        <h1 className={global.title4}>Mis chats</h1>

        <div className="chat__container">
          <div className="default__message">
            {messagesList.length === 0 && (
              <div className={global.loading2}>No hay ningún mensaje.</div>
            )}
          </div>
          {messagesList.map((message) => {
            return (
              <>
                <Message description={message.chatMessage} />
              </>
            );
          })}

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
          width: 70vw;

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
          padding: 4rem;
          width: 70vw;

        }

        .default__message{

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

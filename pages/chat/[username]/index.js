import { useSession, signIn } from "next-auth/react";
import Head from "next/head";
import Layout from "components/Layout/Layout";
import global from "/styles/global.module.css";
import Loader from "components/Loader/Loader";
import { useEffect, useState } from "react";
import { server } from "/server";
import { toast } from "react-toastify";
import InputEmoji from "react-input-emoji";

/**
 * @author Sergio García Navarro
 * @returns Abandoned page
 * @version 1.0
 * @description Abandoned page
 */
export default function Chat() {
  const { data: session, status } = useSession({ required: true });
  const [messagesList, setMessagesList] = useState({});
  const [chatMessage, setChatMessage] = useState("");

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
        <h1 className={global.title}>Chat</h1>
        <div className={global.chat}>
          <div className="message__input">
            <InputEmoji
              title="Crear una publicación"
              type="text"
              name="text"
              id="comment"
              value={chatMessage}
              onChange={(e) => setChatMessage(e)}
              cleanOnEnter
              placeholder={`Escribe un mensaje 😄`}
              fontFamily={`${fonts.default}`}
              borderColor={`${colors.primary}`}
            />
          </div>
          <input
            type="submit"
            value="Enviar"
            className={global.buttonPrimary}
            onClick={(e) => sendMessage(e)}
          />
        </div>
        <style jsx>{`
            
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

                        .me
                        
                    `}
        </style>
      </Layout>
    );
  }
}

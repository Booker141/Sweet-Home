/* Static imports */

import { useSession, signIn } from "next-auth/react";
import {useRouter} from 'next/router'
import { useEffect, useState } from "react";
import { server } from "/server";
import { toast } from "react-toastify";
import {colors} from '/styles/frontend-conf'
import global from "/styles/global.module.css";
import InputEmoji from "react-input-emoji";

/**
 * @author Sergio García Navarro
 * @returns Chat Sidebar component
 * @version 1.0
 * @description Chat Sidebar component
 */

export default function ChatSidebar({users}) {

    const { data: session, status } = useSession({ required: true });
    const [messagesList, setMessagesList] = useState([]);
    const [chats, setChats] = useState(users?.chats);
    const [chatMessage, setChatMessage] = useState("");
    const [user, setUser] = useState({});
  
    console.log(chats)

      return (
        <>

          <div className="chatSidebar__container">
            <h1 className={global.title4}>Contactos</h1>
            <div className="chats">
              {chats?.length === 0 && (
                <p className={global.text}>
                  No tiene ningún chat abierto
                </p>
              )}
              {chats?.length > 0 && 
                chats.map(
                  ({
                    _id
                  }) => {
                    return (
                      <>
                        <ChatContact
                          key={_id}
                          id={_id}
                        />
                      </>
                    );
                  }
                )}
            </div>
          </div>
  
          <style jsx>{`
  
          .chatSidebar__container{
  
            /*Box model*/
  
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100vh;
            width: 20vw;
  
            /*Visuals*/
  
            border: 2px solid ${colors.primary};
            border-radius: 20px;
          }
  
          .chats{
  
            /*Box model*/
  
            overflow-y: auto;
          }
  
         
              
              h1{
                      /*Text*/
  
                      font-size: 3rem;
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


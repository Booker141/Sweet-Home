/* Static imports */

import { useSession } from "next-auth/react";
import { useState } from "react";
import dynamic from 'next/dynamic'
import global from "../../styles/global.module.css";

/* Dynamic imports */

const ChatContact = dynamic(() => import("/components/ChatContact/ChatContact"))

/**
 * @author Sergio García Navarro
 * @returns Chat Sidebar component
 * @version 1.0
 * @description Chat Sidebar component
 */
/**
 * This function is a chat sidebar component that receive props from page and displays them
 * in a sidebar with users
 * @param props - props received from page.
 * @returns A chat sidebar.
 */
export default function ChatSidebar({users}) {

      const { data: session, status } = useSession({ required: true });
      const [messagesList, setMessagesList] = useState([]);
      const [chats, setChats] = useState(users?.chats);
      const [following, setFollowing] = useState(users?.following)
      const [chatMessage, setChatMessage] = useState("");
      const [user, setUser] = useState({});

      return (
        <>
          <div className="chatSidebar__container">
            <h1 className={global.title5}>Contactos</h1>
            <div className="chats">
              {chats?.length === 0 && following?.length === 0 && (
                <p className={global.text2}>
                  No tiene ningún chat abierto
                </p>
              )}
              {following?.length > 0 && 
                following.map(
                  (
                    following
                  ) => {
                    return (
                      <>
                          <ChatContact
                            key={following}
                            followingId={following}
                          />
                      </>
                    );
                  }
                )
              }
              {chats?.length > 0 && 
                chats.map(
                  (
                    chat
                  ) => {
                    return (
                      <>
                          <ChatContact
                            key={chat}
                            id={chat}
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


  
          .chats{
  
            /*Box model*/
  
            overflow-y: auto;
            padding: 1rem;
          }
  

            `}</style>
        </>
      );
    }


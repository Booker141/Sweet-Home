import { useSession, signIn } from "next-auth/react";
import Head from "next/head";
import global from "/styles/global.module.css";
import InputEmoji from "react-input-emoji";
import Loader from "components/Loader/Loader";
import FallbackImage from "components/FallbackImage/FallbackImage";
import { useEffect, useState } from "react";
import { server } from "/server";
import { colors, fonts } from "/styles/frontend-conf";
import { toast } from "react-toastify";

/**
 * @author Sergio García Navarro
 * @returns Chat Contact component
 * @version 1.0
 * @description Chat Contact component
 */
export default function ChatContact(props) {

  const { data: session, status } = useSession({ required: true });
  const [lastMessageId, setLastMessageId] = useState("")
  const [lastMessage, setLastMessage] = useState({})
  const [chat, setChat] = useState({});
  const [userId, setUserId] = useState("")
  const [user, setUser] = useState({});


  const getMessages = async () => {
    const res = await fetch(`${server}/messages/${props?.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const messages = res.json();
    setLastMessage(messages[messages?.length - 1]);
    
    

  };

  const getChat = async () => {
    const res = await fetch(`${server}/chats/${props?.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const chatInfo = res.json();
    setChat(chatInfo);

  };

  const getUser = async () => {

    if(chat?.senderId === session?.user.id){
        setUserId(chat?.receiverId);
    }else{
        setUserId(chat?.senderId);
    }

    const res = await fetch(`${server}/usersById/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const userInfo = res.json();
    setUser(userInfo);
    

  };

  const getLastMessage= async () => {
    const res = await fetch(`${server}/lastMessage/${props?.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const message = res.json();
    setLastMessage(message);

  };

 

  useEffect(() => {
    getChat()
    getUser()
    getMessages();
    getLastMessage()
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

    return (
        <>

    
        <div className="chatContact__container">
            <div className="user__image">
                <FallbackImage
                        src={user?.image}
                        alt="Imagen de usuario"
                        style={{ borderRadius: "50px" }}
                        width={50}
                        height={50}
                    />
                </div>
            <div className="user__info">
                <div className={global.text2__bold}>{user?.username}</div>
                <div className={global.text2}>{lastMessage?.description}</div>
            </div>
        </div>


        <style jsx>{`

        .chatContact__container{

          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          height: 8vh;
          width: 17vw;
          padding: 1rem;

            /*Visuals*/

            border-radius: 20px;

            background: linear-gradient(45deg, rgba(240, 129, 15, 1) 35%, rgba(249, 166, 3, 1) 100%);
        }


        .user__info{

            /*Box model*/

            display: flex;
            flex-direction: column;


        }
          
          `}</style>
            
          </>
    );
  
}
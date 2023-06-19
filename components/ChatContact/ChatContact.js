/* Static imports */

import { useSession } from "next-auth/react";
import { server } from "../../server";
import { colors } from "/styles/frontend-conf";
import { useRouter } from "next/router"
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { BsFillChatFill, BsPatchCheckFill } from "react-icons/bs";
import { MdHealthAndSafety } from 'react-icons/md'
import global from "../../styles/global.module.css";
import Loader from "/components/Loader/Loader";
import FallbackImage from "/components/FallbackImage/FallbackImage";


/* Dynamic imports */


/**
 * @author Sergio García Navarro
 * @returns Chat Contact component
 * @version 1.0
 * @description Chat Contact component
 */

/**
 * This function is a chat contact component that receive props from page and displays them
 * in a user contact card format to establish chat between users
 * @param props - props received from page.
 * @returns A user contact card.
 */
export default function ChatContact(props) {

  const { data: session, status } = useSession({ required: true });
  const [isMessage, setIsMessage] = useState(true)
  const [lastMessageId, setLastMessageId] = useState('')
  const [lastMessage, setLastMessage] = useState({})
  const [messages, setMessages] = useState([])
  const [isFollowing, setIsFollowing] = useState(props?.followingId ? true : false)
  const [isShelter, setIsShelter] = useState(false)
  const [isVet, setIsVet] = useState(false)
  const [chat, setChat] = useState({});
  const [user, setUser] = useState({});

  const Router = useRouter()


  const openChat = async () => {

      Router.push(`${server}/chat/${chat?.channel}?username=${user?.username}`)
    
  }

  const getMessages = async () => {
    const res = await fetch(`${server}/api/messages/${chat._id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const messages = await res.json();
    console.log(messages)
    setMessages(messages)

    if(messages === []){

      setIsMessage(false)

    }else{

      setIsMessage(true)
      console.log(messages[messages.length - 1]._id)
      setLastMessageId(messages[messages.length - 1]._id);

    }
  
  };

  const getFollowing = async () => {

    if(isFollowing){

      const res = await fetch(`${server}/api/usersById/${props?.followingId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const following = await res.json();
      console.log(following)
      setUser(following);
  
    }
  
  };

  const getChat = async () => {
    const res = await fetch(`${server}/api/chatsById/${props?.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const chatInfo = await res.json();
    console.log(chatInfo)
    setChat(chatInfo);

  };

  const getChatByFollowing = async () => {
    const res = await fetch(`${server}/api/chatsByFollowingId/${props?.followingId}/${session?.user.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const chatInfo = await res.json();
    console.log(chatInfo)
    setChat(chatInfo);

  }

  const getUser = async () => {


    if(chat.senderId === session?.user.id){
      const res = await fetch(`${server}/api/usersById/${chat?.receiverId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const userInfo = await res.json();


      setUser(userInfo);
      console.log(userInfo)
      if(userInfo.role.name === "protectora")
        setIsShelter(true)
      if(userInfo.role.name === "veterinaria")
        setIsVet(true)

    }else{

      const res = await fetch(`${server}/api/usersById/${chat?.senderId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const userInfo = await res.json();
      console.log(userInfo)
      setUser(userInfo);

      if(userInfo.role.name === "protectora")
        setIsShelter(true)
      if(userInfo.role.name === "veterinaria")
        setIsVet(true)
    }


  };

  const getLastMessage = async () => {
    console.log(lastMessageId)
    if(isMessage){
      const res = await fetch(`${server}/api/lastMessage/${lastMessageId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const message = await res.json();
      console.log(message)
      setLastMessage(message);

  }else{
    setLastMessage({});
  }
};

 

  useEffect(() => { 
    if(props?.id)
      getChat()
    if(props?.followingId)
      getChatByFollowing()
    getFollowing()
    if(chat != {} && chat != null){
      getUser()
      getMessages();
    }
    getLastMessage()
    console.log(lastMessage)
    
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

    
        <div key={props?.id} className="chatContact__container">
          <div className="container__user">
            <div className="user__image">
                <a
                  href={`${server}/profile/${user?.username}`}
                  aria-label={`Ir al perfil de ${user?.username}`}
                >
                    <FallbackImage
                            src={user?.image}
                            alt="Imagen de usuario"
                            style={{ borderRadius: "50px" }}
                            width={50}
                            height={50}
                        />
                </a>
              </div>
              <div className="user__info">
                <div className="user__username">
                  <a
                    href={`${server}/profile/${user?.username}`}
                    aria-label={`Ir al perfil de ${user?.username}`}
                  >
                    <p className={global.text4__bold}>{user?.username}</p>
                     
                  </a>
                  {isShelter && (
                        <BsPatchCheckFill size={15} color={colors.primary} />
                      )}
                      {isVet && <MdHealthAndSafety size={20} color={colors.primary} />}
                </div>                          
                  {Object.keys(lastMessage).length > 0 && <p className={global.date}>{lastMessage?.description}</p>}
                  {Object.keys(lastMessage).length === 0 && <p className={global.date}>¡Chatea con <strong>{user?.username}</strong>!</p>}
              </div>
              <div className="button__chat">
                <button className="open__chat" onClick={() => openChat()}>
                  <BsFillChatFill size={25} color={colors.primary} />
                </button>
              </div>
                
          </div>
           
        </div>


        <style jsx>{`

        .chatContact__container{

          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1rem;
          height: 8vh;
          width: 17vw;
          padding: 1rem;
          margin-bottom: 1rem;

            /*Visuals*/

            border-radius: 20px;
            background-color: #fafafa;
            box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);
            
        }

        .container__user{

          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1.5rem;
          width: 100%;
        }

        .user__username{

          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.5rem;
        }

        .button__chat{

          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          margin-left: auto;
          
        }


        .user__info{

            /*Box model*/

            display: flex;
            flex-direction: column;

        }

        button{

          /*Visuals*/

          border: none;
          background: transparent;
          cursor: pointer;
        }

        a{


          /*Visuals*/

          text-decoration: none;
        }
          
          `}</style>
            
          </>
    );
  
}
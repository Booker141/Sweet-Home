/* Static imports */

import { useSession } from "next-auth/react";
import { server } from "../../server";
import { colors } from "/styles/frontend-conf";
import { useEffect, useState } from "react";
import {HiClock} from 'react-icons/hi'
import { BsPatchCheckFill } from "react-icons/bs";
import { MdHealthAndSafety, MdPets } from 'react-icons/md'
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
  const [lastMessage, setLastMessage] = useState({})
  const [isShelter, setIsShelter] = useState(false)
  const [isManager, setIsManager] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isVet, setIsVet] = useState(false)
  const [chat, setChat] = useState({});
  const [user, setUser] = useState({});

  
  const getFull = (num) => {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  };


  const getContactInfo = async () => {

      const res1 = await fetch(`${server}/api/chatsById/${props?.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const chatInfo = await res1.json();
      setChat(chatInfo)

    if(chatInfo.senderId === session?.user.id){

      const res2 = await fetch(`${server}/api/usersById/${chatInfo.receiverId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const userInfo = await res2.json();
      setUser(userInfo)
      if(userInfo?.role.name === "protectora")
        setIsShelter(true)
      if(userInfo?.role.name === "veterinaria")
        setIsVet(true)

    }else{

      const res3 = await fetch(`${server}/api/usersById/${chatInfo.senderId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const userInfo = await res3.json();
      setUser(userInfo)
      if(userInfo?.role.name === "protectora")
        setIsShelter(true)
      if(userInfo?.role.name === "veterinaria")
        setIsVet(true)
        if(userInfo?.role.name === "administrador")
        setIsAdmin(true)
        if(userInfo?.role.name === "gerente")
        setIsManager(true)
    }

    const res4 = await fetch(`${server}/api/messages/${chatInfo._id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const messages = await res4.json();

    if(messages.length > 0){

      const res5 = await fetch(`${server}/api/lastMessage/${messages[messages.length - 1]?._id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });


      const lastMessage = await res5.json();
      setLastMessage(lastMessage);

    }
  };



  useEffect(() => { 
    /*if(props?.id){*/
      getContactInfo()
   /* } */
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
                    <FallbackImage
                            src={user?.image}
                            alt="Imagen de usuario"
                            style={{ borderRadius: "50px" }}
                            width={50}
                            height={50}
                        />
              </div>
              <div className="user__info">
                <div className="user__username">
                    <p className={global.text4__bold}>{user?.username}</p>
                  {isShelter && (
                        <MdPets size={15} color={colors.primary} />
                      )}
                  {isVet && <MdHealthAndSafety size={20} color={colors.primary} />}
                  {(isAdmin || isManager) && <BsPatchCheckFill size={20} color={colors.primary} />}
                </div>                          
                  {/*Object.keys(lastMessage).length > 0 && lastMessage?.description.length <= 25 && <p className={global.lastMessage}>{lastMessage?.description}</p>*/}
                  {/*{lastMessage?.description?.length > 25 && <p className={global.lastMessage}>{lastMessage?.description.substring(0, 18)}...</p>}*/}
                  <p className={global.date}>¡Chatea con <strong>{user?.username}</strong>!</p>
              </div>
                    {Object.keys(lastMessage).length > 0 && <div className="lastMessage__hour">
                      <HiClock size={18} color={colors.primary} />
                      <p className={global.lastMessage}>{getFull(new Date(lastMessage?.data.createdAt).getHours())}:{getFull(new Date(lastMessage?.data.createdAt).getMinutes())}</p>
                    </div>}
          </div>
           
        </div>


        <style jsx>{`

        .chatContact__container{

          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1rem;
          height: 11vh;
          width: 17vw;
          padding: 1rem;
          margin-bottom: 1rem;

            /*Visuals*/

            border-radius: 20px;
            background-color: #fafafa;
            box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);
            
        }

        .lastMessage__hour{

          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.5rem;
          margin-left: auto;
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
          gap: 0.2rem;
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


          
          `}</style>
            
          </>
    );
  
}
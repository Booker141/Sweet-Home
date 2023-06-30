/* Static imports */

import { useState } from "react";
import { useRouter } from "next/router";
import { FaUserPlus, FaComment } from "react-icons/fa";
import { HiHeart } from "react-icons/hi";
import {AiFillWechat} from 'react-icons/ai'
import { colors } from "../../styles/frontend-conf";
import global from "../../styles/global.module.css";
import dynamic from "next/dynamic";


/** 
  * @author Sergio García Navarro
  * @returns Submenu notification component
  * @version 1.0
  * @description Submenu notification component
*/

/**
 * This function is a submenu notification component that receive props from page and displays them
 * in a submenu notification received by user
 * @param props - props received from page.
 * @returns A submenu notification received by user.
 */
export default function SubmenuNotification(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [notification, setNotification] = useState(props);

  const router = useRouter();

  const calcTime = () => {
    const currentDate = new Date();
    const milliseconds = currentDate - new Date(notification?.createdAt);

    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes > 0 && hours <= 0 && days <= 0) {
      return `${minutes} min`;
    }

    if (hours > 0 && days <= 0) {
      return `${hours} h`;
    }

    if (days > 0) {
      return `${days} d`;
    }

    return `${Math.floor(seconds)} s`;
  };

  return (
    <>
      <div className={global.submenuNotification}>
        <div className="subnotification__container">
          <div className="notification__userFrom">
            {notification?.type.name === "seguir" && (
              <FaUserPlus color={`${colors.secondary}`} size={40} />
            )}
            {notification?.type.name === "comentar" && (
              <FaComment color={`${colors.secondary}`} size={35} />
            )}
            {notification?.type.name === "me gusta" && (
              <HiHeart color={`${colors.secondary}`} size={40} />
            )}
            {notification?.type.name === "mensaje" && (
              <AiFillWechat color={`${colors.secondary}`} size={50} />
            )}
          </div>
          <div className={global.text2}>{notification?.description}</div>
        </div>
      </div>

      <style jsx>{`

        .subnotification__container{

          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 2rem;
          width: 100%;
        }

        .notification__userFrom{

          display: flex;
          justify-content: flex-start;
        }

        .notification__time {
          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 2rem;
        }
      `}</style>
    </>
  );
}

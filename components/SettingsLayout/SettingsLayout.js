/* Static imports */

import { ImArrowUp2 } from "react-icons/im";
import SettingsSidebar from "/components/SettingsSidebar/SettingsSidebar";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { server } from "/server";
import { useState, useEffect } from "react";
import global from "/styles/global.module.css";
import dynamic from "next/dynamic";
import Header from "/components/Header/Header";

/*Dynamic imports*/

const Footer = dynamic(() => import("/components/Footer/Footer"));
const LazyLoad = dynamic(() => import("react-lazyload"));

/** 
  * @author Sergio García Navarro
  * @returns Settings layout component
  * @version 1.0
  * @description Settings layout component
*/

/**
 * This function is a layout component that receive children props from page and displays them
 * in a layout composition for settings pages
 * @param children - children props received from page.
 * @returns A layout for settings pages.
 */
export default function SettingsLayout({ children }) {
  const [isNotification, setIsNotification] = useState(false);
  const [notifications, setNotifications] = useState({});

  const { data: session, status } = useSession({});

  const getNotifications = async () => {
    const res = await fetch(
      `${server}/api/notificationsChecked/${session?.user.username}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();

    if (data.length > 0) {
      setNotifications(data);
      setIsNotification(true);
    }
  };

  useEffect(() => {
    getNotifications();
  }, []);

  /*
  if(isNotification)
  toast(`🔔 Tienes ${notifications.length} notificaciones nuevas`, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
  */

  return (
    <>
      <div className="Header">
        <Header
          url1="/news"
          url2="/about"
          url3="/contact"
          url4="/auth/signIn"
          url5="/auth/signUp"
          text1="Noticias"
          text2="Quiénes somos"
          text3="Contacto"
          text4="Iniciar sesión"
          text5="Registrarse"
        />
        <div className={global.layout}>
          <a name="top" />
          <SettingsSidebar />
          <div className={global.content2}>
            <main>{children}</main>
          </div>
        </div>
      </div>
      <a
        title="Volver arriba"
        aria-label="Ir al inicio de página"
        href="#top"
        className={global.buttonTo}
      >
        <ImArrowUp2 />
      </a>
      <LazyLoad offset={100}>
        <Footer />
      </LazyLoad>
    </>
  );
}

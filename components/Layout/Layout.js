/* Static imports */

import { ImArrowUp2 } from "react-icons/im";
import global from "/styles/global.module.css";
import dynamic from "next/dynamic";
import Header from "/components/Header/Header";
import Sidebar from "/components/Sidebar/Sidebar";

/* Dynamic imports */

const Footer = dynamic(() => import("/components/Footer/Footer"));
const LazyLoad = dynamic(() => import("react-lazyload"));


/** 
  * @author Sergio García Navarro
  * @returns Layout component
  * @version 1.0
  * @description Layout component
*/

/**
 * This function is a layout component that receive children props from page and displays them
 * in a layout for better composition and reutilisation
 * @param children - props received from page.
 * @returns A layout composition.
 */
export default function Layout({ children }) {
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
          <Sidebar />
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
      <LazyLoad offset={800}>
        <Footer />
      </LazyLoad>
    </>
  );
}

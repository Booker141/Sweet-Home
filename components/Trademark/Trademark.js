/* Static imports */

import Logo from "../../public/LogoWeb.svg";
import dynamic from "next/dynamic";

/* Dynamic imports */

const Image = dynamic(() => import("next/image"));

/** 
  * @author Sergio García Navarro
  * @returns Trademark component
  * @version 1.0
  * @description Trademark component
*/

/**
 * This function is a trademark that receive link from page and displays them
 * in a trademark image 
 * @param link - link received from page.
 * @returns A trademark.
 */
export default function Trademark({ link }) {
  return (
    <>
      <div className="img">
        <a href={link} aria-label="Ir a Inicio">
          <Image src={Logo} width={150} height={65} priority />
        </a>
      </div>
    </>
  );
}

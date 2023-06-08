/* Static imports */

import Logo from "../../public/LogoWebBlanco.svg";
import dynamic from "next/dynamic";

/* Dynamic imports */

const Image = dynamic(() => import("next/image"));

/** 
  * @author Sergio García Navarro
  * @returns White trademark component
  * @version 1.0
  * @description White trademark component
*/

/**
 * This function is a white trademark that receive link from page and displays them
 * in a white version of trademark
 * @param link - link received from page.
 * @returns A white version of trademark.
 */
export default function Trademark({ link }) {
  return (
    <>
      <div className="img">
        <a href={link} aria-label="Ir a Inicio">
          <Image src={Logo} width={90} height={80} priority />
        </a>
      </div>
    </>
  );
}

/* Static imports */

import global from "../../styles/global.module.css";

/** 
  * @author Sergio García Navarro
  * @returns Message component
  * @version 1.0
  * @description Message component
*/

/**
 * This function is a message component that receive props from page and displays them
 * in an message format created by user
 * @param props - props received from page.
 * @returns A message created by user.
 */
export default function Message(props) {
  return (
    <>
      <div className={global.message}>
        <p className="message__text">{props?.description}</p>
      </div>

      <style jsx>{`
      
        .message__text {

          /*Box model*/

          display: flex;
          justify-content: flex-end;
        }
      
      
      `}</style>
    </>
  );
}

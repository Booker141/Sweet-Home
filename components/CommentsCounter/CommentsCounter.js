/* Static imports */

import { useState } from "react";
import { FiMessageCircle } from "react-icons/fi";
import { colors } from "../../styles/frontend-conf";
import global from "../../styles/global.module.css";

/** 
  * @author Sergio García Navarro
  * @returns CommentsCounter component
  * @version 1.0
  * @description CommentsCounter component
*/

/**
 * This function is a comments counter component that receive props from post and displays them
 * in an comment counter showing number of comments
 * @param props - props received from page.
 * @returns A comment counter.
 */
export default function CommentsCounter(props) {
  const [commentsCount, setCommentsCount] = useState(props?.comments.length);

  return (
    <>
      <div className="commentsCounter">
        <p className={global.text__bold}>Número de comentarios:</p>
        <p className={global.text}>{props?.comments.length}</p>
        <FiMessageCircle size={20} color={colors.quaternary} />
      </div>

      <style jsx>{`
        .commentsCounter {
          /*Box model*/

          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;

          /*Visuals*/

          color: ${colors.quaternary};
        }
      `}</style>
    </>
  );
}

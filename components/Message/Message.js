/* Static imports */

import {colors} from '../../styles/frontend-conf'
import global from '../../styles/global.module.css'


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

  console.log(props.author)
  const getFull = (num) => {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  };

  return (
    <>
      {props.author === "me" && <div className="myMessage__container">
        <p className="message__text">{props.description}</p>
        <div className="message__date">
          <p className={global.date2}>{getFull(new Date(props.createdAt).toLocaleString()).slice(0, 9)}</p>
          <p className={global.date2}>{getFull(new Date(props.createdAt).getHours().toLocaleString())}:{getFull(new Date(props.createdAt).getMinutes().toLocaleString())}</p>
        </div> 
      </div>}
      {props.author === "other"  && <div className="otherMessage__container">
        <p className="message__text">{props.description}</p>
        <div className="message__date">
          <p className={global.date}>{getFull(new Date(props.createdAt).toLocaleString()).slice(0, 9)}</p>
          <p className={global.date}>{getFull(new Date(props.createdAt).getHours().toLocaleString())}:{getFull(new Date(props.createdAt).getMinutes().toLocaleString())}</p>
        </div> 
      </div>}

      <style jsx>{`

      .myMessage__container {

        /*Box model*/

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        margin: 0 0 0 auto;
        width: fit-content;
        min-width: 5vw;
        max-width: 20vw;
        height: fit-content;
        word-wrap: break-word;
        padding: 0.3rem;

        /*Text*/

        font-family: "Poppins", sans-serif;
        font-size: 0.9rem;
        font-weight: 400;
        color: ${colors.secondary};

        /*Visuals*/

        border-radius: 20px 20px 0 20px;
        background-color: ${colors.primary};



        }

        .otherMessage__container {

        /*Box model*/

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin: 0 auto 0 0;
        width: fit-content;
        min-width: 7vw;
        max-width: 20vw;
        height: fit-content;
        word-wrap: break-word;
        padding: 0.3rem;

        /*Text*/

        font-family: "Poppins", sans-serif;
        font-size: 0.9rem;
        font-weight: 400;
        color: ${colors.quaternary};

        /*Visuals*/

        border-radius: 0 20px 20px 20px;
        background-color: #e8e8e8;



        }

        .message__date{

          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.5rem;
          justify-content: flex-end;
        }
      
        .message__text {

          /*Box model*/

          display: flex;
          word-break: break-all;
          overflow-wrap: break-word;
        }

      
      `}</style>
    </>
  );
}

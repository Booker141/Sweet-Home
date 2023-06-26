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

  let backgroundColor, color, text, borderRadius, messageLocation

  
  if(props?.author === "me"){

    backgroundColor = colors.primary
    text = 'center'
    color = colors.secondary
    messageLocation = 'flex-end'
    borderRadius = '20px 20px 0px 20px'

  }else if(props?.author === "other"){

    backgroundColor = '#e8e8e8'
    text = 'flex-start'
    color = colors.quaternary
    messageLocation = 'flex-start'
    borderRadius = '0px 20px 20px 20px'

  }

  const getFull = (num) => {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  };

  return (
    <>
      <div key={props.id} className="message__container">
        <p className="message__text">{props?.description}</p>
        <p className={global.date2}>{getFull(new Date(props?.createdAt).toLocaleDateString().getHours())}:{getFull(new Date(props?.createdAt).toLocaleDateString().getMinutes())}</p>
      </div>

      <style jsx>{`

      .message__container {

        /*Box model*/

        display: flex;
        flex-direction: column;
        justify-content: ${messageLocation};
        width: fit-content;
        min-width: 3vw;
        max-width: 20vw;
        height: fit-content;
        word-wrap: break-word;
        padding: 0.4rem;

        /*Text*/

        font-family: "Poppins", sans-serif;
        font-size: 0.9rem;
        font-weight: 400;
        color: ${color};

        /*Visuals*/

        border-radius: ${borderRadius};
        background-color: ${backgroundColor};



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

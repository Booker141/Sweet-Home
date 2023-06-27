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

  let backgroundColor, color, text, borderRadius, messageLocation, margin

  
  if(props.author === "me"){

    backgroundColor = colors.primary
    text = 'center'
    color = colors.secondary
    messageLocation = 'flex-end'
    margin = '0 0 0 auto'
    borderRadius = '20px 20px 0px 20px'

  }else if(props.author === "other"){

    backgroundColor = '#e8e8e8'
    text = 'flex-start'
    color = colors.quaternary
    messageLocation = 'flex-start'
    margin = '0 auto 0 0'
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
      <div className="message__container">
        <p className="message__text">{props?.description}</p>
        <div className="message__date">
          <p className="date">{getFull(new Date(props?.createdAt).toLocaleString()).slice(0, 9)}</p>
          <p className="date">{getFull(new Date(props?.createdAt).getHours().toLocaleString())}:{getFull(new Date(props?.createdAt).getMinutes().toLocaleString())}</p>
        </div> 
      </div>

      <style jsx>{`

      .message__container {

        /*Box model*/

        display: flex;
        flex-direction: column;
        justify-content: ${messageLocation};
        margin: ${margin};
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
        color: ${color};

        /*Visuals*/

        border-radius: ${borderRadius};
        background-color: ${backgroundColor};



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

        .date{
          /*Text*/

          font-family: 'Poppins', sans-serif;
          font-size: 0.7rem;
          color: ${color};
        }
      
      
      `}</style>
    </>
  );
}

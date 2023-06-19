/* Static imports */

import {colors, fonts} from '../../styles/frontend-conf'

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

  let backgroundColor
  let color
  let text 
  
  if(props?.author === "me"){

    backgroundColor = colors.primary
    text = 'flex-end'
    color = colors.secondary

  }else if(props?.author === "other"){

    backgroundColor = '#e8e8e8'
    text = 'flex-start'
    color = colors.quaternary

  }

  return (
    <>
      <div className="message__container">
        <p className="message__text">{props?.description}</p>
      </div>

      <style jsx>{`

      .message__container {

        /*Box model*/

        display: flex;
        flex-direction: column;
        width: fit-content;
        min-width: 3vw;
        height: fit-content;
        padding: 0.4rem;

        /*Text*/

        font-family: "Poppins", sans-serif;
        font-size: 0.9rem;
        font-weight: 400;
        color: ${color};

        /*Visuals*/

        border-radius: 20px;
        background-color: ${backgroundColor};



        }
      
        .message__text {

          /*Box model*/

          display: flex;
          justify-content: ${text};

        }
      
      
      `}</style>
    </>
  );
}

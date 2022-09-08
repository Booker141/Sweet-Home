import { colors } from "styles/frontend-conf.js";
import { fonts } from "styles/frontend-conf"
/*
    * @author Sergio García Navarro
    * @returns Button component
    * @version 1.0
    * @date 13/01/2020
    * @description Button component
*/
/**
 * This function takes in an onClick function, a description, and a size, and returns a button with the
 * description, size, and onClick function
 * @param {onClick} - function with the action to do when the button is clicked
 * @param {description} - text of the button
 * @param {size} - size of the button
 * @returns A button with a description and size.
 */
export default function Button({ onClick, children}) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>
        {`
          button {

            /*Box model*/

            display: block;
            height: 7vh;
            width: 10vw;
            padding: 1vh 2vh;

            /*Text*/

            color: ${colors.secondary};
            font-family: ${fonts.default} ;
            font-style: bold;

            /*Visuals*/

            background-color: ${colors.primary};
            border-radius: 40px;
            border: none;

            /*Misc*/

            transition: all 0.3s ease-in-out;

          }

          button:hover {
            background-color: ${colors.tertiary};
          }

        `}
      </style>
    </>
  );
}

import { colors } from "styles/frontend-conf.js";
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
export default function Button({ onClick, description, size}) {
  return (
    <>
      <button onClick={onClick} size={size}>{description}</button>
      <style jsx>
        {`
          button {
            height: 7vh;
            width: ${size};
            padding: 1vh 2vh;
            position: relative;
            margin: 0 auto;
            background-color: ${colors.tertiary};
            border-radius: 40px;
            border: none;
            color: ${colors.secondary};
            display: block;
            font-family: "Poppins-Light";
            font-style: bold;
          }
        `}
      </style>
    </>
  );
}

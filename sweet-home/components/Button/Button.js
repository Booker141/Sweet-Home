import { colors } from "styles/frontend-conf.js";
/** 
    * This component is a button with styles
    * @param {onClick} - function with the action to do when the button is clicked
    * @param {description} - text of the button
    * @param {size} - size of the button
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

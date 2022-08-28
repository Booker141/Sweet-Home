import { colors } from "styles/frontend-conf";
import {fonts} from "styles/frontend-conf";
/*
    * @author Sergio García Navarro
    * @returns Form Button component
    * @version 1.0
    * @date 13/01/2020
    * @description Form Button component
*/
/**
 * This function takes in a name prop and returns a styled input element with the value of the name
 * prop
 * @returns A styled input element.
 */
export default function FormButton({ name }) {
  return (
    <>
      <input type="submit" value={name}></input>
      <style jsx>
        {`
        
          input {

            height: 7vh;
            width: 16vw;
            padding: 1vh 2vh;
            position: relative;
            margin: 0 auto;
            background-color: ${colors.tertiary};
            border-radius: 40px;
            border: none;
            color: ${colors.secondary};
            display: block;
            font-family: ${fonts.default} + 'Light';
            font-style: bold;
          }
        `}
      </style>
    </>
  );
}

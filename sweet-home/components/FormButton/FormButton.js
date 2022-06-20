import { colors } from "styles/frontend-conf";
import {fonts} from "styles/frontend-conf";
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
            font-family: "Poppins-Light";
            font-style: bold;
          }
        `}
      </style>
    </>
  );
}

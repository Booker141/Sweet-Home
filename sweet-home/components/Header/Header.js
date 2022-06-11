import { fonts } from "styles/frontend-conf.js";
import { colors } from "styles/frontend-conf.js";
import Trademark from "components/Trademark/Trademark";

/**
 * @author Sergio García Navarro
 * @param {*} props - different params tag receives
 * @returns header of sweet home page
 */
export default function Header(props) {
  return (
    <>
     
      <header>
        <Trademark class="logo"/>
        <nav class="main-header">

            <li>
              <a href={props.url1}>{props.text1}</a>
            </li>
            <li>
              <a href={props.url2}>{props.text2}</a>
            </li>
            <li>
              <a href={props.url3}>{props.text3}</a>
            </li>
            <li>
              <a href={props.url4}>{props.text4}</a>
            </li>

        </nav>
      </header>
      <style jsx>{`


        .logo{
            height: 100%;
            width: 10%;
            margin-left: 1rem;
        }

        .main-header{
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 100%;
            width: 100%;
            
        }

        li{
            list-style: none;
            margin: 2rem;
            font-family: ${fonts.primary};
        }

        a{
            text-decoration: none;
            color: ${colors.primary};
            font-size: 1.5rem;
            list-style-type: none;
        }

        a:hover{
            color: ${colors.tertiary};
        }

      `}</style>
    </>
  );
}

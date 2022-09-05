import FormButton from "/components/FormButton/FormButton";
import Link from 'next/link'
import { colors } from "styles/frontend-conf.js";
import { fonts } from "styles/frontend-conf.js";
import { FaUser } from "react-icons/fa";
import { BsFillLockFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {FaUserPlus} from "react-icons/fa";
/*
    * @author Sergio García Navarro
    * @returns Form Register component
    * @version 1.0
    * @date 13/01/2020
    * @description Form Register component
*/
/**
 * A function that returns a form with the information that the user must enter to register.
 * @returns A form with a button and a link to the login page.
 */
export default function FormRegister() {
  return (
    <>
      <form className="form-vertical">
      <div className="email">
          <MdEmail size={20} color={colors.secondary} />
          <input
            type="email"
            name="Correo"
            placeholder="E-mail"
          ></input>
        </div>
        <div className="name">
          <FaUser size={20} color={colors.secondary} />
          <input
            type="text"
            name="Nombre"
            placeholder="Nombre de usuario"
          ></input>
        </div>
        <div className="namec">
          <FaUserPlus size={20} color={colors.secondary} />
          <input
            type="text"
            name="Nombrec"
            placeholder="Nombre completo"
          ></input>
        </div>
        <div className="password">
          <BsFillLockFill size={20} color={colors.secondary} />
          <input
            type="password"
            name="Contraseña"
            placeholder="Contraseña"
          ></input>
        </div>
 
        <FormButton class="buttom" name="Confirmar" />
      </form>
      <div className="form-login">
        <p>¿Ya tienes una cuenta?</p>
        <Link href="index.js"><a>Entrar</a></Link>
      </div>
      <style jsx>{`
        p {

          /*Box model*/

          margin-right: 1rem;

          /*Text*/

          font-size: 0.8rem;
          font-family: ${fonts.default};
          color: ${colors.primary};

        }

        a {
          /*Box model*/
          
          margin-bottom: 2rem;

          /*Text*/

          font-family: ${fonts.default};
          font-size: 0.8rem;
          color: ${colors.secondary};
          text-decoration: none;
        }

        a[href="/signIn"] {
          /*Box model*/

          margin-top: 5vh;

          /*Text*/

          color: ${colors.primary};
          font-family: ${fonts.default};
          font-size: 0.9rem;
          font-weight: bold;
        }
        a:hover{

          /*Text*/

          color: ${colors.tertiary};
        }
        ::placeholder {

          /*Text*/

          color: ${colors.primary};
        }

        input[type="email"] {

          /*Box model*/

          width: 100%;
          height: 2rem;
          padding: 0.2rem;
          margin-bottom: 1rem;
          margin-left: 0.2rem;

          /*Text*/

          font-family: ${fonts.default};
          font-size: 1rem;

          /*Visuals*/
         
          border-radius: 40px;
          border: 0;
          
        }

        input[type="text"] {

          /*Box model*/

          width: 100%;
          height: 2rem;
          padding: 0.2rem;
          margin-bottom: 1rem;
          margin-left: 0.2rem;

          /*Text*/

          font-family: ${fonts.default};
          font-size: 1rem;

          /*Visuals*/
          
          border-radius: 40px;
          border: 0;

         
        }

        input[type="password"] {

          /*Box model*/

          width: 100%;
          height: 2rem;
          padding: 0.2rem;
          margin-bottom: 2.2rem;

          /*Text*/

          font-family: ${fonts.default};
          font-size: 1rem;

          /*Visuals*/

          border-radius: 40px;
          border: 0;

        }

        .form-login {

          /*Position*/

          position: relative;
          top: 3vh;
          left: 33vw;

          /*Box model*/

          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-top: 1rem;
          
        }
        .email{

          /*Box model*/

          display: flex;
          flex-direction: row;
        }
        .name {

          /*Box model*/

          display: flex;
          flex-direction: row;
        }
        .namec {

          /*Box model*/

          display: flex;
          flex-direction: row;
        }
        .password {

          /*Box model*/

          display: flex;
          flex-direction: row;
        }

        .buttom {

          /*Box model*/

          width: 70%;
          padding: 0.5rem;
          margin-top: 2rem;
        }

        .form-vertical {

          /*Position*/

          position: relative;
          top: 7vh;
          left: 70vw;

          /*Box model*/

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 20vw;
          height: 60vh;
          padding: 1rem;
          margin: 1rem;

          /*Visuals*/

          background-color: ${colors.primary};
          border-radius: 10px;
        }
      `}</style>
    </>
  );
}

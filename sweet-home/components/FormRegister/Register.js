import FormButton from "/components/FormButton/FormButton";
import Link from 'next/link'
import styles from "styles/global.module.css"
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
    <div className={styles.content}>
      <div className="page">
        <img className="signUp-image" src="/signUp-1.svg" alt="Imagen de registro"/>
        <div className="form-page">
          <div className="text">
            <h2>¡Bienvenido a Sweet Home!</h2>
            <p className={styles.text}>Introduzca los siguientes datos:</p>
          </div>
          <form className="form-vertical">
            <div className="form-vertical__email">
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
            <div className="form-vertical__namec">
              <FaUserPlus size={20} color={colors.secondary} />
              <input
                type="text"
                name="Nombrec"
                placeholder="Nombre completo"
              ></input>
            </div>
            <div classname="form-vertical__name">
              <FaUser size={20} color={colors.secondary} />
              <input
                type="text"
                name="Nombre"
                placeholder="Nombre de usuario"
                className="input"
              ></input>
            </div>
            <div classname="form-vertical__password">
              <BsFillLockFill size={25} color={colors.secondary} />
              <input
                type="password"
                name="Contraseña"
                placeholder="Contraseña"
                className="input"
              ></input>
            </div>
          </form>
          <FormButton class="button" name="Confirmar" />

          <div className="form-login">
            <h6>¿Ya tienes una cuenta?</h6>
            <Link href="index.js"><a>Entrar</a></Link>
          </div>
        </div>
      </div>
    </div>
 
      <style jsx>{`

        .page {
          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          margin-bottom: 3rem;

          /*Visuals*/

          background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
          background-size: 100% 100%;
          border-radius: 1rem;

        }
        
        .text{

          /*Box model*/

          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top:2rem;

        }

        .form-page{

          /*Box model*/
          
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

        }

        .form-login{

          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;

        }

        .form-vertical {

              /*Position*/

              position: relative;

              /*Box model*/

              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              width: 20vw;
              height: 50vh;
              padding: 1vh 2vh;

        }

        .form-vertical__name {

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

        }

        .form-vertical__password {

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

        }

        .form-vertical__button {

            /*Box model*/

            width: 70%;
            padding: 0.5rem;
            margin-top: 2rem;
        }

        .signIn-image{

             /*Box model*/

              height: 30rem;
              width: 50rem;

        }

        h2{

            /*Text*/

            color: ${colors.secondary};
            font-family: ${fonts.secondary};
            font-weight: 600;
            font-size: 2rem;
        }

        p {

            /*Box model*/

            margin-right: 1rem;

            /*Text*/

            font-size: 1rem;
            font-family: ${fonts.default};
            color: ${colors.secondary};
            
        }

        h6{

            /*Box model*/

            margin-right: 1rem;

            /*Text*/

            font-size: 0.8rem;
            font-weight: 500;
            font-family: ${fonts.default};
            color: ${colors.secondary};
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

          a[href="/signUp"] {
            /*Box model*/

            margin-top: 2rem;

            /*Text*/

            color: ${colors.secondary};
            font-size: 0.9rem;
            font-family: ${fonts.default};
            font-weight: bold;
          }

          a:hover{

            /*Text*/

            font-size: 1rem;

            /*Visuals*/

            transition: font-size 0.8s ease-out;
          }

          ::placeholder {

            /*Text*/

            color: ${colors.primary};
          }

          input[type="text"] {

            /*Box model*/

            width: 75%;
            height: 2rem;
            padding: 0.4rem;
            margin-bottom: 1rem;
            margin-left: 1rem;

            /*Text*/

            font-family: ${fonts.default};
            font-size: 1rem;

            /*Visuals*/

            border-radius: 5px;
            border: 0;

          }

          input[type="email"] {

            /*Box model*/

            width: 75%;
            height: 2rem;
            padding: 0.4rem;
            margin-bottom: 1rem;
            margin-left: 1rem;

            /*Text*/

            font-family: ${fonts.default};
            font-size: 1rem;

            /*Visuals*/

            border-radius: 5px;
            border: 0;

          }

          input[type="password"] {

            /*Box model*/

            width: 75%;
            height: 2rem;
            padding: 0.4rem;
            margin-bottom: 2rem;
            margin-left: 0.7rem;

            /*Text*/

            font-family: ${fonts.default};
            font-size: 1rem;

            /*Visuals*/

            border-radius: 5px;
            border: 0;

          }
        
      `}</style>
    </>
  );
}

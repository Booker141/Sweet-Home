import FormButton from "/components/FormButton/FormButton";
import Link from 'next/link'
import { colors } from "styles/frontend-conf.js";
import { fonts } from "styles/frontend-conf.js";
import { FaUser } from "react-icons/fa";
import { BsFillLockFill } from "react-icons/bs";
import styles from "styles/global.module.css"
/*
    * @author Sergio García Navarro
    * @returns Form component
    * @version 1.0
    * @date 13/01/2020
    * @description Form component
*/
/**
 * FormLogin is the component that contains the form to login
 * @returns {Form} - form to login
 */

export default function FormLogin() {
  return (
    <>
    <div className={styles.content}>
      <div className="page">
        <img className="signIn-image" src="/signIn-1.svg" alt="Imagen de inicio de sesión"/>
        <div className="form-page">
          <div className="text">
            <h2>¡Bienvenido de nuevo!</h2>
            <p className={styles.text}>Le estábamos esperando</p>
          </div>
          <form className="form-vertical">
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
            <a href="/cpassword">¿Has olvidado la contraseña?</a>
            <FormButton className="form-vertical__button" name="Iniciar sesión" />
          </form>
          <div className="form-register">
            <h6>¿No tiene una cuenta?</h6>
            <Link href="/signUp"><a>Registrarse</a></Link>
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

        .form-register{

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

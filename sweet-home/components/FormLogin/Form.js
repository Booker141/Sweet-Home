import FormButton from "/components/FormButton/FormButton";
import Link from 'next/link'
import { colors } from "styles/frontend-conf.js";
import { fonts } from "styles/frontend-conf.js";
import { FaUser } from "react-icons/fa";
import { BsFillLockFill } from "react-icons/bs";
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
      <form className="form-vertical">
        <div classname="nombre">
          <FaUser size={20} color={colors.secondary} />
          <input
            type="text"
            name="Nombre"
            placeholder="Nombre de usuario"
          ></input>
        </div>
        <div classname="contraseña">
          <BsFillLockFill size={20} color={colors.secondary} />
          <input
            type="password"
            name="Contraseña"
            placeholder="Contraseña"
          ></input>
        </div>
        <a href="/cpassword">¿Has olvidado la contraseña?</a>
        <FormButton class="buttom" name="Iniciar sesión" />
      </form>
      <div className="form-register">
        <p>¿No tiene una cuenta?</p>
        <Link href="/signUp"><a>Registrarse</a></Link>
      </div>
      <style jsx>{`
        p {
          margin-right: 1rem;
          font-size: 0.8rem;
          font-family: ${fonts.default};
          color: ${colors.primary};
        }

        a {
          font-family: ${fonts.default};
          font-size: 0.8rem;
          margin-bottom: 2rem;
          color: ${colors.secondary};
          text-decoration: none;
        }

        a[href="/signUp"] {
          color: ${colors.primary};
          font-size: 0.9rem;
          font-family: ${fonts.default};
          margin-top: 5vh;
          font-weight: bold;
        }
        a:hover{
          color: ${colors.tertiary};
        }
        ::placeholder {
          color: ${colors.primary};
        }
        input[type="text"] {
          width: 100%;
          height: 2rem;
          border-radius: 40px;
          border: 0;
          padding: 0.2rem;
          margin-bottom: 1rem;
          font-family: ${fonts.default};
          font-size: 1rem;
          margin-left: 0.2rem;
        }

        input[type="password"] {
          width: 100%;
          height: 2rem;
          border-radius: 40px;
          border: 0;
          padding: 0.2rem;
          margin-bottom: 2.2rem;
          font-family: ${fonts.default};
          font-size: 1rem;
        }
        .form-register {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-top: 1rem;
          position: relative;
          top: 10vh;
          left: 33vw;
        }
        .nombre {
          display: flex;
          flex-direction: row;
        }

        .contraseña {
          display: flex;
          flex-direction: row;
        }

        .buttom {
          width: 70%;
          padding: 0.5rem;
          margin-top: 2rem;
        }

        .form-vertical {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 20vw;
          height: 50vh;
          background-color: ${colors.primary};
          border-radius: 10px;
          padding: 1rem;
          margin: 1rem;
          position: relative;
          top: 6rem;
          left: 70vw;
        }
      `}</style>
    </>
  );
}

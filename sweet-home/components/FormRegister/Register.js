import FormButton from "/components/FormButton/FormButton";
import Link from 'next/link'
import { colors } from "styles/frontend-conf.js";
import { fonts } from "styles/frontend-conf.js";
import { FaUser } from "react-icons/fa";
import { BsFillLockFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {FaUserPlus} from "react-icons/fa";

/**
 * 
 * @returns {Form} - form to register
 */
export default function FormRegister() {
  return (
    <>
      <form className="form-vertical">
      <div className="correo">
          <MdEmail size={20} color={colors.secondary} />
          <input
            type="email"
            name="Correo"
            placeholder="E-mail"
          ></input>
        </div>
        <div className="nombre">
          <FaUser size={20} color={colors.secondary} />
          <input
            type="text"
            name="Nombre"
            placeholder="Nombre de usuario"
          ></input>
        </div>
        <div className="nombrec">
          <FaUserPlus size={20} color={colors.secondary} />
          <input
            type="text"
            name="Nombrec"
            placeholder="Nombre completo"
          ></input>
        </div>
        <div className="contraseña">
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

        a[href="/signIn"] {
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
        input[type="email"] {
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
        .form-login {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-top: 1rem;
          position: relative;
          top: 3vh;
          left: 33vw;
        }
        .correo{
            display: flex;
            flex-direction: row;
        }
        .nombre {
          display: flex;
          flex-direction: row;
        }
        .nombrec {
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
          height: 60vh;
          background-color: ${colors.primary};
          border-radius: 10px;
          padding: 1rem;
          margin: 1rem;
          position: relative;
          top: 7vh;
          left: 70vw;
        }
      `}</style>
    </>
  );
}

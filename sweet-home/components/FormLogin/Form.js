import FormButton from "/components/FormButton/FormButton";
import { colors } from "styles/frontend-conf.js";
import { fonts } from "styles/frontend-conf.js";
import Image from 'next/image'
import {FaUser} from 'react-icons/fa';

export default function FormLogin() {
  return (
    <>
      <form className="form-vertical">
        <Image src="/public/LogoWebBlanco.png" width="40" height="40" className="Imagen"/>
        <div classname="nombre">
          <div className="icon">
            <FaUser/>
          </div>
          <input
            type="text"
            name="Nombre"
            placeholder="Nombre"
          ></input>
        </div>
        <input
          type="password"
          name="Contraseña"
          placeholder="Contraseña"
        ></input>
          <a href="/cpassword">¿Has olvidado la contraseña?</a>
        <FormButton class="buttom" name="Iniciar sesión" />
      </form>
      <style jsx>{`
        .icon{
          color: ${colors.secondary};
        }
        .nombre{
          display: inline-block;
        }
        ::placeholder{
            color: ${colors.primary};
        }
        input[type="text"] {
          width: 100%;
          height: 2rem;
          border-radius: 40px;
          border: 0;
          padding: 0.2rem;
          margin-bottom: 2rem;
          font-family: ${fonts.default};
          font-size: 1rem;
        }

        input[type="password"]{
          width: 100%;
          height: 2rem;
          border-radius: 40px;
          border: 0;
          padding: 0.2rem;
          margin-bottom: 2.2rem;
          font-family: ${fonts.default};
          font-size: 1rem;
        }

        .buttom {
          width: 70%;
          padding: 0.5rem;
          margin-top: 2rem;
        }

        a{
            font-family: ${fonts.default};
            font-size: 0.8rem;
            margin-bottom: 2rem;
            color: ${colors.secondary};
            text-decoration: none;
        }
        .form-vertical {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 17rem;
          height: 21rem;
          background-color: ${colors.primary};
          border-radius: 10px;
          padding: 1rem;
          margin: 1rem;
          position: absolute;
          top: 20rem;
          left: 50rem;
    
        }
        .Imagen{
            position: relative;
            left: 55rem;
            bottom: 12.5rem; 
            z-index: 1;
        }   
      `}</style>
    </>
  );
}

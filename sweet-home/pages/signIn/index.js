import Header from 'components/Header/Header'
import BasicFooter from 'components/BasicFooter/BasicFooter'
import Head from 'next/head'
import styles from "styles/global.module.css"
import FormButton from "/components/FormButton/FormButton";
import Link from 'next/link'
import { colors } from "styles/frontend-conf.js";
import { fonts } from "styles/frontend-conf.js";
import { FaUser } from "react-icons/fa";
import { BsFillLockFill } from "react-icons/bs";
/*
    * @author Sergio García Navarro
    * @returns Login page
    * @version 1.0
    * @date 13/01/2020
    * @description Login page
*/

/**
 * It returns a JSX element that contains a Head component, a Header component, a FormLogin component
 * and a BasicFooter component
 * @returns A React component.
 */
export default function SignIn() {

  return(

      <>
        
          <Head>
            <title>Inicio de sesión</title>
          </Head>
          <Header url1="/attendances" url2="/info" url3="/contact" url4="/signUp"
                          text1="Cuidados" text2="Quiénes somos" text3="Contacto" text4="Registrarse"/>
          <div className={styles.content}>
            <div className="page">
              <img className="signIn-image" src="/signIn-1.svg" alt="Imagen de inicio de sesión"/>
              <div className="form-page">
                <div className="text">
                  <h2>¡Bienvenido de nuevo!</h2>
                </div>
                <form className="form-vertical">
                  <div classname="form-vertical__name">
                    <FaUser size={20} color={colors.secondary} />
                    <input
                      title="Introducir nombre de usuario"
                      type="text"
                      name="Nombre"
                      placeholder="Nombre de usuario"
                      className="input"
                    ></input>
                  </div>
                  <div classname="form-vertical__password">
                    <BsFillLockFill size={25} color={colors.secondary} />
                    <input
                      title="Introducir contraseña"
                      type="password"
                      name="Contraseña"
                      placeholder="Contraseña"
                      className="input"
                    ></input>
                  </div>
                  <a title="Ir a la página para cambiar la contraseña" href="/cpassword">¿Has olvidado la contraseña?</a>
                  <FormButton className="form-vertical__button" name="Iniciar sesión" />
                </form>
                <div className="form-register">
                  <h6>¿No tiene una cuenta?</h6>
                  <Link href="/signUp"><a>Registrarse</a></Link>
                </div>
              </div>
            </div>
          </div>
          <BasicFooter color='#f0810f' hover='#f9A603' url1="/info" text1="Información" url2="/privacy" text2="Privacidad"
                          url3="/conditions" text3="Condiciones" marginTop='10rem'/>
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

              /*Misc*/

              animation-name: gradient;
              animation-duration: 30s;
              animation-time-function: ease;
              animation-iteration-count: infinite;

            }

            @keyframes gradient {

                  0%{
                    background-position:0% 70%
                  }
                  
                  50%{
                    background-position:100% 60%
                  }
                  
                  100%{
                    background-position:0% 70%
                  }
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



  )
}
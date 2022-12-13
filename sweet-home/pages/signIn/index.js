import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import {getProviders, getSession, signIn, getCsrfToken} from "next-auth/react"
import global from "styles/global.module.css"
import {colors} from "styles/frontend-conf.js";
import {fonts} from "styles/frontend-conf.js";
import Header from 'components/Header/Header'
import BasicFooter from 'components/BasicFooter/BasicFooter'
import {MdEmail} from "react-icons/md";
import {BsFillLockFill, BsFacebook, BsTwitter, BsGoogle} from "react-icons/bs";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai"
import signIn1 from "../../public/signIn-1.svg"

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
export default function SignIn({providers, csrfToken, session}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const Router = useRouter();

  /* Checking if the session is true, if it is, it will redirect to the home page. */

  useEffect(
    () => {
      if (session) {
        return {redirect: {destination: "/home"}} ;
  }},[session])

 /**
  * If the password input type is password, then hide the first icon and show the second icon, and
  * change the input type to text. Otherwise, show the first icon and hide the second icon, and change
  * the input type to password
  */
  const showPassword = () => {

    let passwordInput = document.getElementById("password");
    
    
    if (passwordInput.type === "password") {

      document.getElementById("show__icon1").style.display = "none";
      document.getElementById("show__icon2").style.display = "inline";
      passwordInput.type = "text";

    }
    else {

      document.getElementById("show__icon1").style.display = "inline";
      document.getElementById("show__icon2").style.display = "none";
      passwordInput.type = "password";

    }
  }

 /**
  * A function that is called when the user clicks the login button. It takes the email and password
  * from the form and sends it to the backend. If the login is successful, the user is redirected to
  * the home page.
  * @param e - the event object
  * @returns The user is being returned to the home page.
  */
  const Login = async (e) => {

    e.preventDefault();

    const res = await signIn("credentials", { email, password, redirect: false });

    if (res.error) {

      setMessage(res.error);

    }

    return Router.push('/home');
    
  }
  
  return(

      <>
        
          <Head>
            <title>Inicio de sesión</title>
          </Head>
          <Header url1="/attendances" url2="/info" url3="/contact" url4="/signUp"
                          text1="Cuidados" text2="Quiénes somos" text3="Contacto" text4="Registrarse"/>
          <div className={global.content}>
            <div className="page">
              <div className="page__image">
                <Image src={signIn1} width={1000} height={1000} alt="Imagen de inicio de sesión" priority/>
              </div>
              <div className="page__form">
                <div className="form__text">
                  <h2>¡Bienvenido de nuevo!</h2>
                </div>
                {Object.values(providers).filter(provider => provider.name != "Credentials" && provider.name == "Twitter").map((provider) => (
                  <div key={provider.name}>
                    <button className="form-vertical__button2" onClick={() => signIn(provider.id, {callbackUrl: `${window.location.origin}/home`,})}>
                      Inicia sesión con {provider.name} &nbsp; <BsTwitter size={20} color={colors.secondary} />
                    </button>
                  </div>
                ))}
                {Object.values(providers).filter(provider => provider.name != "Credentials" && provider.name == "Google").map((provider) => (
                  <div key={provider.name}>
                    <button className="form-vertical__button2" onClick={() => signIn(provider.id, {callbackUrl: `${window.location.origin}/home`,})}>
                      Inicia sesión con {provider.name} &nbsp; <BsGoogle size={20} color={colors.secondary} />
                    </button>
                  </div>
                ))}
                <div className="divider">
                  <hr className={global.white__line}></hr>
                  <p className={global.text}> ó </p>
                  <hr className={global.white__line}></hr>
                </div>
                <div className={global.error}>
                  {message}
                </div>
                <form className="form-vertical" action="/api/auth/signIn/email">
                  <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                  <div classname="form-vertical__email">
                    <div className="label">
                      <p className={global.text}>Email</p>
                      <MdEmail size={20} color={colors.secondary} />
                    </div>
                    <input
                      title="Introducir email"
                      type="email"
                      name="email"
                      value= {email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="javier@email.com"
                      className="input"
                    ></input>
                  </div>
                  <div classname="form-vertical__password">
                    <div className="label">
                      <p className={global.text}>Contraseña</p>
                      <BsFillLockFill size={25} color={colors.secondary} />
                    </div>
                    <div className="password__input">
                      <input
                        title="Introducir contraseña"
                        type="password"
                        name="Contraseña"
                        value= {password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Contraseña"
                        className="input"
                        id="password"
                      ></input>
                      <a className="password--visibility" onClick={() => showPassword()}><AiFillEye id="show__icon1" size={20} color={colors.primary}/><div style={{display: "none"}} id="show__icon2"><AiFillEyeInvisible size={20} color={colors.primary}/></div></a>
                    </div>
                  </div>
                  <Link href="/cpassword"><a title="Ir a la página para cambiar la contraseña" aria-label="Ir a cambiar contraseña">¿Has olvidado la contraseña?</a></Link>   
                </form>
                <button className="form-vertical__button" onClick={(e)=>Login(e)}>Iniciar sesión</button>
                <div className="form-register">
                  <h6>¿No tiene una cuenta?</h6>
                  <Link href="/signUp"><a aria-label="Ir al formulario de registro">Registrarse</a></Link>
                </div>
              </div>
            </div>
          </div>
          <BasicFooter color="#f0810f" hover="#f9A603" url1="/use" text1="Información" url2="/privacy" text2="Privacidad"
                   url3="/conditions" text3="Condiciones" url4="/accessibility" text4="Accesibilidad"/>
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


            .form__text{

              /*Box model*/

              display: flex;
              flex-direction: column;
              align-items: center;
              margin-top: 2rem;
              margin-bottom: 2rem;

            }

            .page__form{

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
                  justify-content: center;
                  width: 20vw;
                  height: 50vh;
                  padding: 1vh 2vh;

            }

            .form-vertical__email {

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

                /*Position*/

                position: relative;

                /*Box model*/

                display: block;
                height: 7vh;
                width: 70%;
                padding: 0.5rem;
                margin-top: 2rem;

                /*Text*/

                color: ${colors.secondary};
                font-family: ${fonts.default} + 'Light';
                font-style: bold;
                font-size: 1rem;

                /*Visuals*/

                background-color: #FCAA7F;
                border-radius: 5px;
                border: 1px solid ${colors.secondary};

            }

            .form-vertical__button:hover{

              /*Visuals*/

              background-color: #F9B776;
              transition: all 0.5s ease-in-out;

            }

            .form-vertical__button2 {

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                height: 3rem;
                width: 100%;
                padding: 0.5rem;
                margin-bottom: 1rem;

                /*Text*/

                color: ${colors.secondary};
                font-family: ${fonts.default} + 'Light';
                font-style: bold;
                font-size: 1rem;

                /*Visuals*/

                background-color: #FCAA7F;
                border-radius: 5px;
                border: 1px solid ${colors.secondary};

            }

            .form-vertical__button2:hover{

               /*Visuals*/

              background-color: #F9B776;
              transition: all 0.5s ease-in-out;

            }

            .page__image{

                /*Box model*/

                  margin-right: 4rem;
                  margin-left: 4rem;
                  width: 50%;
                  height: 100%;

            }

            .label{

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;

            }

            .password__input{

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                

            }

            .password--visibility{

                /*Box model*/

                margin-left: -2rem;
                margin-bottom: 1.5rem;

                /*Misc*/

                cursor: pointer;
            }
            
            .divider{

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                   
            }

            .divider p{


                /*Box model*/

                margin: 1rem;
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

              input[type="email"] {

                /*Box model*/

                width: 100%;
                height: 2rem;
                padding: 0.4rem;
                margin-bottom: 1rem;

                /*Text*/

                font-family: ${fonts.default};
                font-size: 1rem;

                /*Visuals*/

                border-radius: 5px;
                border: 0;

              }

              input[type="password"] {

                /*Box model*/

                width: 100%;
                height: 2rem;
                padding: 0.4rem;
                margin-bottom: 2rem;

                /*Text*/

                font-family: ${fonts.default};
                font-size: 1rem;

                /*Visuals*/

                border-radius: 5px;
                border: 0;

              }

              input[type="text"] {

                /*Box model*/

                width: 100%;
                height: 2rem;
                padding: 0.4rem;
                margin-bottom: 2rem;

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

export async function getServerSideProps(context) {
  const providers = await getProviders()
  const session = await getSession(context)
  return {
    props: { providers, session,
    csrfToken: await getCsrfToken(context)},
  }
}
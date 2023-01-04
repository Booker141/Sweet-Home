import Head from 'next/head'
import Link from 'next/link'
import {useState} from 'react'
import {useRouter} from 'next/router'
import {getProviders, getSession, signIn, getCsrfToken} from "next-auth/react"
import global from "styles/global.module.css"
import {colors} from "styles/frontend-conf.js";
import {statusColors} from "styles/frontend-conf"
import {fonts} from "styles/frontend-conf.js";
import Header from 'components/Header/Header'
import BasicFooter from 'components/BasicFooter/BasicFooter'
import ThemeButton from "components/ThemeButton/ThemeButton"
import {BsFillLockFill, BsTwitter, BsGoogle, BsFillCheckCircleFill, BsFillXCircleFill} from "react-icons/bs";
import {MdEmail, MdOutlineError} from "react-icons/md";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai"

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
export default function SignIn({providers, csrfToken}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const Router = useRouter();



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


  const validate = (e) => {

    // Regular expressions

    let regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let regPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if(e.target.name =="password"){

      if(password.length < 8 || !password.match(regPassword) ){
          
          document.getElementById("password__error").classList.add("form__input-passwordError--active");
          document.getElementById("error__password").classList.add("form__icon-error--active");
          document.getElementById("success__password").classList.remove("form__icon-success--active");

      }else{

          document.getElementById("password__error").classList.remove("form__input-passwordError--active");
          document.getElementById("error__password").classList.remove("form__icon-error--active");
          document.getElementById("success__password").classList.add("form__icon-success--active");


      }
  }

    // Validación del formato del email
    if(e.target.name == "email"){

      if(!email.match(regEmail)){
          
          document.getElementById("email__error").classList.add("form__input-emailError--active");
          document.getElementById("error__email").classList.add("form__error-icon--active");
          document.getElementById("success__email").classList.remove("form__success-icon--active");
 

      }else{
          
            document.getElementById("email__error").classList.remove("form__input-emailError--active");
            document.getElementById("error__email").classList.remove("form__error-icon--active");
            document.getElementById("success__email").classList.add("form__success-icon--active");
  
      }
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
    
    const res = await signIn('credentials', {redirect: false, email: email, password: password , callbackUrl: "http://localhost:3000/home"});

    setMessage(null);
    document.getElementById("submit__error").classList.remove("submit__error--active");

    if (res?.error) {

      setMessage(res.error);
      document.getElementById("submit__error").classList.add("submit__error--active");

      
    }

   
  }
  
  return(

      <>
        
          <Head>
            <title>Inicio de sesión</title>
          </Head>
          <Header url1="/news" url2="/about" url3="/contact" url4="/auth/signUp"
                          text1="Noticias" text2="Quiénes somos" text3="Contacto" text4="Registrarse"/>
          <div className={global.content}>
            <ThemeButton/>
            <div className="page">
              <div className="page__video"></div>
              <video autoPlay loop muted 
                  style={{ position: "absolute", top: "20rem", left: "3.2rem", width: '92%', height: '153%', objectFit: "cover", translate: "transform(50%,50%)", zIndex:"-99999", borderRadius: "30px 30px 30px 30px" }}>
                  <source src="/video2.mp4" />
              </video>
             
              <div className="page__form">
                <div className="form__text">
                  <h2>¡Bienvenido de nuevo!</h2>
                </div>
                {providers && Object.values(providers).filter(provider => provider.name != "Credentials" && provider.name == "Twitter").map((provider) => (
                  <div key={provider.name}>
                    <button className="form-vertical__button2" onClick={() => signIn(provider.id)}>
                      Inicia sesión con {provider.name} &nbsp; <BsTwitter size={20} color={colors.secondary} />
                    </button>
                  </div>
                ))}
                {providers && Object.values(providers).filter(provider => provider.name != "Credentials" && provider.name == "Google").map((provider) => (
                  <div key={provider.name}>
                    <button className="form-vertical__button2" onClick={() => signIn(provider.id)}>
                      Inicia sesión con {provider.name} &nbsp; <BsGoogle size={20} color={colors.secondary} />
                    </button>
                  </div>
                ))}
                <div className="divider">
                  <hr className={global.white__line}></hr>
                  <p className={global.text}> ó </p>
                  <hr className={global.white__line}></hr>
                </div>
                
                <form className="form-vertical" action="/api/auth/signIn/email" >
                  <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                  <div className="form-vertical__email">
                    <div className="label">
                      <p className={global.text}>Email</p>
                      <MdEmail size={20} color={colors.secondary} />
                    </div>
                    <div className="email__input">
                      <input
                        title="Introducir email"
                        type="email"
                        name="email"
                        value= {email}
                        required
                        onKeyUp={(e) => validate(e)}
                        onBlur={(e) => validate(e)}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="javier@email.com"
                        className="input"
                      ></input>
                      <div id="error__email" className="form__error-icon"><BsFillXCircleFill size={20} color={statusColors.error}/></div>
                      <div id="success__email" className="form__success-icon"><BsFillCheckCircleFill size={20} color={statusColors.success}/></div>
                      <div id="email__error" className="form__input-emailError">
                        <div className="error__icon">
                          <MdOutlineError size={30} color={colors.secondary}/>
                        </div>
                        <p className={global.text2}>Debe seguir el formato correcto</p>
                      </div>
                </div>
                  </div>
                  <div className="form-vertical__password">
                    <div className="label">
                      <p className={global.text}>Contraseña</p>
                      <BsFillLockFill size={25} color={colors.secondary} />
                    </div>
                    <div className="password__input">
                      <input
                        title="Introducir contraseña"
                        type="password"
                        name="Contraseña"
                        value={password}
                        required
                        pattern="(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Contraseña"
                        className="input"
                        id="password"
                      ></input>
                      <a className="password--visibility" onClick={() => showPassword()}><AiFillEye id="show__icon1" size={20} color={colors.primary}/><div style={{display: "none"}} id="show__icon2"><AiFillEyeInvisible size={20} color={colors.primary}/></div></a>
                      <div id="error__password" className="form__error-icon"><BsFillXCircleFill size={20} color={statusColors.error}/></div>
                      <div id="success__password" className="form__success-icon"><BsFillCheckCircleFill size={20} color={statusColors.success}/></div>
                      <div id="password__error" className="form__input-passwordError">
                        <div className="error__icon">
                          <MdOutlineError size={30} color={colors.secondary}/>
                        </div>
                        <p className={global.text2}>Debe estar compuesta como mínimo por 8 caracteres y tener un dígito, una mayúscula y un caracter especial.</p>
                  </div> 
                    </div>
                  </div>
                </form>
                <div id="submit__error" className="submit__error">
                  {message}
                </div>
                <button className="form-vertical__button" onClick={(e)=>Login(e)}>Iniciar sesión</button>
                <div className="form-register">
                  <h6>¿No tiene una cuenta?</h6>
                  <Link href="/auth/signUp"><a aria-label="Ir al formulario de registro">Registrarse</a></Link>
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
              margin-left: 2rem;
              margin-right: 2rem;
              margin-bottom: 2rem;

              /*Text*/


            }

            .page__video{

              /*Position*/

              position: absolute;
              top: 20rem;
              left: 3.2rem;
             
              z-index: -9;

              /*Box model*/

              display: block;
              width: 92%;
              height: 153%;

              /*Visuals*/

              border-radius: 30px 30px 30px 30px;
              backdrop-filter: blur(5px);
              background-color: rgba(0,0,0,0.2);


            }

            .page__form{

              /*Position*/

              position: relative;
              left: 30%;
              top: 50%;

              /*Box model*/

              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              margin-bottom: 2rem;
              margin-top: 2rem;

              /*Visuals*/

              background-image: linear-gradient(120deg, rgba(246, 212, 101, 0.8) 0%, rgba(253, 161, 133, 0.8) 100%);
              background-size: 100% 100%;
              border-radius: 30px;

            }

            .form-register{

              /*Box model*/
              
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              margin-bottom: 2rem;

            }

            /*ERRORES*/

            .form__input-emailError{

              /*Position*/

              position: absolute;
              left: 20rem;

              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
              width: 100%;
              margin-bottom: 2rem;


              /*Text*/

              font-family: 'Poppins', sans-serif;
              color: #fafafa;

              /*Visuals*/

              border-radius: 10px;
              background-color: ${statusColors.error};
              opacity: 0;

              }


              .form__input-emailError p{

              /*Box model*/

              margin-left: 2rem;

              }

              .form__input-emailError--active{

              /*Position*/

              position: absolute;
              left: 20rem;
              margin-bottom: 2rem;
              width: 100%;

              /*Box model*/

              display: flex;
              flex-direction: row;


              /*Text*/

              font-family: 'Poppins', sans-serif;
              color: #fafafa;

              /*Visuals*/

              border-radius: 10px;
              background-color: ${statusColors.error};
              opacity: 1;

              }

              .form__input-passwordError{

              /*Position*/

              position: absolute;
              left: 20rem;

              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
              margin-bottom: 2rem;

              width: 100%;

              /*Text*/

              font-family: 'Poppins', sans-serif;
              color: #fafafa;

              /*Visuals*/

              border-radius: 10px;
              background-color: ${statusColors.error};
              opacity: 0;

              }


              .form__input-passwordError p{

              /*Box model*/

              margin-left: 2rem;

              }

              .form__input-passwordError--active{

              /*Position*/

              position: absolute;
              left: 20rem;
              margin-bottom: 2rem;

              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
              width: 100%;

              /*Text*/

              font-family: 'Poppins', sans-serif;
              color: #fafafa;

              /*Visuals*/

              border-radius: 10px;
              background-color: ${statusColors.error};
              opacity: 1;

              }

              .submit__error{

              /*Box model*/

              display: none;

              /*Text*/

              font-family: 'Poppins', sans-serif;
              color: ${colors.secondary};

              /*Visuals*/

              background-color: ${statusColors.error};

              }

              .submit__error--active{

              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
              padding: 0.5rem;

              /*Text*/

              font-family: 'Poppins', sans-serif;
              color: ${colors.secondary};

              /*Visuals*/

              border-radius: 10px;
              background-color: ${statusColors.error};

              }


              .error__icon{

              /*Box model*/

              margin-left: 1rem;

              }

              .form__error-icon{

                /*Position*/

                position: relative;
                right: -1.1rem;
                bottom: 0.5rem;
                z-index: 999;

                /*Visuals*/

                opacity: 0;
                color: ${statusColors.error};


              }

              .form__success-icon{

              /*Position*/

              position: relative;
              right: 0.1rem;
              bottom: 0.5rem;
              z-index: 999;

              /*Visuals*/

              opacity: 0;
              color: ${statusColors.success};

              }

              .form__error-icon--active{

              /*Position*/

              position: relative;
              right: -1.1rem;
              bottom: 0.5rem;
              z-index: 999;

              /*Visuals*/

              opacity: 1;
              color: ${statusColors.error};

              }

              .form__success-icon--active{

              /*Position*/

              position: relative;
              right: 0.1rem;
              bottom: 0.5rem;
              z-index: 999;

              /*Visuals*/

              opacity: 1;
              color: ${statusColors.success};

              }

              .submit__error{

                /*Box model*/

                display: none;

                /*Text*/

                font-family: 'Poppins', sans-serif;
                font-size: 1.2rem;
                color: ${statusColors.error};

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
                flex-direction: column;
                justify-content: center;

            }

            .form-vertical__password {

                /*Box model*/

                display: flex;
                flex-direction: column;
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

                cursor: pointer;
                background-color: rgba(252, 171, 127, 0.5);
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

                cursor: pointer;
                background-color: rgba(252, 171, 127, 0.5);
                border-radius: 5px;
                border: 1px solid ${colors.secondary};

            }

            .form-vertical__button2:hover{

               /*Visuals*/

              background-color: #F9B776;
              transition: all 0.5s ease-in-out;

            }

            .email__input{

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
                width: 100%;
                margin-bottom: 0.5rem;
                   
            }

            .divider p{


                /*Box model*/

                margin: 1rem;
            }

            h2{

                /*Text*/

                color: ${colors.secondary};
                font-family: 'Satisfy';
                font-weight: 500;
                font-size: 3rem;
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

               
                /*Text*/

                font-family: ${fonts.default};
                font-size: 0.8rem;
                font-weight: bold;
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
                transition: 0.2s ease all;

              }

              input[type="email"]:focus {

              /*Visuals*/

              border: 2px solid #4d97f7;
              outline: none;
              box-shadow: 10px 10px 20px 0px rgba(176,176,176,0.66);

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
                transition: 0.2s ease all;

              }

              input[type="password"]:focus {

                /*Visuals*/

                border: 2px solid #4d97f7;
                outline: none;
                box-shadow: 10px 10px 20px 0px rgba(176,176,176,0.66);

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
            transition: 0.2s ease all;

          }

          input[type="text"]:focus {

            /*Visuals*/

            border: 2px solid #4d97f7;
            outline: none;
            box-shadow: 10px 10px 20px 0px rgba(176,176,176,0.66);

          }

             

              
            `}</style>
      </>



  )
}


export async function getServerSideProps(context) {
  
  const {req} = context;

  const session = await getSession({req});

  if(session){

    console.log("Session", JSON.stringify(session, null, 2));

    return {
      redirect: {
        destination: '/home',
        permanent: false,
      }
    }

  }

  return {
    props: { providers: await getProviders(), csrfToken: await getCsrfToken(context) },
  }
}
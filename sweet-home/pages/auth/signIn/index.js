import Head from 'next/head'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import {getProviders, useSession, signIn, getCsrfToken} from "next-auth/react"
import global from "styles/global.module.css"
import {colors} from "styles/frontend-conf.js";
import {statusColors} from "styles/frontend-conf.js"
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

  const {data: session, status} = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isValidate, setIsValidate] = useState(false);
  const Router = useRouter();


  useEffect(() => {
   
      if (session) {
        return Router.replace('/home');
      } 

  }, [Router]);


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

    let regEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let regPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if(e.target.name =="password"){

      if(password.length < 8 || !password.match(regPassword) ){
          
          document.getElementById("password__error").classList.add("form__input-passwordError--active");
          document.getElementById("error__password").classList.add("form__icon-error--active");
          document.getElementById("success__password").classList.remove("form__icon-success--active");
          setIsValidate(false);

      }else{

          document.getElementById("password__error").classList.remove("form__input-passwordError--active");
          document.getElementById("error__password").classList.remove("form__icon-error--active");
          document.getElementById("success__password").classList.add("form__icon-success--active");
          setIsValidate(true);

      }
  }

    // Validación del formato del email
    if(e.target.name == "email"){

      if(!email.match(regEmail)){
          
          document.getElementById("email__error").classList.add("form__input-emailError--active");
          document.getElementById("error__email").classList.add("form__error-icon--active");
          document.getElementById("success__email").classList.remove("form__success-icon--active");
          setIsValidate(false);

      }else{
          
            document.getElementById("email__error").classList.remove("form__input-emailError--active");
            document.getElementById("error__email").classList.remove("form__error-icon--active");
            document.getElementById("success__email").classList.add("form__success-icon--active");
            setIsValidate(true);
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

    document.getElementById("submit__error").classList.remove("submit__error--active");

    if(isValidate){

      const res = await signIn('credentials', {redirect: false, email: email, password: password, callbackUrl: "/home"});
        

        if(res?.error){
            
          setMessage(res.error);

          document.getElementById("submit__error").classList.add("submit__error--active");

        }

        return Router.push("/home")

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
            <div className={global.content}>
              <div className="page">
                <div className="page__video"></div>
                <video autoPlay loop muted 
                    style={{position: "absolute", width: '70rem', height: '80rem', objectFit: "cover", zIndex:"-99999", borderRadius: "30px 30px 30px 30px" }}>
                    <source src="/videos/video2.mp4" />
                </video>
              
                <div className="page__form">
                  <div className="form__text">
                    <h2>¡Bienvenido de nuevo!</h2>
                  </div>
                  {providers && Object.values(providers).filter(provider => provider.name != "Credentials" && provider.name == "Twitter").map((provider) => (
                    <div key={provider.name}>
                      <button className="form-vertical__button2" onClick={() => signIn(provider.id, {callbackUrl: '/home'})}>
                        Inicia sesión con {provider.name} &nbsp; <BsTwitter size={20} color={colors.secondary} />
                      </button>
                    </div>
                  ))}
                  {providers && Object.values(providers).filter(provider => provider.name != "Credentials" && provider.name == "Google").map((provider) => (
                    <div key={provider.name}>
                      <button className="form-vertical__button2" onClick={() => signIn(provider.id, {callbackUrl: '/home'})}>
                        Inicia sesión con {provider.name} &nbsp; <BsGoogle size={20} color={colors.secondary} />
                      </button>
                    </div>
                  ))}
                  <div className="divider">
                    <hr className={global.white__line}></hr>
                    <p className={global.text}> ó </p>
                    <hr className={global.white__line}></hr>
                  </div>
                  
                  <form className="form-vertical" action="/api/auth/signIn/credentials" >
                    <input name="csrfToken" type="hidden" defaultValue={csrfToken}/>
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
                          placeholder="p.ej.: javier@email.com"
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
                        
                      </div>
                    </div>
                  </form>
                  <div id="submit__error" className="submit__error">
                          {message}
                  </div> 
                  <input type="submit" value="Iniciar sesión" className="form-vertical__button" onClick={(e)=>Login(e)}/>
                  <div className="form-register">
                    <h6>¿No tiene una cuenta?</h6>
                    <Link href="/auth/signUp"><a aria-label="Ir al formulario de registro">Registrarse</a></Link>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <BasicFooter color="#f0810f" hover="#f9A603" url1="/faq" text1="Información" url2="/privacy" text2="Privacidad"
                   url3="/conditions" text3="Condiciones" url4="/accessibility" text4="Accesibilidad"/>
          <style jsx>{`

            .page {

              /*Box model*/

              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 7rem;
              margin-top: 7rem;

              /*Visuals*/

              border-radius: 1rem;

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

            }

            .page__video{

              /*Position*/

              position: absolute;

             
              z-index: -9;

              /*Box model*/

              display: block;
              width: 70rem;
              height: 80rem;

              /*Visuals*/

              border-radius: 30px 30px 30px 30px;
              backdrop-filter: blur(5px);
              background-color: rgba(0,0,0,0.2);


            }

            .page__form{

              /*Position*/

              position: relative;

              /*Box model*/

              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              margin-bottom: 2rem;
              margin-top: 2rem;

              /*Visuals*/

              background-image: linear-gradient(45deg, rgba(240,129,15, 0.8) 35%, rgba(249,166,3, 0.8) 100%);
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
              margin-left: 22rem;

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
              margin-left: 22rem;
              margin-bottom: 2rem;
              width: 100%;

              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;

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
              margin-left: 20rem;

              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
              margin-bottom: 2rem;
              margin-left: 7rem;

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
              margin-left: 20rem;
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
                color: ${colors.secondary};

                /*Visuals*/

                background-color: ${statusColors.error};

              }

                .submit__error--active{

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: 0.5rem;
                width: 65%;

                /*Text*/

                font-family: 'Poppins', sans-serif;
                color: ${colors.secondary};

                /*Visuals*/

                border-radius: 10px;
                background-color: ${statusColors.error};

              }


            .form-vertical {

                  /*Position*/

                  position: relative;

                  /*Box model*/

                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  padding: 2rem;
                  height: 25rem;


            }

            .form-vertical__email {

                /*Box model*/

                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 20rem;

            }

            .form-vertical__password {

                /*Box model*/

                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 20rem;

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
                background-color: rgba(240, 142, 15, 0.5);
                border-radius: 5px;
                border: 1px solid ${colors.secondary};

            }

            .form-vertical__button:hover{

              /*Visuals*/

              background-color: ${colors.tertiary};
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
                background-color: rgba(240, 142, 15, 0.5);
                border-radius: 5px;
                border: 1px solid ${colors.secondary};

            }

            .form-vertical__button2:hover{

               /*Visuals*/

              background-color: ${colors.tertiary};
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

                width: 84%;
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

  return {
    props: { providers: await getProviders(), csrfToken: await getCsrfToken(context) },
  }
}
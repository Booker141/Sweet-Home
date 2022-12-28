import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Router  from 'next/router'
import {useSession, signIn} from 'next-auth/react'
import {useState} from 'react'
import global from "styles/global.module.css"
import {colors} from "styles/frontend-conf.js";
import {fonts} from "styles/frontend-conf.js";
import {statusColors} from "styles/frontend-conf.js"
import Header from "components/Header/Header"
import BasicFooter from "components/BasicFooter/BasicFooter"
import ThemeButton from "components/ThemeButton/ThemeButton"
import {FaUser, FaUserPlus} from "react-icons/fa";
import {BsFillLockFill, BsFillCheckCircleFill, BsFillXCircleFill} from "react-icons/bs";
import {MdEmail, MdOutlineError} from "react-icons/md";
import {AiFillInfoCircle, AiFillEye, AiFillEyeInvisible} from "react-icons/ai"
import signUp1 from "../../../public/signUp-1.svg"


/*
    * @author Sergio García Navarro
    * @returns Sign up page
    * @version 1.0
    * @date 13/01/2020
    * @description Sign up page
*/

export default function SignUp() {

  const {data: session, status} = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState(null)
  const [isValidate, setIsValidate] = useState(false);
  
    
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
   * It sends a POST request to the server with the user's data, and if the server responds with a
   * message that says "Registered successfully", it redirects the user to the home page
   * @param e - The event object
   */
  const signUp = async (e) => {
    
    e.preventDefault();
    /*
    const form = document.getElementById("form");
    const emailV = document.getElementById("email");
    const passwordV = document.getElementById("password");
    const nameV = document.getElementById("name");
    const lastnameV = document.getElementById("lastname");
    const usernameV = document.getElementById("username");

    emailV.addEventListener('keyup', validate);
    passwordV.addEventListener('keyup', validate);
    nameV.addEventListener('keyup', validate);
    lastnameV.addEventListener('keyup', validate);
    usernameV.addEventListener('keyup', validate);

    emailV.addEventListener('blur', validate);
    passwordV.addEventListener('blur', validate);
    nameV.addEventListener('blur', validate);
    lastnameV.addEventListener('blur', validate);
    usernameV.addEventListener('blur', validate);
    */
    // Regular expressions

    let regEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
    let regPassword = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    let regName = / ^ [a-zA-Z] + [a-zA-Z] + $ /;
    let regLastname = / ^ [a-zA-Z] + [a-zA-Z] + $ /;




    if(password.length <= 8 || !regPassword.test(password) ){
        
        document.getElementById("password__error").classList.add("form__input-error--active");
        document.getElementById("error__password").classList.add("form__icon-error--active");
        document.getElementById("success__password").classList.remove("form__icon-success--active");
        setIsValidate(false);
    }else{

        document.getElementById("password__error").classList.remove("form__input-error--active");
        document.getElementById("error__password").classList.remove("form__icon-error--active");
        document.getElementById("success__password").classList.add("form__icon-success--active");
        setIsValidate(true);

    }

   

    // Validación del formato del email

    if(!regEmail.test(email)){
        
        document.getElementById("email__error").classList.add("form__input-error--active");
        document.getElementById("error__email").classList.add("form__icon-error--active");
        document.getElementById("success__email").classList.remove("form__icon-success--active");
        setIsValidate(false);

    }else{
        
          document.getElementById("email__error").classList.remove("form__input-error--active");
          document.getElementById("error__email").classList.remove("form__icon-error--active");
          document.getElementById("success__email").classList.add("form__icon-success--active");
          setIsValidate(true);
    }

    if(!regName.test(name)){

        document.getElementById("name__error").classList.add("form__input-error--active");
        document.getElementById("error__name").classList.add("form__icon-error--active");
        document.getElementById("success__name").classList.remove("form__icon-success--active");
        setIsValidate(false);

    }else{


        document.getElementById("name__error").classList.remove("form__input-error--active");
        document.getElementById("error__name").classList.remove("form__icon-error--active");
        document.getElementById("success__name").classList.add("form__icon-success--active");
        setIsValidate(true);
    }

    if(!regLastname.test(lastname)){


        document.getElementById("lastname__error").classList.add("form__input-error--active");
        document.getElementById("error__lastname").classList.add("form__icon-error--active");
        document.getElementById("success__lastname").classList.remove("form__icon-success--active");
        setIsValidate(false);

    }else{

        document.getElementById("lastname__error").classList.remove("form__input-error--active");
        document.getElementById("error__lastname").classList.remove("form__icon-error--active");
        document.getElementById("success__lastname").classList.add("form__icon-success--active");
        setIsValidate(true);
    }

    // Validación logitud del username

    if(username.length <= 4){
        
        document.getElementById("username__error").classList.add("form__input-error--active");
        document.getElementById("error__username").classList.add("form__icon-error--active");
        document.getElementById("success__username").classList.remove("form__icon-success--active");
        setIsValidate(false);

    }else{

        document.getElementById("username__error").classList.remove("form__input-error--active");
        document.getElementById("error__username").classList.remove("form__icon-error--active");
        document.getElementById("success__username").classList.add("form__icon-success--active");
        setIsValidate(true);
    }

    if(!isValidate){

      document.getElementById("submit__error").classList.add("submit__error--activate");

    }

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
        lastname: lastname,
        username: username,
      })
    });

    const data = await res.json();

    setMessage(data.message);

    if(data.message == 'Registrado con éxito'){

      await signIn("credentials", {email, password});

      return Router.push('/home');

    }
  } 


 if(session){

    Router.push('/home');

 }
  
  return(

      <>
        <Head>
          <title>Registro</title>
        </Head>
        
        <Header url1="/news" url2="/about" url3="/contact" url4="/auth/signIn"
                          text1="Noticias" text2="Quiénes somos" text3="Contacto" text4="Iniciar sesión"/>
        <div className={global.content}>
        <ThemeButton/>
        <div className="page">
          
        <div className="page__video"></div>
              <video autoPlay loop muted 
                  style={{ position: "absolute", top: "20rem", left: "3.2rem", width: '92%', height: '220%', objectFit: "cover", translate: "transform(50%,50%)", zIndex:"-99999", borderRadius: "30px 30px 30px 30px" }}>
                  <source src="/video2.mp4" />
              </video>
          <div className="page__form">
            <div className="form__text">
              <h2>¡Bienvenido a Sweet Home!</h2>
              
              <p className={global.text}>Introduzca los siguientes datos:</p>
            </div>
            
            <form className="form-vertical" action="/api/register" id="form">
              <div className="form-vertical__email">
                <div className="label">
                  <p className={global.text}>Email</p>
                  <MdEmail size={20} color={colors.secondary} />
                </div>
                <div className="email__input">
                  <input
                    title="El email debe seguir el formato correcto"
                    type="email"
                    name="email"
                    value={email}
                    id="email"
                    pattern="[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="p. ej.: javier@gmail.com"
                  ></input>
                  <div id="error__email" className="form__error-icon"><BsFillXCircleFill size={20} color={statusColors.error}/></div>
                  <div id="success__email" className="form__success-icon"><BsFillCheckCircleFill size={20} color={statusColors.success}/></div>
                </div>
                <div id="email__error" className="form__input--error">
                  <div className="error__icon">
                    <MdOutlineError size={30} color={colors.secondary}/>
                  </div>
                  <p className={global.text2}>Debe seguir el formato correcto</p>
                </div>
              </div>
              <div className="form-vertical__name">
                <div className="label">
                  <p className={global.text}>Nombre</p>
                  <FaUserPlus size={20} color={colors.secondary} />
                </div>
                <div className="name__input">
                  <input
                    title="Introducir nombre"
                    type="text"
                    name="name"
                    value={name}
                    id="name"
                    required
                    pattern="[a-zA-Z] + [a-zA-Z] +"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="p. ej.: Javier"
                  ></input>
                  <div id="error__name" className="form__error-icon"><BsFillXCircleFill size={20} color={statusColors.error}/></div>
                  <div id="success__name" className="form__success-icon"><BsFillCheckCircleFill size={20} color={statusColors.success}/></div>
                </div>
                <div id="name__error" className="form__input--error">
                  <div className="error__icon">
                    <MdOutlineError size={30} color={colors.secondary}/>
                  </div>
                  <p className={global.text2}>No puede contener dígitos o caracteres especiales.</p>
                </div>
              </div>
              <div className="form-vertical__lastname">
                <div className="label">
                  <p className={global.text}>Apellidos</p>
                  <FaUserPlus size={20} color={colors.secondary} />
                </div>
                <div className="lastname__input">
                  <input
                    title="Introducir apellidos"
                    type="text"
                    name="lastname"
                    value={lastname}
                    id="lastname"
                    pattern="[a-zA-Z] + [a-zA-Z] +"
                    required
                    onChange={(e) => setLastname(e.target.value)}
                    placeholder="p. ej.: García Navarro"
                  ></input>
                    <div id="error__lastname" className="form__error-icon"><BsFillXCircleFill size={20} color={status.error}/></div>
                    <div id="success__lastname" className="form__success-icon"><BsFillCheckCircleFill size={20} color={status.success}/></div>
                  </div>
                <div id="lastname__error" className="form__input--error">
                  <div className="error__icon">
                    <MdOutlineError size={30} color={colors.secondary}/>
                  </div>
                  <p className={global.text2}>No puede contener dígitos o caracteres especiales.</p>
                </div>
              </div>
              <div classname="form-vertical__username">
                <div className="label">
                  <p className={global.text}>Nombre de usuario</p>
                  <FaUser size={20} color={colors.secondary} />
                </div>   
                <div className="username__input">
                  <input
                    title="Introducir nombre de usuario"
                    type="text"
                    name="username"
                    value={username}
                    id="username"
                    required
                    minLength="4"
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="p. ej.: javier65"
                    className="input"
                  ></input>
                    <div id="error__username" className="form__error-icon"><BsFillXCircleFill size={20} color={status.error}/></div>
                    <div id="success__username" className="form__success-icon"><BsFillCheckCircleFill size={20} color={status.success}/></div>
                  </div>
                  <div id="username__error" className="form__input--error">
                    <div className="error__icon">
                      <MdOutlineError size={30} color={colors.secondary}/>
                    </div>
                    <p className={global.text2}>Debe estar compuesto por 4 caracteres como mínimo</p>
                  </div>

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
                    name="password"
                    value={password}
                    id="password"
                    pattern="(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="p. ej.: 1Manuel!"
                    className="input"
                  ></input>
                  <a className="password--visibility" onClick={() => showPassword()}><AiFillEye id="show__icon1" size={20} color={colors.primary}/><div style={{display: "none"}} id="show__icon2"><AiFillEyeInvisible size={20} color={colors.primary}/></div></a>
                  <div id="error__password" className="form__error-icon"><BsFillXCircleFill size={20} color={status.error}/></div>
                  <div id="success__password" className="form__success-icon"><BsFillCheckCircleFill size={20} color={status.success}/></div>
                </div>  
                <div id="password__error" className="form__input--error">
                  <div className="error__icon">
                    <MdOutlineError size={30} color={colors.secondary}/>
                  </div>
                  <p className={global.text2}>Debe estar compuesta como mínimo por 8 caracteres y tener un dígito, una mayúscula y un caracter especial.</p>
                </div>
                <div className="tooltip">
                  <div className="tooltip__icon">
                    <AiFillInfoCircle size={20} color={colors.secondary} />
                    <p className={global.text}> Información contraseña</p>
                  </div>
                  <div className="tooltiptext">
                    <p> - La contraseña debe tener al menos 8 caracteres.</p>
                    <p> - La contraseña debe tener al menos una letra mayúscula.</p>
                    <p> - La contraseña debe tener al menos un número.</p>
                  </div>
                </div>
              </div>
            </form>
            <div className="form__conditions">
              <p>Al confirmar, aceptará las condiciones de la empresa. En los apartados <a className="form__link" aria-label="Ir a Condiciones" href="/conditions">Condiciones</a> y  <a className="form__link" aria-label="Ir a Privacidad" href="/privacity">Privacidad</a> encontrará más información.</p>
            </div>
            <div id="submit__error" className="submit__error">
                <MdOutlineError size={20} color={colors.secondary}/>{message}
            </div>
            <input type="submit" value="Confirmar" className="form-vertical__button" onClick={(e) => signUp(e)}/>
            <div className="form-login">
              <h6>¿Ya tienes una cuenta?</h6>
              <Link href="/auth/signIn"><a aria-label="Ir a formulario de inicio de sesión">Entrar</a></Link>
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
          justify-content: space-around;
          margin-bottom: 3rem;

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

          .page__video{

          /*Position*/

          position: absolute;
          top: 20rem;
          left: 3.2rem;

          z-index: -9;

          /*Box model*/

          display: block;
          width: 92%;
          height: 220%;

          /*Visuals*/

          border-radius: 30px 30px 30px 30px;
          backdrop-filter: blur(5px);
          background-color: rgba(0,0,0,0.2);


          }

           .page__form{


             /*Position*/

             position: relative;
             top: 50%;

              /*Box model*/

              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              width: 50%;
              margin-bottom: 2rem;
              margin-top: 3rem;

              /*Visuals*/

              background-image: linear-gradient(120deg, rgba(246, 212, 101, 0.8) 0%, rgba(253, 161, 133, 0.8) 100%);
              background-size: 100% 100%;
              border-radius: 30px;


        }


        .form__text{

          /*Box model*/

          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 2rem;
          margin-bottom: 2rem;

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
          justify-content: center;
          margin-bottom: 2rem;

        }

        /*ERRORES*/

        .form__input--error{

          /*Box model*/

          display: none;
          margin-bottom: 2rem;
          width: 100%;

          /*Text*/

          font-family: 'Poppins', sans-serif;
          color: #fafafa;
        
          /*Visuals*/

          border-radius: 10px;
          background-color: ${statusColors.error};

        }

        .form__input--error p{

          /*Box model*/

          margin-left: 2rem;

        }

        .form__input-error--active{

          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          

        }

        .error__icon{

          /*Box model*/

          margin-left: 1rem;

        }

        .form__error-icon{

          /*Position*/

          position: absolute;
          right: 1.5rem;
          bottom: 0.8rem;
          z-index: 999;

          /*Visuals*/

          opacity: 0;
          color: ${statusColors.error};


        }

        .form__success-icon{

          /*Position*/

          position: absolute;
          right: 1.5rem;
          bottom: 0.8rem;
          z-index: 999;

          /*Visuals*/

          opacity: 0;
          color: ${statusColors.success};

        }

        .form__error-icon--active{

          /*Visuals*/

          opacity: 1;

        }

        .form__success-icon--active{

          /*Visuals*/

          opacity: 1;

        }

        .submit__error{

          /*Box model*/

          display: none;

          /*Text*/

          font-family: 'Poppins', sans-serif;
          font-size: 1.2rem;
          color: ${statusColors.error};

        }

        .submit__error-active{

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
              margin-top: 13rem;
              margin-bottom: 13rem;
              width: 20vw;
              height: 50vh;
              padding: 1vh 2vh;

        }

        .form-vertical__username {

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
            width: 100%;

        }

        .form-vertical__button {

            /*Position*/

            position: relative;

            /*Box model*/

            display: block;
            height: 7vh;
            width: 50%;
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

        .form__conditions{

          /*Box model*/

          display: flex;
          align-items: center;
          margin-left: 3rem;
          width: 50%;

          /*Text*/

          color: ${colors.secondary};

        }

       .form__link{

           /*Text*/

          font-family: ${fonts.default};
          color: ${colors.secondary};
          text-decoration: none;
          font-size: 1rem;
          font-weight: 400;
       }

       .form__link:hover{

          /*Text*/

          color: ${colors.tertiary};
          transition: all 0.5s ease-in-out;
        }
 

       
        .email__input{

          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;

        }

        .name__input{


          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;

        }

        .lastname__input{


          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;

        }

        .username__input{


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

        .tooltip{

          /*Position*/

          position: relative;

          /*Box model*/

          display: inline-block;
          margin-bottom: 1rem;

        }

        .tooltip__icon{

          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 100%;

        }

        .tooltip__icon p{

          /*Box model*/

          margin-left: 1.6rem;

        }

        .tooltip .tooltiptext{

          /*Position*/

          position: absolute;
          z-index: 100;
          

          /*Box model*/

          width: 20rem;
          padding: 1rem;

          /*Text*/

          text-align: center;

          /*Visuals*/

          border-radius: 10px;
          visibility: hidden;
          background-color: ${colors.quaternary};
          color: ${colors.secondary};
        }

        .tooltip:hover .tooltiptext {

          /*Visuals*/

          visibility: visible;

        }

        .label{

          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;

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

          a[href="/home"] {
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

          input[type="email"] {

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

        `}</style>
      </>



  )
}
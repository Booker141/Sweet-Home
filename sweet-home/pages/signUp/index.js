import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {useState} from 'react'
import {getCsrfToken, useSession} from "next-auth/react"
import styles from "styles/global.module.css"
import {colors} from "styles/frontend-conf.js";
import {fonts} from "styles/frontend-conf.js";
import Header from "components/Header/Header"
import BasicFooter from "components/BasicFooter/BasicFooter"
import {FaUser} from "react-icons/fa";
import {BsFillLockFill} from "react-icons/bs";
import {MdEmail} from "react-icons/md";
import {FaUserPlus} from "react-icons/fa";
import {AiFillInfoCircle} from "react-icons/ai"
import {AiFillEyeInvisible} from "react-icons/ai"
import {AiFillEye} from "react-icons/ai"
import signUp1 from "../../public/signUp-1.svg"

/*
    * @author Sergio García Navarro
    * @returns Sign up page
    * @version 1.0
    * @date 13/01/2020
    * @description Sign up page
*/

export default function SignUp({csrfToken}) {

  const {data: session, status} = useSession({required: false});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState(null);

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
  const signUp = async (e) => {

    e.preventDefault();
    const body = {
      email: email,
      password: password,
      name: name,
      lastName: lastname,
      username: username,
    }
    const res = await fetch('/api/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    const data = await res.json();
    setMessage(data.message);

    if(data.message == "Registrado con éxito"){
      return Router.push('/home');
    }
  }
  
  return(

      <>
        <Head>
          <title>Registro</title>
        </Head>
        
        <Header url1="/attendances" url2="/info" url3="/contact" url4="/signIn"
                          text1="Cuidados" text2="Quiénes somos" text3="Contacto" text4="Iniciar sesión"/>
        <div className={styles.content}>
        <div className="page">
          <div className="page__image">
            <Image src={signUp1} alt="Imagen de registro" priority/>
          </div>
          <div className="page__form">
            <div className="form__text">
              <h2>¡Bienvenido a Sweet Home!</h2>
              <div className="form__text--error">{message}</div>
              <p className={styles.text}>Introduzca los siguientes datos:</p>
            </div>
            <form className="form-vertical">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
              <div className="form-vertical__email">
                <div className="label">
                  <p className={styles.text}>Email</p>
                  <MdEmail size={20} color={colors.secondary} />
                </div>
                <input
                  title="Introducir email"
                  type="email"
                  name="Correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="p. ej.: javier@gmail.com"
                ></input>
              </div>
              <div className="form-vertical__name">
                <div className="label">
                  <p className={styles.text}>Nombre</p>
                  <FaUserPlus size={20} color={colors.secondary} />
                </div>
                <input
                  title="Introducir nombre"
                  type="text"
                  name="Nombrec"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="p. ej.: Javier"
                ></input>
              </div>
              <div className="form-vertical__lastname">
                <div className="label">
                  <p className={styles.text}>Apellidos</p>
                  <FaUserPlus size={20} color={colors.secondary} />
                </div>
                <input
                  title="Introducir apellidos"
                  type="text"
                  name="lastName"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder="p. ej.: García Navarro"
                ></input>
              </div>
              <div classname="form-vertical__username">
                <div className="label">
                  <p className={styles.text}>Nombre de usuario</p>
                  <FaUser size={20} color={colors.secondary} />
                </div>
                <input
                  title="Introducir nombre de usuario"
                  type="text"
                  name="NombreUsuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="p. ej.: javier65"
                  className="input"
                ></input>
              </div>
              <div classname="form-vertical__password">
                <div className="label">
                  <p className={styles.text}>Contraseña</p>
                  <BsFillLockFill size={25} color={colors.secondary} />
                </div> 
                <div className="password__input">  
                  <input
                    title="Introducir contraseña"
                    type="password"
                    name="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="p. ej.: 1Manuel!"
                    className="input"
                    id="password"
                  ></input>
                  <a className="password--visibility" onClick={() => showPassword()}><AiFillEye id="show__icon1" size={20} color={colors.primary}/><div style={{display: "none"}} id="show__icon2"><AiFillEyeInvisible size={20} color={colors.primary}/></div></a>
                </div>  
                <div className="tooltip">
                  <div className="tooltip__icon">
                    <AiFillInfoCircle size={20} color={colors.secondary} />
                    <p className={styles.text}> Información contraseña</p>
                  </div>
                  <div className="tooltiptext">
                    <p> - La contraseña debe tener al menos 8 caracteres.</p>
                    <p> - La contraseña debe tener al menos una letra mayúscula.</p>
                    <p> - La contraseña debe tener al menos un número.</p>
                  </div>
                </div>
              </div>
            </form>
            <button className="form-vertical__button" onClick={(e)=>signUp(e)}>Confirmar</button>
            <div className="form-login">
              <h6>¿Ya tienes una cuenta?</h6>
              <Link href="/signIn"><a aria-label="Ir a formulario de inicio de sesión">Entrar</a></Link>
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
          margin-top:2rem;

        }

        .form__text--error{

              /*Text*/

              color: ${colors.secondary};
              width: 50%;
              /*Visuals*/

              border-radius: 10px;
              background-color: #f55b5b;

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

        .form-vertical {

              /*Position*/

              position: relative;

              /*Box model*/

              display: flex;
              flex-direction: column;
              justify-content: center;
              margin-top: 13rem;
              margin-bottom: 10rem;
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

            background-color: #FCAA7F;
            border-radius: 5px;
            border: 1px solid ${colors.secondary};

          }

        .form-vertical__button:hover{

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

        .page__form{


            /*Box model*/

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 50%;
            height: 100%;
            margin-right: 2rem;

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

        `}</style>
      </>



  )
}

export async function getServerSideProps(context) {
  return {
    props: { 
    csrfToken: await getCsrfToken(context)},
  }
}
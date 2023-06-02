/* Static imports */

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getProviders, useSession, getSession, signIn, getCsrfToken } from 'next-auth/react'
import { colors, statusColors, fonts } from 'styles/frontend-conf.js'
import { BsFillLockFill, BsTwitter, BsGoogle, BsFillCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs'
import { MdOutlineError } from 'react-icons/md'
import {HiUser} from 'react-icons/hi'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { toast } from 'react-toastify'
import {server} from '/server'
import dynamic from 'next/dynamic'
import global from 'styles/global.module.css'
import Header from 'components/BasicHeader/BasicHeader'
import Head from 'next/head'


/*Dynamic imports*/

const Loader = dynamic(() => import('/components/Loader/Loader'))
const BasicFooter = dynamic(() => import('/components/BasicFooter/BasicFooter'))
const Link = dynamic(() => import('next/link'))
const LazyLoad = dynamic(() => import('react-lazyload'))

/*
    * @author Sergio García Navarro
    * @returns Login page
    * @version 1.0
    * @date 13/01/2020
    * @description Login page
*/

export default function SignIn ({ providers, csrfToken, account }) {


  const { data: session, status } = useSession()
  const [emailUsername, setEmailUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isSignIn, setIsSignIn] = useState(false)
  const Router = useRouter()

  /**
  * If the password input type is password, then hide the first icon and show the second icon, and
  * change the input type to text. Otherwise, show the first icon and hide the second icon, and change
  * the input type to password
  */
  const showPassword = () => {
    const passwordInput = document.getElementById('password')

    if (passwordInput.type === 'password') {
      document.getElementById('show__icon1').style.display = 'none'
      document.getElementById('show__icon2').style.display = 'inline'
      passwordInput.type = 'text'
    } else {
      document.getElementById('show__icon1').style.display = 'inline'
      document.getElementById('show__icon2').style.display = 'none'
      passwordInput.type = 'password'
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
    
    e.preventDefault()

    document.getElementById('submit__error').classList.remove('submit__error--active')

      const res = await signIn('credentials', { redirect: false, email: emailUsername, password, callbackUrl: '/home' })

      if (res?.error) {

        toast.error(`${res.error}`, { position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored", })
        return

      }

      setIsSignIn(true)


        Router.push(`${server}/home`)

    
  }

  if (status == 'loading') {
    return (
      <>
        <div className={global.loading}><p>Cargando..</p></div>
        <Loader />
      </>
    )
  }
  return (

    <>

      <Head>
        <title>Inicio de sesión | Sweet Home</title>
      </Head>
      <Header
        url1='/news' url2='/about' url3='/contact' url4='/auth/signUp'
        text1='Noticias' text2='Quiénes somos' text3='Contacto' text4='Registrarse'
      />
       <div className='page__video' />
          <video
            autoPlay loop muted
            style={{ position: 'absolute', top: '0', left: '0', width: '99.1vw', height: '171vh', objectFit: 'cover', zIndex: '-99999'}}
          >
            <source src='/videos/video2.mp4' />
          </video>
      <div className={global.content}>
          <div className='page'>
            <div className='page__form'>
              <div className='form__text'>
                <h2>¡Bienvenido de nuevo!</h2>
              </div>
              {providers && Object.values(providers).filter(provider => provider?.name != 'Credentials' && provider?.name == 'Twitter').map((provider) => (
                <div key={provider?.name}>
                  <button className='form-vertical__button2' onClick={() => signIn(provider.id, { callbackUrl: '/home' })}>
                    Inicia sesión con {provider?.name} &nbsp; <BsTwitter size={18} color={colors.secondary} />
                  </button>
                </div>
              ))}
              {providers && Object.values(providers).filter(provider => provider?.name != 'Credentials' && provider?.name == 'Google').map((provider) => (
                <div key={provider?.name}>
                  <button className='form-vertical__button2' onClick={() => signIn(provider.id, { callbackUrl: '/home' })}>
                    Inicia sesión con {provider?.name} &nbsp; <BsGoogle size={18} color={colors.secondary} />
                  </button>
                </div>
              ))}
              <div className='divider'>
                <hr className={global.white__line} />
                <p className={global.text}> ó </p>
                <hr className={global.white__line} />
              </div>

              <form className='form-vertical' action='/api/auth/signIn/credentials'>
                <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
                <div className='form-vertical__email'>
                  <label className='label'>
                    <p className={global.text}>Email o usuario</p>
                    <HiUser size={18} color={colors.secondary} />
                  </label>
                  <div className='email__input'>
                    <input
                      title='Introducir email o usuario'
                      type='text'
                      name='email'
                      value={emailUsername}
                      required
                      onChange={(e) => setEmailUsername(e.target.value)}
                      placeholder='p.ej.: javier@email.com o javier34'
                      className='input'
                    />  
                  </div>               
                </div>
                <div className='form-vertical__password'>
                  <label className='label'>
                    <p className={global.text}>Contraseña</p>
                    <BsFillLockFill size={18} color={colors.secondary} />
                  </label>
                  <div className='password__input'>
                    <input
                      title='Introducir contraseña'
                      type='password'
                      name='Contraseña'
                      value={password}
                      required
                      pattern='/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/'
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder='Contraseña'
                      className='input'
                      id='password'
                    />
                    <a className='password--visibility' onClick={() => showPassword()}><AiFillEye id='show__icon1' size={20} color={colors.primary} /><div style={{ display: 'none' }} id='show__icon2'><AiFillEyeInvisible size={20} color={colors.primary} /></div></a>
                  </div>
                  {(account?.provider != 'google' && account?.provider != 'twitter') && <Link href={`${server}/auth/resetPassword`}><a aria-label='Ir al formulario de cambio de contraseña'>¿Has olvidado la contraseña?</a></Link>}
                </div>
              </form>
              <div id='submit__error' className='submit__error'>
                {message}
              </div>
              <input type='submit' value={isSignIn ? 'Iniciando sesión..' : 'Iniciar sesión'} className='form-vertical__button' onClick={(e) => Login(e)} />
              <div className='form-register'>
                <h6>¿No tiene una cuenta?</h6>
                <Link href={`${server}/auth/signUp`}><a aria-label='Ir al formulario de registro'>¡Regístrate aquí!</a></Link>
              </div>

            </div>
          </div>
        </div>
      <BasicFooter
        color='#fafafa' hover='#f9A603' url1='/faq' text1='Información' url2='/privacy' text2='Privacidad'
        url3='/conditions' text3='Condiciones' url4='/accessibility' text4='Accesibilidad'
      />
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
            top: 0;
            left: 0;


            z-index: -9;

            /*Box model*/

            display: block;
            object-fit: cover;
            width: 99.1vw;
            height: 171vh;

            /*Visuals*/

            backdrop-filter: blur(7px);
            background-color: rgba(0,0,0,0.1);


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
              border-radius: 20px;

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

                              
            .error__icon{

            /*Box model*/

            margin-left: 1rem;

            }

            .form__error-icon{

              /*Position*/

              position: relative;
              right: -1.1rem;
              z-index: 999;

              /*Visuals*/

              opacity: 0;
              color: ${statusColors.error};


            }

            .form__success-icon{

            /*Position*/

            position: relative;
            z-index: 999;


            /*Visuals*/

            opacity: 0;
            color: ${statusColors.success};

            }

           
            .form__success-icon--active{

            /*Position*/

            position: relative;
            z-index: 999;
            bottom: 0.5rem;

            /*Visuals*/

            opacity: 1;
            color: ${statusColors.success};

            }


            .form__input-emailError{


              /*Box model*/

              display: none;
              flex-direction: row;
              align-items: center;
              margin-bottom: 2rem;


              /*Text*/

              font-family: 'Poppins', sans-serif;
              color: #fafafa;

              /*Visuals*/

              border-radius: 20px;
              background-color: ${statusColors.error};
              opacity: 0;

              }


              .form__input-emailError p{

              /*Box model*/

              margin-left: 2rem;

              }

              .form__input-emailError--active{

              /*Position*/

              width: 100%;

              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;

              /*Text*/

              font-family: 'Poppins', sans-serif;
              color: #fafafa;

              /*Visuals*/

              border-radius: 20px;
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

              border-radius: 20px;
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

              border-radius: 20px;
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
                justify-content: center;
                padding: 0.5rem;
                width: 65%;

                /*Text*/

                font-family: 'Poppins', sans-serif;
                color: ${colors.secondary};

                /*Visuals*/

                border-radius: 20px;
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
                box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);
                border-radius: 20px;
                border: 2px solid ${colors.secondary};

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
                padding: 1rem;
                margin-bottom: 1rem;

                /*Text*/

                color: ${colors.secondary};
                font-family: ${fonts.default} + 'Light';
                font-style: bold;
                font-size: 1rem;

                /*Visuals*/

                cursor: pointer;
                background-color: rgba(240, 142, 15, 0.5);
                box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);
                border-radius: 20px;
                border: 2px solid ${colors.secondary};

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
              gap: 1rem;

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

              

              a:hover{

                /*Text*/

                font-size: 0.9rem;

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

                border-radius: 20px;
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

                border-radius: 20px;
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

                width: 84%;
                height: 2rem;
                padding: 0.4rem;
                margin-bottom: 2rem;

                /*Text*/

                font-family: ${fonts.default};
                font-size: 1rem;

                /*Visuals*/

                border-radius: 20px;
                border: 0;
                transition: 0.2s ease all;

              }

          input[type="text"]:focus {

            /*Visuals*/

            border: 2px solid #4d97f7;
            outline: none;
            box-shadow: 10px 10px 20px 0px rgba(176,176,176,0.66);

          }

             

              
            `}
      </style>
    </>

  )
}

export async function getServerSideProps (context) {

  const session = await getSession(context)

  const response = await fetch(`${server}/api/accounts/${session?.user.username}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const currentAccount = await response.json()

  return {
    props: { providers: await getProviders(), csrfToken: await getCsrfToken(context), account: JSON.parse(JSON.stringify(currentAccount)) }
  }
}

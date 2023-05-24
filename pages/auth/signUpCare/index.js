/* Static imports */


import { useState } from 'react'
import { useRouter } from 'next/router'
import { colors, fonts, statusColors } from 'styles/frontend-conf.js'
import { FaUser, FaUserPlus, FaUserTag } from 'react-icons/fa'
import { BsFillLockFill, BsFillCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs'
import { MdEmail, MdOutlineError } from 'react-icons/md'
import { AiFillInfoCircle, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { server } from '/server'
import {toast} from 'react-toastify'
import global from 'styles/global.module.css'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import BasicHeader from '/components/BasicHeader/BasicHeader'

/*Dynamic imports*/

const BasicFooter = dynamic(() => import('/components/BasicFooter/BasicFooter'))
const Link = dynamic(() => import('next/link'))
const LazyLoad = dynamic(() => import('react-lazyload'))



/*
    * @author Sergio García Navarro
    * @returns Sign up page
    * @version 1.0
    * @date 13/01/2020
    * @description Sign up page
*/

export default function SignUp () {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [role, setRole] = useState('')
  const [isValidate, setIsValidate] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)

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

  const validate = (e) => {
    // Regular expressions

    const regEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    const regUsername = /^\S*$/
    const regPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    const regName = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\\.]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1\\.]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1\\.]+$/

    if (e.target.name == 'password') {
      if (password.length < 8 || !password.match(regPassword)) {
        document.getElementById('password__error').classList.add('form__input-passwordError--active')
        document.getElementById('error__password').classList.add('form__error-icon--active')
        document.getElementById('success__password').classList.remove('form__success-icon--active')
        setIsValidate(false)
      } else {
        document.getElementById('password__error').classList.remove('form__input-passwordError--active')
        document.getElementById('error__password').classList.remove('form__error-icon--active')
        document.getElementById('success__password').classList.add('form__success-icon--active')
        setIsValidate(true)
      }
    }

    // Validación del formato del email

    if (e.target.name == 'email') {
      if (!email.match(regEmail)) {
        document.getElementById('email__error').classList.add('form__input-emailError--active')
        document.getElementById('error__email').classList.add('form__error-icon--active')
        document.getElementById('success__email').classList.remove('form__success-icon--active')
        setIsValidate(false)
      } else {
        document.getElementById('email__error').classList.remove('form__input-emailError--active')
        document.getElementById('error__email').classList.remove('form__error-icon--active')
        document.getElementById('success__email').classList.add('form__success-icon--active')
        setIsValidate(true)
      }
    }

    if (e.target.name == 'name') {
      if (!name.match(regName)) {
        document.getElementById('name__error').classList.add('form__input-nameError--active')
        document.getElementById('error__name').classList.add('form__error-icon--active')
        document.getElementById('success__name').classList.remove('form__success-icon--active')
        setIsValidate(false)
      } else {
        document.getElementById('name__error').classList.remove('form__input-nameError--active')
        document.getElementById('error__name').classList.remove('form__error-icon--active')
        document.getElementById('success__name').classList.add('form__success-icon--active')
        setIsValidate(true)
      }
    }

    // Validación logitud del username

    if (e.target.name == 'username') {
      if (username.length < 4 || !username.match(regUsername)) {
        document.getElementById('username__error').classList.add('form__input-usernameError--active')
        document.getElementById('error__username').classList.add('form__error-icon--active')
        document.getElementById('success__username').classList.remove('form__success-icon--active')
        setIsValidate(false)
      } else {
        document.getElementById('username__error').classList.remove('form__input-usernameError--active')
        document.getElementById('error__username').classList.remove('form__error-icon--active')
        document.getElementById('success__username').classList.add('form__success-icon--active')
        setIsValidate(true)
      }
    }
  }

  /**
   * It sends a POST request to the server with the user's data, and if the server responds with a
   * message that says "Registered successfully", it redirects the user to the home page
   * @param e - The event object
   */
  const signUp = async (e) => {
    
    e.preventDefault()

    if (isValidate) {


      const res = await fetch(`${server}/api/registerShelterVet`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          name,
          lastname: '',
          username,
          role
        })
      }).catch(err => console.log(err))

      const data = await res.json()

      setIsSignUp(true)

      if (data.message == 'Registrado con éxito.') {

        setIsSignUp(true)
        toast.success('Se ha registrado con éxito', { position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored", })


          Router.push(`/auth/signIn`)

      }

      if(data.message == 'Ya está registrado con este nombre de usuario.'){

        setIsSignUp(false)

        toast.error('Ya está registrado con este nombre de usuario', { position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored", })
      }

      if(data.message == 'Ya está registrado con este email.'){

        setIsSignUp(false)

        toast.error('Ya está registrado con este correo electrónico', { position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored", })
      }
    } else {

      setIsSignUp(false)

      toast.error('Por favor, verifique que todos los campos estén correctos', { position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored", })

    }
  }


  return (

    <div>
      <Head>
        <title>Registro | Sweet Home</title>
      </Head>

      <BasicHeader
        url1='/news' url2='/about' url3='/contact' url4='/auth/signIn'
        text1='Noticias' text2='Quiénes somos' text3='Contacto' text4='Iniciar sesión'
      />
      <div className='page__video'>
          <video
            autoPlay loop muted
            style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover', zIndex: '-99999'}}
          >
            <source src='/videos/video2.mp4' />
          </video>
      <div className={global.content}>

        <div className='page'>

          
          <div className='page__form'>
            <div className='form__text'>
              <h2>¡Bienvenido a Sweet Home!</h2>

              <p className={global.text}>Introduzca los siguientes datos:</p>
            </div>

            <form className='form-vertical' action='/api/register' id='form'>
              <div className='form-vertical__role'>
                <label className='label'>
                  <p className={global.text}>Tipo de usuario</p>
                  <FaUserTag size={18} color={colors.secondary} />
                </label>
                <div className='role__input'>
                  <input type="radio" id="vet" name="radio" value="veterinaria" onChange={(e) => setRole(e.target.value)} checked/>
                  <label for="vet">Veterinaria</label>

                  <input type="radio" id="shelter" name="radio" value="protectora" onChange={(e) => setRole(e.target.value)}/>
                  <label for="shelter">Protectora</label>
                </div>
              </div>
              <div className='form-vertical__email'>
                <label className='label'>
                  <p className={global.text}>Email</p>
                  <MdEmail size={18} color={colors.secondary} />
                </label>
                <div className='email__input'>
                  <input
                    title='El email debe seguir el formato correcto'
                    type='email'
                    name='email'
                    value={email}
                    id='email'
                    required
                    onKeyUp={(e) => validate(e)}
                    onBlur={(e) => validate(e)}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='p. ej.: protectora@gmail.com'
                  />
                 
                 <div id='error__email' className='form__error-icon'><BsFillXCircleFill size={20} color={statusColors.error} /></div>
                  <div id='success__email' className='form__success-icon'><BsFillCheckCircleFill size={20} color={statusColors.success} /></div>
                </div>
                <div id='email__error' className='form__input-emailError'>
                    <div className='error__icon'>
                      <MdOutlineError size={30} color={colors.secondary} />
                    </div>
                    <p className={global.text2}>Debe seguir el formato correcto</p>
                  </div>
              </div>
              
              <div className='form-vertical__name'>
                <label className='label'>
                  <p className={global.text}>Nombre de la empresa</p>
                  <FaUserPlus size={18} color={colors.secondary} />
                </label>
                <div className='name__input'>
                  <input
                    title='Introducir nombre'
                    type='text'
                    name='name'
                    value={name}
                    id='name'
                    required
                    pattern='[a-zA-Z] + [a-zA-Z] +'
                    onKeyUp={(e) => validate(e)}
                    onBlur={(e) => validate(e)}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='p. ej.: Protectora S.L'
                  />
                 
                 <div id='error__name' className='form__error-icon'><BsFillXCircleFill size={20} color={statusColors.error} /></div>
                  <div id='success__name' className='form__success-icon'><BsFillCheckCircleFill size={20} color={statusColors.success} /></div>
                </div>
                <div id='name__error' className='form__input-nameError'>
                    <div className='error__icon'>
                      <MdOutlineError size={30} color={colors.secondary} />
                    </div>
                    <p className={global.text2}>No puede contener dígitos o caracteres especiales.</p>
                  </div>
              </div>
              
              <div className='form-vertical__username'>
                <label className='label'>
                  <p className={global.text}>Nombre de usuario</p>
                  <FaUser size={15} color={colors.secondary} />
                </label>
                <div className='username__input'>
                  <input
                    title='Introducir nombre de usuario'
                    type='text'
                    name='username'
                    value={username}
                    id='username'
                    required
                    minLength='4'
                    onKeyUp={(e) => validate(e)}
                    onBlur={(e) => validate(e)}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='p. ej.: protectora45'
                    className='input'
                  />
                 
                 <div id='error__username' className='form__error-icon'><BsFillXCircleFill size={20} color={statusColors.error} /></div>
                  <div id='success__username' className='form__success-icon'><BsFillCheckCircleFill size={20} color={statusColors.success} /></div>
                </div>
                <div id='username__error' className='form__input-usernameError'>
                    <div className='error__icon'>
                      <MdOutlineError size={30} color={colors.secondary} />
                    </div>
                    <p className={global.text2}>Debe estar compuesto por 4 caracteres como mínimo y no contener espacios</p>
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
                    name='password'
                    value={password}
                    id='password'
                    pattern='(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}'
                    required
                    onKeyUp={(e) => validate(e)}
                    onBlur={(e) => validate(e)}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='p. ej.: 1Protectora!'
                    className='input'
                  />
                  <a className='password--visibility' onClick={() => showPassword()}><AiFillEye id='show__icon1' size={20} color={colors.primary} /><div style={{ display: 'none' }} id='show__icon2'><AiFillEyeInvisible size={20} color={colors.primary} /></div></a>
                  <div id='error__password' className='form__error-icon'><BsFillXCircleFill size={20} color={statusColors.error} /></div>
                  <div id='success__password' className='form__success-icon'><BsFillCheckCircleFill size={20} color={statusColors.success} /></div>
                </div>
                <div id='password__error' className='form__input-passwordError'>
                    <div className='error__icon'>
                      <MdOutlineError size={30} color={colors.secondary} />
                    </div>
                    <p className={global.text2}>Debe estar compuesta como mínimo por 8 caracteres y tener un dígito, una mayúscula y un caracter especial.</p>
                  </div>
                <div className='tooltip'>
                  <div className='tooltip__icon'>
                    <AiFillInfoCircle size={18} color={colors.secondary} />
                    <p className={global.text}> Información contraseña</p>
                  </div>
                  <div className='tooltiptext'>
                    <p> - La contraseña debe tener al menos 8 caracteres.</p>
                    <p> - La contraseña debe tener al menos una letra mayúscula.</p>
                    <p> - La contraseña debe tener al menos un carácter especial.</p>
                    <p> - La contraseña debe tener al menos un número.</p>
                  </div>
                </div>
              </div>
            </form>
            <div className='form__conditions'>
              <p>Al confirmar, aceptará las condiciones de la empresa. En los apartados <a className='form__link' aria-label='Ir a Condiciones' href='/conditions'>Condiciones</a> y  <a className='form__link' aria-label='Ir a Privacidad' href='/privacity'>Privacidad</a> encontrará más información.</p>
            </div>
            <input type='submit' value={isSignUp ? 'Registrando..' : 'Confirmar'} className='form-vertical__button' onClick={(e) => signUp(e)} />
            <div className='form-login'>
              <h6>¿Ya tienes una cuenta?</h6>
              <Link href='/auth/signIn'><a aria-label='Ir a formulario de inicio de sesión'>Entrar</a></Link>
            </div>
            <div className='form-caretaker'>
              <h6>¿Eres un usuario corriente?</h6>
              <Link href='/auth/signUp'><a aria-label='Ir a formulario de registro de usuario'>¡Registrate aquí!</a></Link>
            </div>
          </div>
        </div>
      </div>
      <BasicFooter
        color='#fafafa' hover='#f9A603' url1='/faq' text1='Información' url2='/privacy' text2='Privacidad'
        url3='/conditions' text3='Condiciones' url4='/accessibility' text4='Accesibilidad'
      />
      </div>
      <style jsx>{`

        .page {
          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
          margin-bottom: 13rem;
          margin-top: 10rem;

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
          top: 0;
          left: 0;


          z-index: -9;

          /*Box model*/

          display: block;
          object-fit: cover;
          width: 100%;
          min-height: 100%;

          /*Visuals*/

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
              width: 40rem;
              margin-bottom: 2rem;
              margin-top: 3rem;

              /*Visuals*/

              background-image: linear-gradient(45deg, rgba(240,129,15, 0.8) 35%, rgba(249,166,3, 0.8) 100%);
              border-radius: 20px;


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
          margin-bottom: 0rem;

        }

        .form-caretaker{

          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          margin-top: 0;

        }

        .form-vertical__role{

          /*Box model*/

          display: flex;
          flex-direction: column;

          margin-left: 3rem;
          margin-bottom: 2rem;


        }

        /*ERRORES*/
/*ERRORES*/

        
.error__icon{

/*Box model*/

margin-left: 1rem;

}

.form__error-icon{

  /*Position*/

  position: relative;
  right: -1.1rem;
  bottom: 0.9rem;
  z-index: 999;

  /*Visuals*/

  opacity: 0;
  color: ${statusColors.error};


}

.form__success-icon{

/*Position*/

position: relative;

bottom: 0.9rem;
z-index: 999;

/*Visuals*/

opacity: 0;
color: ${statusColors.success};

}

.form__error-icon--active{

/*Position*/

position: relative;
right: -1.1rem;
bottom: 0.9rem;
z-index: 999;

/*Visuals*/

opacity: 1;
color: ${statusColors.error};

}

.form__success-icon--active{

/*Position*/

position: relative;

bottom: 0.9rem;
z-index: 999;

/*Visuals*/

opacity: 1;
color: ${statusColors.success};

}






.form__input-passwordError{


  /*Box model*/

  display: none;
  flex-direction: row;
  align-items: center;
  width: 17vw;


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



  /*Box model*/

  display: flex;
  flex-direction: row;
  align-items: center;


  /*Text*/

  font-family: 'Poppins', sans-serif;
  color: #fafafa;

  /*Visuals*/

  border-radius: 20px;
  box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);
  background-color: ${statusColors.error};
  opacity: 1;

}


.form__input-nameError{

  /*Box model*/

  display: none;
  flex-direction: row;
  align-items: center;

  /*Text*/

  font-family: 'Poppins', sans-serif;
  color: #fafafa;

  /*Visuals*/

  border-radius: 20px;
  background-color: ${statusColors.error};
  opacity: 0;

}


.form__input-nameError p{

  /*Box model*/

  margin-left: 2rem;

}

.form__input-nameError--active{



  /*Box model*/

  display: flex;
  flex-direction: row;
  align-items: center;
  

  /*Text*/

  font-family: 'Poppins', sans-serif;
  color: #fafafa;

  /*Visuals*/

  border-radius: 20px;
  box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);
  background-color: ${statusColors.error};
  opacity: 1;

}


.form__input-lastnameError{



  /*Box model*/

  display: none;
  flex-direction: row;
  align-items: center;


  /*Text*/

  font-family: 'Poppins', sans-serif;
  color: #fafafa;

  /*Visuals*/

  border-radius: 20px;
  box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);
  background-color: ${statusColors.error};
  opacity: 0;

}


.form__input-lastnameError p{

  /*Box model*/

  margin-left: 2rem;

}

.form__input-lastnameError--active{


  /*Box model*/

  display: flex;
  flex-direction: row;
  align-items: center;
  

  /*Text*/

  font-family: 'Poppins', sans-serif;
  color: #fafafa;

  /*Visuals*/

  border-radius: 20px;
  box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);
  background-color: ${statusColors.error};
  opacity: 1;

}


.form__input-emailError{


  /*Box model*/

  display: none;
  flex-direction: row;
  align-items: center;

  

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



  /*Box model*/

  display: flex;
  flex-direction: row;
  align-items: center;
  

  /*Text*/

  font-family: 'Poppins', sans-serif;
  color: #fafafa;

  /*Visuals*/

  border-radius: 20px;
  box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);
  background-color: ${statusColors.error};
  opacity: 1;

}


.form__input-usernameError{


  /*Box model*/

  display: none;
  flex-direction: row;
  align-items: center;


  /*Text*/

  font-family: 'Poppins', sans-serif;
  color: #fafafa;

  /*Visuals*/

  border-radius: 20px;
  background-color: ${statusColors.error};
  opacity: 0;

}


.form__input-usernameError p{

  /*Box model*/

  margin-left: 2rem;

}

.form__input-usernameError--active{


  /*Box model*/

  display: flex;
  flex-direction: row;
  align-items: center;
  

  /*Text*/

  font-family: 'Poppins', sans-serif;
  color: #fafafa;

  /*Visuals*/

  border-radius: 20px;
  box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);
  background-color: ${statusColors.error};
  opacity: 1;

}



.error__icon{

  /*Box model*/

  margin-left: 1rem;

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

.submit__error--active2{

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
  background-color: ${statusColors.success};

}

        .form-vertical {

              /*Position*/

              position: relative;

              /*Box model*/

              display: flex;
              flex-direction: column;
              justify-content: center;
              margin-top: 3rem;
              margin-bottom: 3rem;
              width: 20vw;
              height: fit-content;
              padding: 1vh 2vh;

        }

        
        .form-vertical__email{

        /*Box model*/ 

        margin-left: 3rem;

        }

        .form-vertical__name{

        /*Box model*/ 

        margin-left: 3rem;

        }

        .form-vertical__lastname{

        /*Box model*/ 

        margin-left: 3rem;

        }

        .form-vertical__username{

        /*Box model*/ 

        margin-left: 3rem;

        }

        .form-vertical__password{

        /*Box model*/

        margin-left: 3rem;

        }

        .form-vertical__button {

            /*Position*/

            position: relative;

            /*Box model*/

            display: block;
            height: 3rem;
            width: 18rem;
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

        .form__conditions{

          /*Box model*/

          display: flex;
          align-items: center;
          margin-left: 3rem;
          width: 20rem;

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
          width: 20rem;
          gap: 1rem;

        }

        .role__input{

          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          width: 20rem;
          gap: 1rem;

          /*Text*/

          color: ${colors.secondary};
          font-size: 1rem;
          font-weight: 400;
          font-family: ${fonts.default};
        }

        .name__input{


          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          width: 20rem;
          gap: 1rem;

        }

        .lastname__input{


          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          width: 20rem;
          gap: 1rem;

        }

        .username__input{


          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          width: 20rem;
          gap: 1rem;

        }

        
        .password__input{

          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          width: 17rem;


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

          border-radius: 20px;
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

            width: 100%;
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

        `}
      </style>
    </div>

  )
}

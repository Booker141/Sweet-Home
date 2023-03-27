import Head from 'next/head'
import { useState } from 'react'
import global from 'styles/global.module.css'
import { colors, statusColors, fonts } from 'styles/frontend-conf.js'
import Layout from 'components/Layout/Layout'
import { MdEmail, MdOutlineError } from 'react-icons/md'
import { BsFillLockFill, BsFillXCircleFill, BsFillCheckCircleFill } from 'react-icons/bs'
import { AiFillEye, AiFillEyeInvisible, AiFillInfoCircle } from 'react-icons/ai'
import { server } from '/server'

/*
    * @author Sergio García Navarro
    * @returns Change password page
    * @version 1.0
    * @date 13/12/2020
    * @description Change password page
*/
/**
 * It returns a div with a form inside of it
 * @returns A form with two inputs and a submit button.
 */
export default function ChangePassword () {
  
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPassword2, setNewPassword2] = useState('')
  const [isValidate, setIsValidate] = useState(false)
  const [email, setEmail] = useState('')

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
    const regPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

    if (e.target.name == 'password') {
      if (password.length < 8 || !password.match(regPassword)) {
        document.getElementById('password__error').classList.add('form__input-passwordError--active')
        document.getElementById('error__password').classList.add('form__icon-error--active')
        document.getElementById('success__password').classList.remove('form__icon-success--active')
        setIsValidate(false)
      } else {
        document.getElementById('password__error').classList.remove('form__input-passwordError--active')
        document.getElementById('error__password').classList.remove('form__icon-error--active')
        document.getElementById('success__password').classList.add('form__icon-success--active')
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
  }

  const changePassword = (e) => {
    e.preventDefault()

    if (newPassword === newPassword2) {
      fetch(`${server}/api/changePassword"`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          password: newPassword
        })
      })
    } else {
      alert('Las contraseñas no coinciden')
    }
  }
  return (

    <Layout>
      <>
        <Head><title>Cambiar contraseña</title></Head>
        <div className={global.content}>
          <div className='form'>
            <h1 className='form__title'>Cambiar contraseña</h1>
            <form>
              <div className='form-vertical__email'>
                <div className='label'>
                  <p className={global.text}>Email</p>
                  <MdEmail size={20} color={colors.secondary} />
                </div>
                <div className='email__input'>
                  <input
                    title='Introducir email'
                    type='email'
                    name='email'
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyUp={(e) => validate(e)}
                    onBlur={(e) => validate(e)}
                    placeholder='p. ej.: javier@gmail.com'
                    className='input'
                  >
                  </input>
                  <div id='error__email' className='form__error-icon'><BsFillXCircleFill size={20} color={statusColors.error} /></div>
                  <div id='success__email' className='form__success-icon'><BsFillCheckCircleFill size={20} color={statusColors.success} /></div>
                  <div id='email__error' className='form__input-emailError'>
                    <div className='error__icon'>
                        <MdOutlineError size={30} color={colors.secondary} />
                      </div>
                    <p className={global.text2}>Debe seguir el formato correcto</p>
                  </div>
                </div>
              </div>
              <div className='form-vertical__old'>
                <div className='label'>
                  <p className={global.text}>Contraseña antigua</p>
                  <BsFillLockFill size={25} color={colors.secondary} />
                </div>
                <div className='password__input'>
                  <input
                    title='Introducir contraseña antigua'
                    type='password'
                    id='password'
                    name='password'
                    value={oldPassword}
                    required
                    onChange={(e) => setOldPassword(e.target.value)}
                    onKeyUp={(e) => validate(e)}
                    onBlur={() => validate(e)}
                    placeholder='Contraseña actual'
                    className='input'
                  >
                  </input>
                  <a className='password--visibility' onClick={() => showPassword()}><AiFillEye id='show__icon1' size={20} color={colors.primary} /><div style={{ display: 'none' }} id='show__icon2'><AiFillEyeInvisible size={20} color={colors.primary} /></div></a>
                  <div id='error__password' className='form__error-icon'><BsFillXCircleFill size={20} color={statusColors.error} /></div>
                  <div id='success__password' className='form__success-icon'><BsFillCheckCircleFill size={20} color={statusColors.success} /></div>
                  <div id='password__error' className='form__input-passwordError'>
                    <div className='error__icon'>
                        <MdOutlineError size={30} color={colors.secondary} />
                      </div>
                    <p className={global.text2}>Debe estar compuesta como mínimo por 8 caracteres y tener un dígito, una mayúscula y un caracter especial.</p>
                  </div>
                </div>
              </div>
              <div className='form-vertical__new'>
                <div className='label'>
                  <p className={global.text}>Contraseña nueva</p>
                  <BsFillLockFill size={25} color={colors.secondary} />
                </div>
                <div className='password__input'>
                  <input
                    title='Introducir contraseña nueva'
                    type='password'
                    id='password'
                    name='ContraseñaN'
                    value={newPassword}
                    required
                    onChange={(e) => setNewPassword(e.target.value)}
                    onKeyUp={(e) => validate(e)}
                    onBlur={() => validate(e)}
                    placeholder='Contraseña nueva'
                    className='input'
                  >
                  </input>
                  <a className='password--visibility' onClick={() => showPassword()}><AiFillEye id='show__icon1' size={20} color={colors.primary} /><div style={{ display: 'none' }} id='show__icon2'><AiFillEyeInvisible size={20} color={colors.primary} /></div></a>
                  <div id='error__password' className='form__error-icon'><BsFillXCircleFill size={20} color={statusColors.error} /></div>
                  <div id='success__password' className='form__success-icon'><BsFillCheckCircleFill size={20} color={statusColors.success} /></div>
                  <div id='password__error' className='form__input-passwordError'>
                    <div className='error__icon'>
                        <MdOutlineError size={30} color={colors.secondary} />
                      </div>
                    <p className={global.text2}>Debe estar compuesta como mínimo por 8 caracteres y tener un dígito, una mayúscula y un caracter especial.</p>
                  </div>
                </div>
              </div>
              <div className='form-vertical__new2'>
                <div className='label'>
                  <p className={global.text}>Repetir contraseña nueva</p>
                  <BsFillLockFill size={25} color={colors.secondary} />
                </div>
                <div className='password__input'>
                  <input
                    title='Repetir contraseña nueva'
                    type='password'
                    id='password'
                    name='Contraseña'
                    value={newPassword2}
                    required
                    onChange={(e) => setNewPassword2(e.target.value)}
                    placeholder='Confirmar contraseña'
                    className='input'
                  >
                  </input>
                  <a className='password--visibility' onClick={() => showPassword()}><AiFillEye id='show__icon1' size={20} color={colors.primary} /><div style={{ display: 'none' }} id='show__icon2'><AiFillEyeInvisible size={20} color={colors.primary} /></div></a>
                  <div id='error__password' className='form__error-icon'><BsFillXCircleFill size={20} color={statusColors.error} /></div>
                  <div id='success__password' className='form__success-icon'><BsFillCheckCircleFill size={20} color={statusColors.success} /></div>
                  <div id='password__error' className='form__input-passwordError'>
                    <div className='error__icon'>
                        <MdOutlineError size={30} color={colors.secondary} />
                      </div>
                    <p className={global.text2}>Debe estar compuesta como mínimo por 8 caracteres y tener un dígito, una mayúscula y un caracter especial.</p>
                  </div>
                </div>
              </div>
            </form>
            <div className='tooltip'>
              <div className='tooltip__icon'>
                <AiFillInfoCircle size={20} color={colors.secondary} />
                <p className={global.text2}> Información contraseña</p>
              </div>
              <div className='tooltiptext'>
                <p> - La contraseña debe tener al menos 8 caracteres.</p>
                <p> - La contraseña debe tener al menos una letra mayúscula.</p>
                <p> - La contraseña debe tener al menos un carácter especial.</p>
                <p> - La contraseña debe tener al menos un número.</p>
              </div>
            </div>
            <input className={global.buttonPrimary} type='submit' onSubmit={(e) => changePassword(e)} value='Confirmar' />
          </div>
        </div>
        <style jsx>{`

                .form{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                 
                    width: 100%;

                    /*Visuals*/

                    background-image: linear-gradient(45deg, rgba(240,129,15, 0.8) 35%, rgba(249,166,3, 0.8) 100%);
                    background-size: 100% 110%;
                    border-radius: 20px;
                    
                }

                .form__title{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    margin-top: 2rem;
                    margin-bottom: 1rem;

                    /*Text*/

                    font-family: 'Satisfy';
                    font-size: 4rem;
                    font-weight: 500;
                    color: ${colors.secondary};
                }

                .label{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;

                }

                .label p{

                    /*Box model*/

                    margin-right: 1rem;

                    /*Visuals*/

                    color: ${colors.secondary};

                }
                
                .input{

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
                    border: 1px solid ${colors.primary};
                }

                .tooltip{

                    /*Position*/

                    position: relative;

                    /*Box model*/

                    display: inline-block;
                    margin-bottom: 0.5rem;

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

                .tooltiptext p{

                    /*Text*/

                    font-size: 1rem;
                    font-family: ${fonts.default};

                }

                .form-vertical__old {

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: 100%;

                }

                .form-vertical__new {

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: 100%;

                }

                .form-vertical__new2 {

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: 100%;

                }

                .password__input{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    width: 115%;
                    

                }

                .email__input{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }

                .password--visibility{

                    /*Position*/

                    position: relative;
                    top: 0.9rem;
                    right: 2rem;

                }

                .form__input-passwordError{

                /*Position*/

                position: absolute;

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                margin-bottom: 2rem;
                margin-left: 50rem;

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
                margin-bottom: 2rem;
                margin-left: 50rem;

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

                .form__input-emailError{

                /*Position*/

                position: absolute;


                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                width: 100%;
                margin-bottom: 2rem;
                margin-left: 50rem;


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
                margin-bottom: 2rem;
                margin-left: 50rem;
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
                right: 0.1rem;
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
                right: 0.1rem;
                bottom: 0.9rem;
                z-index: 999;

                /*Visuals*/

                opacity: 1;
                color: ${statusColors.success};

                }




                input[type="submit"]{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    margin-top: 2rem;
                    margin-bottom: 2rem;

                }


                input[type="email"]:focus {

                    /*Visuals*/

                    border: 2px solid #4d97f7;
                    outline: none;
                    box-shadow: 10px 10px 20px 0px rgba(176,176,176,0.66);

                }

                input[type="password"]:focus {

                    /*Visuals*/

                    border: 2px solid #4d97f7;
                    outline: none;
                    box-shadow: 10px 10px 20px 0px rgba(176,176,176,0.66);

                }

                ::placeholder{

                    /*Text*/

                    color: ${colors.primary};
                }


                h1{

                    /*Box model*/

                    margin-top: 2rem;
                    margin-bottom: 3rem;
                }

                a{

                    /*Misc*/

                    cursor: pointer;
                }

            `}
        </style>
      </>
    </Layout>
  )
}

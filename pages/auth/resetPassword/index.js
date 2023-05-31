/* Static imports */

import { useState } from 'react'
import { colors, statusColors, fonts } from 'styles/frontend-conf.js'
import { MdEmail, MdOutlineError } from 'react-icons/md'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { server } from '/server'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import global from 'styles/global.module.css'

/*Dynamic imports*/

const Link = dynamic(() => import('next/link'))
const Layout = dynamic(() => import('/components/BasicLayout/BasicLayout'))
const TypeAttendance = dynamic(() => import('/components/TypeAttendance/TypeAttendance'))
const LazyLoad = dynamic(() => import('react-lazyload'))


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
export default function ResetPassword () {
  

  const [isValidate, setIsValidate] = useState(false)
  const [isReset, setIsReset] = useState(false)
  const [email, setEmail] = useState('')


  const validate = (e) => {

    // Regular expressions

    const regEmail = /^[a-zA-Z0-9][-a-zA-Z0-9.!#$%&'*+-=?^_`{|}~\/]+@([-a-z0-9]+\.)+[a-z]{2,5}$/


    // Validación del formato del email

    if (e.target.name == 'email') {
      if (!email.match(regEmail)) {
        document.getElementById('email__error').classList.add('form__input-emailError--active')
        document.getElementById('success__email').classList.remove('form__success-icon--active')
        setIsValidate(false)
      } else {
        document.getElementById('email__error').classList.remove('form__input-emailError--active')
        document.getElementById('success__email').classList.add('form__success-icon--active')
        setIsValidate(true)
      }
    }
  }

  const resetPassword = async (e) => {

    e.preventDefault()

    if(isValidate){

        const res = await fetch(`${server}/api/resetPassword"`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            password: newPassword,
            confirmPassword: newPassword2,
            oldPassword: oldPassword
          })
        })

        setIsReset(true)

        const data = await res.json()

       
  }
}

  return (

    <Layout>
      <>
        <Head><title>Restablecer contraseña | Sweet Home</title></Head>
        <div className={global.content}>
          <div className='form'>
            <h1 className='form__title'>Restablecer contraseña</h1>
            <form className="form-vertical">
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
                  <div id='success__email' className='form__success-icon'><BsFillCheckCircleFill size={20} color={statusColors.success} /></div>
              </div>
              
                  <div id='email__error' className='form__input-emailError'>
                    <div className='error__icon'>
                        <MdOutlineError size={30} color={colors.secondary} />
                      </div>
                    <p className={global.text2}>Debe seguir el formato correcto</p>
                  </div>
                </div>
                </form>
                
            <input className={global.buttonPrimary} type='submit' onSubmit={(e) => resetPassword(e)} value={isReset ? 'Enviando..' : 'Enviar'} />
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

                    background-image: linear-gradient(45deg, rgba(240,129,15, 1) 35%, rgba(249,166,3, 1) 100%);
                    background-size: 100% 110%;
                    border-radius: 20px;
                    
                }

                .form-vertical{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    align-items: center;
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

                    border-radius: 20px;
                    border: none;
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
                    width: 20vw;

                }

                .form-vertical__new {

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: 20vw;

                }

                .form-vertical__new2 {

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                }

                .password__input{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    width: 20vw;
                    

                }

                .email__input{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    width: 20vw;
                }

                .password--visibility{

                    /*Position*/

                    position: relative;
                    top: 0.9rem;
                    right: 2rem;

                }

                /*ERRORES*/

        
                  .error__icon{

                  /*Box model*/

                  margin-left: 1rem;

                  }


                  .form__success-icon{

                  /*Position*/

                  position: relative;
                  right: -1.1rem;
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

                  z-index: 999;

                  /*Visuals*/

                  opacity: 1;
                  color: ${statusColors.error};

                  }

                  .form__success-icon--active{

                  /*Position*/

                  position: relative;
                  right: -1.1rem;

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
                    width: 20vw;


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

                    margin-left: 1rem;

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



                  .form__input-emailError{

                    /*Position*/

                    position: relative;
                    
                    /*Box model*/

                    display: none;
                    flex-direction: row;
                    align-items: center;
                    width: 20vw;


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

                    margin-left: 1rem;

                  }

                  .form__input-emailError--active{

                    /*Position*/

                    position: relative;
                    

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    width: 20vw;
                    

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
                        align-items: center;
                        justify-content: center;
                        margin-top: 4rem;
                        margin-bottom: 3rem;
                        width: 20vw;
                        height: fit-content;
                        padding: 1vh 2vh;

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

                input[type="text"] {

                  /*Box model*/

                  height: 2rem;
                  padding: 0.4rem;


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

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-self: flex-start;

                    margin-top: 1rem;

                    /*Text*/

                    font-family: ${fonts.default};
                    font-size: 0.8rem;
                    color: ${colors.secondary};
                    font-weight: bold;

                    /*Misc*/

                    cursor: pointer;
                    text-decoration: none;
                    border: none;

                }

            `}
        </style>
      </>
    </Layout>
  )
}

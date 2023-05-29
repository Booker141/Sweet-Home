/* Static imports */

import { useSession, getSession, signIn } from 'next-auth/react'
import { useState } from 'react'
import { colors, statusColors, fonts } from 'styles/frontend-conf.js'
import { AiFillPhone } from 'react-icons/ai'
import { MdOutlineError, MdClose } from 'react-icons/md'
import { BsGenderAmbiguous, BsFillCheckCircleFill } from 'react-icons/bs'
import { server } from '/server'
import {toast} from 'react-toastify'
import global from 'styles/global.module.css'
import Head from 'next/head'
import dynamic from 'next/dynamic'

/* Dynamic imports */

const Loader = dynamic(() => import('/components/Loader/Loader'))
const Layout = dynamic(() => import('/components/Layout/Layout'))

const SettingsLayout = dynamic(() => import('/components/SettingsLayout/SettingsLayout'))
const LazyLoad = dynamic(() => import('react-lazyload'))

export default function Settings ({users}) {

  const { data: session, status } = useSession({ required: true })


  const [phone, setPhone] = useState(users?.phone)
  const [gender, setGender] = useState(users?.gender)
  
  const [isEditing, setIsEditing] = useState(false)
  const [isValidate, setIsValidate] = useState(true)



  const validate = (e) => {

    // Regular expressions

    const regPhone = /^(?:6[0-9]|7[1-9])[0-9]{7}$/

    if (e.target.name == 'phone') {
      if (phone.length < 9 || phone.length > 9 || !regPhone.test(phone)) {
        document.getElementById('phone__error').classList.add('form__input-phoneError--active')
        document.getElementById('success__phone').classList.remove('form__success-icon--active')
        setIsValidate(false)
      } else {
        document.getElementById('phone__error').classList.remove('form__input-phoneError--active')
        document.getElementById('success__phone').classList.add('form__success-icon--active')
        setIsValidate(true)
      }
    }
  }

  


  /**
   * It's a function that sends a request to the server to update the user's information
   * @param e - the event object
   */
  const edit = async (e) => {

    e.preventDefault()

    if (isValidate) {

      setIsEditing(true)

      await fetch(`${server}/api/usersPrivateInformation/${session?.user.username}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phone: phone,
          gender: gender,
        })
      }).catch(err => console.log(err))

      

      toast.success(`Se han guardado los datos correctamente`, { position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored", })
      setIsEditing(false)
    } else {
      toast.error(`Introduzca los datos con el formato correcto`, { position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored", })
    }
  }


  if (status === 'loading') {
    return (
      <>
        <div className={global.loading}><p>Cargando..</p></div>
        <Loader />
      </>
    )
  }
  if (session) {
    return (
      <SettingsLayout>
        <Head><title>Información privada | Sweet Home</title></Head>
        <div className='settings'>
          <div className='form-page'>
            <h1 className={global.title}>Editar información privada </h1>
            <p className={global.text}>En este apartado puedes modificar el teléfono, género y contraseña. Está información será privada y no será mostrada en el perfil público:</p>
            
            <form className='form-vertical' action='/api/users' enctype='multipart/form-data'>
               
              <div className='form-vertical__phone'>
                <div className='label'>
                  <p className={global.text}>Teléfono</p>
                  <AiFillPhone size={18} color={colors.secondary} />
                </div>
                <div className='phone__input'>
                  <input
                    title='Introducir teléfono'
                    type='tel'
                    name='phone'
                    id='phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onKeyUp={(e) => validate(e)}
                    onBlur={(e) => validate(e)}
                    placeholder="Escriba su teléfono"
                    className='input'
                  />
                  <div id='success__phone' className='form__success-icon'><BsFillCheckCircleFill size={20} color={statusColors.success} /></div>
                  
              </div>
              <div id='phone__error' className='form__input-phoneError'>
                    <div className='error__icon'>
                      <MdOutlineError size={30} color={colors.secondary} />
                    </div>
                    <p className={global.text2}>Debe seguir el formato 6XXXXXXXX.</p>
                  </div>
                </div>
              <div className='form-vertical__gender'>
                <div className='label'>
                  <p className={global.text}>Género</p>
                  <BsGenderAmbiguous size={18} color={colors.secondary} />
                </div>
                <select name='gender' id='gender' className='selector' onChange={(e) => setGender(e.target.value)}>
                  <option value='masculino'>Masculino</option>
                  <option value='femenino'>Femenino</option>
                  <option value='otro'>Otro</option>
                </select>
              </div>
              <div className='settings__buttons'>
                <button className={global.buttonTertiary3}><a href='/changePassword' title='Ir a la página para cambiar la contraseña' aria-label='Ir a cambiar contraseña'>Cambiar contraseña</a></button>
                
              </div>
            </form>
            <input className={global.buttonPrimary} type='submit' onClick={(e) => edit(e)} value={isEditing ? 'Aplicando' : 'Aplicar cambios'} />  
          </div>
          </div>
          

        <style jsx>{`


                .settings{


                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 2rem;

                    /*Visuals*/

                    border-radius: 20px;

                }

                               
               



                .buttons{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 1rem;

                }

                .config__style{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    margin-bottom: 1rem;

                    /*Text*/

                    font-size: 1.5rem;
                    font-weight: 600;
                    border: none;
                    color: ${colors.primary};
                    background-color: transparent;
                    font-family: "Poppins", sans-serif;
                    text-decoration: none;

                }

                .active, .config__style:hover{

                    /*Box model*/

                    padding: 0.5rem;

                    /*Text*/

                    color: ${colors.secondary};
                    cursor: pointer;

                    /*Visuals*/

                    background-color: ${colors.primary};
                    border-radius: 20px;
                    transition: 0.3s ease all;


                }

                .config__style:focus{

                      /*Box model*/

                      padding: 0.5rem;

                      /*Text*/

                      color: ${colors.secondary};
                      cursor: pointer;

                      /*Visuals*/

                      background-color: ${colors.primary};
                      border-radius: 20px;
                      transition: 0.3s ease all;


                }

                .settings__buttons{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 1rem;

                }



                .phone__input{


                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                width: 20rem;
                gap: 1rem;

              }
                

            .form__text{

              /*Box model*/

              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-top: 2rem;
              margin-bottom: 2rem;

            }


            .form-page{

              /*Box model*/
              
              display: flex;
              flex-direction: column;

            }

            .form-vertical {


                  /*Box model*/

                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  margin-top: 2rem;
                  margin-bottom: 2rem;
                  width: 50vw;
                  padding: 5rem;

                  /*Visuals*/

                  background: linear-gradient(45deg, rgba(240,129,15,1) 35%, rgba(249,166,3,1) 100%);
                  border-radius: 20px;
                  
            }


            .form-vertical__phone {

              /*Box model*/

              display: flex;
              flex-direction: column;
              justify-content: center;

              }

           

              .form-vertical__gender {

              /*Box model*/

              display: flex;
              flex-direction: column;
              justify-content: center;
              margin-bottom: 2rem;

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

            /*ERRORES*/


            

              .form__input-phoneError{

                /*Position*/

                position: relative;

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


                .form__input-phoneError p{

                /*Box model*/

                margin-left: 2rem;

                }

                .form__input-phoneError--active{

                /*Position*/

                position: relative;

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


            .label{

              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
              margin-bottom: 1rem;
              
              /*Text*/

              font-family: ${fonts.default};
              color: ${colors.secondary};
              

            }

            .selector{


              /*Text*/

              font-family: ${fonts.default};
              font-size: 1rem;
              color: ${colors.secondary};
              margin-bottom: 2rem;
              
              /*Visuals*/

              background: ${colors.primary};
              border-radius: 20px;
              border: 2px solid ${colors.secondary};

            }

            
            .selector:focus {

            /*Visuals*/

            border: 2px solid #4d97f7;
            outline: none;
            box-shadow: 10px 10px 20px 0px rgba(176,176,176,0.66);

            }

            p {

                /*Box model*/

                margin-right: 1rem;

                /*Text*/

                font-size: 1rem;
                font-family: ${fonts.default};
                
            }

            h6{

                /*Box model*/

                margin-right: 1rem;

                /*Text*/

                font-size: 0.8rem;
                font-weight: 500;
                font-family: ${fonts.default};
                color: ${colors.primary};
            }

          

            h1{
                        /*Text*/

                        font-size: 3.5rem;
                        font-weight: 600;
                        background-color: ${colors.primary};
                        font-family: "Archivo Black", sans-serif;
                        background-image: linear-gradient(45deg, #f0810f, #ffe45c);
                        background-repeat: repeat;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent; 
                        background-size: 100%
                        text-align: center;
                        
                  }


              ::placeholder {

                /*Text*/

                color: ${colors.secondary};
              }




              input[type="tel"] {

              /*Box model*/

              height: 2rem;
              width: 20rem;
              padding: 0.4rem;
              margin-bottom: 2rem;

              /*Text*/

              font-family: ${fonts.default};
              font-size: 1rem;
              color: ${colors.secondary};

              /*Visuals*/

              border-radius: 20px;
              border: 2px solid ${colors.secondary};
              background: transparent;

              }

              
              input[type="tel"]:focus {

              /*Visuals*/

              border: 2px solid #4d97f7;
              outline: none;
              box-shadow: 10px 10px 20px 0px rgba(176,176,176,0.66);

              }

            

              input[type="submit"]{

                /*Box model*/

                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 2rem;

              }


              a{

                /*Text*/

                text-decoration: none;
                color: ${colors.secondary};
              }


                
            
            `}
        </style>
      </SettingsLayout>
    )
    
  } else {
    return (
      <Layout>
        <>
          <div className={global.content}>
            <div className='message'>
              <h1 className={global.title7}>Para acceder a esta página debe iniciar sesión</h1>
              <button className={global.buttonPrimary} onClick={() => signIn()}>Iniciar sesión</button>
            </div>
          </div>
          <style jsx>{`
  
                    .message{
  
                        /*Box model*/
  
                        display: flex
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        
                        
                    }
  
                    
                `}
          </style>
        </>
      </Layout>
    )
  }
}

export async function getServerSideProps(context){

  context.res.setHeader('Cache-Control','public, s-maxage=10, stale-while-revalidate=59')

  const session = await getSession(context)

  const response = await fetch(`${server}/api/users/${session?.user.username}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })


  const currentUser = await response.json();


  return{

    props: {
      users: JSON.parse(JSON.stringify(currentUser))
  }
}
}
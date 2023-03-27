import Head from 'next/head'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { MdTitle, MdOutlineError } from 'react-icons/md'
import { BsFillChatLeftTextFill, BsFillXCircleFill, BsFillCheckCircleFill} from 'react-icons/bs'
import { statusColors, colors, fonts } from '../../styles/frontend-conf'
import global from '../../styles/global.module.css'
import Layout from '/components/Layout/Layout'
import {toast} from 'react-toastify'
import { server } from '/server'
import Loader from '/components/Loader/Loader'

export default function CreateTypeAttendance () {

  const { data: session, status } = useSession({ required: true })

  const Router = useRouter()
  const [description, setDescription] = useState('')
  const [name, setName] = useState('')
  const [isValidate, setIsValidate] = useState(false)
  const [message, setMessage] = useState('')
  

  const validate = (e) => {
    // Regular expressions

    const regName = /^¿?.+\?/g;

    if (e.target.name === 'name') {
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

  }

  const createTypeAttendance = async (e) => {

    e.preventDefault()

    const res = await fetch(`${server}/api/typeAttendance`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        description: description,
      })
    })

    const data = await res.json()

    if (data.error) {
      console.log(data.error)
      setMessage('Introduzca los campos obligatorios')
    } else {
      toast.success('Se ha publicado el tipo de cuidado', { position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored", })
      Router.push(`${server}/attendances`)
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
  if (session.user.role === "admin") {
    return (
      <Layout>
        <Head><title>Crear tipo de cuidado</title></Head>
        <div className="createTypeAttendance__header">
            <h1 className='form__title'>Crear tipo de cuidado</h1>
            <p className={global.text}>Introduzca los datos del tipo de cuidado. Los campos obligatorios vienen indicados con un asterisco *:</p>
        </div>
          <div className="form__position">
            <div className='form'>

              <form action='/api/typeAttendance' id='form'>
                <div className='form-vertical__name'>
                  <div className='label'>
                    <p className={global.text}>Tipo de cuidado (*)</p>
                    <MdTitle size={18} color={colors.secondary} />
                  </div>
                  <div className='name__input'>
                    <input
                          title='Introducir tipo de cuidado'
                          type='text'
                          name='name'
                          value={name}
                          required
                          onChange={(e) => setName(e.target.value)}
                          onKeyUp={(e) => validate(e)}
                          onBlur={(e) => validate(e)}
                          placeholder='p. ej.: Alimentación'
                          className='input'
                         />
                  
                    <div id='error__name' className='form__error-icon'><BsFillXCircleFill size={20} color={statusColors.error} /></div>
                    <div id='success__name' className='form__success-icon'><BsFillCheckCircleFill size={20} color={statusColors.success} /></div>
                    <div id='name__error' className='form__input-nameError'>
                      <div className='error__icon'>
                        <MdOutlineError size={30} color={colors.secondary} />
                      </div>
                      <p className={global.text2}>Debe seguir el formato correcto</p>
                    </div>
                  </div>
                </div>
                <div className='form-vertical__description'>
                  <div className='label'>
                    <p className={global.text}>Descripción (*)</p>
                    <BsFillChatLeftTextFill size={18} color={colors.secondary} />
                  </div>
                  <div className='description__input'>
                    <textarea
                          title='Introducir descripción'
                          name='description'
                          value={description}
                          required
                          onChange={(e) => setDescription(e.target.value)}
                          placeholder='p. ej.: Es importante...'
                        />
                  </div>

                </div>

              </form>
              <input className={global.buttonPrimary} type='submit' onClick={(e) => createTypeAttendance(e)} value='Crear' />
          </div>
        </div>
        <style jsx>{`

                    .form{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    
                        width: 50vw;

                        /*Visuals*/

                        background-image: linear-gradient(45deg, rgba(240,129,15, 0.8) 35%, rgba(249,166,3, 0.8) 100%);
                        background-size: 100% 110%;
                        border-radius: 20px;
                        
                    }

                    .form__position{

                        /*Box model*/ 

                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        
                    }

                    .form__name{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        margin-bottom: 1rem;

                    }

                    .createTypeAttendance__header{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-bottom: 2rem;
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

                

                    .form-vertical__description {

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        width: 40vw;

                    }

                    .form-vertical__name {

                        /*Box model*/

                        margin-top: 2rem;

                    }


                    .description__input{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        width: 40vw;
                        

                    }

                    .name__input{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;

                    }

                    /*ERRORES*/

                    .form__input-nameError{

                      /*Position*/

                      position: absolute;

                      /*Box model*/

                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      margin-left: 20rem;

                      /*Text*/

                      font-family: 'Poppins', sans-serif;
                      color: #fafafa;

                      /*Visuals*/

                      border-radius: 10px;
                      background-color: ${statusColors.error};
                      opacity: 0;

                      }


                      .form__input-nameError p{

                      /*Box model*/

                      margin-left: 2rem;

                      }

                      .form__input-nameError--active{

                      /*Position*/

                      position: absolute;
                      margin-left: 20rem;

                      /*Box model*/

                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      width: 30vw;

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
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        z-index: 999;

                        /*Visuals*/

                        opacity: 0;
                        color: ${statusColors.error};


                      }

                      .form__success-icon{

                      /*Position*/

                      position: relative;
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      right: -1.1rem;
                      z-index: 999;

                      /*Visuals*/

                      opacity: 0;
                      color: ${statusColors.success};

                      }

                      .form__error-icon--active{

                      /*Position*/

                      position: relative;
                      right: -1.1rem;
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      z-index: 999;

                      /*Visuals*/

                      opacity: 1;
                      color: ${statusColors.error};

                      }

                      .form__success-icon--active{

                      /*Position*/

                      position: relative;
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      right: -1.1rem;
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

                      border-radius: 10px;
                      background-color: ${statusColors.success};

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



                    input[type="text"]{


                        /*Box model*/

                        width: 20vw;
                        height: 2rem;
                        padding: 0.4rem;

                        /*Text*/

                        font-family: ${fonts.default};
                        font-size: 1rem;

                        /*Visuals*/

                        border-radius: 5px;
                        border: 1px solid ${colors.primary};

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

                   
                    ::placeholder{

                        /*Text*/

                        color: ${colors.primary};
                    }

                    textarea{

                    /*Box model*/

                    width: 100%;
                    height: 3rem;
                    padding: 0.4rem;
                    margin-bottom: 2rem;

                    /*Text*/

                    font-family: ${fonts.default};
                    font-size: 1rem;

                    /*Visuals*/

                    border-radius: 5px;
                    border: 1px solid ${colors.primary};

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
      </Layout>
    )
  } else {
    return (
      <Layout>
        <div className={global.content}>
          <div className='message'>
            <h1 className={global.title}>Para acceder a esta página debe iniciar sesión</h1>
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
      </Layout>
    )
  }
}

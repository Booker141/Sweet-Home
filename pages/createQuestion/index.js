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

export default function CreatePost () {

  const { data: session, status } = useSession({ required: true })

  const Router = useRouter()
  const [answer, setAnswer] = useState('')
  const [title, setTitle] = useState('')
  const [isValidate, setIsValidate] = useState(false)
  const [message, setMessage] = useState('')
  

  const validate = (e) => {
    // Regular expressions

    const regTitle = /^¿?.+\?/g;

    if (e.target.name === 'title') {
      if (!title.match(regTitle)) {
        document.getElementById('title__error').classList.add('form__input-titleError--active')
        document.getElementById('error__title').classList.add('form__error-icon--active')
        document.getElementById('success__title').classList.remove('form__success-icon--active')
        setIsValidate(false)
      } else {
        document.getElementById('title__error').classList.remove('form__input-titleError--active')
        document.getElementById('error__title').classList.remove('form__error-icon--active')
        document.getElementById('success__title').classList.add('form__success-icon--active')
        setIsValidate(true)
      }
    }

  }

  const createQuestion = async (e) => {

    e.preventDefault()

    const res = await fetch(`${server}/api/questions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        answer: answer,
      })
    })

    const data = await res.json()

    if (data.error) {
      console.log(data.error)
      setMessage('Introduzca los campos obligatorios')
    } else {
      toast.success('Se ha publicado la pregunta', { position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored", })
      Router.push(`${server}/faq`)
    }
  }

  if (status == 'loading') {
    return (
      <>
        <div className={global.loading}><p className={global.title}>Cargando..</p></div>
        <Loader />
      </>
    )
  }
  if (session.user.role === "admin") {
    return (
      <Layout>
        <Head><title>Crear pregunta</title></Head>
        <div className="createQuestion__header">
            <h1 className='form__title'>Crear pregunta</h1>
            <p className={global.text}>Introduzca los datos de la pregunta. Los campos obligatorios vienen indicados con un asterisco *:</p>
        </div>
          <div className="form__position">
            <div className='form'>

              <form action='/api/questions' id='form'>
                <div className='form-vertical__title'>
                  <div className='label'>
                    <p className={global.text}>Título (*)</p>
                    <MdTitle size={18} color={colors.secondary} />
                  </div>
                  <div className='title__input'>
                    <input
                          title='Introducir título'
                          type='text'
                          name='title'
                          value={title}
                          required
                          onChange={(e) => setTitle(e.target.value)}
                          onKeyUp={(e) => validate(e)}
                          onBlur={(e) => validate(e)}
                          placeholder='p. ej.: ¿Es necesario...?'
                          className='input'
                         />
                  
                    <div id='error__title' className='form__error-icon'><BsFillXCircleFill size={20} color={statusColors.error} /></div>
                    <div id='success__title' className='form__success-icon'><BsFillCheckCircleFill size={20} color={statusColors.success} /></div>
                    <div id='title__error' className='form__input-titleError'>
                      <div className='error__icon'>
                        <MdOutlineError size={30} color={colors.secondary} />
                      </div>
                      <p className={global.text2}>Debe ser una pregunta</p>
                    </div>
                  </div>
                </div>
                <div className='form-vertical__answer'>
                  <div className='label'>
                    <p className={global.text}>Respuesta (*)</p>
                    <BsFillChatLeftTextFill size={18} color={colors.secondary} />
                  </div>
                  <div className='answer__input'>
                    <textarea
                          title='Introducir respuesta'
                          name='answer'
                          value={answer}
                          required
                          onChange={(e) => setAnswer(e.target.value)}
                          placeholder='p. ej.: Si, es necesario..'
                        />
                  </div>

                </div>

              </form>
              <input className={global.buttonPrimary} type='submit' onClick={(e) => createQuestion(e)} value='Crear' />
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

                    .form__title{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        margin-bottom: 1rem;

                    }

                    .createQuestion__header{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-bottom: 1rem;
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

                

                    .form-vertical__answer {

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        width: 100%;

                    }

                    .form-vertical__title {

                        /*Box model*/

                        margin-top: 2rem;

                    }


                    .answer__input{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        width: 115%;
                        

                    }

                    .title__input{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;

                    }

                    /*ERRORES*/

                    .form__input-titleError{

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


                      .form__input-titleError p{

                      /*Box model*/

                      margin-left: 2rem;

                      }

                      .form__input-titleError--active{

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
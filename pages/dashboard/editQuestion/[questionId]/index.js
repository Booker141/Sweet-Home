/* Static imports */

import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { MdTitle, MdOutlineError } from 'react-icons/md'
import { BsFillChatLeftTextFill, BsFillXCircleFill, BsFillCheckCircleFill} from 'react-icons/bs'
import { statusColors, colors, fonts } from '/styles/frontend-conf'
import {toast} from 'react-toastify'
import { server } from '/server'
import global from '/styles/global.module.css'
import Head from 'next/head'
import dynamic from 'next/dynamic'

/* Dynamic imports */

const Loader = dynamic(() => import('/components/Loader/Loader'))
const Layout = dynamic(() => import('/components/Layout/Layout'))
const LazyLoad = dynamic(() => import('react-lazyload'))


export default function EditQuestion ({question}) {

  const { data: session, status } = useSession({ required: true })

  const Router = useRouter()
  const [answer, setAnswer] = useState(question.answer)
  const [title, setTitle] = useState(question.title)
  const [isValidate, setIsValidate] = useState(false)
  const [isPosting, setIsPosting] = useState(false)
  const [message, setMessage] = useState('')
  

  /**
   * It validates the title input field by checking if the input matches the regular expression. If it
   * does, it adds the success icon and removes the error icon. If it doesn't, it adds the error icon
   * and removes the success icon
   * @param e - event
   */
  const validate = (e) => {
    // Regular expressions

    const regTitle = /^¿?.+\?/g;

    if (e.target.name === 'title') {
      if (!title.match(regTitle)) {
        document.getElementById('title__error').classList.add('form__input-titleError--active')

        setIsValidate(false)
      } else {
        document.getElementById('title__error').classList.remove('form__input-titleError--active')

        setIsValidate(true)
      }
    }

  }

  /**
   * It sends a POST request to the server with the title and answer of the question, and if there's no
   * error, it redirects the user to the FAQ page
   * @param e - The event object
   */
  const editQuestion = async (e) => {

    e.preventDefault()

    if(title.trim() === ''){
      toast.error('El campo Título es obligatorio', { position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored", })
        return
    }

    if(answer.trim() === ''){
      toast.error('El campo Respuesta es obligatorio', { position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored", })
        return
    }

    const res = await fetch(`${server}/api/questions/${Router.query.questionId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        answer: answer,
      })
    })

    setIsPosting(true)

    const data = await res.json()

    if (data.error) {
      console.log(data.error)
      setMessage('Introduzca los campos obligatorios')
    } else {
      toast.success('Se ha editado la pregunta', { position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored", })
      setTimeout(() => {
        Router.push(`${server}/faq`)
      }, 5000)
    }
  }

  if (status == 'loading') {
    return (
      <>
        <div className={global.loading}><p>Cargando..</p></div>
        <Loader />
      </>
    )
  }
  if (session.user.role === "administrador") {
    return (
      <Layout>
        <Head><title>Editar pregunta | Sweet Home</title></Head>
        
          <div className="form__position">
            <div className='form'>
            <div className="editQuestion__header">
              <h1 className='form__title'>Editar pregunta</h1>
              <p className={global.text2}>Introduzca los datos de la pregunta. Los campos obligatorios vienen indicados con un asterisco *:</p>
            </div>
              <form action='/api/questions' id='form'>
                <div className='form-vertical__title'>
                  <label className='label'>
                    <p className={global.text}>Título (*)</p>
                    <MdTitle size={18} color={colors.secondary} />
                  </label>
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
                  
                  
                    
                    </div>
                    <div id='title__error' className='form__input-titleError'>
                      <div className='error__icon'>
                        <MdOutlineError size={25} color={colors.secondary} />
                      </div>
                      <p className={global.text2}>Debe ser una pregunta</p>
                  </div>
                </div>
                <div className='form-vertical__answer'>
                  <label className='label'>
                    <p className={global.text}>Respuesta (*)</p>
                    <BsFillChatLeftTextFill size={18} color={colors.secondary} />
                  </label>
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
              <input className={global.buttonPrimary} type='submit' onClick={(e) => editQuestion(e)} value={isPosting ? 'Editando..' : 'Editar'} />
          </div>
        </div>
        <style jsx>{`

                    .form{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    
                        width: 70vw;

                        /*Visuals*/

                        background-image: linear-gradient(180deg, rgba(240,129,15, 1) 35%, rgba(249,166,3, 1) 200%);
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

                    .editQuestion__header{

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


                      /*Box model*/

                      display: none;


                      /*Text*/

                      font-family: 'Poppins', sans-serif;
                      color: #fafafa;

                      /*Visuals*/

                      border-radius: 20px;
                      background-color: ${statusColors.error};
                      opacity: 0;

                      }


                      .form__input-titleError p{

                      /*Box model*/

                      margin-left: 2rem;

                      }

                      .form__input-titleError--active{


                      /*Box model*/

                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      width: 15vw;

                      /*Text*/

                      font-family: 'Poppins', sans-serif;
                      color: #fafafa;

                      /*Visuals*/

                      border-radius: 20px;
                      background-color: ${statusColors.error};
                      opacity: 1;

                      }



                      .error__icon{

                      /*Box model*/
                      
                      display: flex;
                      flex-direction: row;
                      align-items: center;
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

                      h1{
                        /*Box model*/

                        margin-top: 2rem;
                        margin-bottom: 3rem;

                        /*Text*/

                        font-size: 3.5rem;
                        font-weight: 500;
                        font-family: "Satisfy", sans-serif;
                        color: white;
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

                        border-radius: 20px;
                        border: 2px solid ${colors.primary};

                    }

                    input[type="text"]:focus{

                    /*Visuals*/

                    border: 2px solid #4d97f7;
                    outline: none;
                    box-shadow: 10px 10px 20px 0px rgba(176,176,176,0.66);

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

                    border-radius: 20px;
                    border: 2px solid ${colors.primary};

                    }

                    textarea:focus{
                    /*Visuals*/

                    border: 2px solid #4d97f7;
                    outline: none;
                    box-shadow: 10px 10px 20px 0px rgba(176,176,176,0.66);

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
      </Layout>
    )
  }
}

export async function getServerSideProps(context){

    const res = await fetch(`${server}/api/questions/${context.query.questionId}`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
    })
    
    const data = await res.json();
    
    const question = JSON.parse(JSON.stringify(data))
    
    return {
        props: {
          question
        }
    }
}
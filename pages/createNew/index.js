import Head from 'next/head'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { MdLocationOn, MdDateRange, MdOutlineError } from 'react-icons/md'
import { BsFillChatLeftTextFill, BsFillXCircleFill, BsFillCheckCircleFill } from 'react-icons/bs'
import { colors, statusColors, fonts } from '../../styles/frontend-conf'
import global from '../../styles/global.module.css'
import Layout from '/components/Layout/Layout'
import { server } from '/server'
import Loader from '/components/Loader/Loader'

export default function CreateNew () {

  const { data: session, status } = useSession({ required: true })
  const Router = useRouter()
  const [title, setTitle] = useState('')
  const [date, setDate] = useState(new Date())
  const [introduction, setIntroduction] = useState('')
  const [body, setBody] = useState('')
  const [conclusion, setConclusion] = useState('')   
  const [author, setAuthor] = useState('')
  const [message, setMessage] = useState('')

  const validate = (e) => {

    const regAuthor = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    const regDate = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

    //Validación autor

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

    // Validación del formato de la fecha
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

  const createNew = async (e) => {

    e.preventDefault()

      const res = await fetch(`${server}/api/news`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: session.user.id,
            date: date,
            introduction: introduction,
            body: body,
            conclusion: conclusion,
            author: author,
          })
      })

    const data = await res.json()

    if (data.error) {
      console.log(data.error)
      setMessage('Introduzca los campos obligatorios')
    } else {
      setMessage('Noticia creada correctamente')
      Router.push(`${server}/news`)
    }
  }

  if (status === 'loading') {
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
        <Head><title>Crear noticia</title></Head>
          <div className={global.dots}>
            <div className='form'>
              <h1 className='form__title'>Crear noticia</h1>
              <p className={global.text2}>Introduzca los datos de la noticia. Los campos obligatorios vienen indicados con un asterisco *:</p>
              <form action='/api/news' id='form'>
                <div className='form-vertical__title'>
                  <div className='label'>
                    <p className={global.text}>Título (*)</p>
                    <MdLocationOn size={25} color={colors.secondary} />
                  </div>
                  <div className='title__input'>
                    <input
                          title='Introducir título'
                          type='text'
                          name='title'
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          placeholder='p. ej.: Nueva mascota adoptada en..'
                          className='input'
                         />
                  </div>
                </div>
                <div className='form-vertical__author'>
                  <div className='label'>
                    <p className={global.text}>Autor (*)</p>
                    <MdLocationOn size={25} color={colors.secondary} />
                  </div>
                  <div className='author__input'>
                    <input
                          title='Introducir autor'
                          type='text'
                          name='author'
                          value={author}
                          onChange={(e) => setTitle(e.target.value)}
                          onKeyUp={(e) => validate(e)}
                          onBlur={(e) => validate(e)}
                          placeholder='p. ej.: Marta Sánchez'
                          className='input'
                         />
                         <div id='error__author' className='form__error-icon'><BsFillXCircleFill size={20} color={statusColors.error} /></div>
                        <div id='success__author' className='form__success-icon'><BsFillCheckCircleFill size={20} color={statusColors.success} /></div>
                        <div id='author__error' className='form__input-authorError'>
                        <div className='error__icon'>
                          <MdOutlineError size={30} color={colors.secondary} />
                        </div>
                      <p className={global.text2}>Debe seguir el formato correcto</p>
                    </div>
                  </div>
                </div>
                <div className='form-vertical__date'>
                    <div className='label'>
                        <p className={global.text}>Fecha (*)</p>
                        <MdDateRange size={20} color={colors.secondary} />
                    </div>
                    <input
                    title='Introducir fecha de noticia'
                    type='date'
                    id='date'
                    max={new Date()}
                    name='date'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    onKeyUp={(e) => validate(e)}
                    onBlur={(e) => validate(e)}
                    className='input'
                    />
                    <div id='error__date' className='form__error-icon'><BsFillXCircleFill size={20} color={statusColors.error} /></div>
                    <div id='success__date' className='form__success-icon'><BsFillCheckCircleFill size={20} color={statusColors.success} /></div>
                    <div id='date__error' className='form__input-dateError'>
                      <div className='error__icon'>
                          <MdOutlineError size={30} color={colors.secondary} />
                        </div>
                      <p className={global.text2}>Debe seguir el formato correcto</p>
                    </div>
                </div>
                <div className='form-vertical__introduction'>
                  <div className='label'>
                    <p className={global.text}>Introducción (*)</p>
                    <BsFillChatLeftTextFill size={25} color={colors.secondary} />
                  </div>
                  <div className='introduction__input'>
                    <textarea
                          title='Introducir introducción'
                          name='introduction'
                          value={introduction}
                          required
                          onChange={(e) => setIntroduction(e.target.value)}
                          placeholder='p. ej.: Texto de introducción...'
                        />
                   </div>
                  </div>
                  <div className='form-vertical__body'>
                  <div className='label'>
                    <p className={global.text}>Desarrollo (*)</p>
                    <BsFillChatLeftTextFill size={25} color={colors.secondary} />
                  </div>
                  <div className='body__input'>
                    <textarea
                          title='Introducir desarrollo'
                          name='body'
                          value={body}
                          required
                          onChange={(e) => setBody(e.target.value)}
                          placeholder='p. ej.: Texto de desarrollo...'
                        />
                  </div>
                </div>
                <div className='form-vertical__conclusion'>
                  <div className='label'>
                    <p className={global.text}>Conclusión</p>
                    <BsFillChatLeftTextFill size={25} color={colors.secondary} />
                  </div>
                  <div className='conclusion__input'>
                    <textarea
                          title='Introducir conclusión'
                          name='conclusion'
                          value={conclusion}
                          onChange={(e) => setConclusion(e.target.value)}
                          placeholder='p. ej.: Texto de conclusión...'
                        />
                  </div>
                </div>
              </form>
              <input className={global.buttonPrimary} type='submit' onClick={(e) => createNew(e)} value='Crear' />
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

                


                    .form-vertical__body {

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        width: 100%;

                    }


                    .body__input{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        width: 115%;
                        

                    }

                    .form-vertical__date {

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        width: 100%;

                        }


                        .date__input{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        width: 115%;


                        }

                        .form-vertical__introduction {

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        width: 100%;

                        }


                        .introduction__input{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        width: 115%;


                        }

                        .form-vertical__conclusion {

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        width: 100%;

                        }


                        .conclusion__input{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        width: 115%;


                        }

                        .form-vertical__author {

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        width: 100%;

                        }


                        .body__input{

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
                    justify-content: space-between;
                    gap: 1rem;

                    }

                    /*ERRORES*/

            .form__input-authorError{

                /*Position*/

                position: absolute;
                margin-left: 22rem;

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                width: 100%;
                margin-bottom: 2rem;


                /*Text*/

                font-family: 'Poppins', sans-serif;
                color: #fafafa;

                /*Visuals*/

                border-radius: 10px;
                background-color: ${statusColors.error};
                opacity: 0;

                }


                .form__input-authorError p{

                /*Box model*/

                margin-left: 2rem;

                }

                .form__input-authorError--active{

                /*Position*/

                position: absolute;
                margin-left: 22rem;
                margin-bottom: 2rem;
                width: 100%;

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;

                /*Text*/

                font-family: 'Poppins', sans-serif;
                color: #fafafa;

                /*Visuals*/

                border-radius: 10px;
                background-color: ${statusColors.error};
                opacity: 1;

                }

                .form__input-dateError{

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

                border-radius: 10px;
                background-color: ${statusColors.error};
                opacity: 0;

                }


                .form__input-dateError p{

                /*Box model*/

                margin-left: 2rem;

                }

                .form__input-dateError--active{

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
                  bottom: 0.5rem;
                  z-index: 999;

                  /*Visuals*/

                  opacity: 0;
                  color: ${statusColors.error};


                }

                .form__success-icon{

                /*Position*/

                position: relative;
                right: 0.1rem;
                bottom: 0.5rem;
                z-index: 999;

                /*Visuals*/

                opacity: 0;
                color: ${statusColors.success};

                }

                .form__error-icon--active{

                /*Position*/

                position: relative;
                right: -1.1rem;
                bottom: 0.5rem;
                z-index: 999;

                /*Visuals*/

                opacity: 1;
                color: ${statusColors.error};

                }

                .form__success-icon--active{

                /*Position*/

                position: relative;
                right: 0.1rem;
                bottom: 0.5rem;
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
            <h1 className={global.title}>Para acceder a esta página debe ser administrador de Sweet Home</h1>
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

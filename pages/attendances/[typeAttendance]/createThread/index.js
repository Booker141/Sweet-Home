/* Static imports */


import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { MdOutlineSubtitles } from 'react-icons/md'
import { colors, fonts} from '/styles/frontend-conf'
import { server } from '/server'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import global from '/styles/global.module.css'


/*Dynamic imports*/

const Loader = dynamic(() => import('/components/Loader/Loader'))
const Layout = dynamic(() => import('/components/Layout/Layout'))
const LazyLoad = dynamic(() => import('react-lazyload'))

/**
 * The CreateThread function creates a new thread for a specific type of attendance and sends a POST
 * request to the server with the necessary data.
 * @returns a React component that renders a form for creating a new thread. The component uses the
 * Next.js framework and includes hooks such as useState and useRouter. It also includes conditional
 * rendering based on the user's authentication status, and sends a POST request to the server to
 * create a new thread.
 */
export default function CreateThread () {

  const { data: session, status } = useSession({ required: true })
  const Router = useRouter()
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [isPosting, setIsPosting] = useState(false)

  /**
   * This function creates a new thread for a specific type of attendance and sends a POST request to
   * the server with the necessary data.
   * @param e - The "e" parameter is an event object that is passed to the function when it is
   * triggered by an event, such as a form submission or a button click. It is commonly used to prevent
   * the default behavior of the event, in this case, preventing the form from submitting and reloading
   * the page.
   */
  const createThread = async (e) => {

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

    const res = await fetch(`${server}/api/threads/${Router.query.typeAttendance}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        typeAttendanceId: session.user.id,
        title,
        username: session.user.username
      })
    }).catch(err => console.log(err))

    const data = await res.json()

    if (data.error) {
      console.log(data.error)
      setMessage('Introduzca los campos obligatorios')
    } else {
      setMessage('Hilo creado correctamente')
      Router.push(`/attendances/${Router.query.typeAttendance}`)
    }
  }

  if (status == 'loading') {

    return (
      <>
        <div className={global.loading}><p>Cargando..</p></div>
        <Loader/>
      </>
    )
  }
  if (session) {
    return (
      <Layout>
        <Head><title>Crear hilo</title></Head>
        
        <div className="form__position">
            <div className='form'>
            <div className="createThread__header">
              <h1 className="form__title">Crear hilo</h1>
              <p className={global.text2}>Introduzca el título del hilo:</p>
            </div>
              
              <form action='/api/posts' id='form'>
                <div className='form-vertical__title'>
                  <label className='label'>
                    <p className={global.text}>Título (*)</p>
                    <MdOutlineSubtitles size={25} color={colors.secondary} />
                  </label>
                  <div className='title__input'>
                    <input
                          title='Introducir título'
                          type='text'
                          name='title'
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          placeholder='p. ej.: 10 consejos para el cuidado de mi mascota'
                          className='input'
                         />
                  </div>
                </div>
              </form>
              <input className={global.buttonPrimary} type='submit' onClick={(e) => createThread(e)} value={isPosting ? 'Creando..' : 'Crear'} />
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

                    .createThread__header{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 2rem;
                    }

                    .form__position{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;

                    }
                    
                    .form__title{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                      
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

                    .form-vertical__title{

                        /*Box model*/

                        margin-top: 2rem;

                    }
        

                    .title__input{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
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


                    input[type="text"] {

                        /*Box model*/

                        width: 30rem;
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

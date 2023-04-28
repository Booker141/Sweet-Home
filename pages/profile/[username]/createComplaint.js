import Head from 'next/head'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { BsFillExclamationDiamondFill } from 'react-icons/bs'
import { colors, fonts} from '/styles/frontend-conf'
import { toast } from 'react-toastify'
import global from '/styles/global.module.css'
import Layout from '/components/Layout/Layout'
import Loader from '/components/Loader/Loader'
import { server } from '/server'

/* The above code is a React component that creates a form for users to submit a complaint. It uses the
Next.js framework and includes functionality for handling form submission, displaying success/error
messages using the toast library, and redirecting the user to a different page after successful
submission. It also includes conditional rendering based on whether the user is logged in or not. */
export default function CreateComplaint () {
  
  const { data: session, status } = useSession({ required: true })
  const router = useRouter()
  const [reason, setReason] = useState('')
  const [reasonList, setReasonList] = useState('')
  const [isSending, setIsSending] = useState(false)

  /**
   * This function creates a complaint by sending a POST request to the server with the complaint
   * details and displays a success or error message using the toast library.
   * @param e - The "e" parameter is an event object that is passed to the function when it is called.
   * It is commonly used in event listeners to access information about the event that triggered the
   * listener. In this case, it is used to prevent the default behavior of a form submission.
   */
  const createComplaint = async (e) => {

    e.preventDefault()

    const res = await fetch(`${server}/api/complaints/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        description: reason,
        usernameFrom: session.user.username,
        usernameTo: router.query.username,
        reason: reasonList
      })
    })

    const data = await res.json()

    if (data.error) {
      console.log(data.error)
      toast.error('Introduzca los campos obligatorios',{ position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,}
      )
    } else {

      
      toast.success('Denuncia creada correctamente',{ position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,}
      )
      router.push('/profile/' + `${router.query.username}`)
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
  if (session) {
    return (

      <Layout>
        <Head><title>Crear denuncia</title></Head>        
          <div className='container__form'>
            <div className='form'>
            <div className='container__header'>
              <h1 className='title'>Denuncia hacia @{router.query.username}</h1>
              <h3 className={global.text2__bold}>De parte de @{session.user.username}</h3>
              <p className={global.text2}>Introduzca los datos de la denuncia. Los campos obligatorios vienen indicados con un asterisco *:</p>
            </div>
              <form action='/api/complaints' id='form'>
              <div className='form-vertical__reasonList'>
                <label className="label">Elige el motivo de la denuncia:</label>
                  <select name="reason" onChange={() => setReasonList()} required>
                      <option default value="spam">Spam</option>
                      <option value="badContent">Contenido inapropiado</option>
                      <option value="impostor">Finge ser otra persona</option>
                      <option value="inapropiate">Datos de perfil inapropiados</option>
                      <option value="rules">Infracción de normas y reglas de Sweet Home</option>
                      <option value="other">Otro</option>
                  </select>
                </div>
                <div className='form-vertical__reason'>
                  <label className='label'>
                    <p className={global.text}>Motivo</p>
                    <BsFillExclamationDiamondFill size={25} color={colors.secondary} />
                  </label>
                  <div className='reason__input'>
                    <textarea
                      title='Introducir motivo'
                      name='reason'
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      placeholder='p. ej.: El usuario ha infringido las normas...'
                    />
                  </div>
                </div>
              </form>
              <input className={global.buttonPrimary} type='submit' onClick={(e) => createComplaint(e)} value={isSending ? 'Enviando..' : 'Enviar'} />
            </div>
          </div>
        <style jsx>{`

                    .form{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    
                        width: 70vw;
                        padding: 2rem;

                        /*Visuals*/

                        background-image: linear-gradient(45deg, rgba(240,129,15, 0.8) 35%, rgba(249,166,3, 0.8) 100%);
                        background-size: 100% 110%;
                        border-radius: 20px;
                        
                    }

                    .container__header{

                      /*Box model*/

                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: center;
                      margin-bottom: 2rem;

                    }

                    .container__form{

                      /*Box model*/

                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: center;

                    }
                    

                    .title{

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

                    .form-vertical__reason{


                        /*Box model*/

                        margin-top: 2rem;

                    }


                    .reason__input{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
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

                    width: 40rem;
                    height: 8rem;
                    padding: 0.4rem;
                    margin-bottom: 2rem;

                    /*Text*/

                    font-family: ${fonts.default};
                    font-size: 1rem;

                    /*Visuals*/

                    border-radius: 5px;
                    border: 1px solid ${colors.primary};

                    }

                    select{

                      /*Box model*/

                      width: 40rem;
                      height: 2rem;
                      padding: 0.4rem;
                      margin-bottom: 2rem;

                      /*Text*/

                      font-family: ${fonts.default};
                      font-size: 1rem;

                      /*Visuals*/

                      border-radius: 20px;
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

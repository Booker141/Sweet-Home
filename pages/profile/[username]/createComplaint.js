import Head from 'next/head'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { BsFillExclamationDiamondFill } from 'react-icons/bs'
import { colors, fonts, statusColors } from '/styles/frontend-conf'
import { toast } from 'react-toastify'
import global from '/styles/global.module.css'
import Layout from '/components/Layout/Layout'
import Loader from '/components/Loader/Loader'
import { server } from '/server'

export default function CreateComplaint () {
  
  const { data: session, status } = useSession({ required: true })
  const router = useRouter()
  const [reason, setReason] = useState('')

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
        usernameTo: router.query.username
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
          <div className='form'>
            <h1 className='form__title'>Denuncia hacia @{router.query.username}</h1>
            <h3 className={global.text2}>De parte de @{session.user.username}</h3>
            <p className={global.text2}>Introduzca los datos de la denuncia. Los campos obligatorios vienen indicados con un asterisco *:</p>
            <form action='/api/complaints' id='form'>
              <div className='form-vertical__reason'>
                <div className='label'>
                  <p className={global.text}>Motivo</p>
                  <BsFillExclamationDiamondFill size={25} color={colors.secondary} />
                </div>
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
            <input className={global.buttonPrimary} type='submit' onClick={(e) => createComplaint(e)} value='Enviar' />
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

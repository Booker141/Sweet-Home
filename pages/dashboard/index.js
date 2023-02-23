import global from '../../styles/global.module.css'
import { colors } from '../../styles/frontend-conf'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout/Layout'
import Head from 'next/head'
import { useState } from 'react'
import Loader from '../../components/Loader/Loader'

export default function Dashboard () {
  const { data: session, status } = useSession({ required: true })

  if (status == 'loading') {
    return (
      <>
        <div className={global.loading}><p className={global.title}>Cargando..</p></div>
        <Loader />
      </>
    )
  }
  if (session.user.role === 'admin') {
    return (
      <>
        <Layout>
          <Head>
            <title>Panel de administración</title>
          </Head>
          <h1 className={global.title}>Panel de administración</h1>
          <h2 className={global.secondary}>¡Bienvenido a tu dashboard!</h2>
          <div className={global.cards}>
            <div className={global.card__short}>
              <h2 className={global.title2}>Noticias</h2>
                <p className={global.text}>Panel de administración de noticias</p>
            </div>
            <div className={global.card__short}>
              <h2 className={global.title2}>Preguntas frecuentes</h2>
                <p className={global.text}>Panel de administración de preguntas frecuentes</p>
            </div>
            <div className={global.card__short}>
              <h2 className={global.title2}>Denuncias</h2>
                <p className={global.text}>Panel de administración de denuncias</p>
            </div>
          </div>
        </Layout>
      </>
    )
  } else {
    return (
      <Layout>
        <>
          <div className={global.content}>
            <div className='message'>
              <h1 className={global.title}>Para acceder a esta página debe ser administrador</h1>
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

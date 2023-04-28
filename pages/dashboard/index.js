import global from '../../styles/global.module.css'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import {colors, fonts} from '../../styles/frontend-conf'
import Layout from '../../components/Layout/Layout'
import Head from 'next/head'
import Loader from '../../components/Loader/Loader'

/**
 * This function is the dashboard of the administrator, it is only accessible to the administrator, if
 * the user is not an administrator, it will be redirected to the login page
 * @returns a component.
 */
export default function Dashboard () {

  const { data: session, status } = useSession({ required: true })
  const router = useRouter()

  if (status == 'loading') {
    return (
      <>
        <div className={global.loading}><p>Cargando..</p></div>
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
          <div className="dashboard__header">
            <h1 className={global.title}>Panel de administración</h1>
            <h2 className={global.secondary}>¡Bienvenido a tu panel <span className={global.colorized}>{session.user.username}</span>!</h2>
          </div>
          <div className="panels">
            <div className="panels__row">
                <div className={global.info__card}>
                  <h2 className="title__admin">¡Sweet Home da libertad a los administradores!</h2>
                  <p className={global.text2}>En Sweet Home, los administradores tienen acceso a varias 
                  funciones exclusivas. Estas están relacionadas con la creación, edición y eliminación 
                  de datos del sitio web. Puede acceder a la documentación a través del siguiente enlace:</p>
                </div>
              </div>
            <div className="panels__row">
              <div className={global.card__variable}>
                <h2 className="title__admin">Noticias</h2>
                  <p className={global.text}>Panel de administración de noticias. En este panel puede acceder a las siguientes funcionalidades:</p>
                  <div className="panel__buttons">
                    <button className={global.buttonPrimary} onClick={() => router.push("/createNew")}>Crear</button>
                    <button className={global.buttonPrimary} onClick={() => router.push("/editNew")}>Editar</button>
                    <button className={global.buttonPrimary} onClick={() => router.push("/news")}>Eliminar</button>
                  </div>
              </div>
              <div className={global.card__variable}>
                <h2 className="title__admin">Preguntas frecuentes</h2>
                  <p className={global.text}>Panel de administración de preguntas frecuentes. En este panel puede acceder a las siguientes funcionalidades:</p>
                  <div className="panel__buttons">
                    <button className={global.buttonPrimary} onClick={() => router.push("/createQuestion")}>Crear</button>
                    <button className={global.buttonPrimary} onClick={() => router.push("/editQuestion")}>Editar</button>
                    <button className={global.buttonPrimary} onClick={() => router.push("/faq")}>Eliminar</button>
                  </div>
              </div>
            </div>
            
            <div className="panels__row">
              <div className={global.card__variable}>
                <h2 className="title__admin">Denuncias</h2>
                  <p className={global.text}>Panel de administración de denuncias. Accede al panel de denuncias 
                  interpuestas por los usuarios:</p>
                  <a className={global.link} aria-label="Acceder al panel de Denuncias" href="/complaints">Acceder ▷</a>
              </div>

              <div className={global.card__variable}>
                <h2 className="title__admin">Tipos de cuidado</h2>
                  <p className={global.text}>Panel de administración de tipos de cuidado. En este panel puede acceder a las siguientes funcionalidades:</p>
                  <div className="panel__buttons">
                    <button className={global.buttonPrimary} onClick={() => router.push("/createTypeAttendance")}>Crear</button>
                    <button className={global.buttonPrimary} onClick={() => router.push("/editTypeAttendance")}>Editar</button>
                    <button className={global.buttonPrimary} onClick={() => router.push("/attendances")}>Eliminar</button>
                  </div>
              </div>
            </div>
            <div className="panels__row">
              <div className={global.card__variable}>
                <h2 className="title__admin">Usuarios bloqueados</h2>
                  <p className={global.text}>Panel de administración de los usuarios que han recibido un mínimo de cinco denuncias. Accede al panel de usuarios bloqueados:</p>
                  <a className={global.link} aria-label="Acceder al panel de usuarios bloqueados" href="/blockedUsers">Acceder ▷</a>
              </div>
          </div>
        </div>
          <style jsx>{`

            .dashboard__header{

              /*Box model*/

              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;

            }

            .panels{

              /*Box model*/

              display: flex;
              flex-direction: column;
              gap: 1rem;

            }

            .panels__row{

              /*Box model*/

              display: flex;
              flex-direction: row;
              gap: 1rem;
              margin-top: 2rem;
              margin-bottom: 1rem;

            }
            
            .panel__buttons{

              /*Box model*/

              display: flex;
              flex-direction: row;
              gap: 1rem;
              align-items: center
            
            }

            .title__admin{

              /*Text*/

              font-size: 2rem;
              font-weight: 600;
              font-family: ${fonts.default};

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

          `}</style>
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

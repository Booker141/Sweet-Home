import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import global from '/styles/global.module.css'
import Layout from 'components/Layout/Layout'
import Notification from 'components/Notification/Notification'
import Loader from 'components/Loader/Loader'
import { server } from '/server'

export default function Notifications () {
  const { data: session, status } = useSession({ required: true })

  const [notifications, setNotifications] = useState([])

  console.log(notifications)
  useEffect(async () => {
    if (session) {
      const res = await fetch(`${server}/api/notifications/${session.user.username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const notifications = await res.json()
      setNotifications(notifications)
    }
  }, [])

  if (status == 'loading') {
    return (
      <>
        <div className={global.loading}><p className={global.title}>Cargando..</p></div>
        <Loader />
      </>
    )
  }
  if (session) {
    return (
      <Layout>
        <div className='container'>
          <h1 className={global.title}>Notificaciones</h1>
          {notifications.length === 0 && <div><p className={global.loading2}>No tiene ninguna notificación</p></div>}
          {notifications.map(({ _id, typeNotification, userIdFrom, userIdTo }) => {
            return (
              <>
                <Notification key={_id} id={_id} typeNotification={typeNotification} userIdFrom={userIdFrom} userIdTo={userIdTo} />
              </>
            )
          })}
        </div>
        <style jsx>{`
        
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
    )
  } else {
    return (
      <Layout>
        <>
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
        </>
      </Layout>
    )
  }
}

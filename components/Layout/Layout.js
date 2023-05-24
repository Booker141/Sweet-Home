
/* Static imports */

import { ImArrowUp2 } from 'react-icons/im'
import {toast} from 'react-toastify'
import {useSession} from 'next-auth/react'
import {server} from '/server'
import {useState, useEffect} from 'react'
import global from '/styles/global.module.css'
import dynamic from 'next/dynamic'
import Header from '/components/Header/Header'
import Sidebar from '/components/Sidebar/Sidebar'

/* Dynamic imports */

const Footer = dynamic(() => import('/components/Footer/Footer'))
const LazyLoad = dynamic(() => import('react-lazyload'))

/*
    * @author Sergio García Navarro
    * @returns Layout component
    * @version 1.0
    * @date 13/01/2020
    * @description Layout component
*/

export default function Layout ({ children }) {

  const [isNotification, setIsNotification] = useState(false)
  const [notifications, setNotifications] = useState({})

  const {data: session, status} = useSession({})


  const getNotifications = async () => {

    const res = await fetch(`${server}/api/notificationsChecked/${session?.user.username}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

    const data = await res.json()

    if(data.length > 0) {
      setNotifications(data)
      setIsNotification(true)

    }

  }



  useEffect(() => {
      getNotifications()
      

  }, [])
  /*
  if(isNotification)
      toast(`🔔 Tiene ${notifications.length} notificaciones nuevas`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

*/

  return (

    <>
      <div className='Header'>
        <Header
          url1='/news' url2='/about' url3='/contact' url4='/auth/signIn' url5='/auth/signUp'
          text1='Noticias' text2='Quiénes somos' text3='Contacto' text4='Iniciar sesión' text5='Registrarse'
        />
          <div className={global.layout}>
            <a name='top' />
              <Sidebar/>
              <div className={global.content2}>            
                <main>{children}</main>
              </div>  
          </div>
        </div>
        <a title='Volver arriba' aria-label='Ir al inicio de página' href='#top' className={global.buttonTo}><ImArrowUp2 /></a>
      <LazyLoad offset={800}><Footer /></LazyLoad>
      
    </>

  )
}

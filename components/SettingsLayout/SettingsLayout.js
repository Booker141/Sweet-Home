import global from '/styles/global.module.css'
import Header from '/components/Header/Header'
import Footer from '/components/Footer/Footer'
import { ImArrowUp2 } from 'react-icons/im'
import SettingsSidebar from '/components/SettingsSidebar/SettingsSidebar'
import {toast} from 'react-toastify'
import {useSession} from 'next-auth/react'
import {server} from '/server'
import {useState, useEffect} from 'react'

/*
    * @author Sergio García Navarro
    * @returns Layout component
    * @version 1.0
    * @date 13/01/2020
    * @description Layout component
*/
/**
 * It's a function that returns a component that renders a header, a main and a footer
 * @returns The Header, Footer and the children of the Layout component.
 */
export default function SettingsLayout ({ children }) {

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

  if(isNotification)
  toast(`🔔 Tienes ${notifications.length} notificaciones nuevas`, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
  


  return (

    <>
      <div className='Header'>
        <Header
          url1='/news' url2='/about' url3='/contact' url4='/auth/signIn' url5='/auth/signUp'
          text1='Noticias' text2='Quiénes somos' text3='Contacto' text4='Iniciar sesión' text5='Registrarse'
        />
          <div className={global.layout}>
            <a name='top' />
              <SettingsSidebar/>
              <div className={global.content2}>            
                <main>{children}</main>
              </div>  
          </div>
        </div>
        <a title='Volver arriba' aria-label='Ir al inicio de página' href='#top' className={global.buttonTo}><ImArrowUp2 /></a>
      <Footer />
      
    </>

  )
}

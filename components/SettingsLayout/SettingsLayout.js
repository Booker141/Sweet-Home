import global from '/styles/global.module.css'
import Header from '/components/Header/Header'
import Footer from '/components/Footer/Footer'
import { ImArrowUp2 } from 'react-icons/im'
import SettingsSidebar from '/components/SettingsSidebar/SettingsSidebar'

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

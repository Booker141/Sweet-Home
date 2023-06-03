/* Static imports*/

import { ImArrowUp2 } from 'react-icons/im'
import dynamic from 'next/dynamic'
import global from '/styles/global.module.css'
import BasicHeader from '/components/BasicHeader/BasicHeader'


/* Dynamic imports */

const Footer = dynamic(() => import('components/Footer/Footer'))
const LazyLoad = dynamic(() => import('react-lazyload'))

/*
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
export default function BasicLayout ({ children }) {


  return (

    <>
      <div className='Header'>
        <BasicHeader
          url1='/news' url2='/about' url3='/contact' url4='/auth/signIn' url5='/auth/signUp'
          text1='Noticias' text2='Quiénes somos' text3='Contacto' text4='Iniciar sesión' text5='Registrarse'
        />
        <div className={global.content}>
          <a name='top' />
          <main>{children}</main>
          <a title='Volver arriba' aria-label='Ir al inicio de página' href='#top' className={global.buttonTo}><ImArrowUp2 /></a>
        </div>
      </div>
      <LazyLoad offset={800} once><Footer /></LazyLoad>
    </>

  )
}

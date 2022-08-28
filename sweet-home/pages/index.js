import Header from 'components/Header/Header'
import BasicFooter from 'components/BasicFooter/BasicFooter'
import styles from 'styles/index.module.css'
import FormLogin from 'components/FormLogin/Form'
import Head from 'next/head'

/*
    * @author Sergio García Navarro
    * @returns Login page
    * @version 1.0
    * @date 13/01/2020
    * @description Login page
*/

/**
 * It returns a JSX element that contains a Head component, a Header component, a FormLogin component
 * and a BasicFooter component
 * @returns A React component.
 */
export default function Login() {

  return(

      <>
        <Head>
          <title>Inicio de sesión</title>
        </Head>
        <Header url2="/attendances" url3="/info" url4="/contact" 
                         text2="Cuidados" text3="Quiénes somos" text4="Contacto"/>

        <FormLogin class="form"/>
      
        <BasicFooter url1="/info" text1="Información" url2="/privacy" text2="Privacidad"
                        url3="/conditions" text3="Condiciones"/>

      </>



  )
}

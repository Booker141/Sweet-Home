import Header from 'components/Header/Header'
import BasicFooter from 'components/BasicFooter/BasicFooter'
import FormLogin from 'components/FormLogin/Form'
import Head from 'next/head'
import styles from "styles/global.module.css"

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
export default function SignIn() {

  return(

      <>
        
          <Head>
            <title>Inicio de sesión</title>
          </Head>
          <Header url1="/attendances" url2="/info" url3="/contact" url4="/signUp"
                          text1="Cuidados" text2="Quiénes somos" text3="Contacto" text4="Registrarse"/>
          <div className={styles.content}>

            <FormLogin class="form"/>

          </div>
          <BasicFooter color='#f0810f' hover='#f9A603' url1="/info" text1="Información" url2="/privacy" text2="Privacidad"
                          url3="/conditions" text3="Condiciones" marginTop='10rem'/>
          <style jsx>{`
            .content{
              /*Box model*/
              display: flex;
              flex-direction: column;

            }


          `}</style>
      </>



  )
}
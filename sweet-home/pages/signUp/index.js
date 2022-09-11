import FormRegister from 'components/FormRegister/Register'
import Header from "components/Header/Header"
import BasicFooter from "components/BasicFooter/BasicFooter"
import Head from 'next/head'

/*
    * @author Sergio García Navarro
    * @returns Sign up page
    * @version 1.0
    * @date 13/01/2020
    * @description Sign up page
*/

export default function SignUp() {

  return(

      <>
        <Head>
          <title>Registro</title>
        </Head>
        
        <Header url1="/attendances" url2="/info" url3="/contact" url4="/signUp"
                          text1="Cuidados" text2="Quiénes somos" text3="Contacto" text4="Registrarse"/>
                          
          <FormRegister class="form"/>
      
        <BasicFooter color='#f0810f' hover='#f9A603' url1="/info" text1="Información" url2="/privacy" text2="Privacidad"
                          url3="/conditions" text3="Condiciones" marginTop='10rem'/>

        <style jsx>{`
     
        
        `}</style>
      </>



  )
}
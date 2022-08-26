import Header from 'components/Header/Header'
import BasicFooter from 'components/BasicFooter/BasicFooter'
import Layout from 'components/Layout/Layout'
import styles from 'styles/index.module.css'
import FormLogin from 'components/FormLogin/Form'
import Head from 'next/head'



export default function Login() {

  return(

    <Layout>
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
    </Layout>



  )
}

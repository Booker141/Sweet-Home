import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Layout from 'components/Layout/Layout'
import FormLogin from 'components/FormLogin/Form'
import Image from 'next/image'
import Head from 'next/head'


export default function Login() {

  return(

    <Layout class="grid-container">
      <>
        <Head>
          <title>Inicio sesión</title>
        </Head>
        <Header url1="/" url2="/attendances" url3="/info" url4="/contact" 
                        text1="Inicio" text2="Cuidados" text3="Quiénes somos" text4="Contacto"/>
        <FormLogin class="form"/>

        <Footer url1="/info" text1="Información" url2="/privacy" text2="Privacidad"
                        url3="/conditions" text3="Condiciones"/>
        <style jsx>{`

          .grid-container {
            display: grid;
            grid-template-columns: auto auto auto;
            grid-template-rows: auto auto auto;
            grid-template-areas:
              "header header header"
              "imagen imagen imagen"
              "form form form";
            grid-gap: 1rem;

          }



          .form{

            right: 0;
            top: 4rem;
            position: relative;
            z-index: -1;

          }
        
        `}</style>
      </>
    </Layout>



  )
}

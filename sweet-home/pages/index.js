import Header from 'components/Header/Header'
import Footer from 'components/BasicFooter/BasicFooter'
import Layout from 'components/Layout/Layout'
import FormLogin from 'components/FormLogin/Form'
import Image from 'next/image'
import Head from 'next/head'


   /*<Image 
        src="/public/Cats-and-Dogs.jpg" 
        placeholder="blur" 
        blurDataURL="/public/Orange-blur.jpeg" 
        width={700} 
        height={300} 
        class="image"/>*/
export default function Login() {

  return(

    <Layout>
      <>
        <Head>
          <title>Inicio de sesión</title>
        </Head>
        <Header url1="/" url2="/attendances" url3="/info" url4="/contact" 
                        text1="Inicio" text2="Cuidados" text3="Quiénes somos" text4="Contacto"/>

        <FormLogin class="form"/>
      
        <Footer url1="/info" text1="Información" url2="/privacy" text2="Privacidad"
                        url3="/conditions" text3="Condiciones"/>
        <style jsx>{`
     
        
        `}</style>
      </>
    </Layout>



  )
}

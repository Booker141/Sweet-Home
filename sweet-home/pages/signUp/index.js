import Header from 'components/Header/Header'
import Footer from 'components/BasicFooter/BasicFooter'
import Layout from 'components/Layout/Layout'
import FormRegister from 'components/FormRegister/Register'
import Image from 'next/image'
import Head from 'next/head'


   /*<Image 
        src="/public/Cats-and-Dogs.jpg" 
        placeholder="blur" 
        blurDataURL="/public/Orange-blur.jpeg" 
        width={700} 
        height={300} 
        class="image"/>*/
export default function SignUp() {

  return(

    <Layout>
      <>
        <Head>
          <title>Inicio sesión</title>
        </Head>
        <Header url1="/" url2="/attendances" url3="/info" url4="/contact" 
                        text1="Inicio" text2="Cuidados" text3="Quiénes somos" text4="Contacto"/>

        <FormRegister class="form"/>
      
        <Footer />
        <style jsx>{`
     
        
        `}</style>
      </>
    </Layout>



  )
}
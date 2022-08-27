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
          <title>Registro</title>
        </Head>
        
        <FormRegister class="form"/>
      

        <style jsx>{`
     
        
        `}</style>
      </>
    </Layout>



  )
}
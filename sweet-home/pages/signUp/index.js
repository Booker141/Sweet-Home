import Layout from 'components/Layout/Layout'
import FormRegister from 'components/FormRegister/Register'
import Image from 'next/image'
import Head from 'next/head'

/*
    * @author Sergio García Navarro
    * @returns Sign up page
    * @version 1.0
    * @date 13/01/2020
    * @description Sign up page
*/
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
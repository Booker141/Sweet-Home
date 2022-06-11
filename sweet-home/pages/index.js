import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Layout from 'components/Layout/Layout'
import FormLogin from 'components/FormLogin/Form'
import Image from 'next/image'
import Head from 'next/head'

export default function Login() {

  return(

    <Layout>
      <>
        <Head>
          <title>Inicio sesión</title>
        </Head>
        <Header url1='index.js' url2='/attendances' url3='/info' url4='/contact' 
                        text1="Inicio" text2="Cuidados" text3="Quiénes somos" text4="Contacto"/>
        <Image src="/Cats-and-Dogs.jpg" width="500" height="300" class="imagen"/>
        <FormLogin class="form"/>

        <Footer url1='/info' text1="Información" url2='/privacy' text2="Privacidad"
                        url3='/conditions' text3="Condiciones"/>
        <style jsx>{`
        
                .imagen{
                    margin-left: 30px;
                    margin-right: 10px;
                }
        
                .form{

                    /*Position*/

                    display: block;
                    float: right;
                    margin-right: 40px;
                    margin-left: 15px;
                    margin-top: 30px;
                }
        
        
        `}</style>
      </>
    </Layout>


  )
}

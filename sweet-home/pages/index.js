import Trademark from 'components/Trademark/Trademark'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Layout from 'components/Layout/Layout'
import Button from 'components/Button/Button'
import FormLogin from 'components/FormLogin/Form'
import '/styles/home.module.css'

export default function Home({posts}) {

  console.log(posts);

  return(

    <Layout>
      <>
        <Header url1='index.js' url2='pages/Attendances' url3='pages/Info' url4='pages/Contact' 
                        text1='Inicio' text2='Cuidados' text3='Quiénes somos' text4='Contacto'/>
        <FormLogin className="form"/>

        <Footer url1="/info" text1="Información" url2="/privacy" text2="Privacidad" url3="/conditions" text3="Condiciones"/>
      </>
    </Layout>

  )
}


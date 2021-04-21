import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Layout from '../components/Layout/Layout'

export default function Home() {
  return (
    <>
      <div>

        <Header url1='index.js' url2='pages/Attendances' url3='pages/Info' url4='pages/Contact' 
        text1='Inicio' text2='Cuidados' text3='Información' text4='Contacto' />

        <Layout>
          <Head>
            <title>Sweet Home</title>
            <Link rel="icon" href="/Icono.ico" />
            <img src="/LogoWeb.png" alt="Logo de la página"></img>
          </Head>
        </Layout>

        <Footer url1='pages/Info' url2='pages/Privacy' url3='pages/Conditions' url4='pages/Language' 
        text1='Información' text2='Privacidad' text3='Condiciones' text4='Idioma'/>

      </div>
    </>
  )
}

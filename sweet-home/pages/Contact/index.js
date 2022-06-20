import Header from '/components/Header/Header'
import Head from 'next/head'
import Footer from '/components/BasicFooter/BasicFooter'


export default function Contact(){

    return(
        <>
            <Head>
                <title>Contacto</title>
            </Head>
            <Header url1='/' url2='pages/Attendances' url3='pages/Info' url4='pages/Contact'
                text1='Inicio' text2='Cuidados' text3='Quiénes somos' text4='Contacto' />
            <h1 class="title">Contacto</h1>
            <Footer url1="/info" text1="Información" url2="/privacy" text2="Privacidad"
                        url3="/conditions" text3="Condiciones"/>
        </>
    )
}
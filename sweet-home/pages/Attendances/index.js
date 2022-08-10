import Head from 'next/head'
import Layout from "/components/Layout/Layout"
import Header from "/components/Header/Header"
import BasicFooter from "/components/BasicFooter/BasicFooter"
import Footer from "/components/Footer/Footer"
export default function Attendances() {
    return (
        <Layout>
            <>
                <Head>
                    <title>Cuidados</title>
                </Head>
                <Header url1='/' url2='pages/Attendances' url3='pages/Info' url4='pages/Contact' 
                    text1='Inicio' text2='Cuidados' text3='Quiénes somos' text4='Contacto' />
                
                <Footer/>
                <BasicFooter url1="/info" text1="Información" url2="/privacy" text2="Privacidad"
                        url3="/conditions" text3="Condiciones"/>
            </>
        </Layout>      
    )   
}
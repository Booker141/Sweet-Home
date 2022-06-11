import Head from 'next/head'
import Layout from '/components/Layout'
import Header from '/components/Header'
export default function Attendances() {
    return (
        <Layout>
            <>
                <Head>
                <title>Cuidados</title>
                </Head>
                <Header url1='index.js' url2='pages/Attendances' url3='pages/Info' url4='pages/Contact' 
                    text1='Inicio' text2='Cuidados' text3='Quiénes somos' text4='Contacto' />
                <h1 class="title">Cuidados</h1>
            </>
        </Layout>      
    )   
}
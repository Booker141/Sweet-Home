import Layout from "components/Layout/Layout"
import Head from 'next/head'
import Header from 'components/Header/Header'

export default function Conditions() {
    return (
        <Layout>
            <>
                <Head></Head>
                <title>Condiciones</title>
                <Header url1='index.js' url2='pages/Attendances' url3='pages/Info' url4='pages/Contact'
                    text1='Inicio' text2='Cuidados' text3='Quiénes somos' text4='Contacto' />
                <h1 class="title">Condiciones</h1>
            </>
        </Layout>
    )
}
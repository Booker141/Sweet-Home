import Layout from "components/Layout/Layout"
import Header from "components/Header/Header"
import Head from "next/head"

export default function Info() {
    return (
        <Layout>
            <>
                <Head>
                    <title>Quiénes somos</title>
                </Head>
                <Header url1='index.js' url2='pages/Attendances' url3='pages/Info' url4='pages/Contact'
                    text1='Inicio' text2='Cuidados' text3='Quiénes somos' text4='Contacto' />
                <h1 class="title">Quiénes somos</h1>
            </>
        </Layout>
    )
}
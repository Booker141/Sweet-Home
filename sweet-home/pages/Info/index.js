import Layout from "components/Layout/Layout"
import Header from "components/Header/Header"
import Head from "next/head"
import Footer from "components/Footer/Footer"

export default function Info() {
    return (
        <Layout>
            <>
                <Head>
                    <title>Información</title>
                </Head>
                <Header url1='/' url2='pages/Attendances' url3='pages/Info' url4='pages/Contact'
                    text1='Inicio' text2='Cuidados' text3='Quiénes somos' text4='Contacto' />
                <h1 className="title">Información</h1>
                <Footer />
            </>
        </Layout>
    )
}
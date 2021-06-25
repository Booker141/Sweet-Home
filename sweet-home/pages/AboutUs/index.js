import Layout from '../components/Layout/Layout';
import Head from 'next/head'

/**
 * @author Sergio García Navarro
 * @returns about page
 */
export default function About () {

    return(

            <Layout>
                <>
                    <Head>
                        <title>Quiénes somos</title>
                        <meta name="keywords" content="adopción, animal, web developing, social network"></meta>
                        <meta name="description" content="Red social sobre la adopción animal"></meta>
                        <meta name="author" content="Sergio García Navarro"></meta>
                        <meta name="designer" content="Sergio García Navarro"></meta>
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
                        <link rel="icon" href="/Icono.ico"/>
                    </Head>

                    <Trademark/>

                    <Header url1='index.js' url2='pages/Attendances' url3='pages/Info' url4='pages/Contact' 
                        text1='Inicio' text2='Cuidados' text3='Información' text4='Contacto' />

                    <Footer url1='pages/Info' url2='pages/Privacy' url3='pages/Conditions' url4='pages/Language' 
                        text1='Información' text2='Privacidad' text3='Condiciones' text4='Idioma'/>
                </>
            </Layout>

    )

} 
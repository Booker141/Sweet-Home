import Head from 'next/head'
import Link from 'next/link'
import global from "styles/global.module.css"
import {fonts} from "styles/frontend-conf.js"
import {colors} from "styles/frontend-conf.js"
import Layout from "components/Layout/Layout"





/*
    * @author Sergio García Navarro
    * @returns Conditions page
    * @version 1.0
    * @date 13/12/2020
    * @description This page is the conditions page of the application
*/
/**
 * It returns a Layout component with a Head component inside it, which sets the title of the page to
 * "Condiciones", and a bunch of other components inside it, which display the terms and conditions of
 * the app
 * @returns the Layout component with the children props being the <> component.
 */
export default function News() {
    return (
        <Layout>

            <Head><title>Noticias</title></Head>

                <section>
                    <h1 className={global.title}>Últimas noticias ✧</h1>
                    <article>
                        <h2 className={global.secondary}>Carlota nos cuenta su experiencia en Sweet Home</h2>
                        <h3 className={global.tertiary}>18/08/2022</h3>
                        <p className={global.text}>Hace unos meses, estuvo pensando en regalarle a su 
                        hija su primera mascota y hoy nos cuenta como fue el proceso en Sweet Home.

                        A mediados del año pasado, Carlota decidió adoptar un gato a través de Sweet 
                        Home y hoy nos cuenta como fue su experiencia a través de la aplicación.</p>
                        <Link href="/news/1"><a className={global.link}>Leer más</a></Link>
                        <hr className={global.line}></hr>
                    </article>

                    <article>
                        <h2 className={global.secondary}>Nueva actualización v1.0.0</h2>
                        <h3 className={global.tertiary}>20/08/2022</h3>
                        <p className={global.text}>A continuación, entérate de las nuevas características que han sido introducidas junto a la nueva versión.</p>
                        <Link href="/news/2"><a className={global.link}>Leer más</a></Link>
                        <hr className={global.line}></hr>
                    </article>

                    <article>
                        <h2 className={global.secondary}>¿Estás perdido?</h2>
                        <h3 className={global.tertiary}>21/08/2022</h3>
                        <p className={global.text}>Su creador Sergio García nos da pistas sobre las esperadas actualizaciones que están por venir y nos explica un poco el funcionamiento de la última actualización, la v1.0.0.</p>
                        <Link href="/news/3"><a className={global.link}>Leer más</a></Link>
                        <hr className={global.line}></hr>
                    </article>
                </section>

            
            <style jsx>{`


                    .dialog{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                    }


                    .dialog__name{

                        /*Text*/

                        font-family: 'Poppins', sans-serif;
                        font-weight: 450;
                    }
                    
                    .dialog__italic{

                        /*Text*/
                        
                        font-family:'Poppins', sans-serif;
                        font-style: italic;

                    }
                    .highlighted {
                        
                        /*Box model*/

                        margin-bottom: 3rem;

                        /*Text*/

                        font-weight: 400;
                        font-family: 'Poppins', sans-serif;
                        font-size: 1.2rem;
                        color: ${colors.primary};
                    }

                    .list{

                        /*Box model*/

                        margin-bottom: 5rem;
                        
                        /*Text*/

                        font-family: ${fonts.secondary};

                        /*Visuals*/

                        list-style-type: circle;
                    }

                    hr{
                        /*Box model*/

                        width: 100%;
                        margin-bottom: 5rem;
                    }

                    p{
                        /*Box model*/

                        margin-bottom: 4rem;
                    }

                    h2{

                        /*Visuals*/

                        font-weight: 400;
                        color: ${colors.primary};
                    }

                    li{

                        /*Box model*/

                        margin-bottom: 1.5rem;
                    }

                    li:last-child {

                        /*Box model*/

                        margin-bottom: 3.5rem;
                    }

                    a{

                        /*Box model*/

                        margin-bottom: 3rem;
                    }
                    
                    
                `}</style>
         
        </Layout>
    )
}
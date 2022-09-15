import Layout from "components/Layout/Layout"
import Head from 'next/head'
import styles from "styles/global.module.css"
import {fonts} from "styles/frontend-conf.js"
import {colors} from "styles/frontend-conf.js"

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
            <>
            <Head><title>Noticias</title></Head>
            <div className={styles.content}>
            <section>
                <h1 className={styles.title}>Últimas noticias ✧</h1>
                <article>
                    <h2 className={styles.secondary}>Carlota nos cuenta su experiencia en Sweet Home</h2>
                    <h3 className={styles.tertiary}>18/08/2022</h3>
                    <p className={styles.text}>Hace unos meses, estuvo pensando en regalarle a su hija su primera mascota y hoy nos cuenta como fue el proceso en Sweet Home.

                    A mediados del año pasado, Carlota decidió adoptar un gato a través de Sweet Home y hoy nos cuenta como fue su experiencia a través de la aplicación:</p>

                    <p className={styles.text}>1º ¿Por qué decidiste usar Sweet Home?</p>
                    <p className={styles.text}>Carlota: “Me la recomendaron unos amigos por su facilidad cuando les conté lo que iba a hacer, y me ha sorprendido gratamente la verdad”.</p>

                    <p className={styles.text}>2º ¿Cómo fue el proceso de adopción?</p>

                    <p className={styles.text}>Carlota: “Sinceramente fue muy fácil, simplemente seguí y contacté con un centro de acogida que tengo cerca de casa a través de la aplicación y me explicaron como iba a ser todo el proceso”.</p>

                    <p className={styles.text}>3º ¿Recomendarías a otros amigos la aplicación?</p>

                    <p className={styles.text}>Carlota: “Por supuesto, pensaba que el proceso iba a ser muy tedioso porque no suelo usar mucho la tecnología, me alejo mucho de estos temas jajaja .. pero me ha sorprendido mucho lo sencillo que es el diseño”</p>

                    <hr className={styles.line}></hr>
                </article>

                <article>
                    <h2 className={styles.secondary}>Nueva actualización v1.0.0</h2>
                    <h3 className={styles.tertiary}>20/08/2022</h3>
                    <p className={styles.text}>A continuación, entérate de las nuevas características que han sido introducidas junto a la nueva versión.</p>

                    <p className={styles.text}>Notas del parche 1.0.0</p>
                    <ul className={styles.list}>
                        <li> Crear publicaciones a través de la página principal.</li>
                        <li>Chatear con tus amigos.</li>
                        <li>Consultar cuidados en el foro.</li>
                        <li>Seguir a los usuarios para enterarte de las últimas novedades.</li>
                    </ul>
                    <hr className={styles.line}></hr>
                </article>

                <article>
                    <h2 className={styles.secondary}>¿Estás perdido?</h2>
                    <h3 className={styles.tertiary}>21/08/2022</h3>
                    <p className={styles.text}>Su creador Sergio García nos da pistas sobre las esperadas actualizaciones que están por venir y nos explica un poco el funcionamiento de la última actualización, la v1.0.0.</p>

                    <p className={styles.text}>1º¿Qué van a traer las nuevas actualizaciones?</p>

                    <p className={styles.text}>Sergio: “Las próximas actualizaciones se basarán en la accesibilidad de la aplicación, queremos que personas con discapacidad puedan usarla completamente, así que facilitaremos cambiar los colores y el tema. Además, estamos pensando abrir la aplicación a personas que no entiendan el español, permitiendo cambiar el idioma cuando quieran”</p>

                    <p className={styles.text}>2º ¿Cómo explicarías el funcionamiento de la aplicación a un nuevo usuario?</p>

                    <p className={styles.text}>Sergio: “Bien, Sweet Home es facil de utilizar desde un principio debido a su diseño minimalista y una clara separación de sus funcionalidades más importantes. En la página principal encontrarás noticias e información sobre nosotros pero lo más jugoso viene una vez has iniciado sesión.</p>

                    <p className={styles.text}>Después de iniciar sesión podrás usar todas las funcionalidades. En la página de consulta de publicaciones podrás acceder a muchas funcionalidades, desde crear una publicación a seguir a distintos usuarios ¿Quieres chatear con ellos? Pulsas en la funcionalidad y tendrás acceso completo. Todas las demás son muy intuitivas y se podrán acceder a través de la cabecera de la aplicación”</p>
                </article>
            </section>
            </div>
                <style jsx>{`


                    .first-line{

                        /*Text*/

                        font-family: ${fonts.default};
                        font-size: 0.9rem;
                        font-weight: bold;
                        }

                    .last-line{

                        /*Box model*/

                        margin-top: 2rem;

                        /*Text*/

                        font-weight: 350;
                        font-family: ${fonts.default};
                    }
                    .list{
                        /*Text*/

                        font-family: ${fonts.secondary};

                        /*Visuals*/

                        list-style-type: circle;
                    }
                    .black-line{
                        /*Box model*/

                        margin-bottom: 3rem;
                    }
                    hr{
                        /*Box model*/

                        width: 100%;
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
                    
                `}</style>
            </>
        </Layout>
    )
}
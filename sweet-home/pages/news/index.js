import Head from 'next/head'
import styles from "styles/global.module.css"
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
            <>
            <Head><title>Noticias</title></Head>
            <div className={styles.content}>
                <a name="top"></a>
                <section>
                    <h1 className={styles.title}>Últimas noticias ✧</h1>
                    <article>
                        <h2 className={styles.secondary}>Carlota nos cuenta su experiencia en Sweet Home</h2>
                        <h3 className={styles.tertiary}>18/08/2022</h3>
                        <p className={styles.text}>Hace unos meses, estuvo pensando en regalarle a su 
                        hija su primera mascota y hoy nos cuenta como fue el proceso en Sweet Home.

                        A mediados del año pasado, Carlota decidió adoptar un gato a través de Sweet 
                        Home y hoy nos cuenta como fue su experiencia a través de la aplicación:</p>

                        <h3 className="highlighted">1º ¿Por qué decidiste usar Sweet Home?</h3>

                        <div className="dialog">
                            <p className="dialog__name">Carlota:&nbsp;</p>
                            <p className="dialog__italic"> “Me la recomendaron unos amigos 
                            por su facilidad cuando les conté lo que iba a hacer, y 
                            me ha sorprendido gratamente la verdad”</p>    
                        </div>
                        

                        <h3 className="highlighted">2º ¿Cómo fue el proceso de adopción?</h3>

                        <div className="dialog">
                            <p className="dialog__name">Carlota:&nbsp;</p>
                            <p className="dialog__italic">“Sinceramente fue muy fácil, 
                            simplemente seguí y contacté con un centro de acogida 
                            que tengo cerca de casa a través de la aplicación y 
                            me explicaron como iba a ser todo el proceso”</p>
                        </div>
                        

                        <h3 className="highlighted">3º ¿Recomendarías a otros amigos la aplicación?</h3>

                        <div className="dialog">
                            <p className="dialog__name">Carlota:&nbsp;</p>
                            <p className="dialog__italic">“Por supuesto, pensaba que el 
                            proceso iba a ser muy tedioso porque no suelo usar 
                            mucho la tecnología, me alejo mucho de estos temas 
                            jajaja .. pero me ha sorprendido mucho lo sencillo 
                            que es el diseño”</p>
                        </div>
                        

                        <hr className={styles.line}></hr>
                    </article>

                    <article>
                        <h2 className={styles.secondary}>Nueva actualización v1.0.0</h2>
                        <h3 className={styles.tertiary}>20/08/2022</h3>
                        <p className={styles.text}>A continuación, entérate de las nuevas características que han sido introducidas junto a la nueva versión.</p>

                        <h3 className="highlighted">Notas del parche 1.0.0</h3>
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

                        <h3 className="highlighted">1º¿Qué van a traer las nuevas actualizaciones?</h3>
                        <div className="dialog">
                            <p className="dialog__name">Sergio:&nbsp;</p>
                            <p className="dialog__italic"> “Las próximas 
                            actualizaciones se basarán en la accesibilidad de la 
                            aplicación, queremos que personas con discapacidad 
                            puedan usarla completamente, así que facilitaremos 
                            cambiar los colores y el tema. Además, estamos pensando 
                            abrir la aplicación a personas que no entiendan el español,
                            permitiendo cambiar el idioma cuando quieran”</p>
                        </div>
                        
                        <h3 className="highlighted">2º ¿Cómo explicarías el funcionamiento de la aplicación a un nuevo usuario?</h3>

                        <div className="dialog">
                            <p className="dialog__name">Sergio:&nbsp;</p>
                            <p className="dialog__italic"> “Bien, Sweet Home es facil de 
                            utilizar desde un principio debido a su diseño 
                            minimalista y una clara separación de sus 
                            funcionalidades más importantes. En la página principal 
                            encontrarás noticias e información sobre nosotros pero lo 
                            más jugoso viene una vez has iniciado sesión.
                            <br></br>
                            <br></br>
                            Después de iniciar sesión podrás usar todas 
                            las funcionalidades. En la página de consulta de publicaciones podrás 
                            acceder a muchas funcionalidades, desde crear una publicación a seguir 
                            a distintos usuarios ¿Quieres chatear con ellos? Pulsas en la 
                            funcionalidad y tendrás acceso completo. Todas las demás son muy 
                            intuitivas y se podrán acceder a través de la cabecera de la aplicación”</p>
                        </div>
                        
                    </article>
                </section>
                <a title="Volver arriba" aria-label="Ir al inicio de página" href="#top" className={styles.buttonTo}>↑</a>
            </div>
            
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
                    
                    
                `}</style>
            </>
        </Layout>
    )
}
import Layout from 'components/Layout/Layout';
import Head from 'next/head';
import styles from "styles/global.module.css";
import {colors} from "styles/frontend-conf.js";

/*
    * @author Sergio García Navarro
    * @returns About page
    * @version 1.0
    * @date 13/12/2020
    * @description This page is the about page of the application
*/
/**
 * It returns a Layout component with a Head component inside it, which has a title of "Sobre
 * nosotros", and a h1 component with a className of "title" and the text "Sobre nosotros", and a h2
 * component with a className of "secondary" and the text "Sweet Home", and a p component with a
 * className of "text" and the text "Es una red social que abarca el mundo animal y trata de facilitar
 * su adaptación a nuevos cuidados, a nuevos dueños y a una mejora diaria de su vida.", and a h2
 * component with a className of "secondary" and the text "Nuestra misión", and a p component with a
 * className of "text" and the text "¿Alguna vez has sentido rechazo o ignorancia
 */
export default function About () {

    return(

            <Layout>
                <>
                    <Head>
                        <title>Sobre nosotros</title>
                    </Head>
                    <div className={styles.content}>
                        <a name="top"></a>
                        
                        <div className="title">
                            <h2>Sweet Home</h2>
                            <h2 className={styles.secondary}>Más que una aplicación</h2>
                        </div>
                        
                        <div className="banner">
                            <p className={styles.text}>Sweet Home es una red 
                            social que abarca el mundo animal y trata de facilitar 
                            su adaptación a nuevos cuidados, a nuevos dueños y a 
                            una mejora diaria de su vida.</p>
                        </div>
                        
                        <div className="container1">   
                            <div className="container1__column1">
                                <h2 className={styles.secondary}>Nuestra misión</h2>
                                <p className={styles.text}>¿Alguna vez has sentido rechazo o ignorancia
                                en ciertas publicaciones en Twitter, Instagram o Facebook sobre animales 
                                perdidos? ¿No puedes cuidar de tu mascota o has encontrado a una que se 
                                ha perdido y no sabes que hacer? Con Sweet Home daremos respuesta a estas 
                                preguntas.</p>
                                <p className={styles.text}>El objetivo principal de Sweet Home es 
                                mejorar la calidad de vida de los animales facilitándole
                                a los dueños funcionalidades que usar en su día a día. 
                                </p>

                                <p className={styles.text}>Entre ellas están: </p>
                                <ul className={styles.list}>
                                    <li> Publicar fotos e información de los animales.</li>
                                    <li> Permitir el contacto inmediato con el usuario 
                                    que ha realizado una publicación.</li>
                                    <li>Seguir a los centros 
                                    de acogida de animales que sean de interés.</li>
                                </ul>
                            </div>
                            <div className="container1__column2">
                                <img className="container1__column2__img" src="/about-1.jpg" alt="Persona jugando con su perro" />
                            </div>
                        </div>

                        <div className="benefits-title">
                            <h2 className={styles.title}>Ventajas</h2>
                        </div>
                        

                        <div className="benefits">
                            <div className="card">
                                <h2 className={styles.secondary}>Promover el derecho de los animales</h2>
                                <p className={styles.text}>La libertad y los derechos de los animales son la base de Sweet Home. En nuestro planeta habitan una gran variedad de animales pero solo un pequeño porcentaje convive con nosotros, así que debemos darles el mejor cuidado posible.</p>
                            </div>
                            <div className="card">
                                <h2 className={styles.secondary}>Compartir de forma rápida y segura</h2>
                                <p className={styles.text}>Con Sweet Home puedes compartir 
                                información sin tener que preocuparte de la inmediatez o de la 
                                seguridad. Comparte el alimento favorito de tu mascota o un tip 
                                que te haya cambiado la forma de interacuar con ella.</p>
                            </div>
                            <div className="card">
                                <h2 className={styles.secondary}>Chatea con gente de todo el mundo</h2>
                                <p className={styles.text}>Dispones de una función de chat para 
                                conectar con gente de tu mismo entorno o gente a kilómetros de 
                                distancia para preguntarles dudas o consejos.</p>
                            </div>
                            <div className="card">
                                <h2 className={styles.secondary}>Modifica el perfil a tu gusto</h2>
                                <p className={styles.text}>¡Sweet Home permite modificar el 
                                perfil para que puedas añadir información sobre ti y tu mascota 
                                a tu gusto!</p>
                            </div>
                            
                        </div>
                    </div>
                    <a href="#top" className={styles.buttonTo}>↑</a>
                    <style jsx>{`

                        .container1{

                            /*Box model*/

                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            align-items: center;
                            margin-bottom: 2rem;

                        }

                        .container1__column1{

                            /*Box model*/

                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            margin-right: 5rem;
                        }
                        
                        .container1__column1 p{

                            /*Box model*/

                            margin-bottom: 2rem;

                        }

                        .container1__column2{

                            /*Box model*/

                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                        }

                        .container1__column2__img{

                            /*Box model*/

                            width: 35rem;
                            height: 26rem;
                        
                        }

                        .benefits {

                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: space-around;

                        }

                        .benefits-title{

                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                        
                        }

                        .card {

                            /*Box model*/

                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            margin-right: 2.5rem;
                            width: 50rem;
                            height: 25rem;

                            /*Visuals*/

                            border-radius: 10px;
                            box-shadow: 10px 10px 5px 0px rgba(214,214,214,0.42);

                        }

                        .title{

                            /*Box model*/

                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            

                        }

                        .title h2:first-child{

                            /*Text*/

                            font-size: 5rem;
                            font-weight: 500;
                            color: ${colors.primary};
                            font-family: 'Satisfy';
                            text-align: center;
                            margin: 0;
                            padding: 0;
                        }

                        .title h2:last-child{

                            /*Text*/

                            font-style: italic;

                        }

                        .banner{

                            /*Box model*/

                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            margin: 0 0 2rem 0;
                        
                        }
                        
                    `}</style>
                </>
            </Layout>

    )

} 
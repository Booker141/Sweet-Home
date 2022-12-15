import Head from 'next/head';
import Image from 'next/image'
import global from "styles/global.module.css";
import {colors} from "styles/frontend-conf.js";
import Layout from 'components/Layout/Layout';
import {BsChatRightText} from "react-icons/bs"
import {FaSlideshare} from "react-icons/fa"
import {AiOutlineEdit} from "react-icons/ai"
import {MdPets} from "react-icons/md"
import about1 from "../../public/about-1.jpg"

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
                    <div className={global.content}>
                        <a name="top"></a>
                        
                        <div className="title">
                            <h2>Sweet Home</h2>
                            <h2 className={global.secondary}>Más que una aplicación</h2>
                        </div>
                        
                        <div className="banner">
                            <p className={global.text}>Sweet Home es una red 
                            social que abarca el mundo animal y trata de facilitar 
                            su <span className={global.colorized}>adaptación a nuevos cuidados</span>, <span className={global.colorized}>a nuevos dueños </span> y a 
                           <span className={global.colorized}> una mejora diaria de su vida.</span></p>
                        </div>
                        
                        <div className="container1">   
                            <div className="container1__column1">
                                <h2 className={global.title}>Nuestra misión</h2>
                                <p className={global.text}>¿Alguna vez has sentido rechazo o ignorancia
                                en ciertas publicaciones en Twitter, Instagram o Facebook sobre animales 
                                perdidos? ¿No puedes cuidar de tu mascota o has encontrado a una que se 
                                ha perdido y no sabes que hacer? Con Sweet Home daremos respuesta a estas 
                                preguntas.</p>
                                <p className={global.text}>El objetivo principal de Sweet Home es 
                                <span className={global.colorized}> mejorar la calidad de vida de los animales</span> facilitándole
                                a los dueños funcionalidades que usar en su día a día. 
                                </p>

                                <p className={global.text}>Entre ellas están: </p>
                                <ul className={global.list}>
                                    <li className={global.list__item}> Publicar fotos e información de los animales.</li>
                                    <li className={global.list__item}> Permitir el contacto inmediato con el usuario 
                                    que ha realizado una publicación.</li>
                                    <li className={global.list__item}> Seguir a los centros 
                                    de acogida de animales que sean de interés.</li>
                                </ul>
                            </div>
                            <div className="container1__column2">
                                <div className="column2__img">
                                    <Image src={about1} alt="Persona jugando con su perro" priority/>
                                </div>
                            </div>
                        </div>

                        <div className="benefits-title">
                            <h2 className={global.title}>Ventajas</h2>
                        </div>
                        

                        <div className={global.cards}>
                            <div className={global.card__large}>
                                <div style={{color: '#f0810f'}}>
                                    <MdPets size={37}/>
                                </div>             
                                <h2 className={global.secondary}>Promover el derecho de los animales</h2>
                                <p className={global.text}><span className={global.colorized}>La libertad y los derechos de los animales</span> son la base de Sweet Home. </p>
                                <p className={global.text}>En nuestro planeta habitan una gran variedad de animales pero solo un pequeño 
                                porcentaje convive con nosotros, así que debemos darles el mejor cuidado 
                                posible.</p>
                            </div>
                            <div className={global.card__large}>
                                <div style={{color: '#f0810f'}}>
                                    <FaSlideshare size={37}/>
                                </div>   
                                <h2 className={global.secondary}>Compartir de forma rápida y segura</h2>
                                <p className={global.text}>Con Sweet Home puedes <span className={global.colorized}> compartir 
                                información</span> sin tener que preocuparte de la inmediatez o de la 
                                seguridad. </p>
                                <p className={global.text}>Comparte el alimento favorito de tu mascota o un tip 
                                que te haya cambiado la forma de interactuar con ella.</p>
                            </div>
                            <div className={global.card__large}>
                                <div style={{color: '#f0810f'}}>
                                    <BsChatRightText size={37}/>
                                </div>   
                                <h2 className={global.secondary}>Chatea con gente de todo el mundo</h2>
                                <p className={global.text}>Dispones de una <span className={global.colorized}> función de chat</span> para 
                                conectar con gente de tu mismo entorno o gente a kilómetros de 
                                distancia para preguntarles dudas o consejos.</p>
                            </div>
                            <div className={global.card__large}>
                                <div style={{color: '#f0810f'}}>
                                    <AiOutlineEdit size={37}/>
                                </div>  
                                <h2 className={global.secondary}>Modifica el perfil a tu gusto</h2>
                                <p className={global.text}>¡Sweet Home permite modificar el 
                                perfil para que puedas <span className={global.colorized}>añadir información sobre ti y tu mascota </span>
                                a tu gusto!</p>
                            </div>            
                        </div>
                    </div>
                    <a href="#top" aria-label="Ir al inicio de página" className={global.buttonTo}>↑</a>
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

                        .column2__img{

                            /*Box model*/

                            width: 35rem;
                            height: 26rem;
                        
                        }



                        .benefits-title{

                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                        
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
                        
                        p{

                            /*Box model*/

                            margin-bottom: 1rem;
                        }
                    `}</style>
                </>
            </Layout>

    )

} 
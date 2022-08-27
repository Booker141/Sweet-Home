import Layout from 'components/Layout/Layout';
import {fonts} from 'styles/frontend-conf.js'
import {colors} from 'styles/frontend-conf.js'
import Head from 'next/head';
/*
    * @author Sergio García Navarro
    * @returns about page
    * @version 1.0
    * @date 13/12/2020
    * @description This page is the about page of the application
*/
export default function About () {

    return(

            <Layout>
                <>
                    <Head>
                        <title>Sobre nosotros</title>
                    </Head>
                    <h1 className="title">Sobre nosotros</h1>
                    <h2 className="secondary">Sweet Home</h2>
                    <p className="text">Es una red social que abarca el mundo animal y trata de facilitar su adaptación a nuevos cuidados, a nuevos dueños y a una mejora diaria de su vida.</p>

                    <h2 className="secondary">Nuestra misión</h2>
                    <p className="text">¿Alguna vez has sentido rechazo o ignorancia en ciertas publicaciones en Twitter, Instagram o Facebook sobre animales perdidos? ¿No puedes cuidar de tu mascota o has encontrado a una que se ha perdido y no sabes que hacer? Con Sweet Home daremos respuesta a estas preguntas.
                    El objetivo principal de Sweet Home es mejorar la calidad de vida de los animales facilitándole a los dueños funcionalidades que usar en su día a día. Entre ellas están: publicar fotos e información de los animales, permitir el contacto inmediato con el usuario que ha realizado una publicación y seguir a los centros de acogida de animales que sean de interés.</p>
                    <h2 className="secondary">Ventajas</h2>

                    <div className="benefits">
                        <h2 className="secondary">Promover el derecho de los animales</h2>
                        <p className="text">La libertad y los derechos de los animales son la base de Sweet Home. En nuestro planeta habitan una gran variedad de animales pero solo un pequeño porcentaje convive con nosotros, así que debemos darles el mejor cuidado posible.</p>
                        <h2 className="secondary">Compartir de forma rápida y segura</h2>
                        <p className="text">Con Sweet Home puedes compartir información sin tener que preocuparte de la inmediatez o de la seguridad. Comparte el alimento favorito de tu mascota o un tip que te haya cambiado la forma de interacuar con ella.</p>
                        <h2 className="secondary">Chatea con gente de todo el mundo</h2>
                        <p className="text">Dispones de una función de chat para conectar con gente de tu mismo entorno o gente a kilómetros de distancia para preguntarles dudas o consejos.</p>
                        <h2 className="secondary">Modifica el perfil a tu gusto</h2>
                        <p className="text">¡Sweet Home permite modificar el perfil para que puedas añadir información sobre ti y tu mascota a tu gusto!</p>
                    </div>
                    <style jsx>{`

                            .title{
                                color:'${colors.primary}';
                                align-items: center;
                                font-family: ${fonts.default};
                            }

                            .secondary{

                                color:'${colors.quaternary}';
                                align-items: center;
                                font-family: '${fonts.secondary}';

                            }

                            .text{

                                display:block;
                                font-family: '${fonts.secondary}'; 

                            }

            
                    `}</style>
                </>
            </Layout>

    )

} 
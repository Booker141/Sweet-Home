import Head from 'next/head'
import Image from 'next/image'
import styles from "styles/global.module.css"
import {colors} from "/styles/frontend-conf.js"
import Layout from "components/Layout/Layout"
import faq1 from "../../public/faq-1.jpg"

/*
    * @author Sergio García Navarro
    * @returns Use page
    * @version 1.0
    * @date 13/12/2020
    * @description Use page
*/
/**
 * It returns a div with a title
 * @returns A React element.
 */
export default function Use(){
    return(
        <>
            <Layout>
                <Head><title>Ayuda</title></Head>
                <div className={styles.content}>
                    <a name="top"></a>
                    <div className="faq">
                        <h1 id="title" className={styles.title}>Preguntas frecuentes</h1>
                        <div className="top__image">
                            <Image src={faq1} alt="Patrones de animales" priority/>
                        </div>
                        <div className="faq__item1">
                            <div className="text">
                                <h2 className={styles.secondary}><strong>¿Qué es Sweet Home?</strong></h2>
                                <p className={styles.text}>Sweet Home es una red 
                                social que abarca el mundo animal y trata de facilitar 
                                su adaptación a nuevos cuidados, a nuevos dueños y a una 
                                mejora diaria de su vida.</p>
                            </div>
                        </div>

                        <div className="faq__item2">
                            <div className="text">
                                <h2 className={styles.secondary}><strong>¿Necesito registrarme para usar la aplicación?</strong></h2>
                                <p className={styles.text}>Sí, si quiere utilizar la mayoría 
                                de funcionalidades e interactuar con otros usuarios
                                debe tener una cuenta con acceso a la aplicación.</p>
                            </div>
                        </div>

                        <div className="faq__item3">
                            <div className="text">
                                <h2 className={styles.secondary}><strong>¿Cómo puedo publicar en la aplicación?</strong></h2>
                                <p className={styles.text}>Para publicar, debes haber iniciado 
                                sesión con tu cuenta.Una vez dentro de la aplicación, 
                                basta con pulsar en “Crear publicación” para acceder a una 
                                nueva página donde puedes escribir todos los detalles que va a 
                                tener tu publicación.</p>
                            </div>
                        </div>

                        <div className="faq__item4">
                            <div className="text">
                                <h2 className={styles.secondary}><strong>¿Cómo guardo una publicación que me gusta?</strong></h2>
                                <p className={styles.text}>En todas las publicaciones, en la parte inferior 
                                aparece el icono “poner imagen de huella” que debes pulsar para guardar 
                                la publicación en la sección “Guardados” de tu perfil.</p>  
                            </div>     
                        </div>

                        <div className="faq__item5">
                            <div className="text">
                                <h2 className={styles.secondary}><strong>¿Qué es seguir a un usuario?</strong></h2>
                                <p className={styles.text}>“Seguir a un usuario” sirve para crear un 
                                estrecho enlace con ese usuario día a día, es decir, 
                                mantenerte informado de todas las publicaciones que ha publicado 
                                y publica ese usuario así como poder relacionarte con él vía chat.</p>
                            </div>
                        </div>

                        <div className="faq__item6">
                            <div className="text">
                                <h2 className={styles.secondary}><strong>¿Cómo puedo avisar del comportamiento negativo de un usuario?</strong></h2>
                                <p className={styles.text}>Para avisar del comportamiento no deseado de un 
                                usuario solo debe acceder a su perfil y pulsar “Denunciar”. 
                                Esto le redigirirá a una página donde puede formalizar la denuncia 
                                detallando la causa.</p>
                            </div>
                        </div>

                        <div className="faq__item7">
                            <div className="text">
                                <h2 className={styles.secondary}><strong>¿Cómo puedo denunciar a un usuario que hace spam?</strong></h2>
                                <p className={styles.text}>De la misma forma que ha explicado en la anterior 
                                pregunta (incluir un enlace que enfoque la página en esa pregunta).</p> 
                            </div>    
                        </div>

                        <div className="faq__item8">
                            <div className="text">
                                <h2 className={styles.secondary}><strong>¿Cómo puedo contactar con Sweet Home para enviar feedback sobre la aplicación o avisar del mal funcionamiento de la misma?</strong></h2>
                                <p className={styles.text}>En la sección “Contacto” encontrarás todas 
                                las maneras para contactar con nosotros, desde enviarnos un correo 
                                hasta contactar a través de las redes sociales.</p>   
                            </div>
                        </div>

                        <div className="faq__item9">
                            <div className="text">
                                <h2 className={styles.secondary}><strong>¿Cuándo bloqueáis una cuenta?</strong></h2>
                                <p className={styles.text}>Una cuenta será bloqueada una vez que ese 
                                usuario tenga más de cinco denuncias, estudiadas previamente 
                                por nosotros.</p>  
                            </div>     
                        </div>

                    </div>

                    <div className="manual">
                        <h1 id="title" className={styles.title}>Manual de uso</h1>
                    </div>

                </div>
                <a title="Volver arriba" aria-label="Ir al inicio de página" href="#top" className={styles.buttonTo}>↑</a>
                <style jsx>{`

                #title{

                    /*Box model*/
                        margin-bottom: 4rem;
                }

                .text{
                    /*Box model*/
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    
                    /*Visuals*/

                    background: white;
                    border-radius: 10px;
                }
                
                .faq{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                
                }

                .faq__item1, .faq__item2, .faq__item3, .faq__item4, 
                .faq__item5, .faq__item6, .faq__item7, .faq__item8, 
                .faq__item9{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 3rem;
                    padding: 5rem;
                        
                    /*Visuals*/

                    border: 1px solid ${colors.primary};
                    border-radius: 10px;
                    background-image: url("/faq-2.jpeg");
                    background-size: cover;

                }
                    
                .top__image{

                    /*Box model*/

                    width: 100%;
                    height: 100%;
                    margin-bottom: 3rem;

                    /*Visuals*/

                    border-radius: 10px;

                }
                
                
                `}</style>
            </Layout>
        </>
    )
}
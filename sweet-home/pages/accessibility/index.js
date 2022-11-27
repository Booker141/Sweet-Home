import Head from 'next/head';
import Image from 'next/image'
import styles from 'styles/global.module.css';
import {colors} from "styles/frontend-conf.js";
import Layout from "components/Layout/Layout";
import accessibility1 from "../../public/accessibility-1.svg"
import accessibility2 from "../../public/accessibility-2.svg"
import accessibility3 from "../../public/accessibility-3.svg"
import accessibility4 from "../../public/accessibility-4.svg"
import accessibility5 from "../../public/accessibility-5.svg"



/*
    * @author Sergio García Navarro
    * @returns Accessibility page
    * @version 1.0
    * @date 13/12/2020
    * @description Accessibility page
*/
/**
 * It returns a Layout component with a Head component and a few other components inside of it
 * @returns the JSX code that is inside the return statement.
 */
export default function Accessibility(){

    return(
        <>
            <Head><title>Accesibilidad</title></Head>
            <Layout>
                <div className={styles.content}>    
                    <a name="top"></a>
                    <h1 className={styles.title}>Accesibilidad ⦿</h1>
                    <p className={styles.text}>En Sweet Home, velamos por 
                    aquellos usuarios que puedan tener dificultades a la hora 
                    de utilizar la aplicación. Por ello, hemos pensado desde 
                    el primer minuto en facilitar su adaptación a la aplicación 
                    diseñando desde cero todos los componentes y páginas teniendo 
                    en cuenta las siguientes características:</p>
                    
                    <div className="content__container">
                        <div className="container__column">
                            <h2 className={styles.secondary}>Color y contraste</h2>
                            <hr className="discontinuous"></hr>
                            <p className={styles.text}>Hemos elegido colores con 
                            <span className={styles.strong}> mucho contraste </span> respecto al fondo para una <span className={styles.strong}> fácil lectura e 
                            interacción</span>, ya que el uso de colores poco contrastados 
                            puede ocasionar dolores de cabeza.</p>
                        </div>
                        <div className={styles.imgAccessibility}>
                            <Image src={accessibility1} alt="Diseñadores"/>
                        </div>
                    </div>
                    
                    <div className="content__container">
                        <div className={styles.imgAccessibility}>
                            <Image src={accessibility2} alt="Constructor de sitios"/>
                        </div>
                        <div className="container__column">
                            <h2 className={styles.secondary}>Diseño minimalista</h2>
                            <hr className="discontinuous"></hr>
                            <p className={styles.text}>En Sweet Home, los diseñadores 
                            han apostado por un <span className={styles.strong}> diseño claro y bien distribuido</span>, 
                            facilitando la búsqueda de información en la aplicación 
                            para que personas con discapacidad se sientan cómodas.</p>
                        </div>
                    </div>

                    <div className="content__container">
                        <div className="container__column">
                            <h2 className={styles.secondary}>Enlaces y botones</h2>
                            <hr className="discontinuous"></hr>
                            <p className={styles.text}>Hemos diseñado enlaces y botones 
                            suficientemente <span className={styles.strong}>contrastados</span> para facilitar su uso; y con un <span className={styles.strong}> tamaño medido </span>
                            para que sean fáciles de utilizar en cualquier dispositivo.</p>
                        </div>
                        <div className={styles.imgAccessibility}>
                            <Image src={accessibility3} alt="Página social" />
                        </div>
                    </div>
                    
                    <div className="content__container">
                        <div className={styles.imgAccessibility}>
                            <Image src={accessibility4} alt="Diseño web" />
                        </div>
                        <div className="container__column">
                            <h2 className={styles.secondary}>Fuente clara</h2>
                            <hr className="discontinuous"></hr>
                            <p className={styles.text}>Hemos elegido una tipografía 
                            <span className={styles.strong}> agradable a la vista </span> y que cuadrase con las personalidad 
                            e ideales de nuestra compañía. Los textos tienen el tamaño 
                            ideal para <span className={styles.strong}> personas con baja visión y dislexia. </span></p>
                        </div>
                    </div>
                    
                    <div className="content__container">
                        <div className="container__column">
                            <h2 className={styles.secondary}>Contenido de lectura fácil</h2>
                            <hr className="discontinuous"></hr>
                            <p className={styles.text}>En Sweet Home, todas las páginas 
                            han sido estructuradas de tal forma para <span className={styles.strong}> facilitar la 
                            lectura </span>. Además, el vocabulario utilizado no es muy 
                            complejo por lo que hace aún más atractiva la aplicación.</p>
                        </div>
                        <div className={styles.imgAccessibility}>
                            <Image src={accessibility5} alt="Estudiar en línea"/>
                        </div>
                    </div>
                </div>

                <a title="Volver arriba" href="#top" className={styles.buttonTo}>↑</a>

            </Layout>

            <style jsx>{`

                .content__container{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                
                }

                .container__column{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;


                }

                .discontinuous{

                    /*Box model*/
                    
                    width: 20rem;
                    margin-left: 0;
                    margin-bottom: 2rem;

                    /*Visuals*/
                
                    border-top: dotted 1rem ${colors.primary};
                    border-bottom: none;
                    border-left: none;
                    border-right: none;
                }

                img{

                    /*Box model*/
                    
                    float: right;
                
                }

            
            `}</style>
        </>
    )



}
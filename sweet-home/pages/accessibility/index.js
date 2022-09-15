import Layout from "components/Layout/Layout";
import Head from 'next/head';
import styles from 'styles/global.module.css';
import {colors} from "styles/frontend-conf.js";

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
                    <p className={styles.text}>En Sweet Home, velamos por aquellos usuarios 
                    que puedan tener dificultades a la hora de utilizar la aplicación. 
                    Por ello, hemos pensado desde el primer minuto en facilitar su adaptación 
                    a la aplicación diseñando desde cero todos los componentes y páginas teniendo 
                    en cuenta las siguientes características:</p>
                    
                    <div className="content__container1">
                        <h2 className={styles.secondary}>Color y contraste</h2>
                        <hr className="discontinuous"></hr>
                        <p className={styles.text}>Hemos elegido colores con mucho contraste con el fondo para una 
                        fácil lectura e interacción, ya que el uso de colores poco contrastados 
                        puede ocasionar dolores de cabeza.</p>
                       
                    </div>
                    <img src="/accessibility-1.svg" alt="Diseñadores" className={styles.imgAccessibility}/>
                    <div className="content__container2">
                        <h2 className={styles.secondary}>Diseño minimalista</h2>
                        <hr className="discontinuous"></hr>
                        <p className={styles.text}>En Sweet Home, los diseñadores han apostado por un 
                        diseño claro y bien distribuido, facilitando la búsqueda de información en la 
                        aplicación para que personas con discapacidad se sientan cómodas.</p>
                        <img src="/accessibility-2.svg" alt="Constructor de sitios" className={styles.imgAccessibility}/>
                    </div>

                    <div className="content__container3">
                        <h2 className={styles.secondary}>Enlaces y botones</h2>
                        <hr className="discontinuous"></hr>
                        <p className={styles.text}>Hemos diseñado enlaces y botones suficientemente 
                        contrastados para facilitar su uso; y con un tamaño medido para que sean fáciles 
                        de utilizar en cualquier dispositivo.</p>
                        <img src="/accessibility-3.svg" alt="Página social" className={styles.imgAccessibility}/>
                    </div>
                    
                    <div className="content__container4">
                        <h2 className={styles.secondary}>Fuente clara</h2>
                        <hr className="discontinuous"></hr>
                        <p className={styles.text}>Hemos elegido una tipografía agradable a la vista y 
                        que cuadrase con las personalidad e ideales de nuestra compañía. Los textos 
                        tienen el tamaño ideal para personas con baja visión y dislexia.</p>
                        <img src="/accessibility-4.svg" alt="Diseño web" className={styles.imgAccessibility}/>
                    </div>
                    
                    <div className="content__container5">
                        <h2 className={styles.secondary}>Contenido de lectura fácil</h2>
                        <hr className="discontinuous"></hr>
                        <p className={styles.text}>En Sweet Home, todas las páginas han sido estructuradas
                        de tal forma para facilitar la lectura. Además, el vocabulario utilizado no es 
                        muy complejo por lo que hace aún más atractiva la aplicación.</p>
                        <img src="/accessibility-5.svg" alt="Estudiar en línea" className={styles.imgAccessibility}/>
                    </div>
                </div>

                <a href="#top" className={styles.buttonTo}>↑</a>

            </Layout>
            <style jsx>{`

                .content__container1{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                
                }

                .content__container2{
                    display: inline-block;
                    position: relative;
                    left:0;



                }

                .content__container3{

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;

                }

                .content__container4{

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;

                }

                .content__container5{

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;

                }



                .discontinuous{
                    /*Box model*/
                    
                    width: 20rem;

                    /*Visuals*/
                    
                
                    border-top: dotted 1rem ${colors.primary};
                    border-bottom: none;
                    border-left: none;
                    border-right: none;
                }

                img{float: right;}

            
            `}</style>
        </>
    )



}
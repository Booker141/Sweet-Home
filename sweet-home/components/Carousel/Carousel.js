import router from "next/router";
import ButtonTertiary from "components/ButtonTertiary/ButtonTertiary";
import styles from "styles/global.module.css"
import {colors} from "styles/frontend-conf.js"
import {fonts} from "styles/frontend-conf.js"


/*
    * @author Sergio García Navarro
    * @returns Carousel component
    * @version 1.0
    * @date 13/01/2020
    * @description Carousel component
*/

/**
 * This function returns a fixed carousel with pre-established information.
 * @returns A fixed carousel.
 */
export default function Carousel(){

    return (

        <>
            <div className="carousel">
                <div className="carousel__item">
                    <div className="item__text">
                        <h2 className="item__title">Carlota nos cuenta su experiencia en Sweet Home</h2>
                        <h3 className={styles.tertiary}>18/08/2022</h3>
                        <p className={styles.text}>Hace unos meses, estuvo pensando en regalarle a su hija su primera mascota y hoy nos cuenta como fue el proceso en Sweet Home.</p>
                        <ButtonTertiary onClick={() => {router.push("/news")}}>Saber más</ButtonTertiary>
                    </div>
                    <img className="item__image" src="/New app.svg"/>
                </div>
                <div className="carousel__item">
                    <div className="item__text">
                        <h2 className="item__title">Nueva actualización v1.0.0</h2>
                        <h3 className={styles.tertiary}>20/08/2022</h3>
                        <p className={styles.text}>Entérate de las nuevas características que han sido introducidas junto a la nueva versión</p>
                        <ButtonTertiary onClick={() => {router.push("/news")}}>Saber más</ButtonTertiary>
                    </div>
                </div>
                <div className="carousel__item">
                    <div className="item__text">
                        <h2 className="item__title">¿Estás perdido?</h2>
                        <h3 className={styles.tertiary}>21/08/2022</h3>
                        <p className={styles.text}>Entérate de cómo funciona Sweet Home en esta entrevista con su creador</p>
                    </div>
                    <ButtonTertiary onClick={() => router.push("/news")}>Saber más</ButtonTertiary>
                </div>
            </div>

            <style jsx>{`

              
                .carousel{

                    /*Box model*/

                    display: flex;
                    overflow-x: auto;
                    margin-bottom: 3rem;

                    /*Scroll*/

                    scroll-snap-type: x mandatory;

                    scroll-behavior: smooth;
                    scroll-snap-points-x: repeat(100%);

                    -webkit-overflow-scrolling: scroll;
                }
                
                .carousel::-webkit-scrollbar {

                    /*Box model*/

                    width: 0.5rem;
                    height: 0.5rem;
                }

                .carousel::-webkit-scrollbar-track {

                    /*Visuals*/

                    border-radius: 10px;
                    background-color: #ffc98c;
                }

                .carousel::-webkit-scrollbar-thumb {

                    /*Visuals*/
                    background-color: ${colors.tertiary};
                    border-radius: 10px;
                }


                .carousel__item{

                    /*Box model*/

                    display: flex;
                    align-items: center;
                    flex-direction: row;
                    justify-content: space-around;
                    flex-shrink: 0;
                    width: 100%;
                    height: 100%;
                    padding: 1rem;

                    /*Scroll*/

                    scroll-snap-align: start;

                    /*Visuals*/

                    border-radius: 10px;
                    background-color: ${colors.primary};

                }

                .item__image{

                    /*Box model*/

                    height: 40rem;
                    width: 40rem;

                    /*Visuals*/

                    border-radius: 15px;

                }

                .item__text{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    margin-left: 3.5rem;

                    /*Text*/

                }

                .item__title{

                    /*Text*/

                    font-size: 2rem;
                    font-family: ${fonts.default};
                }
            `}</style>


        </>


    )

}
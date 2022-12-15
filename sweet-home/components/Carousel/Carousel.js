import router from 'next/router'
import Image from 'next/image'
import global from "styles/global.module.css"
import {colors} from "styles/frontend-conf.js"
import {fonts} from "styles/frontend-conf.js"
import carousel1 from "../../public/carousel-1.svg"
import carousel2 from "../../public/carousel-2.svg"
import carousel3 from "../../public/carousel-3.svg"



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
                        <h2 className="text__title">Carlota nos cuenta su experiencia en Sweet Home</h2>
                        <h3 className="text__date">18/08/2022</h3>
                        <p className="text__paragraph">Hace unos meses, estuvo pensando en regalarle a su hija su primera mascota y hoy nos cuenta como fue el proceso en Sweet Home.</p>
                        <button className={global.buttonTertiary} onClick={() => {router.push("/news")}}>Saber más</button>
                    </div>
                    <div className="item__image1">
                        <Image src={carousel1}/>
                    </div>
                </div>
                <div className="carousel__item">
                    <div className="item__text">
                        <h2 className="text__title">Nueva actualización v1.0.0</h2>
                        <h3 className="text__date">20/08/2022</h3>
                        <p className="text__paragraph">Entérate de las nuevas características que han sido introducidas junto a la nueva versión.</p>
                        <button className={global.buttonTertiary} onClick={() => {router.push("/news")}}>Saber más</button>
                    </div>
                    <div className="item__image2">
                        <Image src={carousel2}/>
                    </div>
                </div>
                <div className="carousel__item">
                    <div className="item__text">
                        <h2 className="text__title">¿Estás perdido?</h2>
                        <h3 className="text__date">21/08/2022</h3>
                        <p className="text__paragraph">Entérate de cómo funciona Sweet Home en esta entrevista con su creador.</p>
                        <button className={global.buttonTertiary} onClick={() => router.push("/news")}>Saber más</button>
                    </div>
                    <div className="item__image3">
                        <Image src={carousel3}/>
                    </div>
                </div>
            </div>

            <style jsx>{`

              
                .carousel{

                    /*Box model*/

                    display: flex;
                    overflow-x: auto;
                    margin-bottom: 3rem;

                    /*Visuals*/

                    border-radius: 10px;
                    
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

                .item__image1{

                    /*Box model*/

                    width: 268%;
                    height: 268%;

                    /*Visuals*/

                    border-radius: 15px;

                }

                .item__image2{

                    /*Box model*/

                    width: 180%;
                    height: 180%;

                    /*Visuals*/

                    border-radius: 15px;

                }

                .item__image3{

                    /*Box model*/

                    width: 150%;
                    height: 150%;

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

                    color: ${colors.secondary};

                }

                .text__title{

                    /*Text*/

                    font-size: 2rem;
                    font-family: ${fonts.default};
                    color: ${colors.secondary};

                }

                .text__date{

                    /*Text*/

                    font-size: 0.8rem;
                    font-family: ${fonts.default};
                    color: ${colors.secondary};
                }

                .text__paragraph{

                    /*Text*/

                    font-size: 1.2rem;
                    font-family: ${fonts.default};
                    color: ${colors.secondary};
                }

            `}</style>


        </>


    )

}
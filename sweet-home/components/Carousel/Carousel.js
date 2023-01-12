import router from 'next/router'
import {useEffect, useState} from 'react'
import Image from 'next/image'
import global from "styles/global.module.css"
import {colors} from "styles/frontend-conf.js"
import {fonts} from "styles/frontend-conf.js"
import carousel from "../../public/carousel.svg"




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

    const [news, setNews] = useState([]);

    useEffect(async () => {
        await fetch("http://localhost:3000/api/news", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
        }).then((response) => response.json())
          .then((data) => setNews(data))
          .catch((error) => {
            console.log('Error en la petición:' + error.message);
          });

    }, [])

    return (

        <>
            <div className="carousel">
                {news.map(({_id, id, title, date, author, introduction}) => (
                                <div key={_id} className="carousel__item">
                                    <div className="item__text">
                                        <h2 className={global.title3}>{title}</h2>
                                        <h3 className="text__date">{date}</h3>
                                        <h3 className="text__date">{author}</h3>
                                        <p className="text__paragraph">{introduction}</p>
                                        <button className={global.buttonTertiary} onClick={() => {router.push(`/news/${id}`)}}>Saber más</button>
                                    </div>
                                    <div className="item__image">
                                        <Image src={carousel}/>
                                    </div>
                                </div>
                            ))} 
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
                    

                    /*Scroll*/

                    scroll-snap-align: start;

                    /*Visuals*/

                    border-radius: 10px;
                    background: linear-gradient(45deg, rgba(240,129,15,1) 35%, rgba(249,166,3,1) 100%);

                }

                .item__image{

                    /*Box model*/

                    display: flex;
                    align-items: center;

                    width: 50%;
                    height: 50%;

                    /*Visuals*/

                    border-radius: 15px;

                }


                .item__text{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    width: 50%;
                    height: 50%;

                    margin-left: 3.5rem;

                    /*Text*/

                    color: ${colors.secondary};

                }

                .text__title{

                    /*Text*/

                    font-size: 1rem;
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

                button{

                    /*Box model*/

                    margin-bottom: 2rem;

                }

                p{

                    /*Box model*/

                    margin-bottom: 5rem;
                }

            `}</style>


        </>


    )

}
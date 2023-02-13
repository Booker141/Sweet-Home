import router from 'next/router'
import {useEffect, useState} from 'react'
import Image from 'next/image'
import global from "styles/global.module.css"
import {colors} from "styles/frontend-conf.js"
import {fonts} from "styles/frontend-conf.js"
import carousel from "../../public/carousel.svg"
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs"
import {server} from "/server"




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
    const [newsLength, setNewsLength] = useState(0);
    const [current, setCurrent] = useState(0);

    /**
     * If the current slide is greater than 0, then set the current slide to the previous slide
     */
    const before = () => {
        if(current > 0){
            setCurrent(current - 1);
        }
    }

    /**
     * If the current index is less than the length of the news array, increment the current index by
     * one
     */
    const after = () => {
        if(current < newsLength - 1){
            setCurrent(current + 1);
        }
    }

    useEffect(async () => {
        await fetch(`${server}/api/news`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
        }).then((response) => response.json())
          .then((data) => {setNews(data); 
                            setNewsLength(data.length);})
          .catch((error) => {
            console.log('Error en la petición:' + error.message);
          });

    }, [])

    return (

        <>
            <div className="carousel">
                {news.map(({_id, id, title, date, author, introduction}) => (
                                <div key={_id} className="carousel__item" style={{ transform: `translateX(-${current * 100}%)` , transition: "0.5s ease all"}}>
                                    <a class="arrow__left" onClick={before}>
                                        <div className="carousel__icon">
                                            <BsFillArrowLeftCircleFill size={37}/>
                                        </div>
                                    </a>
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
                                    <a class="arrow__right" onClick={after}>
                                        <div className="carousel__icon">
                                            <BsFillArrowRightCircleFill size={37}/>
                                        </div>
                                    </a>
                                </div>
                            ))} 
            </div>

            <style jsx>{`

              
                .carousel{

                    /*Box model*/

                    display: flex;
                    overflow-x: hidden;
                    margin-bottom: 3rem;

                    /*Visuals*/

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
                    

                    /*Visuals*/

                    border-radius: 10px;
                    background: linear-gradient(45deg, rgba(240,129,15,1) 35%, rgba(249,166,3,1) 100%);

                }

                .carousel__icon{

                    /*Box model*/

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    width: 4rem;
                    height: 4rem;

                    /*Visuals*/

                    color: ${colors.secondary};
                    cursor: pointer;

                }


                .carousel__icon:hover{

                    /*Visuals*/

                    color: ${colors.tertiary};
                    transition: 0.5s ease-in-out all;


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

                    margin-bottom: 4rem;

                }

                p{

                    /*Box model*/

                    margin-bottom: 3rem;
                }

            `}</style>


        </>


    )

}
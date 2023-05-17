import router from 'next/router'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import global from 'styles/global.module.css'
import { colors, fonts } from 'styles/frontend-conf.js'
import carousel from '../../public/carousel.svg'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { server } from '/server'

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
export default function Carousel () {
  const [news, setNews] = useState([])
  const [newsLength, setNewsLength] = useState(0)
  const [current, setCurrent] = useState(0)

  /**
     * If the current slide is greater than 0, then set the current slide to the previous slide
     */
  const before = () => {
    if (current > 0) {
      setCurrent(current - 1)
    }
  }

  /**
     * If the current index is less than the length of the news array, increment the current index by
     * one
     */
  const after = () => {
    if (current < newsLength - 1) {
      setCurrent(current + 1)
    }
  }

  /**
   * It fetches the news from the server and sets the state of the news and newsLength variables
   */
  async function getNews(){

    await fetch(`${server}/api/news`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => response.json())
      .then((data) => {
        setNews(data)
        setNewsLength(data.length)
      })
      .catch((error) => {
        console.log('Error en la petición:' + error.message)
      })

  }

  /* A hook that is called when the component is mounted. It is used to fetch the news from the
  database. */
  useEffect(() => {
    getNews()
  }, [])

  return (

    <>
      <div className='carousel'>
        {news.map(({ _id, id, title, date, author, introduction }) => (
          <div key={_id} className='carousel__item' style={{ transform: `translateX(-${current * 100}%)`, transition: '0.5s ease all' }}>
            <button className='arrow__left' onClick={before}>
              <div className='carousel__icon'>
                <BsFillArrowLeftCircleFill size={37} />
              </div>
            </button>
            <div className='item__text'>
              <h2 className={global.title3}>{title}</h2>
              <h3 className='text__date'>{new Date(date).toLocaleDateString().slice(0,10)}</h3>
              <h3 className='text__date'>{author}</h3>
              <p className='text__paragraph'>{introduction}</p>
              <button className={global.carouselButton} onClick={() => { router.push(`/news/${id}`) }}>Saber más</button>
            </div>
            <div className='item__image'>
              <Image src={carousel} />
            </div>
            <button className='arrow__right' onClick={after}>
              <div className='carousel__icon'>
                <BsFillArrowRightCircleFill size={37} />
              </div>
            </button>
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

                    border-radius: 20px;
                    
                   
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

                .arrow__left, .arrow__right{

                    /*Box model*/

                    margin: 1rem;
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

                .item__text button{

                  /*Box model*/

                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  gap: 0.5rem;
                  height: 50px;
                  width: fit-content;
                  min-width: 120px;
                  max-width: 200px;
                  padding: 0.5rem;

                  /*Text*/

                  color: #f0810f;
                  font-family: "Poppins", sans-serif;
                  font-style: 500;

                  /*Visuals*/

                  cursor: pointer;

                  background-color: ${colors.secondary};
                  border-radius: 40px;

                  /*Misc*/

                  transition: all 0.3s ease-in-out;
                }

                .item__text button:hover{

                  /*Box model*/

                  color: ${colors.secondary};
                  background-color: ${colors.tertiary};

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
                    padding: 0.2rem;
                    
                    /*Visuals*/

                    cursor: pointer;
                    border: none;
                    background: none;
                    border-radius: 70px;
                    box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);

                }

                p{

                    /*Box model*/

                    margin-bottom: 3rem;
                }

            `}
      </style>

    </>

  )
}

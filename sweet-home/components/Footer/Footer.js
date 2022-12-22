import Link from 'next/link'
import { useEffect, useState } from 'react'
import global from "styles/global.module.css"
import {colors} from "styles/frontend-conf.js"
import {fonts} from "styles/frontend-conf.js"
import BasicFooter from 'components/BasicFooter/BasicFooter'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'


/*
    * @author Sergio García Navarro
    * @returns Footer component
    * @version 1.0
    * @date 13/01/2020
    * @description Footer component
*/
/**
 * It returns a div with a svg, four divs, a hr and a BasicFooter component
 * @returns A component with a footer.
 */
export default function Footer(){

    const [color, setColor] = useState('white');
    const [count, setCount] = useState(0);

    useEffect(() =>
    {
        setColor(document.body.style.backgroundColor)
        
    },[])
    
    return(
            <>
            <div className="content__footer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill={color} fillOpacity="1" d="M0,128L20,138.7C40,
                        149,80,171,120,170.7C160,171,200,149,240,170.7C280,192,320,
                        256,360,245.3C400,235,440,149,480,128C520,107,560,149,600,
                        186.7C640,224,680,256,720,224C760,192,800,96,840,74.7C880,
                        53,920,107,960,117.3C1000,128,1040,96,1080,101.3C1120,107,
                        1160,149,1200,170.7C1240,192,1280,192,1320,192C1360,192,
                        1400,192,1420,192L1440,192L1440,0L1420,0C1400,0,1360,0,
                        1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,
                        0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,
                        0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,
                        0,280,0,240,0C200,0,160,0,120,
                        0C80,0,40,0,20,0L0,0Z"></path>
                </svg>
                
                <div className="footer">
                    
                    <div className="columns">
                        <div className="columns__column1">
                            <h3 className="column1__title">Sweet Home</h3>
                            <div className="column1__links">
                                <Link className={global.link} href="/about"><a aria-label="Ir a información sobre Sweet Home">Sobre nosotros</a></Link>
                                <Link className={global.link} href="/contact"><a aria-label="Ir a información de contacto">Contáctanos</a></Link>
                            </div>
                        </div>
                        <div className="columns__column2">
                            <h3 className="column2__title">Ayuda</h3>
                            <div className="column2__links">
                                <Link className={global.link} href="/use"><a aria-label="Ir a como usar Sweet Home">Preguntas frecuentes</a></Link>
                                <Link className={global.link} href="/rules"><a aria-label="Ir a Reglas y políticas de Sweet Home">Reglas y políticas</a></Link>
                            </div>
                        </div>
                        <div className="columns__column3">
                            <h3 className="column3__title">Encuentra en Sweet Home</h3>
                            <div className="column3__links">
                                <Link className={global.link} href="/attendances"><a aria-label="Ir a Cuidados">Cuidados</a></Link>
                                <Link className={global.link} href="/news"><a aria-label="Ir a Noticias">Noticias</a></Link>
                                <Link className={global.link} href="/manual"><a aria-label="Ir a Manual de usuario">Documentación</a></Link>
                            </div>
                        </div>       
                         
                    </div>

                    <div className="columns__column4">
                        <h3 className="column4__title">Síguenos</h3>
                        <div className="column4__icons">
                            <a aria-label="Ir a Instagram" className="icons__instagram"><BsInstagram/></a>
                            <a aria-label="Ir a Facebook" className="icons__facebook"><BsFacebook/></a>
                            <a aria-label="Ir a Twitter" className="icons__twitter"><BsTwitter/></a>
                        </div>
                    </div> 

                </div>

                 <hr className="footer__line"></hr>
                    <BasicFooter color="#fafafa" hover="#e8cd43" url1="/use" text1="Información" url2="/privacy" text2="Privacidad"
                            url3="/conditions" text3="Condiciones" url4="/accessibility" text4="Accesibilidad"/>   
            </div>

                
            
            <style jsx>{`
                
                .content__footer{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    margin-top: 3rem;

                    /*Visuals*/

                    background-color: ${colors.primary};
                    
                }

                .footer{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    width: 80%;
                    padding: 5rem;
                    margin-top: 0.5rem;
                    height: 20vh;
                }

                .footer__line{

                    /*Position*/

                    position: relative;
                    top: 1rem;

                    /*Box model*/

                    width: 100%;
                    height: 0.09rem;

                    /*Text*/

                    color: #ffffff;

                    /*Visuals*/

                    border: none;
                    opacity: 1;
                }
                
                .columns{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;

                    width: 110%;

                }
                .columns__column1{


                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    align-items: center;


                }
                .columns__column2{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    align-items: center;


                }

                .columns__column3{


                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    align-items: center;

                }

                .columns__column4{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    margin-top: 3rem;
                    margin-bottom: 1rem;

                }

                .column1__links{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    align-items: center;

                }
                
                .column2__links{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .column3__links{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .column4__icons{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    width: 10%;


                }


                h3{
                    /*Box model*/

                    margin-bottom: 0.5rem;

                    /*Text*/

                    color: ${colors.secondary};
                    font-size: 1rem;
                    font-family: ${fonts.default};
                    font-weight: bold;
                }

                p{

                    /*Text*/

                    color: ${colors.secondary};
                    font-size: 1rem;
                    font-family: ${fonts.default};
                }

                a{

                    /*Text*/

                    text-decoration: none;
                    color: ${colors.secondary};
                    font-size: 1rem;
                    font-family: ${fonts.default};
                }

                a:hover{

                    /*Text*/
                    
                    color: #f5d533;
                }
                
            `}</style>
        </>
    )
}
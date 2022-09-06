import {colors} from "styles/frontend-conf.js"
import {fonts} from "styles/frontend-conf.js"
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import BasicFooter from 'components/BasicFooter/BasicFooter'
import Link from 'next/link'
import styles from "styles/global.module.css"
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

    return(
            <>
            <div className="content-footer">
                <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#f0810f" fill-opacity="1" d="M0,128L20,138.7C40,
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
                    
                    <div className="column">
                        <h3 className="column__title">Sweet Home</h3>
                        <div className="column__links">
                            <Link className={styles.link} href="/about"><a>Sobre nosotros</a></Link>
                            <Link className={styles.link} href="/contact"><a>Contáctanos</a></Link>
                        </div>
                    </div>
                    <div className="column2">
                        <h3 className="column2__title">Ayuda</h3>
                        <div className="column2__links">
                            <Link className={styles.link} href="/use"><a>Uso de Sweet Home</a></Link>
                            <Link className={styles.link} href="/rules"><a>Reglas y políticas</a></Link>
                        </div>
                    </div>
                    <div className="column3">
                        <h3 className="column3__title">Encuentra en Sweet Home</h3>
                        <div className="column3__links">
                            <Link className={styles.link} href="/attendances"><a>Cuidados</a></Link>
                        </div>
                    </div>       
                </div>
                <div className="column4">
                        <h3 className="column4__title">Síguenos</h3>
                        <div className="column4__icons">
                            <a className="instagram"><BsInstagram/></a>
                            <a className="facebook"><BsFacebook/></a>
                            <a className="twitter"><BsTwitter/></a>
                        </div>
                    </div> 
            </div>
            <div className="basicFooter">
                
                <BasicFooter url1="/use" text1="Información" url2="/privacy" text2="Privacidad"
                        url3="/conditions" text3="Condiciones"/>
            </div>   
            
            <style jsx>{`

                .content-footer{

                    /*Position*/

                    bottom: 0;

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    margin-top: 3rem;
                    
                }

                .footer{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                    width: 100%;
                    margin-top: 0.5rem;
                    height: 20vh;
                    
                }

                .column{


                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

            }
                .column2{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                }

                .column3{


                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                }
                .column4{

                    /*Box model*/

                    margin-top: 3rem;
                    margin-bottom: 1rem;
                }

                .column1__links{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                }
                
                .column2__links{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .column3__links{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .column4__icons{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;

                }
 

                h3{
                    /*Box model*/

                    margin-bottom: 0.5rem;

                    /*Text*/

                    color: ${colors.primary};
                    font-size: 1rem;
                    font-family: ${fonts.default};
                    font-weight: bold;
                }

                p{

                    /*Text*/

                    color: ${colors.primary};
                    font-size: 1rem;
                    font-family: ${fonts.default};
                }



                a{

                    /*Text*/

                    text-decoration: none;
                    color: ${colors.primary};
                    font-size: 1rem;
                    font-family: ${fonts.default};
                }

                a:hover{

                    /*Text*/
                    
                    color: ${colors.tertiary};
                }
                
            `}</style>
        </>
    )
}
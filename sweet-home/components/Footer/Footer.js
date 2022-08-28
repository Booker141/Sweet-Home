import {colors} from "styles/frontend-conf.js"
import {fonts} from "styles/frontend-conf.js"
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import BasicFooter from 'components/BasicFooter/BasicFooter'
import Link from 'next/link'
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
        
            <div className="footer">
                <svg className="olas" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
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
                <div className="columna 1">
                    <h3 className="titulo 1">Sweet Home</h3>
                    <Link href="/about"><a>Sobre nosotros</a></Link>
                    <Link href="/contact"><a>Contáctanos</a></Link>
                </div>
                <div className="columna 2">
                    <h3 className="titulo 2">Ayuda</h3>
                    <Link href="/use"><a>Uso de Sweet Home</a></Link>
                    <Link href="/rules"><a>Reglas y políticas</a></Link>
                </div>
                <div className="columna 3">
                    <h3 className="titulo 3">Encuentra en Sweet Home</h3>
                    <Link href="/attendances"><a>Cuidados</a></Link>
                </div>
                <div className="columna 4">
                    <h3 className="titulo 4">Síguenos</h3>
                    <a className="instagram"><BsInstagram/></a>
                    <a className="facebook"><BsFacebook/></a>
                    <a className="twitter"><BsTwitter/></a>
                </div>
                <hr></hr>
                <BasicFooter url1="/use" text1="Información" url2="/privacy" text2="Privacidad"
                        url3="/conditions" text3="Condiciones"/>
                
            </div>
            
            <style jsx>{`

                .olas{
                    position: absolute;
                    margin-bottom: 1.5rem;
                }

                .basicfooter{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    background-color: ${colors.secondary};
                    width: 100%;
                    font-family: ${fonts.primary};
                }

                .footer{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    background-color: ${colors.secondary};
                    width: 100%;
                    bottom: 0;
                    position: absolute;
                    margin-bottom: 0rem;
                    left: 0rem;
                    font-family: ${fonts.primary};
                }

                .columna1 .columna2 .columna3{
                    width: 33.33%;
                    display: inline-block;
                }

                .columna4{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                }
              
                h3{
                    color: ${colors.primary};
                    font-size: 1rem;
                    font-family: ${fonts.default};
                    margin-bottom: 0.5rem;
                    font-weight: bold;
                }
                p{
                    color: ${colors.primary};
                    font-size: 1rem;
                    font-family: ${fonts.default};
                }

                hr{
                    background-color: ${colors.primary};
                    width: 100%;
                    height: 0.1rem;
                    opacity: 0.4;
                }
                a{
                    text-decoration: none;
                    color: ${colors.primary};
                    font-size: 1rem;
                    font-family: ${fonts.default};
                }

                a:hover{
                    color: ${colors.tertiary};
                }
            `}</style>
        </>
    )
}
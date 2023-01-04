import Head from 'next/head'
import global from "styles/global.module.css"
import {colors} from "styles/frontend-conf.js"
import {fonts} from "styles/frontend-conf.js"
import Layout from "components/Layout/Layout"
import { FaUser } from "react-icons/fa";
import {FaAddressBook} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BsPencilFill} from 'react-icons/bs'


/* 
    * @author Sergio García Navarro
    * @returns Contact page
    * @version 1.0
    * @date 13/12/2020
    * @description Contact page
*/
/**
 * It returns the layout of the contact page.
 * @returns the Layout component, which is a component that contains the header, footer and the content
 * of the page.
 */
export default function Contact(){

    return(
        <Layout>
            <>
                <Head>
                    <title>Contacto</title>
                </Head>
                    <h1 className={global.title}>Contacto</h1>
                    <div className="contact__container">
                        <div className="container__info">
                            <h2 className={global.title2}>¿Quieres contactar con nosotros?</h2>
                            <p className={global.text2}>Para contactar con Sweet Home y 
                            así recoger feedback para mejorar nuestro servicio, puede hacerlo
                            a través de nuestras redes sociales.</p>
                        </div>
                        <div className="container__social">
                            <h2 className={global.title2}>Redes sociales</h2>
                            <div className="social__link">
                                <a aria-label="Enlace de Facebook" href="https://www.facebook.com/sweethome.es/">
                                    Facebook 
                                </a>
                                <BsFacebook/>
                            </div>
                            <div className="social__link">
                                <a aria-label="Enlace de Instagram" href="https://www.instagram.com/sweethome.es/">
                                    Instagram 
                                </a>
                                <BsInstagram/>
                            </div>
                            <div className="social__link">
                                <a aria-label="Enlace de Twitter" href="https://www.twitter.es/sweethome">
                                    Twitter 
                                </a>
                                <BsTwitter/>
                            </div>
                        </div>
                    </div>
                    <div className="email">
                        <p className={global.text}>A través del siguiente correo electrónico:  </p>
                        <a title="Enviar correo" aria-label="Enlace a correo de atención al cliente" href="mailto:atenciónSH@gmail.com"> &nbsp; atenciónSH@gmail.com</a>
                    </div>
                    <div className="phone">
                        <p className={global.text}>A través del teléfono de contacto: +34 XXX XX XX XX. </p>
                    </div>
                    <div className="account">
                        <p className={global.text}>O envía un mensaje a la cuenta de: <a className={global.link}>atencion.sh</a>.</p>
                    </div>
                <style jsx>{`


                    .contact__container{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        margin-bottom: 2rem;


                        /*Visuals*/

                        background-color: ${colors.primary};
                        border-radius: 10px;            
                        
                    }

                    .container__info{

                        /*Box model*/

                        padding: 5rem;

                        /*Text*/

                        color: ${colors.secondary};
                        
                    }
    
                    .container__social{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        width: 50%;

                        /*Visuals*/

                        border-radius: 10px;
                        background-image: url("/contact-1.jpg");
                        background-size: 150%;

                        
                    }

                    .social__link{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        gap: 1rem;
                        justify-content: center;
                        width: 100%;

                        /*Misc*/
                        
                        transition: 0.3s ease;

                    }

                    .social__link a{

                        /*Box model*/

                        margin-bottom: 2rem;

                        color: ${colors.quaternary};

                        
                    }

                    .social__link:hover{

                        /*Text*/

                        color: ${colors.tertiary};
                        font-size: 1.2rem;
                    }

                    .social__link a:hover{

                        /*Text*/

                        color: ${colors.tertiary};

                    }

                    .personal__container{

                        /*Box model*/

                        display: flex;  
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;

                    }

                    .personal__container p{

                        /*Box model*/

                        margin-bottom: 2rem;

                    }

                    .email{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                    }

                    .phone{

                        /*Box model*/

                        margin-bottom: 2rem;
                    }

                    .form{

                        /*Position*/

                        position: relative;

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        width: 20%;
                        height: 15%;
                        padding: 5rem;
                        margin-bottom: 2rem;

                        /*Visuals*/
                        
                        background-color: ${colors.primary};
                        border-radius: 10px;

                    }

                    .form__email{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;

                        width: 120%;

                    }

                    .form__name{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;

                        width: 120%;

                    }

                    .form__surnames{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;

                        width: 120%;

                    }

                    .form__address{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;

                        width: 120%;

                    }

                    .form__phone{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;

                        width: 120%;

                    }

                    .form__comment{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;

                        width: 120%;

                    }
                    .form__checkbox{

                        /*Box model*/

                        margin-top: 2rem;
                        margin-bottom: 1.5rem;

                        font-family: ${fonts.default};
                    }    

                    .privacidad{

                        /*Text*/

                        font-family: ${fonts.default};
                        color: ${colors.secondary};

                    }

                    input[type="text"] {

                        /*Box model*/

                        width: 100%;
                        height: 2rem;
                        padding: 0.5rem;
                        margin-bottom: 1rem;
                        margin-left: 0.2rem;

                        /*Text*/
                                                
                        font-family: ${fonts.default};
                        font-size: 1rem;

                        /*Visuals*/

                        border-radius: 40px;
                        border: 0;
     
                    }

                    input[type="email"] {

                        /*Box model*/

                        width: 100%;
                        height: 2rem;
                        padding: 0.2rem;
                        margin-bottom: 2.2rem;

                        /*Text*/

                        font-family: ${fonts.default};
                        font-size: 1rem;

                        /*Visuals*/
                       
                        border-radius: 40px;
                        border: 0;

                    }


                    input[type="phone"] {

                        /*Box model*/

                        width: 100%;
                        height: 2rem;
                        padding: 0.2rem;
                        margin-bottom: 2.2rem;

                        /*Text*/
                         
                        font-family: ${fonts.default};
                        font-size: 1rem;

                        /*Visuals*/
                        
                        border-radius: 40px;
                        border: 0;
                       
                    }
 

                    a{

                        /*Text*/

                        font-family: ${fonts.secondary};
                        text-decoration: none;
                        color: ${colors.primary};
                    }

                    label{

                        /*Text*/

                        font-family: ${fonts.default};
                        color: ${colors.secondary};
                    }

                    a:hover{

                        /*Text*/

                        color: ${colors.tertiary};
                    }
                    ::placeholder {

                        /*Text*/  
                          
                        color: ${colors.primary};
                    }

            `}</style>
            </>
        </Layout>
        
    )
}
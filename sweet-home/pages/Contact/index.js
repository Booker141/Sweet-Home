import Layout from "components/Layout/Layout"
import Head from 'next/head'
import styles from "styles/global.module.css"
import {colors} from "styles/frontend-conf.js"
import {fonts} from "styles/frontend-conf.js"
import { FaUser } from "react-icons/fa";
import {FaAddressBook} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BsPencilFill} from 'react-icons/bs'
import ButtonTertiary from "components/ButtonTertiary/ButtonTertiary"

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
                <div className={styles.content}>
                    <a name="top"></a>
                    <h1 className={styles.title}>Contacto</h1>
                    <div className="contact__container">
                        <div className="container__info">
                            <h2 className={styles.title2}>¿Quieres contactar con nosotros?</h2>
                            <p className={styles.text2}>Para contactar con Sweet Home y 
                            así recoger feedback para mejorar nuestro servicio, puede hacerlo
                            a través de nuestras redes sociales.</p>
                        </div>
                        <div className="container__social">
                            <h2 className={styles.title2}>Redes sociales</h2>
                            <a href="https://www.facebook.com/sweethome.es/">
                                Facebook <BsFacebook className="icon"/>
                            </a>
                            <a href="https://www.instagram.com/sweethome.es/">
                                Instagram <BsInstagram className="icon"/>
                            </a>
                            <a href="https://www.twitter.es/sweethome">
                                Twitter <BsTwitter className="icon"/>
                            </a>
                        </div>
                    </div>
                    <div className="email">
                        <p className={styles.text}>O a través del siguiente correo electrónico:  </p>
                        <a title="Enviar correo" href="mailto:atenciónSH@gmail.com"> &nbsp; atenciónSH@gmail.com</a>
                    </div>
                    <div className="personal__container">
                        <h2 className={styles.title2}>Información personal</h2>
                        <p className={styles.text}>Aquellos campos que sean precedidos por asteriscos son obligatorios.</p>
                    </div>
                    <form className="form">
                        <div className="form__email">
                            <MdEmail size={30} color={colors.secondary} />
                            <input
                                title="Introducir email"
                                type="email"
                                name="Correo*"
                                placeholder="E-mail"
                            ></input>
                            </div>
                            <div className="form__name">
                            <FaUser size={30} color={colors.secondary} />
                            <input
                                title="Introducir nombre"
                                type="text"
                                name="Nombre*"
                                placeholder="Nombre"
                            ></input>
                            </div>
                            <div className="form__surnames">
                            <FaUser size={30} color={colors.secondary} />
                            <input
                                title="Introducir apellidos"
                                type="text"
                                name="Apellidos*"
                                placeholder="Apellidos"
                            ></input>
                            </div>
                            <div className="form__address">
                            <FaAddressBook size={30} color={colors.secondary} />
                            <input
                                title="Introducir dirección"
                                type="text"
                                name="Dirección*"
                                placeholder="Dirección"
                            ></input>
                            </div>
                            <div className="form__phone">
                            <BsFillTelephoneFill size={30} color={colors.secondary} />
                            <input
                                title="Introducir teléfono"
                                type="phone"
                                name="Teléfono*"
                                placeholder="Teléfono"
                            ></input>
                            </div>
                            <div className="form__comment">
                            <BsPencilFill size={30} color={colors.secondary} />
                            <input
                                title="Introducir comentario"
                                type="text"
                                name="Comentario*"
                                placeholder="Comentario"
                            ></input>
                            </div>
                            <div className="form__checkbox">
                            <input
                                title="Introducir comentario"
                                type="checkbox"
                                id="finalcheckbox"
                            ></input>
                            <label for="finalcheckbox">Acepto la <a className="privacidad" href="/privacy">Privacidad</a></label>
                            </div>

                            <ButtonTertiary className={styles.buttonTertiary} onClick={() => {router.push("/signIn")}}>Enviar</ButtonTertiary>
                    </form>
                </div>
                
                <a title="Volver arriba" href="#top" className={styles.buttonTo}>↑</a>
                <style jsx>{`

                    .contact__container{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;


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

                    .container__social a{

                        /*Box model*/

                        margin-bottom: 2rem;

                        color: ${colors.quaternary};
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

                    .form{

                        /*Position*/

                        position: relative;
                        left: 35%;

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
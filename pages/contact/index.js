import Head from 'next/head'
import global from 'styles/global.module.css'
import { colors, fonts } from 'styles/frontend-conf.js'
import BasicLayout from 'components/BasicLayout/BasicLayout'
import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs'
import {HiMail, HiPhone, HiQuestionMarkCircle} from 'react-icons/hi'
import {AiFillMessage} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import contact1 from '/public/contact1.png'
import Image from 'next/image'
import {server} from '/server'
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
export default function Contact () {
  return (
    <BasicLayout>
      <>
        <Head>
          <title>Contacto | Sweet Home</title>
        </Head>

        <div className='contact__image'>
          <Image src={contact1} style={{borderRadius: '20px'}} size={500} priority/>
        </div>
        <div className="contact__card-location">     
          <div className="contact__card">
            <div className='card__container1'>
              <h2 className={global.title2}>24/7</h2>
              <p className={global.text3}>Servicio al cliente</p>
            </div>
            <div className='card__container2'>
              <h2 className={global.title2}>100%</h2>
              <p className={global.text3}>Satisfacción garantizada</p>
            </div>
            <div className='card__container3'>
              <h2 className={global.title2}>+1000</h2>
              <p className={global.text3}>Personas a tu disposición</p>
            </div>
          </div>
        </div>
        <div className='contact__container'>
          <div className='container__info'>
            <h2 className={global.title2}>¿Quieres contactar con nosotros?</h2>
            <p className={global.text3}>Para contactar con Sweet Home y
              así recoger feedback para mejorar nuestro servicio, puede hacerlo
              a través de nuestras redes sociales.
            </p>
          </div>

          
          <div className='container__social'>
            <h2 className={global.title2}>Redes sociales</h2>
            <div className='social__link'>
              <a aria-label='Enlace de Facebook' href='https://www.facebook.com/sweethome.es/'>
                Facebook
              </a>
              <BsFacebook />
            </div>
            <div className='social__link'>
              <a aria-label='Enlace de Instagram' href='https://www.instagram.com/sweethome.es/'>
                Instagram
              </a>
              <BsInstagram />
            </div>
            <div className='social__link'>
              <a aria-label='Enlace de Twitter' href='https://www.twitter.es/sweethome'>
                Twitter
              </a>
              <BsTwitter />
            </div>

          </div>

        </div>
        <div className="contact__location">
          <div className='location__container'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1599.476486491192!2d-6.147650961113595!3d36.69966794360945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0dc6af434684e7%3A0xa0544d1a96755bd8!2sCtra.%20Trebujena%2C%2011404%20Jerez%20de%20la%20Frontera%2C%20C%C3%A1diz!5e0!3m2!1ses!2ses!4v1682413325803!5m2!1ses!2ses" width="1000" height="450" style={{borderRadius: '20px', border: '2px solid #f0810f'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>             
          </div>
          <div className='personal__container'>
          <div className="location__text">
                <p className={global.text__bold}>Puedes encontrarnos en la siguiente dirección:</p>
                <div className='street'>
                  <MdLocationOn color={`${colors.primary}`} size={25}/>
                  <p className={global.text}>Ctra. Trebujena, 11404 Jerez de la Frontera, Cádiz.</p>
                </div>
              </div>
              <p className={global.text__bold}>Puedes contactar con nosotros:</p>
              <div className='email'>
                <HiMail size={20} color={`${colors.primary}`}/>
                <p className={global.text}>A través del siguiente correo electrónico: <a title='Enviar correo' aria-label='Enlace a correo de atención al cliente' href='mailto:atenciónSH@gmail.com'>atenciónSH@gmail.com</a>.</p>
              </div>
              <div className='phone'>
                <HiPhone size={20} color={`${colors.primary}`}/>
                <p className={global.text}>A través del teléfono de contacto: +34 XXX XX XX XX. </p>
              </div>
              <div className='account'>
                <AiFillMessage size={20} color={`${colors.primary}`}/>
                <p className={global.text}>O envía un mensaje a la cuenta de: <a title='Cuenta de atención al cliente' aria-label='Enviar mensaje a cuenta de atención al cliente'>atencion.sh</a>.</p>
              </div>
              <div className='faq'>
                <HiQuestionMarkCircle size={20} color={`${colors.primary}`}/>
                <p className={global.text}>Puedes consultar las preguntas frecuentes en el siguiente enlace: <a title='Preguntas frecuentes' aria-label='Ir a preguntas frecuentes' href={`${server}/faq`}>FAQ</a>.</p>
            </div>
            </div>
          
          </div>
        
        <style jsx>{`


                    .contact__image{

                      /*Box model*/


                      display: flex;
                      justify-content: center;
                      align-items: center;
                      margin-bottom: 3rem;
                      object-fit: cover;

                    }

                    .contact__card-location{

                      /*Box model*/

                      display: flex;
                      justify-content: center;
                      align-items: center;

                    }

                    .contact__card{

                      /*Box model*/

                      display: flex;
                      flex-direction: row;
                      justify-content: space-around;
                      align-items: center;
                      gap: 5rem;
                      width: 82vw;
                      margin-bottom: 2rem;

                      /*Visuals*/

                      border-radius: 20px;
                      background: linear-gradient(45deg, rgba(240,129,15,1) 35%, rgba(249,166,3,1) 100%);

                    }

                    .card__container1{

                      /*Box model*/

                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;

                      /*Text*/

                      color: ${colors.secondary};

                      /*Visuals*/

                      padding: 2rem;

                    }

                    .card__container1 h2{ 

                      /*Box model*/

                      padding: 1rem;

                      /*Visuals*/ 

                      box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);
                      border-radius: 20px;
                    }

                    .card__container2 h2{

                      /*Box model*/

                      padding: 1rem;

                      /*Visuals*/

                      box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);
                      border-radius: 20px;

                    }

                    .card__container3 h2{

                      /*Box model*/

                      padding: 1rem;

                      /*Visuals*/

                      box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);
                      border-radius: 20px;

                    }

                    .card__container2{

                      /*Box model*/

                      display: flex;

                      flex-direction: column;

                      justify-content: center;

                      align-items: center;

                      /*Text*/

                      color: ${colors.secondary};

                      /*Visuals*/

                      padding: 2rem;

                    }


                    .card__container3{

                      /*Box model*/

                      display: flex;

                      flex-direction: column;

                      justify-content: center;

                      align-items: center;

                      /*Text*/

                      color: ${colors.secondary};

                      /*Visuals*/

                      padding: 2rem;

                    }



                    .contact__container{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        margin-bottom: 2rem;


                        /*Visuals*/

                        background: linear-gradient(45deg, rgba(240,129,15,1) 35%, rgba(249,166,3,1) 100%);
                        border-radius: 20px;            
                        
                    }

                    .location__container{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        gap: 2rem;
                        align-items: center;
                        width: 100%;


                    }

                    .contact__location{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        gap: 1rem;
                        
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
                        background-size: 100%;
                        color: ${colors.secondary};

                        
                    }

                    .personal__container{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        width: 100%;

                        /*Visuals*/

                        border: 2px solid ${colors.primary};
                        border-radius: 20px;
                    }

                    .social__link{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: 1rem;
                        padding: 1rem;
                        margin-bottom: 2rem;

                        /*Misc*/
                        
                        border-radius: 20px;
                        transition: 0.3s ease;
                        box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);

                    }

                    .social__link a{

                        /*Box model*/

                        color: ${colors.secondary};
                        font-family: ${fonts.default};

                        
                    }

                    .social__link:hover{

                        /*Text*/

                        font-size: 1.2rem;
                    }



                    .personal__container p{

                        /*Box model*/

                        margin-bottom: 1rem;

                    }

                    .email{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        gap: 1rem;

                    }

                    .phone{

                        /*Box model*/

                        display: flex;

                        flex-direction: row;

                        align-items: center;

                        justify-content: center;
                        gap: 1rem;
                    }

                    .account{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        gap: 1rem;

                    }

                    .faq{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        gap: 1rem;

                    }

                    .street{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        gap: 1rem;
                    }



  

                    .privacidad{

                        /*Text*/

                        font-family: ${fonts.default};
                        color: ${colors.secondary};

                    }

 

                    a{

                        /*Text*/

                        font-family: ${fonts.default};
                        text-decoration: none;
                        color: ${colors.primary};
                    }

                    label{

                        /*Text*/

                        font-family: ${fonts.default};
                        color: ${colors.secondary};
                    }

                    h1{
                      /*Text*/

                      font-size: 4rem;
                      font-weight: 600;
                      background-color: ${colors.primary};
                      font-family: "Archivo Black", sans-serif;
                      background-image: linear-gradient(45deg, #f0810f, #ffe45c);
                      background-repeat: repeat;
                      -webkit-background-clip: text;
                      -webkit-text-fill-color: transparent; 
                      background-size: 100%
                      text-align: center;
                      
                    }

                    a:hover{

                        /*Text*/

                        color: ${colors.tertiary};
                    }
                    ::placeholder {

                        /*Text*/  
                          
                        color: ${colors.primary};
                    }

            `}
        </style>
      </>
    </BasicLayout>

  )
}

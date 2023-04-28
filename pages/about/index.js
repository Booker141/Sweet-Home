import Head from 'next/head'
import Image from 'next/image'
import global from 'styles/global.module.css'
import { colors } from 'styles/frontend-conf.js'
import BasicLayout from 'components/BasicLayout/BasicLayout'
import { BsChatRightText } from 'react-icons/bs'
import { FaSlideshare } from 'react-icons/fa'
import { AiOutlineEdit } from 'react-icons/ai'
import { MdPets } from 'react-icons/md'
import { server } from '/server'
import about1 from '../../public/about-1.svg'

/*
    * @author Sergio García Navarro
    * @returns About page
    * @version 1.0
    * @date 13/12/2020
    * @description This page is the about page of the application
*/
/**
 * It returns a Layout component with a Head component inside it, which has a title of "Sobre
 * nosotros", and a h1 component with a className of "title" and the text "Sobre nosotros", and a h2
 * component with a className of "secondary" and the text "Sweet Home", and a p component with a
 * className of "text" and the text "Es una red social que abarca el mundo animal y trata de facilitar
 * su adaptación a nuevos cuidados, a nuevos dueños y a una mejora diaria de su vida.", and a h2
 * component with a className of "secondary" and the text "Nuestra misión", and a p component with a
 * className of "text" and the text "¿Alguna vez has sentido rechazo o ignorancia
 */
export default function About () {
  return (

    <BasicLayout>
      <Head>
        <title>Sobre nosotros</title>
      </Head>
      <div className="header__block">
        <div className='title'>
          <Image src="/LogoWeb.svg" alt="Imagen del logo" width={500} height={500}/>
          <h2 className={global.secondary__bold}>Más que una aplicación</h2>
        </div>
      
        <div className='banner'>
          <p className={global.text}>Sweet Home es una red
            social que abarca el mundo animal y trata de facilitar
            su <span className={global.colorized}>adaptación a nuevos cuidados</span>, <span className={global.colorized}>a nuevos dueños </span> y a
            <span className={global.colorized}> &nbsp; una mejora diaria de su vida.</span>
          </p>
        </div>
      </div>
      <a className="about__video" href={`${server}/auth/signUp`}>
      <video
            autoPlay loop muted
            style={{ position: 'relative', top: '0', left: '0', width: '100%', height: '58rem', objectFit: 'cover', translate: 'transform(-50%,-50%)', borderRadius: '20px 20px 20px 20px', marginBottom: '3rem' }}
          >
            <source src='/videos/video3.mp4' />
        </video>
      </a>
      <div className='container1'>
        <div className='container1__column1'>
          <h3 className={global.title5}>Nuestra misión</h3>
          <p className={global.text3}>¿Alguna vez has sentido rechazo o ignorancia
            en ciertas publicaciones en Twitter, Instagram o Facebook sobre animales
            perdidos? ¿No puedes cuidar de tu mascota o has encontrado a una que se
            ha perdido y no sabes que hacer? Con Sweet Home daremos respuesta a estas
            preguntas.
          </p>
          <p className={global.text3}>El objetivo principal de Sweet Home es
            <strong> &nbsp; mejorar la calidad de vida de los animales</strong> facilitándole
            a los dueños funcionalidades que usar en su día a día.
          </p>

          <p className={global.text3}>Entre ellas están: </p>
          <ul className={global.list2}>
            <li className={global.list__item2}> Publicar fotos e información de los animales.</li>
            <li className={global.list__item2}> Permitir el contacto inmediato con el usuario
              que ha realizado una publicación.
            </li>
            <li className={global.list__item2}> Seguir a los centros
              de acogida de animales que sean de interés.
            </li>
          </ul>
        </div>
        <div className='container1__column2'>
          <div className='column2__img'>
            <Image src={about1} alt='Persona jugando con su perro' priority />
          </div>
        </div>
      </div>

      <div className='benefits-title'>
        <h3>Ventajas</h3>
      </div>

      <div className={global.cards}>
        <div className={global.card__large}>
          <div style={{ color: '#f0810f' , marginTop: '2rem' }}>
            <MdPets size={37} />
          </div>
          <h2 className={global.title2}>Promover el derecho de los animales</h2>
          <p className={global.text}><span className={global.colorized}>La libertad y los derechos de los animales</span> son la base de Sweet Home. </p>
          <p className={global.text}>En nuestro planeta habitan una gran variedad de animales pero solo un pequeño
            porcentaje convive con nosotros, así que debemos darles el mejor cuidado
            posible.
          </p>
        </div>
        <div className={global.card__large}>
          <div style={{ color: '#f0810f', marginTop: '2rem' }}>
            <FaSlideshare size={37} />
          </div>
          <h2 className={global.title2}>Compartir de forma rápida y segura</h2>
          <p className={global.text}>Con Sweet Home puedes <span className={global.colorized}> compartir
            información
                                                           </span> sin tener que preocuparte de la inmediatez o de la
            seguridad.
          </p>
          <p className={global.text}>Comparte el alimento favorito de tu mascota o un tip
            que te haya cambiado la forma de interactuar con ella.
          </p>
        </div>
        <div className={global.card__large}>
          <div style={{ color: '#f0810f' , marginTop: '2rem' }}>
            <BsChatRightText size={37} />
          </div>
          <h2 className={global.title2}>Chatea con gente de todo el mundo</h2>
          <p className={global.text}>Dispones de una <span className={global.colorized}> función de chat</span> para
            conectar con gente de tu mismo entorno o gente a kilómetros de
            distancia para preguntarles dudas o consejos.
          </p>
        </div>
        <div className={global.card__large}>
          <div style={{ color: '#f0810f' , marginTop: '2rem' }}>
            <AiOutlineEdit size={37} />
          </div>
          <h2 className={global.title2}>Modifica el perfil a tu gusto</h2>
          <p className={global.text}>¡Sweet Home permite modificar el
            perfil para que puedas <span className={global.colorized}>añadir información sobre ti y tu mascota &nbsp; </span>
            a tu gusto!
          </p>
        </div>
      </div>
      <style jsx>{` 

                        .header__block{

                            /*Box model*/

                            display: flex;
                            flex-direction: column;
                            margin-bottom: 5rem;
                        }

                        .container1{

                            /*Box model*/

                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                            margin-bottom: 2rem;
                            padding: 2rem;

                            /*Visuals*/

                            background: linear-gradient(45deg, rgba(240,129,15,1) 35%, rgba(249,166,3,1) 100%);
                            border-radius: 70px 0 0 70px;


                        }

                        .about__video{

                            /*Box model*/

                            display: flex;
                            justify-content: center;
                            align-items: center;

                            /*Visuals*/

                            border-radius: 20px;

                        }
                        .container1__column1{

                            /*Box model*/

                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            margin-right: 5rem;
                            margin-left: 5rem;
                            margin-bottom: 3rem;

                        }
                        
                        .container1__column1 p{

                            /*Box model*/

                            margin-bottom: 2rem;

                        }

                        .container1__column2{

                            /*Box model*/

                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center; 
                        }

         

                        .column2__img{

                            /*Box model*/

                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            width: 40rem;
                            height: 40rem;
                            
                        
                        }
                        
                       
                        .benefits-title{


                            /*Box model*/


                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;

                             margin-bottom: 4rem;
                        
                        }


                        .title{

                            /*Box model*/

                            display: flex;
                            flex-direction: column;
                            align-items: center;

                            

                        }



                        .title h2:last-child{

                            /*Text*/

                            font-style: italic;

                        }

                        .banner{

                            /*Box model*/

                            display: flex;
                            flex-direction: column;
                            align-items: center;
                        
                        }
                        
                        p{

                            /*Box model*/

                            margin-bottom: 1rem;
                        }

                        .benefits-title h3{

                          

                          /*Text*/


                          font-size: 3rem;
                              font-weight: bold;
                              background-color: ${colors.primary};
                              font-family: "Archivo Black", sans-serif;
                              background-image: linear-gradient(45deg, #f0810f, #ffe45c);
                              background-repeat: repeat;
                              -webkit-background-clip: text;
                              -webkit-text-fill-color: transparent; 
                              background-size: 100%
                              text-align: center;


                        }
                    `}
      </style>
    </BasicLayout>

  )
}

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'
import styles from "styles/global.module.css"
import {fonts} from "styles/frontend-conf.js"
import {colors} from "styles/frontend-conf.js"
import Header from "components/Header/Header"
import Carousel from "components/Carousel/Carousel"
import BasicFooter from "components/BasicFooter/BasicFooter"
import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary"
import {AiOutlineMobile} from "react-icons/ai"
import {AiOutlineTablet} from "react-icons/ai"
import {BsLaptop} from "react-icons/bs"
import {MdPets} from "react-icons/md"
import {GiPlantsAndAnimals} from "react-icons/gi"
import {CgCommunity} from "react-icons/cg"
import inicio1 from '../public/inicio-1.jpg'
import inicio2 from '../public/inicio-2.svg'
import inicio3 from '../public/inicio-3.svg'
import component1 from '../public/component1-home.svg'
import component2 from '../public/component2-home.svg'
import component3 from '../public/component3-home.svg'

export default function Principal(){

  const router = useRouter();

  return(

    <>
      <Head><title>Sweet Home</title></Head>
      <Header url1="/attendances" url2="/about" url3="/contact" url4="/signIn"
                          text1="Cuidados" text2="Quiénes somos" text3="Contacto" text4="Iniciar Sesión"/>
      <div className={styles.content}>
        <a name="top"></a>
        <div className="content__container1">
          <div className="container1__title">
            <h1 className="title">
              <span>
                <span>S</span>
                <span>w</span>
                <span>e</span>
                <span>e</span>
                <span>t</span>
                <span>&nbsp;</span>
                <span>H</span>
                <span>o</span>
                <span>m</span>
                <span>e</span>
              </span>
            </h1>
          </div>
          <p className={styles.text}>Somos una empresa dedicada a la atención de 
          mascotas, brindando servicios de cuidado y hospedaje para todo tipos de 
          mascotas.</p>
        </div>
        <div className="imagen-inicio1">
          <Image src={inicio1} alt="Imagen de un perro y un gato" priority/>
        </div>
        <div className="content__container2">
          <div className="container2__column1">
            <h1>¡Únete ahora mismo a nuestra <span className={styles.colorized}>comunidad</span>!</h1>
            <ButtonPrimary onClick={() => router.push('/signUp')}>Regístrate</ButtonPrimary>
            <p className="subtext">La mayor comunidad de amantes de los animales 🐾</p>
          </div>
          <div className="container2__column2">
            <div className="column2__component">
              <Image src={component1} alt="Opinion 1"/>
              <Image src={component2} alt="Opinion 2"/>
              <Image src={component3} alt="Opinion 3"/>
            </div>
          </div>
        </div>
        <Carousel/>
        <div className="content__container3">
            <h2 className={styles.title}>¿Qué es Sweet Home?</h2>
            <p className={styles.text}>Es una red social que abarca el mundo animal
             y trata de facilitar su adaptación a nuevos cuidados, a nuevos dueños 
             y a una mejora diaria de su vida.</p>
            <Link href="/about"><a className={styles.link}>Saber más →</a></Link>
        </div>
  
        <div className="content__container4">
          <div className="container4__column1">
            <h2 className={styles.title}>¿Qué nos diferencia?</h2>
            <p className={styles.text}>Nuestra red social se diferencia de otras 
            redes sociales en las siguientes características: </p>
          </div>
            <div className={styles.cards}>
              <div className={styles.card__short}>
                <div style={{color: '#f0810f'}}>
                    <MdPets size={37}/>
                </div>  
                <h2 className={styles.title2}>Cuidados</h2>
                <p className={styles.text}>En nuestra red social podrás encontrar 
                cuidados que mejoren la calidad de vida de tu mascota.</p>
              </div>
              <div className={styles.card__short}>
                <div style={{color: '#f0810f'}}>
                    <GiPlantsAndAnimals size={37}/>
                </div>
                <h2 className={styles.title2}>Comunidad</h2>
                <p className={styles.text}>Aquí encontrarás una comunidad de amantes
                 de los animales que pueden darte consejos sobre vuestras mascotas.</p>
              </div>
              <div className={styles.card__short}>
                <div style={{color: '#f0810f'}}>
                    <CgCommunity size={37}/>
                </div>
                <h2 className={styles.title2}>Cuidadoras</h2>
                <p className={styles.text}>¡Existen perfiles exclusivos de cuidadoras
                si quieres encontrar tu mascota ideal!</p>
              </div>
            </div>
        </div>

        <div className="content__container5">
            <h2 className={styles.title}>Rompemos las limitaciones</h2>
            <p className={styles.text}>Nuestra red social rompe las limitaciones en cuanto 
            a los dispositivos en las que se puede utilizar</p>  
            <div className="container5__column1">
              <h2 className={styles.title2}>¿Qué dispositivos soporta?</h2>
              <div className="icons">
                  <div style={{color: '#f0810f'}} className="icon__item">
                      <AiOutlineMobile size={80}/>
                      <p className={styles.text}>Móviles</p>  
                  </div>  
                  <div style={{color: '#f0810f'}} className="icon__item">
                      <AiOutlineTablet size={80}/>
                      <p className={styles.text}>Tablets</p>
                  </div>  
                  <div style={{color: '#f0810f'}} className="icon__item">
                      <BsLaptop size={80}/>
                      <p className={styles.text}>Ordenadores</p>
                  </div>  
              </div>
            </div>
        </div>

      <div className="content__container6">
        <h2 className={styles.title}>Nuestra misión</h2>
        <div className="container6__column1">
          <div className="column1__text">
            <p className={styles.text}>¿Alguna vez has sentido rechazo o ignorancia en ciertas 
            publicaciones en Twitter, Instagram o Facebook sobre animales perdidos? ¿No puedes 
            cuidar de tu mascota o has encontrado a una que se ha perdido y no sabes que hacer? 
            Con Sweet Home daremos respuesta a estas preguntas.</p>

            <p className={styles.text}>El objetivo principal de Sweet Home es mejorar la calidad 
            de vida de los animales facilitándole a los dueños funcionalidades que usar en su día a día. 
            Entre ellas están: publicar fotos e información de los animales, permitir el contacto inmediato 
            con el usuario que ha realizado una publicación y seguir a los centros de acogida de animales 
            que sean de interés.</p>
          </div>
          <div className="imagen-inicio2">
            <Image src={inicio2} alt="Familia en la naturaleza" />
          </div>
        </div>  
        <h2 className={styles.title}>¿Cómo la llevamos a cabo?</h2>
        <div className="container6__column2">
          <div className="column2__text">
            <p className={styles.text}>Para llevar a cabo nuestra misión, hemos 
            creado una red social que permite a los usuarios compartir información
             sobre sus mascotas, así como también, información sobre animales 
             perdidos o encontrados. Además, los usuarios podrán seguir a los 
             centros de acogida de animales que sean de su interés.</p>
            <p className={styles.text}>Además, los usuarios podrán publicar fotos 
            e información de los animales, permitir el contacto inmediato con el 
            usuario que ha realizado una publicación y seguir a los centros de 
            acogida de animales que sean de interés.</p>
          </div>
          <div className="imagen-inicio3">
            <Image src={inicio3} alt="Personas trabajando"/>
          </div>  
        </div>
      </div>
      </div>
      <a title="Volver arriba" href="#top" className={styles.buttonTo}>↑</a>

      <BasicFooter color="#f0810f" hover="#f9A603" url1="/use" text1="Información" url2="/privacy" text2="Privacidad"
                   url3="/conditions" text3="Condiciones" url4="/accessibility" text4="Accesibilidad"/>

      <style jsx>{`

          .carousel{

            /*Box model*/

            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            padding: 2rem;
            margin-bottom: 3rem;

            /*Text*/

            color: ${colors.secondary};
            
            /*Visuals*/

            background-color: ${colors.primary};
            border-radius: 10px;
          
          }


          .content__container1{

            /*Box model*/

            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;

          }

          .content__container1 p{

            /*Box model*/

            width: 100%;

          }
          
          .container1__title{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;

          }

          .content__container1 p, h1 span span{

            opacity: 0;
            position: relative;
            bottom: -1em;
            animation: texto 1.5s linear forwards;

          }

          .content__container2{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 3rem;

            /*Text*/

            font-family: ${fonts.default};

          }

          .container2__column1{

            /*Box model*/

            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 4rem;
            line-height: 4rem;

          }

          .container2__column1 h1{

            /*Box model*/

            margin-bottom: 2.5rem;

            /*Text*/

            font-size: 2.5rem;


          }

          .container2__column2{

            /*Box model*/

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;


          }

          .content__container3{

            /*Box model*/

            width: 100%;
            margin-bottom: 2rem;
            padding: 1rem;

            /*Visuals*/

            border: 1px solid ${colors.primary};
            border-radius: 20px;
            
          }

          .content__container3 h2, p, a{

            /*Box model*/

            display: flex;
            align-items: center;
            margin-left: 2rem;
            margin-right: 2rem;

          }
          .content__container3 p{

            /*Box model*/

            margin-bottom: 3rem;

          }

          .content__container3 a{

            /*Box model*/

            margin-bottom: 2rem;

          }

          .content__container4{

            /*Box model*/

            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-bottom: 3rem;

          }

          .container4__column1{

            /*Box model*/

            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 2rem;

          }

          .content__container5{

            /*Box model*/

            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 3rem;

          }

          .container5__column1{

            /*Box model*/

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          

          }

          .content__container6{

            /*Box model*/

            padding: 1rem;
            margin-bottom: 2rem;
            margin-right: 4rem;

            /*Visuals*/

            background-color: ${colors.primary};
            border-radius: 0 70px 70px 0;

          }

          .content__container6 h2{

            /*Box model*/

            display: flex;
            align-items: center;
            margin-left: 2rem;

            color: ${colors.secondary};
            
          }

          .content__container6 p{

            /*Box model*/

            display: flex;
            align-items: center;
            margin-left: 2rem;

            color: ${colors.secondary};

          }

          .container6__column1{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 2rem;

          }

          .container6__column2{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 2rem;

          }

          .column1__text{

            /*Box model*/

            display: flex;
            flex-direction: column;

          }

          .column2__text{

            /*Box model*/

            display: flex;
            flex-direction: column;
          
          }

          .title{

              /*Text*/

              font-size: 5rem;
              font-weight: 500;
              color: ${colors.primary};
              font-family: 'Satisfy';
              text-align: center;
              margin: 0;
              padding: 0;

          }
          
          
          .column2__component{

            /*Box model*/

            margin-bottom: 1rem;
            width: 30rem;

          }

          .icons{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;


          }

          .icon__item{

            /*Box model*/

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 5rem;
          }

          .text{

            /*Box model*/

            margin-bottom: 2rem;

          }


          .subtext{

            /*Text*/

            font-size: 0.9rem;
            margin-left: 0rem;

          }

          .imagen-inicio1{

            /*Visuals*/

            width: 100%;
            height: 100%;
            border-radius: 10px;

            /*Misc*/

            animation: imagen 2s linear forwards;

          }

          .imagen-inicio2{

            /*Box model*/

            margin-right: 2rem;

            /*Visuals*/

            width: 250%;
            height: 250%;
            

          }

          .imagen-inicio3{

            /*Box model*/

            margin-right: 2rem;

            /*Visuals*/

            width: 250%;
            height: 250%;

          }

      
          @keyframes texto {
            0% { bottom: -1em; opacity: 0.3; }
            30% { bottom: 0.5em; opacity: 0.5;}
            50% { bottom: 1em; opacity: 0.8;}
            70% { bottom: 0.5em; opacity: 0.9;}
            100% { bottom: 0em; opacity: 1; }
          }

          @keyframes imagen {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          
      `}</style>
    </>
  )
}
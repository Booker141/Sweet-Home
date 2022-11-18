import Head from 'next/head'
import Header from "components/Header/Header"
import BasicFooter from "components/BasicFooter/BasicFooter"
import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary"
import styles from "styles/global.module.css"
import {colors} from "styles/frontend-conf.js"
import {useRouter} from 'next/router'
import {fonts} from "styles/frontend-conf.js"
import {MdPets} from 'react-icons/md'
import Carousel from "components/Carousel/Carousel"
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
            <p className={styles.text}>Somos una empresa dedicada a la <span className={styles.strong}> &nbsp; atención de mascotas</span>, brindando servicios de cuidado y hospedaje para todo tipos de mascotas.</p>
        </div>
        <img src="/inicio-1.jpg" alt="Imagen de un perro y un gato" className="imagen-inicio1"></img>
        <div className="content__container2">
          <div className="container2__column1">
            <h1>¡Únete ahora mismo a nuestra comunidad!</h1>
            <ButtonPrimary onClick={() => router.push('/signUp')}>Regístrate</ButtonPrimary>
            <p className="subtext">La mayor comunidad de amantes de los animales 🐾</p>
          </div>
          <div className="container2__column2">
            <img src="/component1-home.svg" alt="Opinion 1" className="column2__component"/>
            <img src="/component2-home.svg" alt="Opinion 2" className="column2__component"/>
            <img src="/component3-home.svg" alt="Opinion 3" className="column2__component"/>
          </div>
        </div>
        <Carousel/>
        <div className="content__container3">
            <h2 className={styles.title2}>¿Qué es Sweet Home?</h2>
            <p className={styles.text2}>Es una red social que abarca el mundo animal y trata de facilitar su adaptación a nuevos cuidados, a nuevos dueños y a una mejora diaria de su vida.</p>
        </div>
        <div className="content__container4">
            <h2 className={styles.title2}>Nuestra misión</h2>
            <p className={styles.text2}>¿Alguna vez has sentido rechazo o ignorancia en ciertas publicaciones en Twitter, Instagram o Facebook sobre animales perdidos? ¿No puedes cuidar de tu mascota o has encontrado a una que se ha perdido y no sabes que hacer? Con Sweet Home daremos respuesta a estas preguntas.</p>
            <p className={styles.text2}>El objetivo principal de Sweet Home es mejorar la calidad de vida de los animales facilitándole a los dueños funcionalidades que usar en su día a día. Entre ellas están: publicar fotos e información de los animales, permitir el contacto inmediato con el usuario que ha realizado una publicación y seguir a los centros de acogida de animales que sean de interés.</p>
        </div>
      </div>

      <a title="Volver arriba" href="#top" className={styles.buttonTo}>↑</a>

      <BasicFooter color='#f0810f' hover='#f9A603' url1="/use" text1="Información" url2="/privacy" text2="Privacidad"
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

            color: #ffffff;
            
            /*Visuals*/

            background-color: ${colors.primary};
            border-radius: 10px;
          
          }


          .content__container1{

            /*Box model*/

            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 auto;
            padding: 0 1rem;
            width: 100%;
            max-width: 1200px;

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
            margin-right: 10rem;
            margin-left: 4rem;

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
            max-width: 1200px;
            margin-bottom: 2rem;
            padding: 1rem;
            
            /*Text*/

            color: ${colors.secondary};

            /*Visuals*/

            background-color: ${colors.primary};
            border-radius: 10px;
          }

          .content__container3 h2, p{

            /*Box model*/

            display: flex;
            align-items: center;
            justify-content: center;

          }

          .content__container4{

            /*Box model*/

            padding: 1rem;
            width: 100%;
            max-width: 1200px;
            margin-bottom: 2rem;

            /*Text*/

            color: ${colors.secondary};

            /*Visuals*/

            background-color: ${colors.primary};
            border-radius: 10px;
          }

          .content__container4 h2, p{

            /*Box model*/

            display: flex;
            align-items: center;
            justify-content: center;
            
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

          .icon{

            /*Text*/

            color: ${colors.primary};
            font-size: 2rem;

            /*Visuals*/

            margin: 1rem;
          }

          .text{

            /*Box model*/

            margin-bottom: 2rem;

          }


          .subtext{

            /*Text*/

            font-size: 0.9rem;

          }

          .imagen-inicio1{

            /*Visuals*/

            width: 100%;
            height: 100%;
            border-radius: 10px;

            /*Misc*/

            animation: imagen 2s linear forwards;

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
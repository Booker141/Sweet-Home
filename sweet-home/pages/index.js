import Head from 'next/head'
import Header from "components/Header/Header"
import BasicFooter from "components/BasicFooter/BasicFooter"
import styles from "styles/global.module.css"
import {colors} from "styles/frontend-conf.js"
import {MdPets} from 'react-icons/md'
export default function Principal(){
  return(
    <>
      <Head><title>Sweet Home</title></Head>
      <Header url1="/attendances" url2="/info" url3="/contact" url4="/signIn"
                          text1="Cuidados" text2="Quiénes somos" text3="Contacto" text4="Iniciar Sesión"/>
      <div className={styles.content}>
        <div className="content__container1">
          <div className="content__container1__title">
            <MdPets className="icon"></MdPets><h2 className={styles.title}>Sweet Home</h2><MdPets className="icon"></MdPets>
          </div>
            <p className={styles.text}>Somos una empresa dedicada a la atención de mascotas, brindando servicios de cuidado y hospedaje para todo tipos de mascotas.</p>
        </div>
        <img src="/inicio-1.jpg" alt="Imagen de un perro y un gato" className="imagen-inicio1"></img>
        <div className="content__container2">
            <h2 className={styles.secondary}>¿Qué es Sweet Home?</h2>
            <p className={styles.text}>Es una red social que abarca el mundo animal y trata de facilitar su adaptación a nuevos cuidados, a nuevos dueños y a una mejora diaria de su vida.</p>
        </div>
        <div className="content__container3">
            <h2 className={styles.secondary}>Nuestra misión</h2>
            <p className={styles.text}>¿Alguna vez has sentido rechazo o ignorancia en ciertas publicaciones en Twitter, Instagram o Facebook sobre animales perdidos? ¿No puedes cuidar de tu mascota o has encontrado a una que se ha perdido y no sabes que hacer? Con Sweet Home daremos respuesta a estas preguntas.
            El objetivo principal de Sweet Home es mejorar la calidad de vida de los animales facilitándole a los dueños funcionalidades que usar en su día a día. Entre ellas están: publicar fotos e información de los animales, permitir el contacto inmediato con el usuario que ha realizado una publicación y seguir a los centros de acogida de animales que sean de interés.</p>
        </div>
            <h2 className={styles.secondary}>¿Cómo funciona?</h2>
      </div>
      <BasicFooter url1="/info" text1="Información" url2="/privacy" text2="Privacidad"
                   url3="/conditions" text3="Condiciones" marginTop='10rem'/>
      <style jsx>{`
      
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
          
          .content__container1__title{
            /*Box model*/
            display: flex;
            flex-direction: row;
            align-items: center;

          }

          .content__container2{

            /*Box model*/

            width: 100%;
            max-width: 1200px;
            margin-bottom: 2rem;
            padding: 1rem;

            /*Text*/

            color: ${colors.white};
            
            /*Visuals*/

            background-color: ${colors.primary};
            border-radius: 10px;
          }

          .content__container3{
            /*Box model*/

            padding: 1rem;
            width: 100%;
            max-width: 1200px;
            margin-bottom: 2rem;

            /*Text*/

            color: ${colors.white};

            /*Visuals*/

            background-color: ${colors.primary};
            border-radius: 10px;
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


          .imagen-inicio1{

            /*Box model*/

            margin: 0 auto;
            margin-bottom: 3rem;

            /*Visuals*/

            border-radius: 10px;

          }
      
      
      `}</style>
    </>
  )

}
import Head from 'next/head'
import Header from "components/Header/Header"
import BasicFooter from "components/BasicFooter/BasicFooter"
import styles from "styles/global.module.css"
export default function Principal(){
  return(
    <>
      <Head><title>Sweet Home</title></Head>
      <Header url1="/attendances" url2="/info" url3="/contact" url4="/signIn"
                          text1="Cuidados" text2="Quiénes somos" text3="Contacto" text4="Iniciar Sesión"/>
      <div className="content">
        <div className="content__container">
            <h2 className={styles.secondary}>Sweet Home</h2>
            <p className={styles.text}>Es una red social que abarca el mundo animal y trata de facilitar su adaptación a nuevos cuidados, a nuevos dueños y a una mejora diaria de su vida.</p>
        </div>
            <h2 className={styles.secondary}>Nuestra misión</h2>
            <p className={styles.text}>¿Alguna vez has sentido rechazo o ignorancia en ciertas publicaciones en Twitter, Instagram o Facebook sobre animales perdidos? ¿No puedes cuidar de tu mascota o has encontrado a una que se ha perdido y no sabes que hacer? Con Sweet Home daremos respuesta a estas preguntas.
            El objetivo principal de Sweet Home es mejorar la calidad de vida de los animales facilitándole a los dueños funcionalidades que usar en su día a día. Entre ellas están: publicar fotos e información de los animales, permitir el contacto inmediato con el usuario que ha realizado una publicación y seguir a los centros de acogida de animales que sean de interés.</p>
            <h2 className={styles.secondary}>Ventajas</h2>

            <h2 className={styles.secondary}>¿Cómo funciona?</h2>
            /*Añadir funcionalidad resumida y carousel de imagenes*/
      </div>
      <BasicFooter url1="/info" text1="Información" url2="/privacy" text2="Privacidad"
                   url3="/conditions" text3="Condiciones" marginTop='10rem'/>
      <style jsx>{`
      
        
      
      
      
      
      
      
      
      `}</style>
    </>
  )

}
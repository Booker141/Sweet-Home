import Layout from "components/Layout/Layout"
import Head from 'next/head'
import styles from "styles/global.module.css"
import {fonts} from "styles/frontend-conf.js"
import {colors} from "styles/frontend-conf.js"

/*
    * @author Sergio García Navarro
    * @returns Conditions page
    * @version 1.0
    * @date 13/12/2020
    * @description This page is the conditions page of the application
*/
/**
 * It returns a Layout component with a Head component inside it, which sets the title of the page to
 * "Condiciones", and a bunch of other components inside it, which display the terms and conditions of
 * the app
 * @returns the Layout component with the children props being the <> component.
 */
export default function Conditions() {
    return (
        <Layout>
            <>
            <Head><title>Condiciones</title></Head>
            <div className={styles.content}>
                <h2 className="first-line">5 de agosto de 2022</h2>
                <hr className={styles.line}></hr>
                <h1 className={styles.title}>Términos y condiciones de Sweet Home ☑︎</h1>
                <h2 className={styles.secondary}>1. ¿Qué es Sweet Home?</h2>
                <p className={styles.text}>Sweet Home es una red social desarrollada por Sweet Home Corporation que se encarga de reunir a todas las personas interesadas en el mundo de la adopción animal y de animales perdidos o abandonados para darles las mejores comodidades y cuidados posibles.
                Además, los usuarios podrán publicar fotos e información de los animales, teniendo un contacto inmediato con otros usuarios de la aplicación. A estos usuarios se les puede seguir para enterarte de las últimas novedades.</p>
                <hr className="black-line"></hr>

                <h2 className={styles.secondary}>2. ¿Cuál es el alcance de la aplicación?</h2>
                <p className={styles.text}>Sweet Home contempla una gran diversidad de usuarios eludiendo la restricción de edades, usada en su mayoría en otras aplicaciones similares. Podrá ser usada por adultos y niños, estos últimos con previo consentimiento de sus tutores legales.
                Además, tiene como objetivo facilitar el proceso de adopción, búsqueda y publicación de cuidados en un foro, por lo que el target de la aplicación son aquellas que la vayan a usar con dichos propósitos.
                Por último, es importante destacar que los centros de recogida pueden crearse un perfil adaptado en la aplicación, por lo que también fue pensada para este perfil de usuario desde los inicios.</p>
                <hr className="black-line"></hr>

                <h2 className={styles.secondary}>3. Uso de la aplicación como usuario registrado</h2>
                <p className={styles.text}>Para acceder a las funciones de la aplicación, necesita crear una cuenta y acceder como usuario. Aparte de las garantías de seguridad que proporciona Sweet Home, debe ser responsable de la seguridad de su cuenta, haciendo uso de una contraseña robusta y limitando el acceso a su persona. 
                El usuario registrado podrá utilizar todas las funciones que ofrece Sweet Home, publicación de información y contenido multimedia e interacción con los usuarios.</p>
                <hr className="black-line"></hr>

                <h2 className={styles.secondary}>4. Política de datos</h2>
                <p className={styles.text}>Para llevar a cabo todas las funciones, Sweet Home recopila datos y usa esa información para diversos fines. En el apartado “enlace a política de privacidad” describimos las formas de recopilación y uso de los datos proporcionados.</p>
                <hr className="black-line"></hr>

                <h2 className={styles.secondary}>5. ¿Cómo eliminar mi cuenta de la aplicación?</h2>
                <p className={styles.text}>Todos los usuarios pueden eliminar su cuenta desde la configuración de su perfil. 
                Sweet Home recomienda el uso adecuado de esta función ya que no se hace cargo de las eliminaciones accidentales. Si la cuenta ya ha sido eliminada no podrá ser recuperada</p>
                <hr className="black-line"></hr>

                <h2 className={styles.secondary}>6. Responsabilidad de Sweet Home</h2>
                <p className={styles.text}>Sweet Home garantiza la seguridad del uso de su aplicación así como un tratamiento correcto de los datos.
                El usuario es el responsable de los dispositivos electrónicos y servicios que debe poseer para hacer uso de la aplicación. Los costes de estos servicios son responsabilidad del usuario.
                La aplicación incluye enlaces a sitios web de terceros, redes sociales de la empresa en su totalidad. Si el usuario hace uso de estos enlaces, deberá revisar los términos y condiciones de estos sitios web. Sweet Home no ha sido patrocinado por ninguno de estas aplicaciones de terceros.
                Si se produce alguna actividad ilegal dentro de la app que afecte al funcionamiento de la app, Sweet Home tiene el derecho de cerrar dicha aplicación sin deber nada a los usuarios.
                </p>
            </div>
                <style jsx>{`


                    .first-line{

                        /*Text*/

                        font-family: ${fonts.default};
                        font-size: 0.9rem;
                        font-weight: bold;
                        }

                    .last-line{

                        /*Box model*/

                        margin-top: 2rem;

                        /*Text*/

                        font-weight: 350;
                        font-family: ${fonts.default};
                    }
                    .list{
                        /*Text*/

                        font-family: ${fonts.secondary};

                        /*Visuals*/

                        list-style-type: circle;
                    }
                    .black-line{
                        /*Box model*/

                        margin-bottom: 3rem;
                    }
                    hr{
                        /*Box model*/

                        width: 100%;
                    }

                    p{
                        /*Box model*/

                        margin-bottom: 4rem;
                    }
                    h2{

                        /*Visuals*/

                        font-weight: 400;
                        color: ${colors.primary};
                    }
                    
                `}</style>
            </>
        </Layout>
    )
}
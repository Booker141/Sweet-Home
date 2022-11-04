import Layout from "components/Layout/Layout"
import Head from 'next/head'
import styles from "styles/global.module.css"
/*
    * @author Sergio García Navarro
    * @returns Rules page
    * @version 1.0
    * @date 13/01/2020
    * @description Rules page
*/
/*
    * This is the rules page.
    * It contains the rules and policies of Sweet Home.
    * The purpose of Sweet Home is to provide the services implemented, setting rules and policies that promote the security until the end of the activity.
    * It is therefore that the behavior of the user will be restricted.
    * These rules and policies have as objective to guarantee the security of all types of activity that occurs within Sweet Home, preventing the user to feel unconfident during his use:
    * - The user will not be able to use the services of Sweet Home without the authorization of the owner of the account.
*/
export default function Rules(){
    return (
        <Layout>
            <>
                <div className={styles.content}>
                    <Head><title>Reglas y políticas</title></Head>
                    <a name="top"></a>
                    <h1 className={styles.title}>Reglas y políticas</h1>
                    <p className={styles.text}>En este apartado, conocerá las 
                    reglas de Sweet Home. El propósito de Sweet Home es proveer 
                    los servicios implementados, estableciendo reglas y políticas 
                    que promuevan la seguridad hasta la finalización de su 
                    actividad. Es por ello que el acoso y otros tipos de 
                    comportamiento que no sigan la moral de Sweet Home serán 
                    restringidos. 
                    Estas reglas y políticas tienen como objetivo garantizar la 
                    seguridad de todo tipo de actividad que transcurra dentro de 
                    Sweet Home, impidiendo que el usuario se sienta desconforme 
                    durante su uso:</p>
                    <h2 className={styles.secondary}>Seguridad</h2>
                    <p className={styles.text}>Extrema violencia: está prohibido 
                    amenazar y herir a personas a través del chat que Sweet Home 
                    proporciona o bien a través de publicaciones.
                    Acoso: no puedes acosar a usuarios con la pretensión de 
                    obligarlo a hacer algo que no quiere.
                    Contenido múltimedia no apto: No puedes publicar elementos 
                    multimedia, en este caso imágenes, que puedan dañar la 
                    sensibilidad de los usuarios.</p>
                    <h2 className={styles.secondary}>Privacidad</h2>
                    <p className={styles.text}>En Sweet Home está prohibido la 
                    publicación de información personal de otro usuario sin el 
                    consentimiento previo del mismo.</p>
                    <h2 className={styles.secondary}>Publicidad</h2>
                    <p className={styles.text}>Otras empresas o usuarios no podrán 
                    realizar spam de ningún tipo, puesto que puede obstaculizar 
                    las funciones de los usuarios y afectar directamente a la 
                    experiencia de los mismos mientras hacen uso de la aplicación. Además, no se puede divulgar a través de las publicaciones contenido engañoso o alterado con el fin de engañar al usuario y obtener beneficio.</p>
                    <h2 className={styles.secondary}>Especies exóticas invasoras</h2>
                    <p className={styles.text}>En Sweet Home nos preocupamos por 
                    la diversidad, por ello nos hacemos cargo de la prohibición de 
                    la difusión de especies exóticas invasoras o EEI en nuestra 
                    aplicación. En nuestro país, entre las especies exóticas 
                    podemos encontrar el Mapache, este está prohibido como animal 
                    de compañía y es un factor que tenemos en cuenta en nuestra 
                    aplicación.
                    Respetamos la Ley 42/2007 que define una especie exótica 
                    invasora como “aquella que se introduce o establece en un 
                    ecosistema o hábitat natural o seminatural y que es un agente 
                    de cambio y amenaza para la diversidad biológica nativa, ya sea 
                    por su comportamiento invasor, o por el riesgo de contaminación 
                    genética”.</p>
                    <a title="Volver arriba" href="#top" className={styles.buttonTo}>↑</a>
                </div>
                
                    <style jsx>{`

                        h1{
                            /*Box model*/
                            margin-bottom: 5rem;
                        }
                        h2{
                            /*Box model*/
                            margin-bottom: 2rem;
                        }
                        p{
                            /*Box model*/
                            margin-bottom: 4rem;
                        }
                    
                    `}</style>
                
            </>
        </Layout>
    )

}
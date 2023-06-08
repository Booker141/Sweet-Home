/* Static imports */

import { colors } from "styles/frontend-conf";
import global from "styles/global.module.css";
import Head from "next/head";
import dynamic from "next/dynamic";

/* Dynamic imports */

const BasicLayout = dynamic(() =>
  import("/components/BasicLayout/BasicLayout")
);
const LazyLoad = dynamic(() => import("react-lazyload"));

/**
 * @author Sergio García Navarro
 * @returns Rules page
 * @version 1.0
 * @description Rules page
 */
export default function Rules() {
  return (
    <BasicLayout>
      <Head>
        <title>Reglas y políticas | Sweet Home</title>
      </Head>
      <h1 className={global.title}>Reglas y políticas</h1>
      <hr className={global.line} />
      <p className={global.text}>
        En este apartado, conocerá las reglas de Sweet Home. El propósito de
        Sweet Home es proveer los servicios implementados, estableciendo reglas
        y políticas que promuevan la seguridad hasta la finalización de su
        actividad. Es por ello que el acoso y otros tipos de comportamiento que
        no sigan la moral de Sweet Home serán restringidos. Estas reglas y
        políticas tienen como objetivo garantizar la seguridad de todo tipo de
        actividad que transcurra dentro de Sweet Home, impidiendo que el usuario
        se sienta desconforme durante su uso:
      </p>
      <h2 className={global.secondary}>Seguridad ❖</h2>
      <hr className={global.line} />
      <div className="security">
        <p className={global.text}>
          ◆ <strong>Extrema violencia:</strong> está prohibido amenazar y herir
          a personas a través del chat que Sweet Home proporciona o bien a
          través de publicaciones.
        </p>
        <p className={global.text}>
          ◆ <strong>Acoso:</strong> no puedes acosar a usuarios con la
          pretensión de obligarlo a hacer algo que no quiere.
        </p>
        <p className={global.text}>
          ◆ <strong>Contenido múltimedia no apto:</strong> No puedes publicar
          elementos multimedia, en este caso imágenes, que puedan dañar la
          sensibilidad de los usuarios.
        </p>
      </div>
      <h2 className={global.secondary}>Privacidad ❖</h2>
      <hr className={global.line} />
      <p className={global.text}>
        En Sweet Home está prohibido la publicación de información personal de
        otro usuario sin el consentimiento previo del mismo.
      </p>
      <h2 className={global.secondary}>Publicidad ❖</h2>
      <hr className={global.line} />
      <p className={global.text}>
        Otras empresas o usuarios no podrán realizar spam de ningún tipo, puesto
        que puede obstaculizar las funciones de los usuarios y afectar
        directamente a la experiencia de los mismos mientras hacen uso de la
        aplicación. Además, no se puede divulgar a través de las publicaciones
        contenido engañoso o alterado con el fin de engañar al usuario y obtener
        beneficio.
      </p>
      <h2 className={global.secondary}>Especies exóticas invasoras ❖</h2>
      <hr className={global.line} />
      <p className={global.text}>
        En Sweet Home nos preocupamos por la diversidad, por ello nos hacemos
        cargo de la prohibición de la difusión de especies exóticas invasoras o
        EEI en nuestra aplicación. En nuestro país, entre las especies exóticas
        podemos encontrar el Mapache, este está prohibido como animal de
        compañía y es un factor que tenemos en cuenta en nuestra aplicación.
      </p>
      <p className={global.text}>
        Respetamos la Ley 42/2007 que define una especie exótica invasora como
        “aquella que se introduce o establece en un ecosistema o hábitat natural
        o seminatural y que es un agente de cambio y amenaza para la diversidad
        biológica nativa, ya sea por su comportamiento invasor, o por el riesgo
        de contaminación genética”.
      </p>

      <style jsx>
        {`

                        .security{

                            /*Box model*/

                            display: flex;
                            flex-direction: column;
                            justify-content: center;

                        }
                        h1{
                            /*Box model*/
                            margin-bottom: 5rem;
                        }
                        h2{
                            /*Box model*/

                            margin-bottom: 2rem;

                            /*Text*/

                            font-weight: 400;
                            color: ${colors.primary};
                        }
                        hr{
                            /*Box model*/
                            
                            margin-top: 0;
                            margin-bottom: 5rem;
                            width: 100%;
                        }
                        p{
                            /*Box model*/
                            margin-bottom: 4rem;
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
                    
                    `}
      </style>
    </BasicLayout>
  );
}

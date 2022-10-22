import {colors} from '/styles/frontend-conf.js'
import {fonts} from '/styles/frontend-conf.js'
import {MdPets} from 'react-icons/md'
import {useRouter} from 'next/router'
import Head from 'next/head'
import ButtonPrimary from "/components/ButtonPrimary/ButtonPrimary"
import styles from "styles/global.module.css"

/*
    * @author Sergio García Navarro
    * @returns Error page
    * @version 1.0
    * @date 13/01/2020
    * @description Error page
*/
/**
 * A function that returns an error message if the page is not found.
 */
function Error({ statusCode }) {
    const router = useRouter();
  
    return (
      <>
        <Head>
          <title>¡Ups! Algo ha salido mal.. Error {statusCode}</title>
        </Head>
        <div className={styles.content}>

          <div className="error">
            <div className="first-line">
              <MdPets size={35} color={colors.primary} className="icon"/>
              <h1 className={styles.title}>Error {statusCode}</h1>
              <MdPets size={35} color={colors.primary} className="icon"/>
            </div>

            <div className="second-line">
              <h1 className={styles.title}>
                Vaya... este perro se ha comido la página 
              </h1>
              <h2 className={styles.secondary}>Parece ser que este travieso perro se ha comido la página que buscabas, un momento ¿dónde están mis zapatos?</h2>
              <ButtonPrimary className="button" onClick={() => router.back()}>Volver</ButtonPrimary>
            </div>
            <img src="/error-1.jpg" alt="Imagen de perro curándose"/>
          </div>
        </div>
        <style jsx>{`

          .text{

            /*Box model*/

            margin: 1.5rem;
          }

          .icon{

            /*Box model*/

            margin: 7rem;
          }

          .first-line{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center; 
            justify-content: center; 
          }

          .second-line{

            /*Box model*/

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .error {

            /*Box model*/
            display: block;
            margin: auto;
            text-align: center;
            height: 30%;

          }

          h1{


            /*Box model*/

            height: 50%;

            /*Text*/

            font-size: 2.5rem;
            font-family: ${fonts.default};
            color: ${colors.primary};
            text-align: center;

          }

          h2{ 

            /*Box model*/

            height: 50%;
            margin-bottom: 2rem;

            /*Text*/

            font-size: 1rem;
            font-family: ${fonts.default};
            color: ${colors.primary};
            text-align: center;
            
          }

          img{

            /*Box model*/

            width: 80%;
            height: 50%;
            margin: auto;

            /*Misc*/

            animation-name: imagen;
            animation-duration: 2s;

          }
          
          @keyframes imagen {
            from {opacity: 0;}
            to {opacity: 1;}
          }
          
        `}</style>
      </>
    )
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default Error
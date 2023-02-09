import {useRouter} from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '/components/Layout/Layout'
import global from "styles/global.module.css"
import {MdPets} from 'react-icons/md'
import {colors} from '/styles/frontend-conf.js'
import {fonts} from '/styles/frontend-conf.js'


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
export default function FourOhFour () {

    const router = useRouter();
  
    return (
      <Layout>
      <>
        <Head>
          <title>¡Ups! Algo ha salido mal.. Error 404</title>
        </Head>
        <div className={global.content}>

          <div className="error">
            <div className="first-line">
              <MdPets size={35} color={colors.primary} className="icon"/>
              <h1 className={global.title}>Error 404</h1>
              <MdPets size={35} color={colors.primary} className="icon"/>
            </div>

            <div className="second-line">
              <h1 className={global.title}>
                Vaya... este perro se ha comido la página 
              </h1>
              <h2 className={global.secondary}>Parece ser que este travieso perro se ha comido la página que buscabas. Solucionaremos este error lo antes posible.</h2>
              <button className={global.buttonPrimary} onClick={() => router.back()}>Volver</button>
            </div>
            <Image src="/error-1.svg" alt="Imagen de perro curándose" width={1000} height={1000}/>
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
      </Layout>
    )
  }
  
 
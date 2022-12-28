import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'
import {useSession} from 'next-auth/react'
import global from "styles/global.module.css"
import {fonts} from "styles/frontend-conf.js"
import {colors} from "styles/frontend-conf.js"
import Header from "components/Header/Header"
import Carousel from "components/Carousel/Carousel"
import BasicFooter from "components/BasicFooter/BasicFooter"
import ThemeButton from "components/ThemeButton/ThemeButton"
import {AiOutlineMobile, AiOutlineTablet} from "react-icons/ai"
import {ImArrowUp2} from "react-icons/im"
import {BsLaptop} from "react-icons/bs"
import {MdPets} from "react-icons/md"
import {GiPlantsAndAnimals} from "react-icons/gi"
import {CgCommunity} from "react-icons/cg"
import inicio1 from '../public/inicio-1.svg'
import inicio2 from '../public/inicio-2.svg'
import inicio3 from '../public/inicio-3.svg'
import component1 from '../public/component1-home.svg'
import component2 from '../public/component2-home.svg'
import component3 from '../public/component3-home.svg'

export default function Principal(){

  const {data: session, status} = useSession({required: false});
  const router = useRouter();

  return(

    <>
      <Head><title>Sweet Home</title></Head>

      {!session ? <Header url1="/attendances" url2="/about" url3="/contact" url4="/auth/signIn" url5="/auth/signUp"
                          text1="Cuidados" text2="Quiénes somos" text3="Contacto" text4="Iniciar sesión" text5="Registrarse"/> :  <Header url1="/attendances" url2="/about" url3="/contact" 
                          text1="Cuidados" text2="Quiénes somos" text3="Contacto"  /> }
      
      <div className={global.content}>
        <a name="top"></a>
        <ThemeButton/>
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
          <p className={global.text2}>Somos una empresa dedicada a la <span className={global.colorized}> &nbsp; atención de 
          mascotas </span>, brindando servicios de cuidado y hospedaje para <span className={global.colorized}> &nbsp; todo tipos de 
          mascotas</span>.</p>
        </div>
        <div className="container1__video"></div>
        <video autoPlay loop muted 
            style={{ position: "absolute", top: "0", left: "0" , width: '100%', height: '100%', objectFit: "cover", zIndex: "-99", translate: "transform(-50%,-50%)", borderRadius: "0 0 30px 30px" }}>
            <source src="/video1.mp4" />
        </video>
        <div className="content__container2">
          <div className="container2__column1">
            <h1>¡Únete ahora mismo a nuestra <span className={global.colorized}>comunidad</span>!</h1>
            <button className={global.buttonPrimary} onClick={() => router.push('/signUp')}>Regístrate ➤</button>
            <p className="subtext">La mayor comunidad de amantes de los animales 🐾</p>
          </div>
          <div className="container2__column2">
            <div className="column2__component">
              <Image src={component1} alt="Opinion 1" priority/>
              <Image src={component2} alt="Opinion 2" priority/>
              <Image src={component3} alt="Opinion 3" priority/>
            </div>
          </div>
        </div>
        <Carousel/>
        <div className="content__container3">
            <h2 className={global.title}>¿Qué es Sweet Home?</h2>
            <p className={global.text}>Es una red social que abarca el mundo animal
             y trata de facilitar su adaptación a nuevos cuidados, a nuevos dueños 
             y a una mejora diaria de su vida.</p>
            <Link href="/about"><a className={global.link} aria-label="Ir a información sobre Sweet Home">Saber más →</a></Link>
        </div>
        <div className="imagen-inicio1">
          <Image src={inicio1} alt="Imagen de un perro y un gato" priority/>
        </div>
        <div className="content__container4">
          <div className="container4__column1">
            <h2 className={global.title}>¿Qué nos diferencia?</h2>
            <p className={global.text}>Nuestra red social se diferencia de otras 
            redes sociales en las siguientes características: </p>
          </div>
            <div className={global.cards}>
              <div className={global.card__short}>
                <div style={{color: '#f0810f'}}>
                    <MdPets size={37}/>
                </div>  
                <h2 className={global.title2}>Cuidados</h2>
                <p className={global.text}>En nuestra red social podrás encontrar 
                cuidados que mejoren la calidad de vida de tu mascota.</p>
              </div>
              <div className={global.card__short}>
                <div style={{color: '#f0810f'}}>
                    <GiPlantsAndAnimals size={37}/>
                </div>
                <h2 className={global.title2}>Comunidad</h2>
                <p className={global.text}>Aquí encontrarás una comunidad de amantes
                 de los animales que pueden darte consejos sobre vuestras mascotas.</p>
              </div>
              <div className={global.card__short}>
                <div style={{color: '#f0810f'}}>
                    <CgCommunity size={37}/>
                </div>
                <h2 className={global.title2}>Cuidadoras</h2>
                <p className={global.text}>¡Existen perfiles exclusivos de cuidadoras
                si quieres encontrar tu mascota ideal!</p>
              </div>
            </div>    
        </div>

        <div className="content__container5">
            <h2 className={global.title}>Rompemos las limitaciones</h2>
            <p className={global.text}>Nuestra red social rompe las limitaciones en cuanto 
            a los <span className={global.colorized}> &nbsp;dispositivos&nbsp; </span> en las que se puede utilizar:</p>  
            <div className="container5__column1">
              <h2 className={global.title2}>¿Qué dispositivos soporta?</h2>
              <div className="icons">
                  <div style={{color: '#f0810f'}} className="icon__item">
                      <AiOutlineMobile size={80}/>
                      <p className={global.text}>Móviles</p>  
                  </div>  
                  <div style={{color: '#f0810f'}} className="icon__item">
                      <AiOutlineTablet size={80}/>
                      <p className={global.text}>Tablets</p>
                  </div>  
                  <div style={{color: '#f0810f'}} className="icon__item">
                      <BsLaptop size={80}/>
                      <p className={global.text}>Ordenadores</p>
                  </div>  
              </div>
            </div>
        </div>
      </div>
      <div className="content__container6">
        <h2 className={global.title}>Nuestra misión</h2>
        <div className="container6__column1">
          <div className="column1__text">
            <p className={global.text}>¿Alguna vez has sentido rechazo o ignorancia en ciertas 
            publicaciones en Twitter, Instagram o Facebook sobre animales perdidos? ¿No puedes 
            cuidar de tu mascota o has encontrado a una que se ha perdido y no sabes que hacer? 
            Con Sweet Home daremos respuesta a estas preguntas.</p>
            <p className={global.text}>El objetivo principal de Sweet Home es facilitándole a los dueños funcionalidades que usar en su día a día. 
            Entre ellas están: publicar fotos e información de los animales, permitir el contacto inmediato 
            con el usuario que ha realizado una publicación y seguir a los centros de acogida de animales 
            que sean de interés.</p>

          </div>
          <div className="imagen-inicio2">
            <Image src={inicio2} alt="Familia en la naturaleza" />
          </div>
        </div>  
        <h2 className={global.title}>¿Cómo la llevamos a cabo?</h2>
        <div className="container6__column2">
          <div className="column2__text">
            <p className={global.text}>Para llevar a cabo nuestra misión, hemos 
            creado una red social que permite a los usuarios compartir información
             sobre sus mascotas, así como también, información sobre animales 
             perdidos o encontrados. Además, los usuarios podrán seguir a los 
             centros de acogida de animales que sean de su interés.</p>
            <p className={global.text}>Además, los usuarios podrán publicar fotos 
            e información de los animales, permitir el contacto inmediato con el 
            usuario que ha realizado una publicación y seguir a los centros de 
            acogida de animales que sean de interés.</p>
          </div>
          <div className="imagen-inicio3">
            <Image src={inicio3} alt="Personas trabajando"/>
          </div>  
        </div>
      </div>
      
      <a title="Volver arriba" aria-label="Ir al inicio de página" href="#top" className={global.buttonTo}><ImArrowUp2/></a>

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
            justify-content: center;
            width: 100%;
            margin-bottom: 10rem;

          }

          .content__container1 p{

            /*Box model*/

            width: 100%;
            align-items: center;
            justify-content: center;

          }
          
          .container1__title{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;

          }

          .container1__video{

            position: absolute;
            top: 0;
            left: 0;
            z-index: -9;

            /*Box model*/

            display: block;
            width: 100%;
            height: 100%;

            /*Visuals*/

            border-radius: 0 0 30px 30px;
            backdrop-filter: blur(3px);
            background-color: rgba(0,0,0,0.2);
            
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
            justify-content: center;
            margin-bottom: 3rem;

            /*Text*/

            font-family: ${fonts.default};

          }

          .container2__column1{

            /*Box model*/

            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            line-height: 3.5rem;

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
            width: 100%;
            margin-top: 4rem;


          }

          .content__container3{

            /*Box model*/

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
            margin-bottom: 7rem;
            margin-top: 4rem;

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

          /*IMAGES*/
          
          .imagen-inicio1{

            /*Box model*/

            display: flex;
            align-items: center;
            justify-content: center;
            
            /*Visuals*/

            width: 100%;
            height: 100%;

            /*Misc*/

            animation: imagen 2s linear forwards;
            

          }

          .imagen-inicio2{

            /*Position*/

            z-index: 1;

            /*Box model*/

            margin-right: 2rem;

            /*Visuals*/

            width: 250%;
            height: 250%;
            

          }

          .imagen-inicio3{

            /*Position*/

            z-index: 1;

            /*Box model*/

            margin-right: 2rem;

            /*Visuals*/

            width: 250%;
            height: 250%;

          }

          .imagen__border{

            border-radius: 10px;
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
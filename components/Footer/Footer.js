
/* Static imports */

import { colors, fonts } from 'styles/frontend-conf.js'
import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs'
import {GiDogHouse} from 'react-icons/gi'
import { HiDocumentSearch, HiSearch } from 'react-icons/hi'
import {FaUserPlus} from 'react-icons/fa'
import global from 'styles/global.module.css'
import dynamic from 'next/dynamic'

/* Dynamic imports */

const BasicFooter = dynamic(() => import('/components/BasicFooter/BasicFooter'))
const FallbackImage = dynamic(() => import('/components/FallbackImage/FallbackImage'))
const Link = dynamic(() => import('next/link'))
const LazyLoad = dynamic(() => import('react-lazyload'))


export default function Footer () {
  return (
    <><div className='content'>
      <div className='waves'>
        <svg width='100%' height='100%' id='svg' viewBox='0 0 1440 600' xmlns='http://www.w3.org/2000/svg' class='transition duration-300 ease-in-out delay-150'><defs><linearGradient id='gradient' x1='57%' y1='0%' x2='43%' y2='100%'><stop offset='5%' stop-color='#f9a603' /><stop offset='95%' stop-color='#f0810f' /></linearGradient></defs><path d='M 0,600 C 0,600 0,200 0,200 C 44.91771147677885,212.48382299910799 89.8354229535577,224.96764599821594 127,221 C 164.1645770464423,217.03235400178406 193.5760196625481,196.6132390062442 232,173 C 270.4239803374519,149.3867609937558 317.86049839624974,122.57939797680729 360,128 C 402.13950160375026,133.4206020231927 438.98198675245305,171.06916908652659 482,201 C 525.018013247547,230.93083091347341 574.211554593938,253.14392567708632 617,243 C 659.788445406062,232.85607432291368 696.1717948717949,190.35512820512818 732,186 C 767.8282051282051,181.64487179487182 803.1012659188826,215.43556150240087 838,202 C 872.8987340811174,188.56443849759913 907.4231414526749,127.9026257852683 949,146 C 990.5768585473251,164.0973742147317 1039.206168270417,260.9539353565261 1082,264 C 1124.793831729583,267.0460646434739 1161.752185465657,176.2816327886276 1201,142 C 1240.247814534343,107.7183672113724 1281.785089866955,129.91953348896354 1322,149 C 1362.214910133045,168.08046651103646 1401.1074550665226,184.04023325551822 1440,200 C 1440,200 1440,600 1440,600 Z' stroke='none' stroke-width='0' fill='url(#gradient)' fill-opacity='0.53' class='transition-all duration-300 ease-in-out delay-150 path-0' /><defs><linearGradient id='gradient' x1='57%' y1='0%' x2='43%' y2='100%'><stop offset='5%' stop-color='#f9a603' /><stop offset='95%' stop-color='#f0810f' /></linearGradient></defs><path d='M 0,600 C 0,600 0,400 0,400 C 48.22236045474388,378.0005048492095 96.44472090948776,356.00100969841907 129,373 C 161.55527909051224,389.99899030158093 178.4434768167929,445.9964660555334 220,447 C 261.5565231832071,448.0035339444666 327.7813718233407,394.0131260794473 370,387 C 412.2186281766593,379.9868739205527 430.4310358898442,419.9510296266773 470,440 C 509.5689641101558,460.0489703733227 570.4944846172825,460.1827554138435 613,451 C 655.5055153827175,441.8172445861565 679.5910256410257,423.3179487179487 721,417 C 762.4089743589743,410.6820512820513 821.1414128186149,416.54544971436167 861,415 C 900.8585871813851,413.45455028563833 921.8433230845146,404.5002524246047 957,422 C 992.1566769154854,439.4997475753953 1041.485294843326,483.4535405872194 1082,463 C 1122.514705156674,442.5464594127806 1154.2154975421813,357.6855852265179 1195,333 C 1235.7845024578187,308.3144147734821 1285.6527149879482,343.8041185067092 1328,365 C 1370.3472850120518,386.1958814932908 1405.1736425060258,393.0979407466454 1440,400 C 1440,400 1440,600 1440,600 Z' stroke='none' stroke-width='0' fill='url(#gradient)' fill-opacity='1' class='transition-all duration-300 ease-in-out delay-150 path-1' /></svg>
      </div>
      <div className='content__footer'>
        {/*  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill={color} fillOpacity="1" d="M0,128L20,138.7C40,
                        149,80,171,120,170.7C160,171,200,149,240,170.7C280,192,320,
                        256,360,245.3C400,235,440,149,480,128C520,107,560,149,600,
                        186.7C640,224,680,256,720,224C760,192,800,96,840,74.7C880,
                        53,920,107,960,117.3C1000,128,1040,96,1080,101.3C1120,107,
                        1160,149,1200,170.7C1240,192,1280,192,1320,192C1360,192,
                        1400,192,1420,192L1440,192L1440,0L1420,0C1400,0,1360,0,
                        1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,
                        0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,
                        0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,
                        0,280,0,240,0C200,0,160,0,120,
                        0C80,0,40,0,20,0L0,0Z"></path>
                </svg>
                */}

        <div className='footer'>

          <div className='columns'>
            <div className='columns__column1'>
              <h3 className='column1__title'><GiDogHouse size={20} color={`${colors.secondary}`}/>Sweet Home </h3>
              <div className='column1__links'>
                <Link className={global.link} href="/about" prefetch={false}><a aria-label='Ir a información sobre Sweet Home'>Sobre nosotros</a></Link>
                <Link className={global.link} href="/contact" prefetch={false}><a aria-label='Ir a información de contacto'>Contáctanos</a></Link>
              </div>
            </div>
            <div className='columns__column2'>
              <h3 className='column2__title'><HiDocumentSearch size={20} color={`${colors.secondary}`}/>Ayuda </h3>
              <div className='column2__links'>
                <Link className={global.link} href="/faq" prefetch={false}><a aria-label='Ir a Preguntas frecuentes'>Preguntas frecuentes</a></Link>
                <Link className={global.link} href="/rules" prefetch={false}><a aria-label='Ir a Reglas y políticas de Sweet Home'>Reglas y políticas</a></Link>
              </div>
            </div>
            <div className='columns__column3'>
              <h3 className='column3__title'><HiSearch size={20} color={`${colors.secondary}`}/>Encuentra en Sweet Home </h3>
              <div className='column3__links'>
                <Link className={global.link} href="/attendances" prefetch={false}><a aria-label='Ir a Cuidados'>Cuidados</a></Link>
                <Link className={global.link} href="/news" prefetch={false}><a aria-label='Ir a Noticias'>Noticias</a></Link>
              </div>
            </div>

          </div>

          <div className='columns__column4'>
            <h3 className='column4__title'><FaUserPlus size={20} color={`${colors.secondary}`}/>Síguenos </h3>
            <div className='column4__icons'>
              <a aria-label='Ir a Instagram' className='icons__instagram'><BsInstagram /></a>
              <a aria-label='Ir a Facebook' className='icons__facebook'><BsFacebook /></a>
              <a aria-label='Ir a Twitter' className='icons__twitter'><BsTwitter /></a>
            </div>
          </div>

        </div>

        <hr className='footer__line' />
        <LazyLoad offset={100}>
          <BasicFooter
            color='#fafafa' hover='#e8cd43' url1='/faq' text1='Información' url2='/privacy' text2='Privacidad'
            url3='/conditions' text3='Condiciones' url4='/accessibility' text4='Accesibilidad'
          />
        </LazyLoad>
      </div>
    </div>

      <style jsx>{`

                .waves{

                    /*Box model*/

                    position: relative;
                    top: 1rem;
                    margin-top: 2rem;
                       
                }

                .content__footer{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;

                    /*Visuals*/

                    background-color: ${colors.primary};

                      
                }

                .footer{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    padding: 6rem;
                    margin-top: 0.5rem;


                }

                .footer__line{

                    /*Position*/

                    position: relative;
                    top: 1rem;

                    /*Box model*/

                    width: 100%;
                    height: 0.09rem;

                    /*Text*/

                    color: #ffffff;

                    /*Visuals*/

                    border: none;
                    opacity: 1;
                }
                
                .columns{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    gap: 10rem;
              
                }

                .columns__column1{


                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    align-items: center;


                }
                .columns__column2{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    align-items: center;


                }

                .columns__column3{


                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    align-items: center;

                }

                .columns__column4{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    margin-top: 3rem;
                    margin-bottom: 2rem;
                    margin-right: 6rem;

                }

                .column1__links{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    align-items: center;

                }
                
                .column2__links{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .column3__links{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .column4__icons{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    width: 5rem;

                }

                .column1__title{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;

                }

                .column2__title{

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;

                }

                .column3__title{

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;

                }

                .column4__title{

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;

                }



                h3{
                    /*Box model*/

                    margin-bottom: 0.5rem;

                    /*Text*/

                    color: ${colors.secondary};
                    font-size: 1rem;
                    font-family: ${fonts.default};
                    font-weight: bold;
                }

                p{

                    /*Text*/

                    color: ${colors.secondary};
                    font-size: 1rem;
                    font-family: ${fonts.default};
                }

                a{

                    /*Text*/

                    text-decoration: none;
                    color: ${colors.secondary};
                    font-size: 1rem;
                    font-family: ${fonts.default};
                }

                a:hover{

                    /*Text*/
                    
                    color: #f5d533;
                }
                
            `}
      </style>
    </>
  )
}

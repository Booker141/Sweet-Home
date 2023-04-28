import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import global from 'styles/global.module.css'
import { colors } from '/styles/frontend-conf.js'
import { fonts } from 'styles/frontend-conf.js'
import { FaUserAlt, FaSignOutAlt } from 'react-icons/fa'
import { RiChat3Line, RiSettings4Fill, RiNotification4Line } from 'react-icons/ri'
import { BsPatchCheckFill, BsFillChatFill, BsFillBellFill } from 'react-icons/bs'
import {MdKeyboardArrowDown, MdClose, MdHealthAndSafety} from 'react-icons/md'
import SearchBar from "components/SearchBar/SearchBar"
import TrademarkWhite from 'components/TrademarkWhite/TrademarkWhite'
import FallbackImage from 'components/FallbackImage/FallbackImage'
import {server} from '/server'
import Modal from 'components/Modal/Modal'
import ThemeButton from 'components/ThemeButton/ThemeButton'

/*
    * @author Sergio García Navarro
    * @returns Header component
    * @version 1.0
    * @date 13/01/2020
    * @description Header component
*/
/**
 * This function returns a div with a class of header, which contains a Trademark component, and four
 * links
 * @param {url1} url1 - url of the first link
 * @param {url2} url2 - url of the second link
 * @param {url3} url3 - url of the third link
 * @param {url4} url4 - url of the fourth link
 * @param {url5} url5 - url of the fifth link
 * @param {text1} text1 - text of the first link
 * @param {text2} text2 - text of the second link
 * @param {text3} text3 - text of the third link
 * @param {text4} text4 - text of the fourth link
 * @param {text5} text4 - text of the fifth link
 * @returns {Header} - header with basic information
 */

export default function BasicHeader (props) {

  const { data: session } = useSession()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [user, setUser] = useState({})
  const [isShelter, setIsShelter] = useState(false)
  const [isVet, setIsVet] = useState(false)

  const router = useRouter()


  const getUser = async () => {

    await fetch(`${server}/api/users/${session.user.username}`)
      .then(res => res.json())
      .then(res => {
        setUser(res)
      })
      .catch(err => console.log(err))

  }

  useEffect(() => {
    if (session) {
      if(session.user.role === "protectora")
        setIsShelter(true)

      if(session.user.role === "veterinario")
        setIsVet(true)
      getUser()
    }
  }, [])

  /**
     * If the user is on the home page, send them to the sign in page. If the user is on the sign in
     * page, send them to the sign up page. If the user is on the sign up page, send them to the sign
     * in page
     */
  const handleClick = () => {
    if (router.asPath !== '/auth/signIn') {
      router.push('/auth/signIn')
    } else {
      router.push('/auth/signUp')
    }
  }

  if (session) {
    return (
      <>
        {session.user.role === 'usuario' &&

          <ul className='header'>

            <div className='logo'>
              <li><TrademarkWhite link='/' /></li>
            </div>

            <div className="header__align">
              <li><Link href='/home' as='/home'><a aria-label='Ir a Reciente'>Inicio</a></Link></li>
              <li><Link href='/attendances' as='attendances' passHref><a aria-label='Ir a Cuidados'>Cuidados</a></Link></li>
              <li><SearchBar/></li>
              <li><Link href='/chat' as='/chat'><a aria-label='Ir a Chat'><BsFillChatFill size={18}/></a></Link></li>
              <li><Link href='/notifications' as='/notifications'><a aria-label='Ir a Notificaciones'><BsFillBellFill size={18}/></a></Link></li>
              <ThemeButton />
              <li className='menu-visible'><a id='profile'><FallbackImage src={user.image} height={40} width={40} style={{borderRadius: '70px'}}/>@{session.user.username}{isShelter && <BsPatchCheckFill size={15} color={colors.secondary} />}{isVet && <MdHealthAndSafety size={15} color={colors.secondary} />}<MdKeyboardArrowDown size={20} color={colors.secondary} /></a>
                <ul className='menu'>
                  <li className='nav__link'><Link href='/profile/myprofile'><a><div className='align__link'>Perfil<div className='nav__icon'><FaUserAlt size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <hr className='line' />
                  <li className='nav__link'><Link href='/settings'><a><div className='align__link'>Configuración<div className='nav__icon'><RiSettings4Fill size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <hr className='line' />
                  <li className='nav__link'><a onClick={() => setIsModalVisible(true)}><div className='align__link'>Cerrar sesión<div className='nav__icon'><FaSignOutAlt size={15} color={colors.secondary} /></div></div></a></li>
                </ul>
              </li>
          </div>
          </ul>}

        {session.user.role === 'admin' &&

          <ul className='header'>

            <div className='logo'>
              <li><TrademarkWhite link='/' /></li>
            </div>
            <div className="header__align">
              <li><Link href='/home' as='/home'><a aria-label='Ir a Reciente'>Inicio</a></Link></li>
              <li><Link href='/attendances' as='attendances' passHref><a aria-label='Ir a Cuidados'>Cuidados</a></Link></li>
              <li><SearchBar/></li>
              <li><Link href='/news' as='/news'><a aria-label='Ir a Noticias'>Noticias</a></Link></li>
              <li><Link href='/dashboard' as='/dashboard'><a aria-label='Ir al Panel de administración'>Panel</a></Link></li>
              <ThemeButton />
              <li className='menu-visible'><a id='profile'><FallbackImage src={user.image} height={40} width={40} style={{borderRadius: '70px'}}/>@{session.user.username} <MdKeyboardArrowDown size={20} color={colors.secondary} /></a>
                <ul className='menu'>
                  <li className='nav__link'><Link href='/profile/myprofile'><a><div className='align__link'>Perfil<div className='nav__icon'><FaUserAlt size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <hr className='line' />
                  <li className='nav__link'><Link href='/settings'><a><div className='align__link'>Configuración<div className='nav__icon'><RiSettings4Fill size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <hr className='line' />
                  <li className='nav__link'><a onClick={() => setIsModalVisible(true)}><div className='align__link'>Cerrar sesión<div className='nav__icon'><FaSignOutAlt size={15} color={colors.secondary} /></div></div></a></li>
                </ul>
              </li>
            </div>
          </ul>}

        {session.user.role === 'gerente' &&

          <ul className='header'>

            <div className='logo'>
              <li><TrademarkWhite link='/' /></li>
            </div>
            <div className="header__align">
              <li><Link href='/home' as='/home'><a aria-label='Ir a Reciente'>Inicio</a></Link></li>
              <li><Link href='/attendances' as='attendances' passHref><a aria-label='Ir a Cuidados'>Cuidados</a></Link></li>
              <li><SearchBar/></li>
              <li><Link href='/news' as='/news'><a aria-label='Ir a Noticias'>Noticias</a></Link></li>s
              <li><Link href='/statistics' as='/statistics'><a aria-label='Ir a Estadísticas'>Estadísticas</a></Link></li>
              <ThemeButton />
              <li className='menu-visible'><a id='profile'><FallbackImage src={user.image} height={40} width={40} style={{borderRadius: '70px'}}/>@{session.user.username} <MdKeyboardArrowDown size={20} color={colors.secondary} /></a>
                <ul className='menu'>
                  <li className='nav__link'><Link href='/profile/myprofile'><a><div className='align__link'>Perfil<div className='nav__icon'><FaUserAlt size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <hr className='line' />
                  <li className='nav__link'><Link href='/settings'><a><div className='align__link'>Configuración<div className='nav__icon'><RiSettings4Fill size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <hr className='line' />
                  <li className='nav__link'><a onClick={() => setIsModalVisible(true)}><div className='align__link'>Cerrar sesión<div className='nav__icon'><FaSignOutAlt size={15} color={colors.secondary} /></div></div></a></li>
                </ul>
              </li>
          </div>
          </ul>}

          {session.user.role === 'veterinaria' &&

            <ul className='header'>

              <div className='logo'>
                <li><TrademarkWhite link='/' /></li>
              </div>
              <div className="header__align">
                <li><Link href='/home' as='/home'><a aria-label='Ir a Reciente'>Inicio</a></Link></li>
                <li><Link href='/attendances' as='attendances' passHref><a aria-label='Ir a Cuidados'>Cuidados</a></Link></li>
                <li><SearchBar/></li>
                <li><Link href='/news' as='/news'><a aria-label='Ir a Noticias'>Noticias</a></Link></li>
                <li><Link href='/appointments' as='/appointments'><a aria-label='Ir a Citas'>Citas</a></Link></li>
                <ThemeButton />
                <li className='menu-visible'><a id='profile'><FallbackImage src={user.image} height={40} width={40} style={{borderRadius: '70px'}}/>@{session.user.username}&nbsp; <MdKeyboardArrowDown size={20} color={colors.secondary} /></a>
                  <ul className='menu'>
                    <li className='nav__link'><Link href='/profile/myprofile'><a><div className='align__link'>Perfil<div className='nav__icon'><FaUserAlt size={15} color={colors.secondary} /></div></div></a></Link></li>
                    <hr className='line' />
                    <li className='nav__link'><Link href='/settings'><a><div className='align__link'>Configuración<div className='nav__icon'><RiSettings4Fill size={15} color={colors.secondary} /></div></div></a></Link></li>
                    <hr className='line' />
                    <li className='nav__link'><a onClick={() => setIsModalVisible(true)}><div className='align__link'>Cerrar sesión<div className='nav__icon'><FaSignOutAlt size={15} color={colors.secondary} /></div></div></a></li>
                  </ul>
                </li>
            </div>
            </ul>}

        {isModalVisible && <Modal>
          <button className="close__modal" onClick={() => setIsModalVisible(false)}><MdClose size={30} color={`${colors.secondary}`}/></button>
          <h2 className={global.title5}>Cerrar sesión</h2>
          <p className={global.text2}>Está a punto de cerrar sesión con esta cuenta</p>
          <p className={global.text2__bold}>¿Estás seguro de que quieres cerrar sesión?</p>
          <div className='buttons'>
            <button className={global.buttonSecondary} onClick={() => signOut()}>Sí</button>
            <button className={global.buttonTertiary} onClick={() => setIsModalVisible(false)}>No</button>
          </div>
        </Modal>}

        <style jsx>{`

            

                #profile{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 1rem;
                    
                    /*Text*/

                    text-decoration: none;
                    color: ${colors.secondary};
                    font-size: 1rem;

                    font-family: ${fonts.default};
                    cursor: default;

                }

                .close__modal{

                  /*Box model*/

                  display: flex;
                  flex-direction: row;
                  align-self: flex-end;
                  margin-right: 2rem;

                  /*Visuals*/

                  border: none;
                  background: transparent;
                  cursor: pointer;

                }

                .header__align{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 3rem;

                    /*Text*/

                    font-size: 1.5rem;

                }
 
                .search__button{


                    /*Box model*/

                    margin-bottom: 1rem;

                    /*Visuals*/

                    background-color: transparent;
                    border: none;
                    cursor: pointer;
                    color: white;

                }        
                .logo{

  
                      /*Box model*/

                      margin-top: 1rem;
                    margin-bottom: 1rem;
                    margin-left: 2rem;
                    margin-right: 8rem;
                    

                }

                .header{

                    /*Position*/

                    position: sticky;
                    z-index: 999999;
                    top: 0;
                    left: 0;
           

                    /*Box model*/

                    display: flex;  
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-around;
                    width: 97.5vw;
                    min-width: 97.5vw;
                    min-height: 10vh;
                    height: 10vh;
                    padding: 0;
                    margin-bottom: 8rem;
                    margin-left: 0.5rem;


                    /*Visuals*/

                    background-image: linear-gradient(45deg, rgba(240,129,15, 0.8) 35%, rgba(249,166,3, 0.8) 100%);
                    backdrop-filter: blur(5px);
                    border-radius: 80px;
                    

                }

                .menu{

                    /*Position*/

                    position: absolute;

                    /*Box model*/

                    display: none;
                    margin-bottom: 1rem;
                    margin-right: 1.5rem;
                    margin-top: 1.2rem;
                    
                    z-index: 100000;


                    /*Visuals*/

                    border-radius: 40px 40px 40px 40px;
                    background-image: linear-gradient(45deg, rgba(240,129,15, 0.8) 35%, rgba(249,166,3, 0.8) 100%);
                    backdrop-filter: blur(5px);

                }

                .no-button{

                    /*Visuals*/

                    background-color: transparent;
                    border: none;
                }

                .line{

                    /*Position*/

                    position: relative;
                    top: 0;
                    left: -2.5rem;

                    /*Box model*/

                    width: 116%;
                    height: 0.09rem;

                    /*Visuals*/

                    background-color: #ffff;
                    border: none;
                    opacity: 0.6;
                }

                .menu a{

                    /*Box model*/

                    margin-right: 2rem;

                    /*Text*/

                    color: ${colors.secondary};
                    

                    /*Visuals*/

                    list-style-type: none;
                }

                .menu-visible:hover .menu{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    align-items: center;
               
                    position: absolute;
                    top: 4.5rem;
                    right: 0.1rem;
                    z-index: 1;

                    /*Text*/

                    font-family: ${fonts.default};
                    color: ${colors.secondary};

                    /*Visual*/  
 
                    background-image: linear-gradient(45deg, rgba(240,129,15, 0.8) 35%, rgba(249,166,3, 0.8) 100%);
                    backdrop-filter: blur(5px);


                    /*Text*/

                    color: ${colors.secondary};
                }

                .nav__link{

                    /*Box model*/

                    margin-top: 1rem;
                    margin-bottom: 1rem; 
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;

                    
                }
                
                .align__link{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    cursor: pointer;

                }

                .nav__icon{

                    /*Box model*/

                    margin-left: 1rem;
                }

                .buttons{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    margin-top: 2rem;
                    margin-bottom: 2rem;
                }


                button{

                    /*Box model*/

                    margin: 1rem;
                }

                a{


                    /*Text*/

                    text-decoration: none;
                    color: ${colors.secondary};
                    font-size: 1rem;
                    font-family: ${fonts.default};
                    cursor: pointer;
                    border-radius: 50px;
                    padding: 1.5rem;

                    /*Animation*/
                    
                    transition: all 0.3s ease-in-out;
                }

                li a:hover, li a:active{

                    /*Text*/

                    color: ${colors.secondary};
                    background-color: ${colors.primary};
                    box-shadow: 5px 2px 20px 0px rgba(255,206,59,1);

                }
                
                li{

                    /*Visuals*/

                    list-style-type: none;
                }

    `}
        </style>
      </>
    )
  } else {
    return (
      <>
        <div className='header'>

          <div className='logo'>
            <TrademarkWhite link='/' />
          </div>
          <div className='header__links'>
            <Link href={props.url1} as={props.url1} passHref><a aria-label='Ir a ${text1}'>{props.text1}</a></Link>
            <Link href={props.url2} as={props.url2} passHref><a aria-label='Ir a ${text2}'>{props.text2}</a></Link>
            <Link href={props.url3} as={props.url3} passHref><a aria-label='Ir a ${text3}'>{props.text3}</a></Link>
          </div>
          
          <div className='header__buttons'>
            <ThemeButton />
            <button className='button1' onClick={() => handleClick()}>{props.text4}</button>
            {router.route !== '/auth/signIn' && router.route !== '/auth/signUp' && router.route !== '/auth/signUpCare' && <button className='button2' onClick={() => router.push('/auth/signUp')}>{props.text5}</button>}
          </div>
        </div>

        <style jsx>{`


                    .logo{
                    
                        /*Box model*/

                        margin-top: 1rem;
                        margin-bottom: 1rem;
                        margin-left: 3rem;

                    }

                    .header{
                    
                    /*Position*/

                    position: sticky;
                    z-index: 999999;
                    top: 0;
                    left: 0;


                    /*Box model*/

                    display: flex;  
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    width: 97vw;
                    min-height: 10vh;
                    height: 10vh;

                    margin-bottom: 8rem;
                    margin-left: 0.6rem;

                    /*Visuals*/

                    background-image: linear-gradient(45deg, rgba(240,129,15, 0.8) 35%, rgba(249,166,3, 0.8) 100%);
                    backdrop-filter: blur(5px);
                    border-radius: 80px;
                   

                    }

                   

                    .no-button{

                    /*Visuals*/

                    background-color: transparent;
                    border: none;
                    }


                   .header__links{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    margin-top: 1rem;
                    gap: 2.5rem;
                    justify-content: space-between;

                   }

                    .nav__link{

                    /*Box model*/

                    margin-top: 1rem;
                    display: flex;
                    flex-direction: row;

                    }

                    .align__link{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    cursor: pointer;

                    }

                    .nav__icon{

                    /*Box model*/

                    margin-left: 1rem;

                    }


                   

                    button{


                        transition: all 0.3s ease-in-out;

                    }

                    button:hover{

                      box-shadow: 10px 10px 30px 0px rgba(255,206,59,1);
                    }

                   

                    a{

                    /*Box model*/
             
                    margin-bottom: 1rem;

                    /*Text*/

                    text-decoration: none;
                    color: ${colors.secondary};
                    font-size: 1rem;
                    font-family: ${fonts.default};
                    cursor: pointer;
                    border-radius: 20px;
                    padding: 1.5rem;

                    /*Animation*/

                    transition: all 0.3s ease-in-out;

                    }

                    a:hover{

                    /*Text*/

                    color: ${colors.secondary};
                    background-color: ${colors.primary};
                    box-shadow: 10px 10px 30px 0px rgba(255,206,59,1);


                    }

                   

                    li{

                    /*Visuals*/

                    list-style-type: none;
                    }

                .header__buttons{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    gap: 1rem;
                    margin-right: 1rem;
                   
                    
                }

                .button1{

                    /*Box model*/

                    padding: 1rem;
                    width: 10vw;
                    min-width: 10vw;

                    /*Visuals*/

                    cursor: pointer;
                    background-color: ${colors.primary};
                    text-decoration: none;
                    color: ${colors.secondary};
                    font-size: 1rem;
                    font-family: ${fonts.default};
                    transition: all 0.3s ease-in-out;
                    border-radius: 50px;
                    border: none;
                    
                    
                }


                .button1 a:hover{

                    /*Text*/
                    
                    color: ${colors.secondary};
          
                    font-size: 1.2rem;
                    background-color: transparent !important;
                    border-radius: none !important;
                    
                }

                .button2{

                    /*Box model*/

                    padding: 1rem;
                    width: 10vw;
                    min-width: 10vw;

                    /*Visuals*/

                    cursor: pointer;
                    border-radius: 50px;
                    border: none;

                    /*Text*/

                    text-decoration: none;
                    color: ${colors.primary};
                    font-size: 1rem;
                    font-family: ${fonts.default};

                    transition: all 0.3s ease-in-out;
                    background-color: #ffe0b8;
                    
                }

                .button2 a:hover{

                     /*Text*/
                    
                    color: ${colors.tertiary};
          
                    font-size: 1.2rem;
                    background-color: transparent !important;
                    border-radius: none !important;
                }

                a{

                    /*Text*/

                    text-decoration: none;
                    color: ${colors.secondary};
                    font-size: 1rem;
                    font-family: ${fonts.default};

                    /*Animation*/
                    
                    transition: all 0.3s ease-in-out;
                }

                a:hover{

                    /*Text*/
                    
                    color: ${colors.tertiary};
                    
                    
                }
                


        `}
        </style>
      </>
    )
  }
}

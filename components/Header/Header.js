import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import global from 'styles/global.module.css'
import { colors } from '/styles/frontend-conf.js'
import { fonts } from 'styles/frontend-conf.js'
import { FaUserAlt, FaSignOutAlt } from 'react-icons/fa'
import {  RiSettings4Fill, RiAdminFill, RiHealthBookFill } from 'react-icons/ri'
import { BsPatchCheckFill, BsFillChatFill, BsFillBellFill } from 'react-icons/bs'
import {MdKeyboardArrowDown, MdClose, MdHealthAndSafety, MdPets} from 'react-icons/md'
import {HiHome, HiNewspaper, HiOutlineArrowRight} from 'react-icons/hi'
import {GiDogHouse} from 'react-icons/gi'
import {GoGraph} from 'react-icons/go'
import { server } from '/server'
import FallbackImage from '/components/FallbackImage/FallbackImage'
import SearchBar from "components/SearchBar/SearchBar"
import TrademarkWhite from 'components/TrademarkWhite/TrademarkWhite'
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

export default function Header (props) {

  const { data: session } = useSession()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [user, setUser] = useState({})

  const router = useRouter()

  const getUser = async () => {

    const res = await fetch(`${server}/api/users/${session.user.username}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

    const data = await res.json()

    setUser(data)


  }

  useEffect(() => {
    if (session) {
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
              <div className="align__menu">
                <li><Link href="/home" as="/home"><a className="nav__link2" aria-label='Ir a Reciente'><HiHome size={30} color={`${colors.secondary}`}/>Inicio</a></Link></li>
                <li><Link href="/attendances" as="/attendances" passHref><a className="nav__link2" aria-label='Ir a Cuidados'><MdPets size={30} color={`${colors.secondary}`}/>Cuidados</a></Link></li>
                <li><SearchBar/></li>
                
                  <li><Link href="/chat" as="/chat"><a className="nav__link2" aria-label='Ir a Chat'><BsFillChatFill size={25} />Chat</a></Link></li>
                  <li><Link href="/notifications" as="/notifications"><a className="nav__link2" aria-label='Ir a Notificaciones'><BsFillBellFill size={25} />Notificaciones</a></Link></li>
                </div>
                <li className='menu-visible'><a id='profile'><ThemeButton /><FallbackImage src={user.image} height={40} width={40} style={{borderRadius: '70px'}}/>@{session.user.username} <MdKeyboardArrowDown size={20} color={colors.secondary} /></a>           
                <ul className='menu'>
                  <li className='nav__title'>Autenticado como:</li>
                  <a className='user__card' href="/profile/myprofile">
                      <FallbackImage src={user.image} height={50} width={50} style={{borderRadius: '70px'}}/>
                      <div className='user__info'>
                        <p className="info__text">{session.user.username}</p>
                        <p className="info__text">{session.user.role.toUpperCase()}</p>
                      </div>
                  </a>
                  <hr className='line' />
                  <li className='nav__title'>Mi cuenta</li>
                  <li className='nav__link'><Link href="/profile/myprofile"><a><div className='align__link'>Mi perfil<div className='nav__icon'><FaUserAlt size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <li className='nav__link'><Link href="/profile/myprofile/pets"><a><div className='align__link'>Mis mascotas<div className='nav__icon'><GiDogHouse size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <hr className='line' />
                  <li className='nav__title'>Más opciones</li>               
                  <li className='nav__link'><Link href="/settings"><a><div className='align__link'>Configuración<div className='nav__icon'><RiSettings4Fill size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <li className='nav__link'><Link href="/faq"><a><div className='align__link'>Ayuda<div className='nav__icon'><HiOutlineArrowRight size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <li className='nav__link'><Link href="/conditions"><a><div className='align__link'>Términos y condiciones<div className='nav__icon'><HiOutlineArrowRight size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <li className='nav__link'><Link href="/privacy"><a><div className='align__link'>Política de privacidad<div className='nav__icon'><HiOutlineArrowRight size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <li className='nav__link'><Link href="/accessibility"><a><div className='align__link'>Accesibilidad<div className='nav__icon'><HiOutlineArrowRight size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <hr className='line' />
                  <li className='nav__link'><a onClick={() => setIsModalVisible(true)}><div className='align__link'>Cerrar sesión<div className='nav__icon'><FaSignOutAlt size={15} color={colors.secondary} /></div></div></a></li>
                </ul>
              </li>
            </div>

          </ul>}

          {session.user.role === 'protectora' &&

          <ul className='header'>

            <div className='logo'>
              <li><TrademarkWhite link='/' /></li>
            </div>
            <div className="header__align">
              <div className="align__menu">
                <li><Link href="/home" as="/home"><a className="nav__link2" aria-label='Ir a Reciente'><HiHome size={30} color={`${colors.secondary}`}/>Inicio</a></Link></li>
                <li><Link href="/attendances" as="/attendances" passHref><a className="nav__link2" aria-label='Ir a Cuidados'><MdPets size={30} color={`${colors.secondary}`}/>Cuidados</a></Link></li>
                <li><SearchBar/></li>
                
                  <li><Link href="/chat" as="/chat"><a className="nav__link2" aria-label='Ir a Chat'><BsFillChatFill size={25} />Chat</a></Link></li>
                  <li><Link href="/notifications" as="/notifications"><a className="nav__link2" aria-label='Ir a Notificaciones'><BsFillBellFill size={25} />Notificaciones</a></Link></li>
              </div>
                <li className='menu-visible'><a id='profile'><ThemeButton /><FallbackImage src={user.image} height={40} width={40} style={{borderRadius: '70px'}}/>@{session.user.username}<BsPatchCheckFill size={25} color={colors.secondary}/> <MdKeyboardArrowDown size={20} color={colors.secondary} /></a>           
                <ul className='menu'>
                  <li className='nav__title'>Autenticado como:</li>
                  <a className='user__card' href="/profile/myprofile">
                      <FallbackImage src={user.image} height={50} width={50} style={{borderRadius: '70px'}}/>
                      <div className='user__info'>
                        <p className="info__text">{session.user.username}</p>
                        <p className="info__text">{session.user.role.toUpperCase()}</p>
                      </div>
                  </a>
                  <hr className='line' />
                  <li className='nav__title'>Mi cuenta</li>
                  <li className='nav__link'><Link href="/profile/myprofile"><a><div className='align__link'>Mi perfil<div className='nav__icon'><FaUserAlt size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <li className='nav__link'><Link href="/profile/myprofile/pets"><a><div className='align__link'>Mis mascotas<div className='nav__icon'><GiDogHouse size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <hr className='line' />
                  <li className='nav__title'>Más opciones</li>               
                  <li className='nav__link'><Link href="/settings"><a><div className='align__link'>Configuración<div className='nav__icon'><RiSettings4Fill size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <li className='nav__link'><Link href="/faq"><a><div className='align__link'>Ayuda<div className='nav__icon'><HiOutlineArrowRight size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <li className='nav__link'><Link href="/conditions"><a><div className='align__link'>Términos y condiciones<div className='nav__icon'><HiOutlineArrowRight size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <li className='nav__link'><Link href="/privacy"><a><div className='align__link'>Política de privacidad<div className='nav__icon'><HiOutlineArrowRight size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <li className='nav__link'><Link href="/accessibility"><a><div className='align__link'>Accesibilidad<div className='nav__icon'><HiOutlineArrowRight size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <hr className='line' />
                  <li className='nav__link'><a onClick={() => setIsModalVisible(true)}><div className='align__link'>Cerrar sesión<div className='nav__icon'><FaSignOutAlt size={15} color={colors.secondary} /></div></div></a></li>
                </ul>
              </li>
            </div>

          </ul>}

        {session.user.role === 'administrador' &&

          <ul className='header'>

            <div className='logo'>
              <li><TrademarkWhite link='/' /></li>
            </div>
            <div className="header__align">
              <div className="align__menu">
                <li ><Link href="/home" as="/home"><a className="nav__link2" aria-label='Ir a Reciente'><HiHome size={30} color={`${colors.secondary}`}/>Inicio</a></Link></li>
                <li ><Link href="/attendances" as="/attendances" passHref><a className="nav__link2" aria-label='Ir a Cuidados'><MdPets size={30} color={`${colors.secondary}`}/>Cuidados</a></Link></li>
                <li><SearchBar/></li>
                <li><Link href="/news" as="/news"><a className="nav__link2" aria-label='Ir a Noticias'><HiNewspaper size={30} color={`${colors.secondary}`}/>Noticias</a></Link></li>
                <li><Link href="/dashboard" as="/dashboard"><a className="nav__link2" aria-label='Ir al Panel de administración'><RiAdminFill size={30} color={`${colors.secondary}`}/>Panel</a></Link></li>
              </div>
              <li className='menu-visible'><a id='profile'><ThemeButton /><FallbackImage src={user.image} height={40} width={40} style={{borderRadius: '70px'}}/>@{session.user.username} <MdKeyboardArrowDown size={20} color={colors.secondary} /></a>           
                <ul className='menu'>
                  <li className='nav__title'>Autenticado como:</li>
                  <a className='user__card' href="/profile/myprofile">
                      <FallbackImage src={user.image} height={50} width={50} style={{borderRadius: '70px'}}/>
                      <div className='user__info'>
                        <p className="info__text">{session.user.username}</p>
                        <p className="info__text">{session.user.role.toUpperCase()}</p>
                      </div>
                  </a>
                  <hr className='line' />
                  <li className='nav__title'>Mi cuenta</li>
                  <li className='nav__link'><Link href="/profile/myprofile"><a><div className='align__link'>Mi perfil<div className='nav__icon'><FaUserAlt size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <li className='nav__link'><Link href="/profile/myprofile/pets"><a><div className='align__link'>Mis mascotas<div className='nav__icon'><GiDogHouse size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <hr className='line' />
                  <li className='nav__title'>Más opciones</li>               
                  <li className='nav__link'><Link href="/settings"><a><div className='align__link'>Configuración<div className='nav__icon'><RiSettings4Fill size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <li className='nav__link'><Link href="/faq"><a><div className='align__link'>Ayuda<div className='nav__icon'><HiOutlineArrowRight size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <li className='nav__link'><Link href="/conditions"><a><div className='align__link'>Términos y condiciones<div className='nav__icon'><HiOutlineArrowRight size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <li className='nav__link'><Link href="/privacy"><a><div className='align__link'>Política de privacidad<div className='nav__icon'><HiOutlineArrowRight size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <li className='nav__link'><Link href="/accessibility"><a><div className='align__link'>Accesibilidad<div className='nav__icon'><HiOutlineArrowRight size={15} color={colors.secondary} /></div></div></a></Link></li>
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
              <div className="align__menu">
                <li><Link href="/home" as="/home"><a className="nav__link2" aria-label='Ir a Reciente'><HiHome size={30} color={`${colors.secondary}`}/>Inicio</a></Link></li>
                <li><Link href="/attendances" as="/attendances" passHref><a className="nav__link2" aria-label='Ir a Cuidados'><MdPets size={30} color={`${colors.secondary}`}/>Cuidados</a></Link></li>
                <li><SearchBar/></li>
                <li><Link href="/news" as="/news"><a className="nav__link2" aria-label='Ir a Noticias'><HiNewspaper size={30} color={`${colors.secondary}`}/>Noticias</a></Link></li>
                <li><Link href="/statistics" as="/statistics"><a className="nav__link2" aria-label='Ir a Estadísticas'><GoGraph size={30} color={`${colors.secondary}`}/>Estadísticas</a></Link></li>
              </div>
                <li className='menu-visible'><a id='profile'><ThemeButton /><FallbackImage src={user.image} height={40} width={40} style={{borderRadius: '70px'}}/>@{session.user.username} <MdKeyboardArrowDown size={20} color={colors.secondary} /></a>    

                <ul className='menu'>
                  <li className='nav__title'>Autenticado como:</li>
                  <a className='user__card' href="/profile/myprofile">
                      <FallbackImage src={user.image} height={50} width={50} style={{borderRadius: '70px'}}/>
                      <div className='user__info'>
                        <p className="info__text">{session.user.username}</p>
                        <p className="info__text">{session.user.role.toUpperCase()}</p>
                      </div>
                  </a>
                  <hr className='line' />
                  <li className='nav__title'>Mi cuenta</li>
                  <li className='nav__link'><Link href="/profile/myprofile"><a><div className='align__link'>Mi perfil<div className='nav__icon'><FaUserAlt size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <li className='nav__link'><Link href="/profile/myprofile/pets"><a><div className='align__link'>Mis mascotas<div className='nav__icon'><GiDogHouse size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <hr className='line' />
                  <li className='nav__title'>Más opciones</li>               
                  <li className='nav__link'><Link href="/settings"><a><div className='align__link'>Configuración<div className='nav__icon'><RiSettings4Fill size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <li className='nav__link'><Link href="/faq"><a><div className='align__link'>Ayuda<div className='nav__icon'><HiOutlineArrowRight size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <li className='nav__link'><Link href="/conditions"><a><div className='align__link'>Términos y condiciones<div className='nav__icon'><HiOutlineArrowRight size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <li className='nav__link'><Link href="/privacy"><a><div className='align__link'>Política de privacidad<div className='nav__icon'><HiOutlineArrowRight size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <li className='nav__link'><Link href="/accessibility"><a><div className='align__link'>Accesibilidad<div className='nav__icon'><HiOutlineArrowRight size={15} color={colors.secondary} /></div></div></a></Link></li>
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
              <div className="align__menu">
                <li><Link href="/home" as="/home"><a className="nav__link2" aria-label='Ir a Reciente'><HiHome size={30} color={`${colors.secondary}`}/>Inicio</a></Link></li>
                <li><Link href="/attendances" as="/attendances" passHref><a className="nav__link2" aria-label='Ir a Cuidados'><MdPets size={30} color={`${colors.secondary}`}/>Cuidados</a></Link></li>
                <li><SearchBar/></li>
                <li><Link href="/news" as="/news"><a className="nav__link2" aria-label='Ir a Noticias'><HiNewspaper size={30} color={`${colors.secondary}`}/>Noticias</a></Link></li>
                <li><Link href="/appointments" as="/appointments"><a className="nav__link2" aria-label='Ir a Citas'><RiHealthBookFill size={30} color={`${colors.secondary}`}/>Citas</a></Link></li>
              </div>
              <li className='menu-visible'><a id='profile'><ThemeButton /><FallbackImage src={user.image} height={40} width={40} style={{borderRadius: '70px'}}/>@{session.user.username}<MdHealthAndSafety size={20} color={colors.secondary}/> <MdKeyboardArrowDown size={20} color={colors.secondary} /></a>           
                <ul className='menu'>
                  <li className='nav__title'>Autenticado como:</li>
                  <a className='user__card' href="/profile/myprofile">
                      <FallbackImage src={user.image} height={50} width={50} style={{borderRadius: '70px'}}/>
                      <div className='user__info'>
                        <p className="info__text">{session.user.username}</p>
                        <p className="info__text">{session.user.role.toUpperCase()}</p>
                      </div>
                  </a>
                  <hr className='line' />
                  <li className='nav__title'>Mi cuenta</li>
                  <li className='nav__link'><Link href="/profile/myprofile"><a><div className='align__link'>Mi perfil<div className='nav__icon'><FaUserAlt size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <li className='nav__link'><Link href="/profile/myprofile/pets"><a><div className='align__link'>Mis mascotas<div className='nav__icon'><GiDogHouse size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <hr className='line' />
                  <li className='nav__title'>Más opciones</li>               
                  <li className='nav__link'><Link href="/settings"><a><div className='align__link'>Configuración<div className='nav__icon'><RiSettings4Fill size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <li className='nav__link'><Link href="/faq"><a><div className='align__link'>Ayuda<div className='nav__icon'><HiOutlineArrowRight size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <li className='nav__link'><Link href="/conditions"><a><div className='align__link'>Términos y condiciones<div className='nav__icon'><HiOutlineArrowRight size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <li className='nav__link'><Link href="/privacy"><a><div className='align__link'>Política de privacidad<div className='nav__icon'><HiOutlineArrowRight size={15} color={colors.secondary} /></div></div></a></Link></li>
                  <li className='nav__link'><Link href="/accessibility"><a><div className='align__link'>Accesibilidad<div className='nav__icon'><HiOutlineArrowRight size={15} color={colors.secondary} /></div></div></a></Link></li>
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
                    box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);

                    cursor: default;
                    

                }

                .user__card{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    width: 11vw;
                    padding: 1rem;
                    gap: 2rem;
                    
                    /*Visuals*/

                    /*Visuals*/

                    background-image: linear-gradient(45deg, rgba(240,129,15, 0.8) 35%, rgba(249,166,3, 0.8) 100%);
                    backdrop-filter: blur(5px);
                    border-radius: 20px;
                    box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);

                }

                .user__info{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    gap: 0;

                    /*Text*/

                    font-size: 0.9rem;

                }

                .info__text{

                    /*Box model*/

                    margin-bottom: 0.5rem;

                    /*Text*/

                    font-size: 0.8rem;
                }

                .nav__title{

                    /*Box model*/

                    margin-top: 1rem;
                    margin-bottom: 1rem;

                    /*Text*/

                    font-size: 0.8rem;

                }


                .header__align
                {

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 3rem;

                    /*Text*/

                    font-size: 1.5rem;

                }

                .align__menu{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 5rem;
                
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
                    width: 98.5%; 
                    min-height: 8vh;
                    height: 8vh;
                    padding: 1rem;
                    margin-top: 0;
                    margin-left: 0;
                    margin-right: 0;
                    margin-bottom: 0;

                    /*Visuals*/

                    border-radius: 0 0 20px 0;
                    background-image: linear-gradient(45deg, rgba(240,129,15, 1) 35%, rgba(249,166,3, 1) 100%);
                    

                }

                .menu{

                    /*Position*/

                    position: absolute;

                    /*Box model*/

                    display: none;
                    margin-bottom: 1rem;
                    margin-right: 1.5rem;
                    margin-top: 2.0rem;
                    
                    z-index: 100000;


                    /*Visuals*/

                    border-radius: 20px 20px 20px 20px;
                    background-image: linear-gradient(45deg, rgba(240,129,15, 1) 35%, rgba(249,166,3, 1) 100%);

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
               
                    position: absolute;
                    top: 3.5rem;
                    right: 0.1rem;
                    z-index: 1;

                    /*Text*/

                    font-family: ${fonts.default};
                    color: ${colors.secondary};

                    /*Visual*/  
 
                    background-image: linear-gradient(45deg, rgba(240,129,15, 1) 35%, rgba(249,166,3, 1) 100%);
                    


                    /*Text*/

                    color: ${colors.secondary};
                }

                .nav__link{

                    /*Box model*/

                    margin-bottom: 1rem;
                    display: flex;
                    flex-direction: row;


                    /*Text*/

                    font-weight: 600;


                    
                }

                .nav__link a{

                    /*Box model*/

                    padding: 0.5rem;
                    padding-left: 0;
                }



                .nav__link2{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 0.2rem;

                    /*Text*/

                    font-size: 0.8rem;
                }
                
                .align__link{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    cursor: pointer;

                }

                .nav__icon{

                    /*Box model*/

                    margin-left: 1rem;
                    display: flex;
                    align-items: center;
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
                    padding: 1rem;

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
  }
}
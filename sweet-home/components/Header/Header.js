import Link from 'next/link'
import { useSession, signOut} from "next-auth/react"
import {useRouter} from 'next/router'
import {useState} from 'react'
import global from "styles/global.module.css"
import {colors} from "/styles/frontend-conf.js"
import {fonts} from "styles/frontend-conf.js"
import {FaUserAlt , FaSignOutAlt} from 'react-icons/fa'
import Trademark from "components/Trademark/Trademark"
import Modal from "components/Modal/Modal"

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

export default function Header(props){

    const {data: session, status} = useSession({required: false});
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const router = useRouter();

    /**
     * If the user is on the home page, send them to the sign in page. If the user is on the sign in
     * page, send them to the sign up page. If the user is on the sign up page, send them to the sign
     * in page
     */
    const handleClick = () => {

        if (router.asPath !== "/auth/signIn"){

            router.push("/auth/signIn");

        }else{

            router.push("/auth/signUp");
        }

    } 

    if (status == "authenticated"){
        return(    
            <>
                    <ul className="header">
                        <div className="logo">
                            <li><Trademark link="/"/></li>
                        </div>
                        <li><Link href="/home" as="/home"><a aria-label="Ir a Reciente">Inicio</a></Link></li>
                        <li><Link href={props.url1} as={props.url1} passHref><a aria-label='Ir a ${props.text1}'>{props.text1}</a></Link></li>
                        <li><Link href="/search" as="/search"><a aria-label='Ir a Buscar'>Buscar</a></Link></li>
                        <li><Link href="/chat" as="/char"><a aria-label='Ir a Chat'>Chat</a></Link></li>
                        <li className="menu-visible"><a id="profile">Perfil</a>
                            <ul className="menu">
                                <li className="nav__link"><Link href="/profile" as="/profile"><a><div className="align__link">Perfil<div className="nav__icon"><FaUserAlt size={20} color={colors.primary}/></div></div></a></Link></li>
                                <hr className="line"/>
                                <li className="nav__link"><a onClick={() => setIsModalVisible(true)}><div className="align__link">Cerrar sesión<div className="nav__icon"><FaSignOutAlt size={20} color={colors.primary}/></div></div></a></li></ul></li>
                            
                    </ul> 

            {isModalVisible && <Modal>
                    <h2 className={global.title}>Cerrar sesión</h2>
                    <p className={global.text}>¿Estás seguro de que quieres cerrar sesión?</p>
                            <div className="buttons">
                                    <button className={global.buttonPrimary} onClick={() => signOut()}>Sí</button>
                                    <button className={global.buttonTertiary} onClick={() => setIsModalVisible(false)}>No</button>
                            </div>
            </Modal>}
            
                <style jsx>{`

            

                #profile{
                    /*Box model*/

                    margin-bottom: 1rem;

                    /*Text*/

                    text-decoration: none;
                    color: ${colors.primary};
                    font-size: 1.2rem;
                    font-family: ${fonts.default};
                    cursor: default;

                }

 
                                    
                .logo{

                    /*Box model*/

                    margin-top: 0.5rem;
                    margin-bottom: 1rem;

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
                    width: 100%;
                    padding: 0;
                    margin-bottom: 8rem;


                    /*Visuals*/

                    background: rgba(255, 255, 255, 0.13);
                    backdrop-filter: blur(5px);
                    border-bottom: 1px solid ${colors.primary};

                }

                .menu{

                    /*Box model*/

                    display: none;
                    position: absolute;
                    margin-bottom: 1rem;
                    margin-right: 2rem;
                    
                    z-index: 100000;


                    /*Visuals*/

                    border-radius: 0 0 10px 10px;
                    background: rgba(255, 255, 255, 0.4);
                    backdrop-filter: blur(5px);

                }

                .no-button{

                    /*Visuals*/

                    background-color: transparent;
                    border: none;
                }

                .line{

                    width: 100%;
                    height: 0.09rem;

                    /*Visuals*/

                    background-color: #f0810f;
                    border: none;
                    opacity: 0.6;
                }

                .menu a{

                    /*Text*/

                    color: ${colors.primary};

                    /*Visuals*/

                    list-style-type: none;
                }

                .menu-visible:hover .menu{

                    /*Box model*/

                    display: block;
                    position: absolute;
                    z-index: 1;

                    /*Text*/

                    font-family: ${fonts.default};
                    color: ${colors.primary};

                    /*Visual*/  
 
                    background: rgba(255, 255, 255, 0.13);
                    backdrop-filter: blur(5px);
                    border-bottom: 1px solid ${colors.primary};
                    border-right: 1px solid ${colors.primary};
                    border-left: 1px solid ${colors.primary};


                    /*Text*/

                    color: ${colors.secondary};
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

                .buttons{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    margin-top: 2rem;
                }


                button{

                    /*Box model*/

                    margin: 1rem;
                }

                a{

                    /*Box model*/

                    margin-bottom: 1rem;

                    /*Text*/

                    text-decoration: none;
                    color: ${colors.primary};
                    font-size: 1.2rem;
                    font-family: ${fonts.default};
                    cursor: pointer;

                    /*Animation*/
                    
                    transition: all 0.3s ease-in-out;
                }

                a:hover{

                    /*Text*/
                    
                    color: ${colors.tertiary};
                    font-size: 1.5rem;
                    
                    
                }
                
                li{

                    /*Visuals*/

                    list-style-type: none;
                }

            `}</style></>)
    }else{
        return(
            <>
                <div className="header">
                    <div className="logo">
                        <Trademark link="/"/>
                    </div>
                    <Link href={props.url1} as={props.url1} passHref><a aria-label='Ir a ${text1}'>{props.text1}</a></Link>
                    <Link href={props.url2} as={props.url2} passHref><a aria-label='Ir a ${text2}'>{props.text2}</a></Link>
                    <Link href={props.url3} as={props.url3} passHref><a aria-label='Ir a ${text3}'>{props.text3}</a></Link> 
                    <div className="header__buttons">
                        <button className="button1" onClick={() => handleClick()}><a>{props.text4}</a></button>
                        {router.route !== "/auth/signIn" && router.route !== "/auth/signUp" && <button className="button2" onClick={() => router.push("/auth/signUp")}><a>{props.text5}</a></button>}
                    </div>
                </div>

            
                <style jsx>{`


                    .logo{

                        /*Box model*/

                        margin-top: 1rem;
                        margin-bottom: 1rem;
                        margin-left: 2rem;

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
                    width: 100%;

                    margin-bottom: 8rem;
                    margin-left: 0.1rem;

                    /*Visuals*/

                    background: rgba(255, 255, 255, 0.13);
                    backdrop-filter: blur(5px);
                    border-bottom: 1px solid ${colors.primary};

                    }

                    .menu{

                    /*Box model*/

                    display: none;
                    position: absolute;
                    margin-bottom: 1rem;
                    z-index: 1;


                    /*Visuals*/

                    border-radius: 0 0 10px 10px;
                    background: rgba(255, 255, 255, 0.13);
                    backdrop-filter: blur(4.4px);
                    }

                    .no-button{

                    /*Visuals*/

                    background-color: transparent;
                    border: none;
                    }


                    .menu a{

                    /*Text*/

                    color: ${colors.primary};

                    /*Visuals*/

                    list-style-type: none;
                    }

                    .menu-visible:hover .menu{

                    /*Box model*/

                    display: block;
                    position: absolute;
                    z-index: 1;

                    /*Text*/

                    font-family: ${fonts.default};
                    color: ${colors.primary};

                    /*Visual*/  

                    background: rgba(255, 255, 255, 0.13);
                    backdrop-filter: blur(4.4px);
                    border-bottom: 1px solid ${colors.primary};
                    border-right: 1px solid ${colors.primary};
                    border-left: 1px solid ${colors.primary};


                    /*Text*/

                    color: ${colors.secondary};

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

                    /*Box model*/

                    margin: 1rem;
                    }

                    a{

                    /*Box model*/

                    margin-bottom: 1rem;

                    /*Text*/

                    text-decoration: none;
                    color: ${colors.primary};
                    font-size: 1.2rem;
                    font-family: ${fonts.default};
                    cursor: pointer;

                    /*Animation*/

                    transition: all 0.3s ease-in-out;
                    }

                    a:hover{

                    /*Text*/

                    color: ${colors.tertiary};
                    font-size: 1.5rem;


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
                   
                    
                }

                .button1{

                    /*Box model*/

                    padding: 0.7rem;

                    /*Visuals*/

                    cursor: pointer;
                    background-color: ${colors.primary};
                    border-radius: 5px;
                    border: none;
                    
                    
                }

                .button1 a{

                    /*Text*/

                    text-decoration: none;
                    color: ${colors.secondary};
                    font-size: 1.2rem;
                    font-family: ${fonts.default};

                }


                .button1 a:hover{

                    /*Text*/
                    
                    color: ${colors.tertiary};
                    font-size: 1.5rem;
                    
                }

                .button2{

                    /*Box model*/


                    padding: 0.7rem;

                    /*Visuals*/

                    cursor: pointer;
                    border-radius: 5px;
                    border: none;
                    background-color: #ffe0b8;
                    
                }

                .button2 a{

                    /*Text*/

                    text-decoration: none;
                    color: ${colors.primary};
                    font-size: 1.2rem;
                    font-family: ${fonts.default};

                }

                .button2 a:hover{

                     /*Text*/
                    
                    color: ${colors.tertiary};
                    font-size: 1.5rem;
                }

                a{

                    /*Text*/

                    text-decoration: none;
                    color: ${colors.primary};
                    font-size: 1.2rem;
                    font-family: ${fonts.default};

                    /*Animation*/
                    
                    transition: all 0.3s ease-in-out;
                }

                a:hover{

                    /*Text*/
                    
                    color: ${colors.tertiary};
                    font-size: 1.5rem;
                    
                    
                }
                


            `}</style></>)
                
            }
    }
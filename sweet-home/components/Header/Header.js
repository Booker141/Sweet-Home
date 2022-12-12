import Link from 'next/link'
import { useSession, signUp, signOut} from "next-auth/react"
import {colors} from "/styles/frontend-conf.js"
import {fonts} from "styles/frontend-conf.js"
import {FaUserAlt , FaSignOutAlt} from 'react-icons/fa'
import Trademark from "components/Trademark/Trademark"

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
 * @param {text1} text1 - text of the first link
 * @param {text2} text2 - text of the second link
 * @param {text3} text3 - text of the third link
 * @param {text4} text4 - text of the fourth link
 * @returns {Header} - header with basic information
 */

export default function Header(props){

    const {url1, url2, url3, url4, text1, text2, text3, text4} = props;
    const {data: session} = useSession();
    if (session){
        return(    
            <>
            <div className="content__header">
                <ul className="header">
                    <li><Trademark link="/"/></li>
                    <li><Link href={url1} as={url1} passHref><a aria-label='Ir a ${text1}'>{text1}</a></Link></li>
                    <li><Link href={url2} as={url2} passHref><a aria-label='Ir a ${text2}'>{text2}</a></Link></li>
                    <li><Link href={url3} as={url3} passHref><a aria-label='Ir a ${text3}'>{text3}</a></Link></li>
                    <li className="menu-visible"><a id="profile">{session.user.name}▾</a>
                        <ul className="menu">
                            <li className="nav__link"><Link href="/profile" as="/profile"><a><div className="align__link">Perfil<div className="nav__icon"><FaUserAlt size={20} color={colors.primary}/></div></div></a></Link></li>
                            <hr className="line"/>
                            <li className="nav__link"><Link href="/signOut" as="/signOut"><a><div className="align__link">Cerrar sesión<div className="nav__icon"><FaSignOutAlt size={20} color={colors.primary}/></div></div></a></Link></li></ul></li>
                        </ul>        
            </div>
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

                .content__header{

                    /*Box model*/

                    margin-right: 6rem;
                    margin-left: 0.5rem;
                
                }

                .header{

                    
                    /*Position*/

                    position: relative;
                    top: 2rem;
                    left: 0;
                    z-index: 1;

                    /*Box model*/

                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    align-items: center;
                    height: 2rem;
                    width: 100%;                  
                    margin-bottom: 8rem;
                    margin-left: 0.1rem;

                }

                .menu{

                    /*Box model*/

                    display: none;
                    position: absolute;
                    margin-bottom: 1rem;
                    z-index: 1;
                    width: 20%;
                    height: 8rem;

                    /*Visuals*/

                    background-color: ${colors.secondary};
                    border-radius: 0 0 10px 10px;
                }

                .line{

                    /*Position*/

                    position: relative;
                    left: -2.5em;
                
                    /*Box model*/

                    width: 113%;

                    /*Visuals*/

                    border: 0.5px solid ${colors.primary};
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
                    width: 25%;
                    z-index: 1;

                    /*Text*/

                    font-family: ${fonts.default};
                    color: ${colors.primary};

                    /*Visual*/  

                    background-color: white;
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

                }

                .nav__icon{

                    /*Box model*/

                    margin-left: 1rem;
                }

                a{

                    /*Box model*/

                    margin-bottom: 1rem;

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
                
                li{

                    /*Visuals*/

                    list-style-type: none;
                }

            `}</style></>)
    }else{
        return(
            <>
                <div className="header">
                    <Trademark link="/"/>
                    <Link href={url1} as={url1} passHref><a aria-label='Ir a ${text1}'>{text1}</a></Link>
                    <Link href={url2} as={url2} passHref><a aria-label='Ir a ${text2}'>{text2}</a></Link>
                    <Link href={url3} as={url3} passHref><a aria-label='Ir a ${text3}'>{text3}</a></Link> 
                    <Link href={url4} as={url4} passHref><a onClick={()=>signUp()} aria-label='Ir a ${text4}'>{text4}</a></Link>
                </div>
            
                <style jsx>{`
                
                .header{

                    /*Position*/

                    position: relative;
                    top: 2rem;
                    left: 0;
                    z-index: 1;

                    /*Box model*/

                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    height: 2rem;
                    width: 100%;                  
                    margin-bottom: 8rem;
                    margin-left: 0.1rem;

                    /*Visuals*/
                   
                    background-color: ${props.color};
                    
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
import Link from 'next/link'
import { useSession, signIn, signOut} from "next-auth/react"
import {colors} from "/styles/frontend-conf.js"
import {fonts} from "styles/frontend-conf.js"
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

                        <ul className="header">
                            <li><Trademark link="/"/></li>
                            <li><Link href={url1} as={url1} passHref><a aria-label='Ir a ${text1}'>{text1}</a></Link></li>
                            <li><Link href={url2} as={url2} passHref><a aria-label='Ir a ${text2}'>{text2}</a></Link></li>
                            <li><Link href={url3} as={url3} passHref><a aria-label='Ir a ${text3}'>{text3}</a></Link></li>
                            <li className="menu-visible"><a href="/Profile">{session.user.email}▾</a>
                                <ul className="menu">
                                    <li><Link href="/signOut"><a onClick={(e) => {e.preventDefault() 
                                                                                    signOut()}}>Cerrar sesión</a></Link></li></ul></li>
                        </ul>   

                <style jsx>{`
                
                
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

                    /*Visuals*/
                    
                    
                    background-color: ${props.color};
                }

                .menu{

                    /*Box model*/

                    display: none;
                    position: absolute;
                    top: 2rem;
                    z-index: 1;
                    width: 15%;
                    height: 2.5rem;
                    /*Visuals*/

                    border-radius: 10px;
                }

                .menu a{

                    /*Text*/

                    color: ${colors.secondary};

                    /*Visuals*/

                    list-style-type: none;
                }

                .menu-visible:hover .menu{

                    /*Box model*/

                    display: block;
                    position: absolute;
                    top: 2rem;
                    z-index: 1;

                    /*Visual*/

                    background-color: ${colors.primary};

                    /*Text*/

                    color: ${colors.secondary};
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
                    <Link href={url4} as={url4} passHref><a onClick={()=>signIn()} aria-label='Ir a ${text4}'>{text4}</a></Link>
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
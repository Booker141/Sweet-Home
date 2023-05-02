import { fonts } from 'styles/frontend-conf.js'
import global from 'styles/global.module.css'
import Link from 'next/link'
/*
    * @author Sergio García Navarro
    * @returns Basic Footer component
    * @version 1.0
    * @date 13/01/2020
    * @description Basic Footer component
*/
/**
 * This function is a basic footer component that takes in three urls and three texts and displays them
 * in a footer
 * @param {props} url1 - url of the first link
 * @param {props} url2 - url of the second link
 * @param {props} url3 - url of the third link
 * @param {props} text1 - text of the first link
 * @param {props} text2 - text of the second link
 * @param {props} text3 - text of the third link
 * @returns A footer with three links and a copyright.
 */
export default function BasicFooter (props) {
  const { url1, url2, url3, url4, text1, text2, text3, text4 } = props
  return (

    <>

      <div className='footer'>
        {props.color === "#fafafa" && <hr className={global.white__line}/>}{props.color === "#f0810f" && <hr className={global.line} />}
        <div className='footer__links'>
          <Link className={global.link} href={url1} passHref><a aria-label='Ir a ${text1}'>{text1}</a></Link>
          <Link className={global.link} href={url2} passHref><a aria-label='Ir a ${text2}'>{text2}</a></Link>
          <Link className={global.link} href={url3} passHref><a aria-label='Ir a ${text3}'>{text3}</a></Link>
          <Link className={global.link} href={url4} passHref><a aria-label='Ir a ${text4}'>{text4}</a></Link>
          <div className='copyright'>
            <p> Copyright &copy; 2022 Sweet Home Corporation</p>
          </div>
        </div>
      </div>
      <style jsx>{`

                .footer{

                    /*Position*/

                    position: relative;
                    margin-top: 0.6rem;
                    margin-bottom: 1rem;

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    height: 10%;

                    /*Text*/

                    font-family: ${fonts.primary};

                    /*Visuals*/

                    background-color: ${props.background};
                       
                }

                .footer__links{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;

                }
               
                .copyright{

                    /*Box model*/

                    align-self: flex-end;

                }


                p{

                    /*Text*/

                    color: ${props.color};
                    font-size: 1rem;
                    font-family: ${fonts.default};

                }
                
                a{

                    /*Text*/
  
                    text-decoration: none;
                    color: ${props.color};
                    font-size: 1rem;
                    font-family: ${fonts.default};

                    /*Animation*/

                    transition: all 0.3s ease-in-out;
                }

                a:hover{

                    /*Text*/

                    color: ${props.hover};
                }

                hr{

                    /*Box model*/

                    width: 100%;
                }
            `}
      </style>
    </>
  )
}

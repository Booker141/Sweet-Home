import {colors} from "styles/frontend-conf.js"
import {fonts} from "styles/frontend-conf.js"
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
export default function BasicFooter(props){

    const {url1, url2, url3, text1, text2, text3, marginTop} = props;

    return(

        <>
            <div className="footer">
                <Link href={'${url1}'}><a>{text1}</a></Link>
                <Link href={'${url2}'}><a>{text2}</a></Link>
                <Link href={'${url3}'}><a>{text3}</a></Link>
                <div className="copyright">
                    <p> Copyright &copy; 2022 Sweet Home Corporation</p>
                </div>
                
            </div>
            <style jsx>{`

                .footer{

                    /*Position*/

                    position: absolute;
                    margin-top: ${marginTop};

                    /*Box model*/

                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    width: 100%;
                    height: 10%;

                    /*Text*/

                    font-family: ${fonts.primary};

                    /*Visuals*/

                    background-color: ${props.color};
                       
                }

                .copyright{

                    /*Box model*/
   
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                }

                p{

                    /*Text*/

                    color: ${colors.primary};
                    font-size: 1rem;
                    font-family: ${fonts.default};

                }
                
                a{

                    /*Text*/
  
                    text-decoration: none;
                    color: ${colors.primary};
                    font-size: 1rem;
                    font-family: ${fonts.default};
                }

                a:hover{
                    /*Visuals*/
                    color: ${colors.tertiary};
                }
            `}</style>
        </>
    )
}
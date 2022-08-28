import {colors} from "styles/frontend-conf.js"
import {fonts} from "styles/frontend-conf.js"
import Image from 'next/image'
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

    const {url1, url2, url3, text1, text2, text3} = props;

    return(

        <>
            <div className="footer">
                <Link href={'${url1}'}><a>{text1}</a></Link>
                <Link href={'${url2}'}><a>{text2}</a></Link>
                <Link href={'${url3}'}><a>{text3}</a></Link>
                <div className="copyright">
                    <Image src="/public/LogoApp.png" width="20" height="20"/>
                    <p> Copyright &copy; 2022 Sweet Home Corporation</p>
                </div>
                
            </div>
            <style jsx>{`

                .footer{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    background-color: ${props.color};
                    width: 100%;
                    position: absolute;
                    bottom: 0;
                    margin-bottom: 0rem;
                    font-family: ${fonts.primary};
                }

                .copyright{
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                }

                p{
                    color: ${colors.primary};
                    font-size: 1rem;
                    font-family: ${fonts.default};
                }

                img{
                    height: 0.2vh;
                    weight: 0.2vw;
                
                }

                a{
                    text-decoration: none;
                    color: ${colors.primary};
                    font-size: 1rem;
                    font-family: ${fonts.default};
                }

                a:hover{
                    color: ${colors.tertiary};
                }
            `}</style>
        </>
    )
}
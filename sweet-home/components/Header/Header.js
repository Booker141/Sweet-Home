import Trademark from "components/Trademark/Trademark"
import Link from 'next/link'
import {colors} from "/styles/frontend-conf.js"
import {fonts} from "styles/frontend-conf.js"
/**
 * 
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
    
        return(
            
            <>
                <div className="header">
                    <Trademark link="/"/>
                    <Link href={'${url1}'}><a>{text1}</a></Link>
                    <Link href={'${url2}'}><a>{text2}</a></Link>
                    <Link href={'${url3}'}><a>{text3}</a></Link>
                    <Link href={'${url4}'}><a>{text4}</a></Link>       
                </div>
                <style jsx>{`
                    .header{
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        background-color: ${props.color};
                        height: 2rem;
                        width: 100%;
                        position: relative;
                        top: 2rem;
                        left: 0;
                        z-index: 1;
                    }

                    a{
                        text-decoration: none;
                        color: ${colors.primary};
                        font-size: 1.2rem;
                        font-family: ${fonts.default};
                    }

                    a:hover{
                        color: ${colors.tertiary};
                    }
            
                `}</style>
            </>
        )
    }
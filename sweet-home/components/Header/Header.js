import Trademark from "components/Trademark/Trademark"
import Link from 'next/link'
import {colors} from "/styles/frontend-conf.js"
import {fonts} from "styles/frontend-conf.js"
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
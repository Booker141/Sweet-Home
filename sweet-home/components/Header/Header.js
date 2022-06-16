import Trademark from "components/Trademark/Trademark"
import {colors} from "/styles/frontend-conf.js"
import {fonts} from "styles/frontend-conf.js"
export default function Header(props){
    
        return(
    
            <>
                <div className="header">
                    <Trademark/>
                    <a href={props.url1}>{props.text1}</a>
                    <a href={props.url2}>{props.text2}</a>
                    <a href={props.url3}>{props.text3}</a>
                    <a href={props.url4}>{props.text4}</a>
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
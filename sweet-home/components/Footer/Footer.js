import {colors} from "styles/frontend-conf.js"
import {fonts} from "styles/frontend-conf.js"
export default function Footer(props){

    return(

        <>
            <div className="footer">
                <a href={props.url1}>{props.text1}</a>
                <a href={props.url2}>{props.text2}</a>
                <a href={props.url3}>{props.text3}</a>
                <p> &copy; Sweet Home Corporation 2022</p>
            </div>
            <style jsx>{`

                .footer{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    background-color: ${props.color};
                    height: 3rem;
                    width: 100%;
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    z-index: 1;
                    font-family: ${fonts.primary};
                }

                p{
                    color: ${colors.primary};
                    font-size: 1rem;
                    font-family: ${fonts.default};
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
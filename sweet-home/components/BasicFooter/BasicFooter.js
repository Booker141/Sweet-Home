import {colors} from "styles/frontend-conf.js"
import {fonts} from "styles/frontend-conf.js"
export default function BasicFooter(props){

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
                    width: 100%;
                    position: absolute;
                    bottom: 0;
                    margin-bottom: 0rem;
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
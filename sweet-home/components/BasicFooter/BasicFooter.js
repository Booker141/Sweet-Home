import {colors} from "styles/frontend-conf.js"
import {fonts} from "styles/frontend-conf.js"
import Image from 'next/image'
export default function BasicFooter(props){

    return(

        <>
            <div className="footer">
                <a href={props.url1}>{props.text1}</a>
                <a href={props.url2}>{props.text2}</a>
                <a href={props.url3}>{props.text3}</a>
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
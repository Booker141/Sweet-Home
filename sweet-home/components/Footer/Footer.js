import {colors} from "styles/frontend-conf.js"
import {fonts} from "styles/frontend-conf.js"
export default function Footer(props){

    return(
            <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f0810f" fill-opacity="1" d="M0,128L20,138.7C40,149,80,171,120,170.7C160,171,200,149,240,170.7C280,192,320,256,360,245.3C400,235,440,149,480,128C520,107,560,149,600,186.7C640,224,680,256,720,224C760,192,800,96,840,74.7C880,53,920,107,960,117.3C1000,128,1040,96,1080,101.3C1120,107,1160,149,1200,170.7C1240,192,1280,192,1320,192C1360,192,1400,192,1420,192L1440,192L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg>
            <div className="footer">
                <a href={props.url1}>{props.text1}</a>
                <a href={props.url2}>{props.text2}</a>
                <a href={props.url3}>{props.text3}</a>
                <p> &copy; Sweet Home Corporation 2022</p>
            </div>
            <hr></hr>
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

                hr{
                    background-color: ${colors.primary};
                    height: 0.1vh;
                    width: 100%;
                    opacity: 10%
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
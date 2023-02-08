import global from "styles/global.module.css"
import {colors} from "styles/frontend-conf"


export default function TypeAttendance(props) {

    return(
        <>
                <div className={global.typeAttendance}>
                        <h1 className={global.tertiary}>{props.name}</h1>
                        <div className="vertical__divider"></div>
                        <p className={global.text}>{props.description}</p>
                        <div className="vertical__divider"></div>
                        <a className={global.link} href={`/attendances/${props.urlName}`} aria-label={"Ir a " + `${props.url}`}>Entrar</a>
                </div>
            <style jsx>{`

                .vertical__divider{

                    /*Position*/

                    position: relative;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 1px;

                    /*Visuals*/

                    border-left: 4px solid ${colors.primary};
                    height: 100%;

                }

                h1{

                    /*Box model*/

                    margin-right: 2rem;
                    margin-left: 2rem;

                    /*Text*/

                    font-size: 1.4rem;
                    font-weight: 600;

                }

                p{

                    /*Box model*/

                    margin-right: 2rem;
                }

                a{

                    /*Box model*/

                    margin-right: 1rem;
                }
                a:hover{

                    /*Text*/

                    color: ${colors.tertiary};
                    
                    /*Visuals*/

                    transition: 0.3s ease all;
                }
            
            
            `}</style>
        </>
    )


}
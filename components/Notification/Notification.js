import global from "styles/global.module.css"
import {fonts} from "styles/frontend-conf"
import {colors} from "styles/frontend-conf"


export default function Notification(props){


    return(
        <>
            <div className="notification">
                <div className="notification__userFrom">
                    <img src={props.user.image}></img>
                    <div className={global.text2__bold}>
                        {props.user.username}
                    </div>
                </div>
                <div className={global.text2}>
                    {props.description}
                </div>
            </div>
        </>
    )



}
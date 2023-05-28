import global from '/styles/global.module.css'


export default function Message(props){

    return(
        <>
            <div className={global.message}>
                <p className="message__user"></p>                    
                <p className="message__text">{props?.description}</p>
                <p className="message__timestamp">{props?.createdAt}</p>
            </div>
        </>
    )
}
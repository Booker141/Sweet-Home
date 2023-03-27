import global from '/styles/global.module.css'



export default function Message(){

    return(
        <>
            <div className={global.message}>
                <p className="message__user"></p>
                <p className="message__text"></p>
                <p className="message__timestamp"></p>
            </div>
        </>
    )
}
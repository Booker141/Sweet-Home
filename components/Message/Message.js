import global from '/styles/global.module.css'


/**
 * It's a like button that displays the number of likes and changes color when clicked
 * @param props - The props that are passed to the component.
 * @returns A like component that displays the number of likes and a like button.
 */
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
import global from "styles/global.module.css"


export default function Comment(props){

    return (
        <>

            <div key={props._id} className={global.comment}>
                <div className={global.title2}>
                    {props.username}
                </div>
                <p className={global.text}>
                        {props.comment}
                </p>
              
            </div>

        </>

    )
}
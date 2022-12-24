import global from "styles/global.module.css"


export default function Comment(props){

    return (
        <>

                <div key={props._id} className={global.comment}>
                    <div className={global.tertiary__bold}>
                        {props.username}
                    </div>
                    <p className={global.tertiary}>
                        {props.comment}
                    </p>
                
                </div>


    

        </>

    )
}
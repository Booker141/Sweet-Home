import global from "styles/global.module.css"
import Comment from "components/Comment/Comment"


export default function Post(props){

    return (
        <>

            <div key={props._id} className={global.post}>
                <div className="post__header">
                    <div className={global.title2}>
                        {props.username}
                    </div>
                    <div className={global.title2}>
                        {props.location}
                    </div>
                </div>
                <img src={props.mediaUrl}>
                </img>
                <p className={global.text}>
                        {props.description}
                </p>
                <div className={global.comments}>
                    {props.comments.map(({_id, username, comment}) => {
                        return (
                            <>
                                <Comment key={_id} username={username} comment={comment}/>
                            </>
                        )
                    })}
                </div>
            </div>
            <style jsx>{`


                .post__header{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;

                }
            
            `}</style>

        </>

    )
}
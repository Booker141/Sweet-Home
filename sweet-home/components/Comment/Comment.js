import { useEffect, useState } from "react"
import { BsPatchCheckFill } from "react-icons/bs";
import global from "styles/global.module.css"
import { colors } from "styles/frontend-conf"
import {fonts} from "styles/frontend-conf"


export default function Comment(props){

    const [comment, setComment] = useState({});
    const [isCaretaker, setIsCaretaker] = useState(false);
    console.log(comment);
    console.log(props.id);

    useEffect(async () => {

        const res = await fetch(`/api/comments/${props.id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
        }).catch(err => console.log(err))

        const data = await res.json();
        setComment(data);
        setIsCaretaker(data.isCaretaker)
    },[])
    return (
        <>
                <div key={props.id} className={global.comment}>
                    <div className="comment__username">
                        {comment !== null && <p className={global.tertiary2__bold}>@{comment.username}{isCaretaker && <BsPatchCheckFill size={15} color={colors.primary}/>}: </p>}
                    </div>
                    <div className="comment__description">
                        {comment !== null && <p className={global.tertiary2}>{comment.description}</p>}
                    </div>
                </div>
                <style jsx>{`
                
                    .comment__description{

                        /*Box model*/

                        margin-left: 1rem;

                    }

                    .comment__username{

                        /*Box model*/

                        display: flex;
                        align-items: center;
                        margin.left: 1rem;

                    }
                
                `}</style>
        </>
    )
}
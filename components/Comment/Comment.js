import { useEffect, useState } from "react"
import { BsPatchCheckFill } from "react-icons/bs";
import global from "styles/global.module.css"
import { colors } from "styles/frontend-conf"
import {statusColors} from "styles/frontend-conf"
import {fonts} from "styles/frontend-conf"
import {MdDeleteOutline} from 'react-icons/md'
import Modal from "components/Modal/Modal"


export default function Comment(props){

    const [comment, setComment] = useState({});
    const [isCaretaker, setIsCaretaker] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(async () => {

        const res = await fetch(`/api/comments/${props.id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
        }).catch(err => console.log(err))

        const data = await res.json();
        setComment(data);
        setIsCaretaker(data.isCaretaker);
    },[])

    const fetchComments = async () => {

        const res = await fetch(`/api/comments/${props.id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).catch(err => console.log(err));

        const data = await res.json();

        console.log(data);

        setComment(data);
        setIsCaretaker(data.isCaretaker);
        

    }

    const deleteComment = async () => {

        const res = await fetch(`/api/comments/${props.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).catch(err => console.log(err));

        const data = await res.json();

        console.log(data);

        setIsModalVisible(false);

        fetchComments();
    }

    return (
        <>
                <div key={props.id} className={global.comment}>
                    <div className="comment__username">
                        {comment !== null && <p className={global.tertiary2__bold}>@{comment.username}{isCaretaker && <BsPatchCheckFill size={15} color={colors.primary}/>}: </p>}
                    </div>
                    <div className="comment__description">
                        {comment !== null && <p className={global.tertiary2}>{comment.description}</p>}
                    </div>
                    <button className="delete__button" onClick={() => setIsModalVisible(true)}><MdDeleteOutline size={20} color={colors.primary}/></button>
                </div>
                {isModalVisible && <Modal>
                        <h2 className={global.title3}>Eliminar comentario</h2>
                        <p className={global.text2}>¿Estás seguro de eliminar este comentario?</p>
                                <div className="buttons">
                                        <button className={global.buttonSecondary} onClick={() => deleteComment()}>Sí</button>
                                        <button className={global.buttonTertiary} onClick={() => setIsModalVisible(false)}>No</button>
                                </div>
                </Modal>}
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

                    .delete__button{


                        /*Box model*/

                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-left: auto;
                        margin-right: 1.5rem;

                        /*Visuals*/

                        background: transparent;
                        border: none;
                        cursor: pointer;
                    }


                    .buttons{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        justify-content: space-around;
                        align-items: center;
                        gap: 1rem;

                    }
                `}</style>
        </>
    )
}
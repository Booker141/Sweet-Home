import { useSession } from 'next-auth/react'
import {useState, useEffect} from 'react'
import global from "styles/global.module.css"
import {fonts} from "styles/frontend-conf"
import {colors} from "styles/frontend-conf"
import Comment from "components/Comment/Comment"
import {IoPawOutline, IoPaw} from 'react-icons/io5'
import {BsBookmark, BsBookmarkFill} from 'react-icons/bs'


export default function Post(props){

    const {data: session, status} = useSession();
    const [user, setUser] = useState({});
    const [comment, setComment] = useState("");
    const [moreComments, setMoreComments] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isCaretaker, setIsCaretaker] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch(`http://localhost:3000/api/users/${props.username}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const user = await res.json();
            setUser(user);
            setIsCaretaker(user.isCaretaker)
        }
        fetchUser();
    }, [])


    const Commentate = async (e) =>{

        e.preventDefault();
        document.getElementById("comment").value = "";
            
            const res = await fetch('/api/comments', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    postId: props.id,
                    description: comment,
                    username: session.user.username
                })
            })
    
            const data = await res.json()
    
            if(data.error){
                console.log(data.error)
            }else{
                console.log(data)
            }
    }

    const Like = () => {

        setIsActive(!isActive);

        //Like function
    }

    const Save = () => {
        
        setIsActive2(!isActive2);

        //Save function
    }
    return (
        <>
            <div className="post__content">
                <div key={props._id} className={global.post}>
                    <div className="post__header">
                        <div className="header__user">
                            <img src={user.image}></img>
                            <div className={global.text2__bold}>
                                {user.username}
                            </div>
                        </div>
                        <div className={global.text2}>
                            {props.location}
                        </div>
                    </div>
                    <img src={props.mediaUrl}></img>
                    <div className="description">
                        <img src={user.image}></img>
                        <p className={global.tertiary2__bold}>
                            @{user.username}{isCaretaker && <BsPatchCheckFill size={15} color={colors.primary}/>}:
                        </p>
                        <p className={global.tertiary2}>
                            {props.description}
                        </p>
                    </div>
                    <div className="post__block">
                        <div className="post__comment">
                            <input title="Escribir comentario"
                            type="text"
                            name="text"
                            id="comment"
                            value= {comment}
                            required
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Escribir comentario..."
                            className="input"></input>
                            <button onClick={(e) => Commentate(e)} className={global.buttonTertiary}>Enviar</button>
                        </div>
                        <div className="post__icons">
                            <div className="like">
                                <a className="like--status" onClick={() => Like()}>{isActive ? <IoPaw size={20} color={colors.secondary}/> : <IoPawOutline size={20} color={colors.secondary}/> }</a>
                            </div>
                            <div className="save">
                                <a className="save--status" onClick={() => Save()}>{isActive2 ? <BsBookmarkFill size={20} color={colors.secondary}/> : <BsBookmark className="bookmark1" size={20} color={colors.secondary}/>}</a>
                            </div>
                        </div>
                    </div>
                    <div className="comment__container">
                        <p className={global.tertiary2__bold}>Comentarios</p>
                        <hr className={global.line}/>
                        {props.comments.length === 0 && <p className={global.text}>No hay ningún comentario</p>}
                        {props.comments.slice(0, 3).map((id) => {
                            return (
                                <>
                                    <Comment id={id}/>
                                </>
                            )
                        })}
                        {props.comments.length >= 3 && isVisible === false && <button className="button__see" onClick={() => {setMoreComments(!moreComments);
                                                                                                        setIsVisible(!isVisible)}}>Ver más..</button>}
                                                   
                        {moreComments && props.comments.slice(3, props.comments.length).map((id) => {
                            return (
                                <>
                                    <Comment id={id}/>
                                </>
                            )
                        })}
                        { isVisible === true && <button className="button__see" onClick={() => {setMoreComments(!moreComments);
                                                                                                        setIsVisible(!isVisible)}}>Ver menos..</button>}    
                    </div>
                    </div>
                </div>
    
            <style jsx>{`

                .post__content{

                    /*Box model*/

                    margin-bottom: 3rem;

                }

                .post__header{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;

                }

                .post__block{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                    margin-top: 1rem;
                    margin-bottom: 1rem;

                    /*Visuals*/

                    border-radius: 5px;
                }

                .post__comment{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    margin-bottom: 1rem;
                    margin-top: 1rem;

                    
                }

                .post__icons{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-around;
                    margin-bottom: 1rem;
                    margin-top: 1rem;


                }

                .header__user{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;

                }

                .header__user > div{

                    /*Box model*/

                    margin-right: 1rem;
                }

                .description{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    margin-top: 1rem;
                    margin-bottom: 1rem;

                    /*Visuals*/

                    background-color: white;
                    border-radius: 5px;

                }

                .like--status .save--status{

                    /*Misc*/

                    cursor: pointer;
                }

                .description p{

                    /*Box model*/

                    margin-right: 1rem;
                    margin-left: 1rem;
                }

                ::placeholder {

                    /*Text*/

                    color: ${colors.primary};
                }

                .input{

                     /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                    gap: 1rem;

                    width: 100%;
                    height: 2rem;
                    margin-right: 5rem;
                    

                    /*Text*/

                    font-family: ${fonts.default};
                    font-size: 1rem;

                    /*Visuals*/

                    border-radius: 5px;
                    border: 1px solid ${colors.primary};
                }


                .comment__container{

                    /*Visuals*/

                    border-radius: 10px;
                    background-color: #fff;

                }

                .comment__container p{

                    /*Box model*/

                    margin-left: 1rem;

                }

                .button__see{

                    /*Box model*/

                    margin-left: 1rem;
                    margin-bottom: 1rem;
                    margin-top: 1rem;

                    /*Text*/

                    font-size: 1rem;
                    font: ${fonts.default};
                    color: ${colors.primary};

                    /*Visuals*/

                    border: none;
                    background: transparent;
                    cursor: pointer;
                    transition: 0.5s ease all;
                }

                .button__see:hover{

                    /*Visuals*/

                    color: ${colors.tertiary};

                }


                input[type="text"]{

                    /*Box model*/

                    width: 24rem;
                    height: 2rem;
                    margin-right: 1rem;

                    /*Text*/

                    font-family: ${fonts.default};
                    font-size: 1rem;

                    /*Visuals*/

                    border-radius: 5px;
                    border: 1px solid ${colors.primary};
                }

                a{

                    /*Misc*/

                    cursor: pointer;

                }

                hr{

                    /*Box model*/

                    width: 100%;
                }

               


            
            `}</style>

        </>

    )
}
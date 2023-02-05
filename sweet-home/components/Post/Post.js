import {useState, useEffect} from 'react'
import global from "styles/global.module.css"
import {fonts} from "styles/frontend-conf"
import {colors} from "styles/frontend-conf"
import Comment from "components/Comment/Comment"
import {IoPawOutline, IoPaw} from 'react-icons/io5'
import {BsBookmark, BsBookmarkFill} from 'react-icons/bs'


export default function Post(props){

    const [user, setUser] = useState({});
    const [comment, setComment] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);

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
        }
        fetchUser();
    }, [])

    console.log(user);
 
    const Commentate = async (e) =>{

        e.preventDefault();
            
            const res = await fetch("http://localhost:3000/api/comments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    postId: props._id,
                    comment
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
                            <div className={global.title1}>
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
                        <p className={global.tertiary__bold}>
                            {user.username}:
                        </p>
                        <p className={global.tertiary}>
                            {props.description}
                        </p>
                    </div>
                    <div className="post__block">
                        <div className="post__comment">
                            <input title="Escribir comentario"
                            type="text"
                            name="text"
                            value= {comment}
                            required
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Escribir comentario..."
                            className="input"></input>
                            <button onClick={(e) => Commentate(e)} className={global.buttonTertiary}>Enviar</button>
                        </div>
                        <div className="post__icons">
                            <div className="like">
                                <a className="like--status" onClick={() => Like()}>{isActive ? <IoPaw size={20} color={colors.primary}/> : <IoPawOutline size={20} color={colors.primary}/> }</a>
                            </div>
                            <div className="save">
                                <a className="save--status" onClick={() => Save()}>{isActive2 ? <BsBookmarkFill size={20} color={colors.primary}/> : <BsBookmark className="bookmark1" size={20} color={colors.primary}/>}</a>
                            </div>
                        </div>
                    </div>
                    <div className="comment__container">
                        <p className={global.tertiary__bold}>Comentarios</p>
                    
                        {props.comments.map(({_id, username, comment}) => {
                            return (
                                <>
                                    <Comment key={_id} username={username} comment={comment}/>
                                </>
                            )
                        })}
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

                    background-color: #fff;
                    border-radius: 5px;
                }

                .post__comment{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
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

                    width: 70%;
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


                
                a{

                    /*Misc*/

                    cursor: pointer;

                }


            
            `}</style>

        </>

    )
}
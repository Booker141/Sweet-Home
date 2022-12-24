import {useState} from 'react'
import global from "styles/global.module.css"
import {fonts} from "styles/frontend-conf"
import {colors} from "styles/frontend-conf"
import Comment from "components/Comment/Comment"
import {IoPawOutline, IoPaw} from 'react-icons/io'


export default function Post(props){

    const [comment, setComment] = useState("")

    const Like = () => {

        let like = document.getElementById("like");
        
        
        if (!like) {
    
          document.getElementById("show__icon1").style.display = "none";
          document.getElementById("show__icon2").style.display = "inline";

    
        }
        else {
    
          document.getElementById("show__icon1").style.display = "inline";
          document.getElementById("show__icon2").style.display = "none";

    
        }
      }
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
    return (
        <>
            <div className="post__content">
                <div key={props._id} className={global.post}>
                    <div className="post__header">
                        <div className="header__user">
                            <img src={props.userImage}></img>
                            <div className={global.title1}>
                                {props.username}
                            </div>
                        </div>
                        <div className={global.text2}>
                            {props.location}
                        </div>
                    </div>
                    <img src={props.mediaUrl}></img>
                    <div className="description">
                        <p className={global.text}>
                            {props.username}
                        </p>
                        <p className={global.text}>
                            {props.description}
                        </p>
                    </div>

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
                    <a id="like" onClick={() => Like()}><IoPawOutline id="show__icon1" size={20} color={colors.primary}/><div style={{display: "none"}} id="show__icon2"><IoPaw size={20} color={colors.primary}/></div></a>
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

                .post__comment{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
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
                    justify-content: space-around;
                    margin-top: 1rem;
                    margin-bottom: 1rem;
                    /*Visuals*/

                    background-color: white;
                    border-radius: 5px;

                }

                ::placeholder {

                    /*Text*/

                    color: ${colors.primary};
                }

                input["text"]{

                     /*Box model*/

                    width: 100%;
                    height: 2rem;
                    
                    margin-bottom: 2rem;

                    /*Text*/

                    font-family: ${fonts.default};
                    font-size: 1rem;

                    /*Visuals*/

                    border-radius: 5px;
                    border: none;
                }
            
            `}</style>

        </>

    )
}
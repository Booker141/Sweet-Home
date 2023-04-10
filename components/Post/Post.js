import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import global from 'styles/global.module.css'
import { fonts, colors } from 'styles/frontend-conf'
import Comment from 'components/Comment/Comment'
import Modal from 'components/Modal/Modal'
import Like from "components/Like/Like"
import Save from "components/Save/Save"
import { IoPawOutline, IoPaw } from 'react-icons/io5'
import { MdDeleteOutline } from 'react-icons/md'
import { BsBookmark, BsBookmarkFill, BsPatchCheckFill } from 'react-icons/bs'
import { HiOutlineRefresh } from 'react-icons/hi'
import { server } from '/server'
import { toast, Slide } from "react-toastify"
import InputEmoji from 'react-input-emoji'

export default function Post (props) {

  const { data: session, status } = useSession()
  const [user, setUser] = useState({})
  const [comment, setComment] = useState('')
  const [moreComments, setMoreComments] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isLike, setIsLike] = useState(false)
  const [isToastActive, setIsToastActive] = useState(false)
  const [isSave, setIsSave] = useState(false)
  const [isCaretaker, setIsCaretaker] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const Router = useRouter()

  /**
   * This function is called when the component mounts and it fetches the user from the database and
   * sets the user state to the user that was fetched
   */
  async function getUser(){
    const res = await fetch(`${server}/api/users/${props.username}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const user = await res.json()
    setUser(user)
    setIsCaretaker(user.isCaretaker)
  }
  /* The above code is fetching the user from the database and setting the user state to the user that
  was fetched. */
  useEffect(() => {
    getUser()
  }, [])

 
  /**
   * It sends a POST request to the server with the comment and the postId.
   */
  const Commentate = async () => {
    const res = await fetch(`${server}/api/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        postId: props.id,
        description: comment,
        username: session.user.username
      })
    })


      toast.success('Se ha publicado tu comentario', { position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide,
      theme: "colored", })
    
  }

  /**
   * It deletes a post from the database
   */
  const deletePost = async () => {
    await fetch(`${server}/api/posts/${session.user.username}/${props.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })


    toast.error(`Se ha eliminado la publicación`, { position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored", })

    setIsModalVisible(false)
    Router.reload()
  }



  
  return (
    <>
      <div className='post__content'>
        <div key={props._id} className={global.post}>
          <div className='post__header'>
            <div className='header__user'>
              <Image src={user.image} alt='Imagen de usuario' style={{ borderRadius: '50px' }} width={50} height={50} priority />
              <a href={`${server}/profile/${user.username}`} aria-label={`Ir al perfil de ${user.username}`} className={global.link3__bold}>
                {user.username}
              </a>
            </div>
            <div className='header__location'>
              <p className={global.text2}>
                {props.location}
              </p>
              {(user.username === session.user.username) && <button className='delete__button' onClick={() => setIsModalVisible(true)}><MdDeleteOutline size={20} color={colors.secondary} /></button>}
            </div>
          </div>
          <hr className={global.white__line2} />
          <div className='description'>
            <div className='description__content'>           
              <Image className='user__image' src={user.image} alt='Imagen de usuario' style={{ borderRadius: '50px' }} width={40} height={40} priority />
              <p className={global.link3__bold}>
                @{user.username}{isCaretaker && <BsPatchCheckFill size={15} color={colors.primary} />}:
              </p>
              <div className='description__text'>
                <p className={global.text2}>
                  {props.description}
                </p>
              </div>
            </div>
          </div>
          <div className="post__image">
            <img src={props.image} style={{ borderRadius: '5px', maxWidth: '50vw'}} alt="Imagen del post"/>
          </div>
          <div className='post__block'>
            <div className='post__comment'>
              <div className='comment__input'>
                <InputEmoji
                  title='Escribir comentario'
                  type='text'
                  name='text'
                  id='comment'
                  value={comment}
                  onChange={setComment}
                  cleanOnEnter
                  onEnter={Commentate}
                  placeholder='Escribir comentario...'
                  fontFamily={`${fonts.default}`}
                  borderColor={`${colors.primary}`}
                />
              </div>
              <button onClick={() => Commentate()} className={global.buttonTertiary}>Enviar</button>
            </div>
            <div className='post__icons'>
              <Like likes={props.likes}/>
              <Save saves={props.saves}/>
            </div>
          </div>
          <div className='comment__container'>
            <div className='comment__title'>
              <p className={global.tertiary2__bold}>Comentarios</p>
              <button className='refresh__button'><HiOutlineRefresh size={15} color={colors.quaternary} /></button>
            </div>
            <hr className={global.line} />
            {props.comments.length === 0 && <p className={global.tertiary2}>No hay ningún comentario</p>}
            {props.comments.slice(0, 3).map((id) => {
              return (
                <>
                  <Comment id={id} />
                  <hr className={global.divider} />
                </>
              )
            })}
            {props.comments.length > 3 && isVisible === false && <button
              className='button__see' onClick={() => {
                setMoreComments(!moreComments)
                setIsVisible(!isVisible)
              }}
                                                                 >Ver más..
            </button>}

            {moreComments && props.comments.slice(3, props.comments.length).map((id) => {
              return (
                <>
                  <Comment id={id} />
                  <hr className={global.divider} />
                </>
              )
            })}
            {isVisible === true && <button
              className='button__see' onClick={() => {
                setMoreComments(!moreComments)
                setIsVisible(!isVisible)
              }}
                                   >Ver menos..
            </button>}
          </div>
        </div>
      </div>
      {isModalVisible && <Modal>
        <h2 className={global.title3}>Eliminar publicación</h2>
        <p className={global.text2}>¿Estás seguro de eliminar esta publicación?</p>
        <div className='buttons'>
          <button className={global.buttonSecondary} onClick={() => deletePost()}>Sí</button>
          <button className={global.buttonTertiary} onClick={() => setIsModalVisible(false)}>No</button>
        </div>
      </Modal>}

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
                    margin-bottom: 1rem;

                }

                .post__image{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: center;
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
                    margin-right: 1rem;
                    padding: 1.3rem;

                    /*Visuals*/

                    border-radius: 5px;
                    background: linear-gradient(45deg, rgba(240, 129, 15, 1) 35%, rgba(249, 166, 3, 1) 250%);
  
                }

                .comment__input{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    margin-right: 1rem;
                    width: 35vw;

                    /*Text*/

                    font-family: ${fonts.default};
                    font-size: 1rem;
                    font-weight: 400;
                    color: ${colors.secondary};


                }

                .comment__input:after{

                    /*Box model*/

                    color: ${colors.secondary};
                }

                .post__icons{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;


                }

                .header__user{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 0.8rem;

                }

                .header__user > p{

                    /*Box model*/

                    margin-right: 1rem;
                    margin-left: 1rem;
                    display: flex;
                    align-items: center;
                }

                .user__image{

                    /*Box model*/

                    margin-left: 1rem;
                }

                .header__location{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 0.8rem;

                }

                .description{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    margin-top: 1rem;
                    margin-bottom: 1rem;

                    /*Visuals*/

                    border-radius: 5px;

                }

                .description__content{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    margin-left: 1rem;
                }


                .description__text{

                    /*Box model*/

                    word-wrap: break-word;
                    max-width: 28rem;
                    align-items:center;
        
                }

                .emoji__button{

                    /*Box model*/

                    margin-right: 1rem;
                    margin-left: -3.3rem;
                    margin-top: 0.2rem;

                    /*Visuals*/

                    background-color: transparent;
                    border: none;

                    /*Misc*/

                    cursor: pointer;

                }

                .emoji__picker{

                    /*Position*/

                    /*Box model*/

                    z-index: 10000000000;
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

                    width: 100%;
                    height: 2rem;
                    margin-right: 1rem;

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

                .comment__title{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 0.4rem;
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

                .buttons{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                    gap: 1rem;
                }

                .delete__button{

                    /*Box model*/

                    display: flex;
                    align-items: center;


                    /*Visuals*/

                    border: none;
                    background: transparent;
                    cursor: pointer;

                }

                .refresh__button{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;

                    /*Visuals*/

                    border: none;
                    background: transparent;
                    cursor: pointer;

                }


                a{

                    /*Misc*/

                    cursor: pointer;

                }

                hr{

                    /*Box model*/

                    width: 100%;
                }

            `}
      </style>

    </>

  )
}

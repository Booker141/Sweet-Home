/* Static imports */

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import { colors, fonts } from 'styles/frontend-conf'
import {toast} from 'react-toastify'
import { MdDeleteOutline, MdHealthAndSafety } from 'react-icons/md'
import { HiOutlineRefresh } from 'react-icons/hi'
import { server } from '/server'
import global from 'styles/global.module.css'
import dynamic from 'next/dynamic'

/* Dynamic imports */

const InputEmoji = dynamic(() => import('react-input-emoji'))
const FallbackImage = dynamic(() => import('/components/FallbackImage/FallbackImage'))
const LazyLoad = dynamic(() => import('react-lazyload'))
const CommentsCounter = dynamic(() => import('/components/CommentsCounter/CommentsCounter'))


export default function Comment (props) {

  const { data: session } = useSession()
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')
  const [isComment, setIsComment] = useState(false)
  const [post, setPost] = useState({})
  const [user, setUser] = useState({})
  const [isShelter, setIsShelter] = useState(false)
  const [isVet, setIsVet] = useState(false)
  const [moreComments, setMoreComments] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)


  const calcTime = (createdAt) => {

    const currentDate = new Date()
    const milliseconds =  currentDate - new Date(createdAt)

    const seconds = Math.floor(milliseconds/1000);
    const minutes = Math.floor(seconds/60);
    const hours = Math.floor(minutes/60);
    const days = Math.floor(hours/24)

    
    if (minutes > 0 && hours <= 0 && days <= 0) {
      return `${minutes} min`
    }
    
    if (hours > 0 && days <= 0) {
      return `${hours} h`
    }

    if (days > 0 ) {
      return `${days} d`
    }

    return `${Math.floor(seconds)} s`


  }

  const getPost = async () => {

    const res = await fetch(`${server}/api/postsById/${props.postId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await res.json()


    setPost(data)

  }

  const getComments = async () => { 

    const res = await fetch(`${server}/api/commentsByPostId/${props.postId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).catch(err => console.log(err))

    const data = await res.json()   
    
    setComments(data)

  }

  async function getUser(){
    
    const res = await fetch(`${server}/api/users/${session.user.username}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const user = await res.json()
    setUser(user)


    if(user?.role.name === "protectora")
      setIsShelter(true)
    if(user?.role.name === "veterinaria")
      setIsVet(true)
  }
 

  
  const Commentate = async () => {

    if(comment.trim() === ""){
      toast.error('Debe escribir un comentario', { position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored", })
        return
  }
  
    setComment("")

    const res = await fetch(`${server}/api/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        postId: props.postId,
        description: comment,
        username: session.user.username
      })
    })

    const data = await res.json()

    setIsComment(true)

      if (data.error) {

        console.log(data.error)
        toast.error('Ha ocurrido un error', { position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored", })
  
      } else {
  
        toast.success('Se ha publicado el comentario', { position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored", })

        setIsComment(false)

        getComments()

  
      }

  }


  const deleteComment = async (_id) => {


    await fetch(`/api/comments/${_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })



    toast.error('Se ha eliminado el comentario',{ position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,  
    theme: "colored", })

    

    setIsModalVisible(false)

    getComments()
    
  }


    useEffect(() => {
      getPost()
      getComments()
      getUser()
    }, [])

  return (
    <>
    
      <div className='comment__container'>
      <div className='post__block'>
            <div className='post__comment'>
              <FallbackImage src={user?.image} alt='Imagen de usuario' style={{ borderRadius: '50px' }} width={50} height={50}  />
              <form className='comment__input' >
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
              </form>
              <input type='submit' value={isComment ? 'Enviando..' : 'Enviar'} onClick={() => Commentate()} className={global.buttonTertiary}/>
            </div>
                      
          </div>
            <div className='comment__title'>
              <div className='title__start'>
                <p className={global.text4__bold}>Comentarios</p>
                <button className='refresh__button' onClick={() => getComments()}><HiOutlineRefresh size={15} color={colors.quaternary} /></button>
              </div>
              <LazyLoad offset={100}><CommentsCounter comments={comments}/></LazyLoad>
            </div>
            <hr className={global.line} />
            {comments?.length === 0 && <p className={global.text}>No hay ningún comentario</p>}
            {comments?.length != 0 && comments?.slice(0, 3).map((comment) => {
              return (
                <>
                  <div key={comment._id} className={global.comment}>
                    <div className='comment__username'>
                      <a className={global.text2__bold} href={`/profile/${comment.username}`}>@{comment.username}</a>
                      {isShelter && <BsPatchCheckFill size={18} color={colors.secondary} />}{isVet && <MdHealthAndSafety size={18} color={colors.secondary} />}
                      <p className={global.text2}>:</p>
                    </div>
                    <div className='comment__description'>
                      <p className={global.text2}>{comment.description}</p>
                    </div>
                    <div className='comment__date'>
                      <p className={global.time}>Hace {calcTime(comment.createdAt)}</p>
                      {session.user.username === comment.username && <button className='delete__button' onClick={() => deleteComment(comment._id)}><MdDeleteOutline size={20} color={colors.secondary} /></button>}
                    </div>
                  </div>
                </>
              )
            })}
            {comments?.length > 3 && isVisible === false && <button
              className='button__see' onClick={() => {
                setMoreComments(!moreComments)
                setIsVisible(!isVisible)
              }}
             >Ver más..</button>}

            {moreComments && comments?.length != 0 && comments?.slice(3, comments.length).map((comment) => {
              return (
                <>
                  <div key={comment._id} className={global.comment}>
                    <div className='comment__username'>
                      <a className={global.text2__bold} href={`/profile/${comment.username}`}>@{comment.username}</a>
                      {isShelter && <BsPatchCheckFill size={18} color={colors.secondary} />}{isVet && <MdHealthAndSafety size={18} color={colors.secondary} />}
                      <p className={global.text2}>:</p>
                    </div>
                    <div className='comment__description'>
                      <p className={global.text2}>{comment.description}</p>
                    </div>
                    <div className='comment__date'>
                      <p className={global.time}>Hace {calcTime(comment.createdAt)}</p>
                      {session.user.username === comment.username && <button className='delete__button' onClick={(_id) => deleteComment(_id)}><MdDeleteOutline size={20} color={colors.secondary} /></button>}
                    </div>
                    
                  </div>
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

      <style jsx>{`

      .post__block{

        /*Box model*/

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 1rem;
        margin-bottom: 1rem;

        /*Visuals*/

        border-radius: 20px;
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

        border-radius: 20px;
        box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);

        }

        .comment__input{

        /*Box model*/

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        margin-right: 1rem;
        width: 59vw;

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


      .comment__container{

        /*Visuals*/

        border-radius: 20px;
        background-color: #fff;
        padding: 1rem;
        margin-top: 2rem;

        /*Visuals*/

        box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);

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
        justify-content: space-between;
        gap: 0.4rem;

        }

        .title__start{

        /*Box model*/

        display: flex;
        flex-direction: row;
        align-items: center;

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

                
                    .comment__description{

                        /*Box model*/

                        margin-left: 1rem;
                        max-width: 27rem;
                        
                    }

                    .comment__date{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: 1rem;

                        margin-left: auto;

                        /*Text*/

                        font-size: 0.8rem;

                    }

                        

                    .comment__username{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: 0.5rem;
                        

                    }

                    .delete__button{


                        /*Box model*/

                        display: flex;
                        align-items: center;
                        justify-content: center;


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

                    a{

                      /*Visuals*/

                      text-decoration: none;
                    }

                    hr{
                      width: 100%;
                    }
                `}
      </style>
    </>
  )
}

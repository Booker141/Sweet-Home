import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import FallbackImage from '/components/FallbackImage/FallbackImage'
import global from 'styles/global.module.css'
import { fonts, colors } from 'styles/frontend-conf'
import Comment from 'components/Comment/Comment'
import Modal from 'components/Modal/Modal'
import { MdDeleteOutline, MdClose, MdHealthAndSafety } from 'react-icons/md'
import { BsPatchCheckFill } from 'react-icons/bs'
import {HiOutlineClock } from 'react-icons/hi'
import { server } from '/server'
import { toast } from "react-toastify"
import Like from "components/Like/Like"
import Save from "components/Save/Save"
import CommentsCounter from "components/CommentsCounter/CommentsCounter"




export default function Post (props) {

  const { data: session, status } = useSession()
  const [user, setUser] = useState({})
  const [comments, setComments] = useState(props.comments)
  const [isVet, setIsVet] = useState(false)
  const [isShelter, setIsShelter] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isManager, setIsManager] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)

  console.log(props)

  const Router = useRouter()


  const calcTime = () => {

    const currentDate = new Date()
    const milliseconds =  currentDate - new Date(props.createdAt)

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

    if(user.role.name === "protectora")
      setIsShelter(true)
    if(user.role.name === "veterinaria")
      setIsVet(true)
    if(user.role.name === "administrador")
      setIsAdmin(true)
    if(user.role.name === "gerente")
      setIsManager(true)

  }
  /* The above code is fetching the user from the database and setting the user state to the user that
  was fetched. */
  useEffect(() => {
    getUser()
  }, [])

 

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
              <a href={`${server}/profile/${user.username}`} aria-label={`Ir al perfil de ${user.username}`}><FallbackImage src={user.image} alt='Imagen de usuario' style={{ borderRadius: '50px' }} width={50} height={50}  /></a>
              <div className="user__info">
                <div className="info__username">
                  <a href={`${server}/profile/${user.username}`} aria-label={`Ir al perfil de ${user.username}`} className={global.link3__bold}>
                    {user.username}
                  </a>
                  {isShelter && <MdPets size={15} color={colors.secondary} />}{(isAdmin || isManager) && <BsPatchCheckFill size={15} color={colors.secondary}/>}{isVet && <MdHealthAndSafety size={15} color={colors.secondary}/>}
                </div>
                
                <div className="post__time">
                  <HiOutlineClock color={`${colors.secondary}`} size={17}/>
                  <p className={global.time}>Hace {calcTime()}</p>
                </div>      
              </div>
            </div>
            <div className='header__location'>
              <div className='location__delete'>
                <p className={global.text2__bold}>
                  {props.location}
                </p>
                {(user.username === session.user.username) && <button className='delete__button' onClick={() => setIsModalVisible(true)}><MdDeleteOutline size={20} color={colors.secondary} /></button>}
              </div>
              {props.type.name === "Silvestre" && <a className={global.tag} href={`${server}/wild`} aria-label="Ir a página de fauna silvestre">#Silvestre</a>}
              {props.type.name === "Adopción" && <a className={global.tag} href={`${server}/adoption`} aria-label="Ir a página de animales para adoptar">#Adopción</a>}
              {props.type.name === "Perdido" && <a className={global.tag} href={`${server}/lost`} aria-label="Ir a página de animales perdidos">#Perdido</a>}
              {props.type.name === "Abandonado" && <a className={global.tag} href={`${server}/abandoned`} aria-label="Ir a página de animales abandonados">#Abandonado</a>}
            </div>
          </div>
          <hr className={global.white__line2} />
          <div className='description'>
            <div className='description__content'>           
              <a href={`${server}/profile/${user.username}`}><FallbackImage className='user__image' src={user.image} alt='Imagen de usuario' style={{ borderRadius: '50px'}} width={40} height={40} priority /></a>
              <div className="description__user">
                <p className={global.link3__bold}>@{user.username}</p>
                {isShelter && <MdPets size={15} color={colors.secondary} />}{(isAdmin || isManager) && <BsPatchCheckFill size={15} color={colors.secondary}/>}{isVet && <MdHealthAndSafety size={15} color={colors.secondary}/>}
                <p className={global.link3__bold}>:</p>
              </div>
              <div className='description__text'>
                <p className={global.text2}>
                  {props.description}
                </p>
              </div>
            </div>
          </div>
          {props.image != "" && <div className="post__image">
            <FallbackImage src={props.image} style={{ borderRadius: '20px', maxWidth: '50vw'}} width={1300} height={1050} alt="Imagen del post"/>
          </div>}
          <div className='post__icons'>
              <Like likes={props.likes} postId={props.id}/>   
              <Save saves={props.saves} postId={props.id}/>
            </div>
          <div className="comments">
              <Comment postId={props.id} comments={comments}/>
            </div>
            
        </div>
      </div>
      {isModalVisible && <Modal>
        <button className="close__modal" onClick={() => setIsModalVisible(false)}><MdClose size={30} color={`${colors.secondary}`}/></button>
        <h2 className={global.title3}>Eliminar publicación</h2>
        <p className={global.text2}>Eliminando esta publicación, será eliminada de todas las páginas de la aplicación así como todos las respuestas que provengan de otros usuarios</p>
        <p className={global.text2__bold}>¿Estás seguro de eliminar esta publicación?</p>
        <div className='buttons'>
          <button className={global.buttonSecondary} onClick={() => deletePost()}>Sí</button>
          <button className={global.buttonTertiary} onClick={() => setIsModalVisible(false)}>No</button>
        </div>
      </Modal>}

      <style jsx>{`

                .info__username{

                  /*Box model*/

                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  gap: 0.5rem;
                }

                .description__user{

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;

                }



                .post__content{

                    /*Box model*/

                    margin-bottom: 3rem;

                }

                
            .post__icons{

              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-around;
              margin-top: 1rem;


              /*Visuals*/

              border-radius: 20px;


              }

                .post__header{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;


                }

                .post__time{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 0.3rem;
                }

                .post__image{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }

                

                .header__user{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 0.8rem;
                    margin-left: 0.5rem;
                    margin-top: 0.5rem;

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
                    flex-direction: column;
                    align-items: center;
                    gap: 0.8rem;

                }

                .location__delete{

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
                    padding: 1rem;

                    /*Visuals*/

                    border-radius: 40px;
                    box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);

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
                    border: 2px solid ${colors.primary};
                }



               
                .close__modal{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-self: flex-end;
                    margin-right: 2rem;

                    /*Visuals*/

                    border: none;
                    background: transparent;
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

                .delete__button{

                    /*Box model*/

                    display: flex;
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

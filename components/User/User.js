import Image from 'next/image'
import global from 'styles/global.module.css'
import { colors } from 'styles/frontend-conf'
import { useState, useEffect } from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import { AiOutlineCheck } from 'react-icons/ai'

export default function User (props) {
  const [isFollowing, setIsFollowing] = useState(false)
  const [isCaretaker, setIsCaretaker] = useState(false)

  console.log(props)
  console.log(isCaretaker)
  const followUser = () => {
    setIsFollowing(!isFollowing)

    if (isFollowing) {

    }
  }

  useEffect(() => {
    setIsCaretaker(props.isCaretaker)
  }, [])

  return (
    <>

      <div key={props._id} className={global.user}>
        <div className='user__image'>
          <Image src={props.image} style={{ borderRadius: '50px' }} alt='Imagen de usuario' width={30} height={30} />
        </div>
        <div className='user__username'>
          <a className={global.link} href={`/profile/${props.username}`} aria-label={`Ir a perfil de ${props.username}`}>@{props.username}</a>
          {isCaretaker && <BsPatchCheckFill size={20} color={colors.primary} />}
        </div>
        {isFollowing ? <button className={global.buttonTertiary2} onClick={() => followUser()}>Seguir <AiOutlineCheck /></button> : <button className={global.buttonFollowed} onClick={() => followUser()}>Seguido</button>}
      </div>
      <style jsx>{`

                
                .user__image{

                    /*Box model*/

                    margin-left: 1rem;
                }
                .user__username{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 0.5rem;

                }

                .text{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                }

                .buttonTertiary{

                    /*Box model*/

                    display: flex;
                    float: right;
                }

                a{

                    /*Visuals*/

                    text-decoration: none;
                }

                button{

                    /*Box model*/

                    margin-right: 1rem;
                    margin-top: 1rem;
                    margin-bottom: 1rem;
                }
            
            `}
      </style>

    </>

  )
}

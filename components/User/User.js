import Image from 'next/image'
import global from 'styles/global.module.css'
import { colors } from 'styles/frontend-conf'
import { useState, useEffect } from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import { AiOutlineCheck } from 'react-icons/ai'
import FollowButton from 'components/FollowButton/FollowButton'

/**
 * It's a component that renders a user's profile picture, username, and a button that allows you to
 * follow them
 * @param props - {
 * @returns A component that shows a user's profile.
 */
export default function User (props) {
  
  const [isCaretaker, setIsCaretaker] = useState(false)

  

  /* It's a hook that runs when the component is mounted. It sets the isCaretaker state to the value of
  the isCaretaker prop. */
  useEffect(() => {
    setIsCaretaker(props.isCaretaker)
  }, [])

  return (
    <>

      <div key={props._id} className={global.user}>
        <div className='user__image'>
          <Image src={props.image} style={{ borderRadius: '50px' }} alt='Imagen de usuario' width={40} height={40} />
        </div>
        <div className='user__username'>
          <a className={global.link} href={`/profile/${props.username}`} aria-label={`Ir a perfil de ${props.username}`}>@{props.username}</a>
          {isCaretaker && <BsPatchCheckFill size={20} color={colors.primary} />}
        </div>
        <FollowButton/>
      </div>
      <style jsx>{`

                
                .user__image{

                    /*Box model*/

                    display: flex;
                    align-items: center;

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

import global from 'styles/global.module.css'
import { colors } from 'styles/frontend-conf'
import { useState, useEffect } from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import { MdHealthAndSafety } from 'react-icons/md'
import {useSession} from 'next-auth/react'
import FallbackImage from 'components/FallbackImage/FallbackImage'
import FollowButton from 'components/FollowButton/FollowButton'
import {server} from '/server'

/**
 * It's a component that renders a user's profile picture, username, and a button that allows you to
 * follow them
 * @param props - {
 * @returns A component that shows a user's profile.
 */
export default function UserCard (props) {

  const {data: session} = useSession()
  
  const [isShelter, setIsShelter] = useState(false)
  const [isVet, setIsVet] = useState(false)

  

  /* It's a hook that runs when the component is mounted. It sets the isCaretaker state to the value of
  the isCaretaker prop. */
  useEffect(() => {
    if(props.role.name === "veterinaria")
      setIsVet(true)
    else if(props.role.name === "refugio")
      setIsShelter(true)
  }, [])

  return (
    <>

      <div key={props._id} className={global.user}>
        <div className='user__image'>
          <FallbackImage src={props.banner} style={{ borderRadius: '20px' }} alt='Imagen banner' width={900} height={400} />
          <div className="profile__image">
            <FallbackImage src={props.image} style={{ borderRadius: '50px' }} alt='Imagen de usuario' width={80} height={80} />
          </div>
        </div>
        <div className='user__username'>
          <a className={global.link} href={`/profile/${props.username}`} aria-label={`Ir a perfil de ${props.username}`}><strong>@{props.username}</strong> {isShelter && <BsPatchCheckFill size={20} color={colors.primary}/>}{isVet && <MdHealthAndSafety size={20} color={colors.primary}/>}</a>
        </div>
        <FollowButton idFrom={session.user.id} usernameFrom={session.user.username} idTo={props.id} usernameTo={props.username}/>
      </div>
      <style jsx>{`

                
                .user__image{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-left: 0.2rem;

                    /*Visuals*/

                    border-radius: 70px;
                    border-image: linear-gradient(45 deg, #f0810f, #f9A603) 30;
                }

                .profile__image{

                    /*Position*/

                    position: relative;
                    bottom: 2rem;

                    /*Box model*/

                    display: flex;
                    z-index: 1000;


                    /*Visuals*/

                    border-radius: 70px;

              
                }

                .user__username{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
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

                .user__image a {

                  /*Visuals*/

                  text-decoration: none;
                  width: 50px;
                  height: 50px;

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

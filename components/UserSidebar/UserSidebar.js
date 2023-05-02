import global from 'styles/global.module.css'
import { colors } from 'styles/frontend-conf'
import { useState, useEffect } from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import { MdHealthAndSafety } from 'react-icons/md'
import {useSession} from 'next-auth/react'
import FallbackImage from 'components/FallbackImage/FallbackImage'
import {server} from '/server'

/**
 * It's a component that renders a user's profile picture, username, and a button that allows you to
 * follow them
 * @param props - {
 * @returns A component that shows a user's profile.
 */
export default function UserSidebar (props) {

  const {data: session} = useSession()
  
  const [isShelter, setIsShelter] = useState(false)
  const [isVet, setIsVet] = useState(false)



/**
 * The function calculates and returns the creation date of a given object in a specific format.
 * @returns The function `calcCreated` returns a string in the format "day/month/year", where day,
 * month, and year are extracted from the `createdAt` prop passed to the function.
 */
  const calcCreated = () => {

    const date = new Date(props.createdAt)

    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
  }

  

  /* It's a hook that runs when the component is mounted. It sets the isCaretaker state to the value of
  the isCaretaker prop. */
  useEffect(() => {
    if(props.role.name ===  "protectora")
      setIsShelter(true)
    else if(props.role.name === "veterinario")
      setIsVet(true)

  }, [])

  return (
    <>

      <div key={props._id} className={global.user__sidebar}>
        <div className='user__image'>
          <a href={`${server}/profile/${props.username}`} aria-label={`Ir al perfil de ${props.username}`}><FallbackImage src={props.image} style={{ borderRadius: '50px' }} alt='Imagen de usuario' width={40} height={40} /></a>
        </div>
        <div className="user__text">
            <div className='user__username'>
            <a className={global.link} href={`/profile/${props.username}`} aria-label={`Ir a perfil de ${props.username}`}><strong>@{props.username}</strong>{isShelter && <BsPatchCheckFill size={20} color={colors.primary}/>}{isVet && <MdHealthAndSafety size={20} color={colors.primary}/>}</a>
            {isCaretaker && <BsPatchCheckFill size={20} color={colors.primary} />} 
            </div>
            <p className={global.sidebar__date}>Se unió el {calcCreated(props.createdAt)}</p>
        </div>
      </div>
      <style jsx>{`


                .user__image{

                    /*Box model*/

                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-left: 0.2rem;

                    /*Visuals*/

                    border-radius: 70px;
                    border-image: linear-gradient(45 deg, #f0810f, #f9A603) 30;
                }

                .user__text{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: fit-content;


                }
                .user__username{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    width: fit-content;
                    gap: 0.5rem;

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


            
            `}
      </style>

    </>

  )
}
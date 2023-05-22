
import { useState, useEffect } from 'react'
import FallbackImage from '/components/FallbackImage/FallbackImage'
import global from 'styles/global.module.css'
import FollowButton from 'components/FollowButton/FollowButton'
import { BsPatchCheckFill } from 'react-icons/bs'
import { MdHealthAndSafety } from 'react-icons/md'
import { colors } from 'styles/frontend-conf'
import {useSession} from 'next-auth/react'
import {server} from '/server'


export default function Following (props) {

  const [user, setUser] = useState({})
  const [isShelter, setIsShelter] = useState(false)
  const [isVet, setIsVet] = useState(false)

  const {data: session} = useSession({})

  async function getFollowing(){

    const res = await fetch(`${server}/api/following/${props.id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

    const following = await res.json()

    console.log(following)

    setUser(following)


    if(following?.role.name === "veterinaria")
      setIsVet(true)
    else if(following?.role.name === "protectora")
      setIsShelter(true)

  }
  /* A hook that is used to fetch data from the server. */
  useEffect(() => {
    getFollowing()
  }, [])

  return (
    <>
      <div className={global.following}>
        <div className='following__image'>
          <FallbackImage src={user?.image} style={{ borderRadius: '50px' }} alt='Imagen de usuario' width={100} height={100} />
        </div>
        <div className='following__info'>
          <a className={global.link} href={`/profile/${user?.username}`} aria-label={`Ir a perfil de ${user?.username}`}><strong>@{user?.username}</strong> </a>
          {isShelter && <BsPatchCheckFill size={18} color={colors.primary}/>}{isVet && <MdHealthAndSafety size={18} color={colors.primary}/>}
        </div>
          <FollowButton idFrom={session.user.id} usernameFrom={session.user.username} idTo={user._id} usernameTo={user.username}/>
        </div>

      <style jsx>{`



                .following__image{
                    /*Box model*/

                    width: 2rem;
                    height: 2rem;
                    margin-right: 0.5rem;
                }

                .following__info{
                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    gap: 0.5rem;


                }
            `}
      </style>
    </>

  )
}

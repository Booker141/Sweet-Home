import {useState} from 'react'
import global from '/styles/global.module.css'

export default function FollowButton(){


    const [isFollowing, setIsFollowing] = useState(false);

    const followUser = () => {

        setIsFollowing(!isFollowing)
    
        if (isFollowing) {
    
        }
      }

      return(
        <>
            {isFollowing ? <button className={global.buttonTertiary2} onClick={() => followUser()}>Seguir <AiOutlineCheck /></button> : <button className={global.buttonFollowed} onClick={() => followUser()}>Seguido</button>}
        </>
      )
}
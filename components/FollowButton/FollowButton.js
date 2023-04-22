import {useState} from 'react'
import global from '/styles/global.module.css'
import { AiOutlineCheck } from 'react-icons/ai'
import {server} from '/server'


export default function FollowButton(props){

    const [isFollowing, setIsFollowing] = useState(false);

    const followUser = async () => {

        setIsFollowing(!isFollowing)
    
        if (isFollowing) {

          await fetch(`${server}/api/follows`, {headers:
            {
              'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify({
              idFrom: props.usernameTo,
              usernameFrom: props.usernameFrom,
              usernameTo: props.usernameTo,
              idTo: props.idTo
            })
          })
    
        }
      }

      return(
        <>
            {isFollowing ? <button className={global.buttonTertiary2} onClick={() => followUser()}>Seguir <AiOutlineCheck /></button> : <button className={global.buttonFollowed} onClick={() => followUser()}>Seguido</button>}
        </>
      )
}
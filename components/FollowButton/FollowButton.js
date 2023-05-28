
/*Static imports */

import {useEffect, useState} from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import {server} from '/server'
import global from '/styles/global.module.css'
import dynamic from 'next/dynamic'

/*Dynamic imports*/

const LazyLoad = dynamic(() => import('react-lazyload'))

export default function FollowButton(props){

    const [isFollowedByMe, setIsFollowedByMe] = useState(false);
    const [user, setUser] = useState({});

    console.log(props)


    async function getUser(){
    
      const res = await fetch(`${server}/api/users/${props?.usernameFrom}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await res.json()

      setUser(data)
      console.log(data?.following.includes(props?.idTo))
      setIsFollowedByMe(data?.following.includes(props?.idTo))

      console.log(isFollowedByMe)


  }



    const followUser = async () => {


        if (isFollowedByMe === false) {

          await fetch(`${server}/api/follow`, {headers:
            {
              'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify({
              idFrom: props?.idFrom,
              usernameFrom: props?.usernameFrom,
              usernameTo: props?.usernameTo,
              idTo: props?.idTo
            })
          })

          setIsFollowedByMe(true)
    
        }

        if(isFollowedByMe === true){

          await fetch(`${server}/api/unfollow`, {headers:
            {
              'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify({
              idFrom: props?.idFrom,
              usernameFrom: props?.usernameFrom,
              usernameTo: props?.usernameTo,
              idTo: props?.idTo
            })
          })

          setIsFollowedByMe(false)
        }
      }

      useEffect(() => {
          
          getUser();
  
      },[])

      return(
        <>
            {isFollowedByMe ? <button className={global.buttonFollowed} onClick={() => followUser()}>Seguido</button> : <button className={global.buttonTertiary2} onClick={() => followUser()}>Seguir <AiOutlineCheck /></button>}
        </>
      )
}
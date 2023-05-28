
/* Static imports */

import {server} from '/server'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import {FaUserPlus, FaComment} from 'react-icons/fa'
import {HiHeart, HiOutlineClock} from 'react-icons/hi'
import {colors} from '/styles/frontend-conf'
import global from 'styles/global.module.css'
import dynamic from 'next/dynamic'

/*Dynamic imports*/

const FallbackImage = dynamic(() => import('/components/FallbackImage/FallbackImage'))
const LazyLoad = dynamic(() => import('react-lazyload'))


export default function SubmenuNotification (props) {

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [notification, setNotification] = useState(props)

  console.log(notification)

  const router = useRouter()


  const calcTime = () => {

    const currentDate = new Date()
    const milliseconds =  currentDate - new Date(notification?.createdAt)

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



    return (
      <>
        <div className={global.submenuNotification}>
          <div className='notification__userFrom'>
            {notification?.type.name === "seguir" && <FaUserPlus color={`${colors.secondary}`} size={40}/>}
            {notification?.type.name === "comentar" && <FaComment color={`${colors.secondary}`} size={35}/>}
            {notification?.type.name === "me gusta" && <HiHeart color={`${colors.secondary}`} size={40}/>}
          </div>
          <div className={global.text2}>
            {notification?.description}
          </div>
         </div>
        
         <style jsx>{`

          .notification__time{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;
        
          }

         


        `}</style>
      </>
    )
  }


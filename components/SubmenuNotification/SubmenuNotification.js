
/* Static imports */

import {server} from '/server'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import global from 'styles/global.module.css'
import dynamic from 'next/dynamic'

/*Dynamic imports*/

const FallbackImage = dynamic(() => import('/components/FallbackImage/FallbackImage'))
const LazyLoad = dynamic(() => import('react-lazyload'))


export default function SubmenuNotification (props) {

  const [user, setUser] = useState({})
  const [isImage, setIsImage] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [notification, setNotification] = useState(props)

  const router = useRouter()


  const getUser = async() =>{

    const res = await fetch(`${server}/api/usersById/${notification.sender}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = res.json()

    setUser(data)

    console.log(user)

    if(user)
      setIsImage(true)

  }


  const calcTime = () => {

    const currentDate = new Date()
    const milliseconds =  currentDate - new Date(notification.createdAt)

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

  useEffect(() => {
    getUser()
  }, [])

  console.log(user.image)

    return (
      <>
        <div className={global.submenuNotification}>
          <div className='notification__userFrom'>
            {isImage && <FallbackImage src={user.image}  style={{ borderRadius: '50px' }} alt='Imagen de usuario' width={70} height={70}/>}
          </div>
          <div className={global.text2}>
            {notification.description}
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


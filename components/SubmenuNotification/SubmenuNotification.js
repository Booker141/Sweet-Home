import global from 'styles/global.module.css'
import {colors} from 'styles/frontend-conf'
import {HiOutlineClock} from 'react-icons/hi'
import {server} from '/server'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import FallbackImage from 'components/FallbackImage/FallbackImage'



/**
 * It renders a notification
 * @param props - {
 * @returns A div with a class of notification.
 */
export default function SubmenuNotification (props) {

  const [user, setUser] = useState({})
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [notification, setNotification] = useState(props)

  const router = useRouter()

  console.log(props)

  const getUser = async() =>{

    const res = await fetch(`${server}/api/usersById/${notification.sender}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = res.json()

    setUser(data)

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



    return (
      <>
        <div className={global.submenuNotification}>
          <div className='notification__userFrom'>
            <FallbackImage src={user.image}  style={{ borderRadius: '50px' }} alt='Imagen de usuario' width={70} height={70}/>
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


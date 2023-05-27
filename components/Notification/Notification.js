
/* Static imports */

import {colors, statusColors} from 'styles/frontend-conf'
import {FaUserPlus, FaComment} from 'react-icons/fa'
import {HiHeart, HiOutlineClock} from 'react-icons/hi'
import {MdDeleteOutline, MdClose} from 'react-icons/md'
import {server} from '/server'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import {VscCircleFilled} from 'react-icons/vsc'
import {toast} from 'react-toastify'
import {useSession} from 'next-auth/react'
import global from 'styles/global.module.css'
import dynamic from 'next/dynamic'


/*Dynamic imports*/

const Modal = dynamic(() => import('/components/Modal/Modal'))
const FallbackImage = dynamic(() => import('/components/FallbackImage/FallbackImage'))
const LazyLoad = dynamic(() => import('react-lazyload'))

export default function Notification (props) {

  console.log(props)

  const [user, setUser] = useState({})
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isNotificationNotChecked, setIsNotificationNotChecked] = useState(false)
  const [notification, setNotification] = useState(props)
  const {data: session, status} = useSession({})

  const Router = useRouter()

  const getUser = async() =>{

    const res = await fetch(`${server}/api/usersById/${props.sender}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = res.json()

    console.log(data)


    setUser(data)


  }

  const getCheckedNotifications = async () => {

    const res = await fetch(`${server}/api/notificationsChecked/${session.user.username}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

    const data = await res.json()


    if(data.length > 0) {
      setIsNotificationNotChecked(true)
    }


  }

  const fetchNotification = async () => {


    const res = await fetch(`${server}/api/notifications/${session.user.username}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = res.json()

    console.log(data)

    setNotification(data)
  }

  const updateNotification = async() => {

    await fetch(`${server}/api/notificationsById/${props.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      fetchNotification()

  }

  const deleteNotification = async() => {

    await fetch(`${server}/api/notificationsById/${props.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })


    toast.error(`Se ha eliminado la notificación`, { position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored", })

    setIsModalVisible(false)

    Router.reload()

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
    getCheckedNotifications()

    if(isNotificationNotChecked){
      setTimeout(() => {
        updateNotification()
      }, 3000)
    }
    
  }, [])


  if(props.type.name === "seguir"){
    return (
      <>
        <div className={global.notification}>
          <FaUserPlus color={`${colors.secondary}`} size={40}/>
          <div className='notification__userFrom'>
            <FallbackImage src={user.image}  style={{ borderRadius: '50px' }} alt='Imagen de usuario' width={70} height={70}/>
          </div>
          <div className={global.text2}>
            {notification.description}
          </div>
          <div className="notification__time">
                <HiOutlineClock color={`${colors.secondary}`} size={17}/>
                <p className={global.time}>Hace {calcTime()}</p>
          </div>
          {!notification.isChecked && <VscCircleFilled color={`${statusColors.info}`} size={30}/>}
          <button className='delete__button' onClick={() => setIsModalVisible(true)}><MdDeleteOutline size={20} color={colors.secondary} /></button>
        </div>
        {isModalVisible && <LazyLoad><Modal>
        <button className="close__modal" onClick={() => setIsModalVisible(false)}><MdClose size={30} color={`${colors.secondary}`}/></button>
        <h2 className={global.title3}>Eliminar notificación</h2>
        <p className={global.text2}>Esta notificación será eliminada permanentemente</p>
        <p className={global.text2__bold}>¿Estás seguro de eliminar esta notificación?</p>
        <div className='buttons'>
          <button className={global.buttonSecondary} onClick={() => deleteNotification()}>Sí</button>
          <button className={global.buttonTertiary} onClick={() => setIsModalVisible(false)}>No</button>
        </div>
      </Modal></LazyLoad>}
         <style jsx>{`

          .notification__time{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;
        
          }

          .close__modal{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-self: flex-end;
            margin-right: 2rem;

            /*Visuals*/

            border: none;
            background: transparent;
            cursor: pointer;

            }

            .buttons{

            /*Box model*/

            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            gap: 1rem;
            }


          .delete__button{

          /*Box model*/

          display: flex;
          align-items: center;


          /*Visuals*/

          border: none;
          background: transparent;
          cursor: pointer;

          }



        `}</style>
      </>
    )
  }

  if(props.type.name === "comentar"){
    return (
      <>
        <div className={global.notification}>
          <FaComment color={`${colors.secondary}`} size={35}/>
          <div className='notification__userFrom'>
            <FallbackImage src={user.image}  style={{ borderRadius: '50px' }} alt='Imagen de usuario' width={70} height={70}/>
          </div>
          <div className={global.text2}>
            {notification.description}
          </div>
          <div className="notification__time">
                <HiOutlineClock color={`${colors.secondary}`} size={17}/>
                <p className={global.time}>Hace {calcTime()}</p>
          </div>
          {!notification.isChecked && <VscCircleFilled color={`${statusColors.info}`} size={30}/>}
          <button className='delete__button' onClick={() => setIsModalVisible(true)}><MdDeleteOutline size={20} color={colors.secondary} /></button>
        </div>
        {isModalVisible && <Modal>
        <button className="close__modal" onClick={() => setIsModalVisible(false)}><MdClose size={30} color={`${colors.secondary}`}/></button>
        <h2 className={global.title3}>Eliminar notificación</h2>
        <p className={global.text2}>Esta notificación será eliminada permanentemente</p>
        <p className={global.text2__bold}>¿Estás seguro de eliminar esta notificación?</p>
        <div className='buttons'>
          <button className={global.buttonSecondary} onClick={() => deleteNotification()}>Sí</button>
          <button className={global.buttonTertiary} onClick={() => setIsModalVisible(false)}>No</button>
        </div>
      </Modal>}
         <style jsx>{`

          .notification__time{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;
        
          }

          .close__modal{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-self: flex-end;
            margin-right: 2rem;

            /*Visuals*/

            border: none;
            background: transparent;
            cursor: pointer;

            }

            .buttons{

            /*Box model*/

            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            gap: 1rem;
            }


          .delete__button{

          /*Box model*/

          display: flex;
          align-items: center;
          padding: 1rem;


          /*Visuals*/

          border: none;
          background: transparent;
          cursor: pointer;
          box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);
          border-radius: 70px;

          }



        `}</style>
      </>
    )
  }

  if(props.type.name === "me gusta"){
    return (
      <>
        <div className={global.notification}>
          <HiHeart color={`${colors.secondary}`} size={40}/>
          <div className='notification__userFrom'>
            <FallbackImage src={user.image}  style={{ borderRadius: '50px' }} alt='Imagen de usuario' width={70} height={70}/>
          </div>
          <div className={global.text2}>
            {notification.description}
          </div>
          
          <div className="notification__time">
                <HiOutlineClock color={`${colors.secondary}`} size={17}/>
                <p className={global.time}>Hace {calcTime()}</p>
          </div>
          {!notification.isChecked && <VscCircleFilled color={`${statusColors.info}`} size={30}/>}
          <button className='delete__button' onClick={() => setIsModalVisible(true)}><MdDeleteOutline size={20} color={colors.secondary} /></button>
        </div>
        {isModalVisible && <Modal>
        <button className="close__modal" onClick={() => setIsModalVisible(false)}><MdClose size={30} color={`${colors.secondary}`}/></button>
        <h2 className={global.title3}>Eliminar notificación</h2>
        <p className={global.text2}>Esta notificación será eliminada permanentemente</p>
        <p className={global.text2__bold}>¿Estás seguro de eliminar esta notificación?</p>
        <div className='buttons'>
          <button className={global.buttonSecondary} onClick={() => deleteNotification()}>Sí</button>
          <button className={global.buttonTertiary} onClick={() => setIsModalVisible(false)}>No</button>
        </div>
      </Modal>}
        <style jsx>{`

          .notification__time{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;
        
          }

          .close__modal{

          /*Box model*/

          display: flex;
          flex-direction: row;
          align-self: flex-end;
          margin-right: 2rem;

          /*Visuals*/

          border: none;
          background: transparent;
          cursor: pointer;

          }

          .buttons{

          /*Box model*/

          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          gap: 1rem;
          }


          .delete__button{

          /*Box model*/

          display: flex;
          align-items: center;
          padding: 1rem;



          /*Visuals*/

          border: none;
          background: transparent;
          cursor: pointer;
          border-radius: 70px;
          box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);

          }



        `}</style>
      </>
    )
  }
  
}

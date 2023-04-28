import global from '/styles/global.module.css'
import { useState, useEffect } from 'react'
import {colors} from '/styles/frontend-conf'
import {MdDeleteOutline, MdClose} from 'react-icons/md'
import {HiOutlineClock} from 'react-icons/hi'
import FallbackImage from '/components/FallbackImage/FallbackImage'
import Image from 'next/image'
import { toast } from 'react-toastify'
import {useSession} from 'next-auth/react'
import { server } from '/server'
import Modal from '/components/Modal/Modal'
import { useRouter } from 'next/router'



/**
 * It fetches the user's data from the database and displays it in the attendance component
 * @param props - {
 * @returns An object with the following properties:
 */
export default function Attendance (props) {

  const [user, setUser] = useState({});
  const [thread, setThread] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isImage, setIsImage] = useState(props?.image ? true : false);
  const { data: session, status } = useSession()

  const Router = useRouter()

  const date = new Date(props.createdAt)

 /**
  * The function adds a leading zero to a number if it is less than 10.
  * @param num - num is a parameter of the function getFull, which represents a number that needs to be
  * converted to a string with two digits. If the number is less than 10, a '0' is added to the
  * beginning of the string. Otherwise, the number is returned as a string without any modification
  * @returns The function `getFull` takes a number as an argument and returns a string. If the number
  * is less than 10, the function returns a string with a leading zero and the number. If the number is
  * 10 or greater, the function returns the number as a string without any modification.
  */
  const getFull = (num) => {

    if (num < 10) {
      return '0' + num
    } else {
      return num
    }
  }

 /**
  * This function retrieves user data from a server using a GET request and sets it to a state
  * variable.
  */
  async function getUsers(){

    const res = await fetch(`${server}/api/users/${props.username}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
        }
      })
      const data = await res.json();
      setUser(data);

  }

 /**
  * This function fetches a thread from a server using a specific thread ID and sets the retrieved data
  * as the state of the component.
  */
  async function getThread(){

    const res = await fetch(`${server}/api/thread/${props.threadId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
        }
      })

      const data = await res.json();
      setThread(data);
  }

  
  /**
   * It deletes an attendance from the database
   */
  const deleteAttendance = async () => {
    await fetch(`${server}/api/attendances/${thread.title}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: props.id

    })
  })


    toast.error(`Se ha eliminado el cuidado`, { position: "bottom-right",
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


  /* Fetching the user's data from the database and displaying it in the attendance component. */
  useEffect(() => {
    getUsers()
    getThread()
  }, [])

  return (
    <>
      <div className={global.attendance}>
        <div className="attendance__header">
          <div className="header__column1">
            <p className={global.text2}>Hilo <strong>{thread.title}</strong></p>
            <p className={global.text2}>Por <strong>{thread.username}</strong></p>
          </div>
          <div className="header__column2">
            <div className="column2__delete">
              <p className={global.text2__bold}>{props.location}</p>
              {(thread.username === session.user.username) && <button className='delete__button' onClick={() => setIsModalVisible(true)}><MdDeleteOutline size={20} color={colors.secondary} /></button>}
            </div>
            
            <p className={global.date2}>{date.toLocaleDateString().slice(0,10)}</p>
            <div className="attendance__hour">
              <HiOutlineClock color={`${colors.secondary}`} size={17}/>
              <p className={global.date2}>{getFull(date.getHours())}:{getFull(date.getMinutes())}:{getFull(date.getSeconds())}</p>
            </div>    
          </div>
        </div>
        <div className="attendance__user">
          <div className="user__column1">
            <a href={`${server}/profile/${user.username}`} aria-label={`Ir al perfil de ${props.username}`}><FallbackImage src={user.image} style={{borderRadius: '70px'}} width={40} height={40} /></a>
            <a href={`${server}/profile/${user.username}`} aria-label={`Ir al perfil de ${props.username}`} className={global.link}>{props.username}</a>
            <p className={global.date}>- {date.toLocaleDateString()}</p>
            <div className="attendance__hour">
              <HiOutlineClock color={`${colors.quaternary}`} size={17}/>
              <p className={global.date}>{getFull(date.getHours())}:{getFull(date.getMinutes())}:{getFull(date.getSeconds())}</p>
            </div>
          </div>
          <div className="user__column2">
            <p><strong>{props.animal === "" ? "" : "Animal:"}</strong> {props.animal}</p>
            <p><strong>{props.breed === "" ? "" : "Raza:"}</strong> {props.breed}</p>
        </div>
        </div>
        
        <hr className={global.attendance__line}></hr>
        <div className="attendance__description">
          <p>{props.description}</p>
        </div>
        <div className="attendance__image">
          {isImage && <Image src={props.image} style={{ borderRadius: '20px', maxWidth: '50vw'}} width={1400} height={800} />}
        </div>
      </div>
      {isModalVisible && <Modal>
        <button className="close__modal" onClick={() => setIsModalVisible(false)}><MdClose size={30} color={`${colors.secondary}`}/></button>
        <h2 className={global.title3}>Eliminar cuidado</h2>
        <p className={global.text2}>¿Estás seguro de eliminar este cuidado?</p>
        <div className='buttons'>
          <button className={global.buttonSecondary} onClick={() => deleteAttendance()}>Sí</button>
          <button className={global.buttonTertiary} onClick={() => setIsModalVisible(false)}>No</button>
        </div>
      </Modal>}
      <style jsx>{`


        .attendance__user{

          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;

        }

        .attendance__description{

          /*Box model*/

          padding: 1rem;
        }

        .attendance__hour{

          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.3rem;
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

        .user__column1{

          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1rem;

        }

        .user__column1 > a{

          /*Box model*/

          display: flex;
          align-items: center;
        }

        .user__column2{

          /*Box model*/

          display: flex;
          flex-direction: row;
          gap: 1rem;

        }

        .column2__delete{

          /*Box model*/

          display: flex;
          flex-direction: row;
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

        .attendance__header{


          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: 2rem;

          /*Visuals*/

          background: linear-gradient(45deg, rgba(240, 129, 15, 1) 35%, rgba(249, 166, 3, 1) 100%);
          border-radius: 20px 20px 0px 0px;
        }

        .header__column1{

          /*Box model*/

          display: flex;
          flex-direction: column;
          align-self: flex-start;

        }

        .attendance__image{

          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        a{

          /*Visuals*/

          text-decoration: none;

        }
        `}</style>
    </>
  )
}

import global from '/styles/global.module.css'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { MdDeleteOutline, MdClose } from 'react-icons/md'
import Modal from 'components/Modal/Modal'
import { colors } from '/styles/frontend-conf'
import { server } from '/server'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

/**
 * It renders a thread with the information of the thread and the number of posts it has
 * @param props - The props that are passed to the component.
 * @returns A thread is being returned.
 */
export default function Thread (props) {

  const { data: session, status } = useSession({ required: true })
  const [date, setDate] = useState(new Date(props.createdAt))
  const [numPosts, setNumPosts] = useState(0);
  const [lastAttendance, setLastAttendance] = useState({})
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [user, setUser] = useState({});
  const Router = useRouter();

/* Fetching the user that created the thread and the number of posts that the thread has. */
  async function getData(){

    const res = await fetch(`${server}/api/users/${props.username}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const attendance = await fetch(`${server}/api/attendances/${props.title}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await res.json();
    
    setUser(data);

    if(attendance === null ){

      setNumPosts(0);

    }else{

      const attendances = await attendance.json();
    
      setNumPosts(attendances.length);
      
  
    }

  }

  const getLastAttendance = () => {

    const lastAttendance = props.attendances[props.attendances.length - 1]

    setLastAttendance(lastAttendance)

  }
  
  useEffect(() => {
    getData()
    getLastAttendance()
  }, [])

  /**
   * It deletes a thread from the database
   */
  const deleteThread = async () => {

    const res = await fetch(`${server}/api/threads/${props.typeAttendanceId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: props.id,
      })
    })

    const data = await res.json()

    if (data.error) {
      console.log(data.error)
    }

    toast.error(`Se ha eliminado el hilo`, { position: "bottom-right",
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

  return (

    <>
      <div className={global.thread}>
        <div className="thread__header">
          <div className="thread__header__title">
            <h2>{props.title}</h2>
            <div className="thread__delete">
              {user.username === session.user.username && <button className='delete__button' onClick={() => setIsModalVisible(true)}><MdDeleteOutline size={20} color={colors.secondary} /></button>}
              <div className="thread__lastPostTime">
                <strong>Última respuesta:</strong> {new Date(lastAttendance?.createdAt).getDate()}
              </div>
              <div className="thread__lastPostUser">
                <strong>Por: </strong> {lastAttendance?.username}
              </div>
            </div> 
          </div>
          <hr className={global.white__line2}></hr>
          <div className="thread__header__date">
            <p><strong>Fecha de creación:</strong> {date.toLocaleDateString()}</p>
          </div>
          <div className="thread__header__username">
            <p><strong>Creado por:</strong> {props.username}</p>
          </div>
          <div className="thread__numPosts">
            <strong>Réplicas:</strong> {numPosts}
          </div>
          
      </div>
      <button id="access__button" className={global.buttonTertiary} onClick={() => Router.push(`/attendances/${Router.query.typeAttendance}/${props.title}`)} aria-label={'Ir a ' + `${props.title}`}>Acceder</button>
      </div>
      {isModalVisible && <Modal>
        <button className="close__modal" onClick={() => setIsModalVisible(false)}><MdClose size={30} color={`${colors.secondary}`}/></button>
        <h2 className={global.title3}>Eliminar hilo</h2>
        <p className={global.text2}>¿Estás seguro de eliminar este hilo?</p>
        <div className='buttons'>
          <button className={global.buttonSecondary} onClick={() => deleteThread()}>Sí</button>
          <button className={global.buttonTertiary} onClick={() => setIsModalVisible(false)}>No</button>
        </div>
      </Modal>}

      <style jsx>{`

        #access__button{

          /*Box model*/

          margin-top: 2rem;
          margin-bottom: 2rem;
          margin-left: 1rem;
        }

        .thread__header{

          /*Box model*/

          margin-left: 1rem;

        }

        .thread__delete{

          /*Box model*/

          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 1rem;
        }

        .thread__header__title{

          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          

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

          hr{

          /*Box model*/

          width: 100%;
          margin-bottom: 3rem;

          }

      `}</style>

    </>

  )
}

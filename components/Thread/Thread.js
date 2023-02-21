import global from '/styles/global.module.css'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { MdDeleteOutline } from 'react-icons/md'
import Modal from 'components/Modal/Modal'
import { colors } from '/styles/frontend-conf'
import { server } from '/server'
import { useRouter } from 'next/router'

export default function Thread (props) {

  const { data: session, status } = useSession({ required: true })
  const [date, setDate] = useState(new Date(props.createdAt))
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [user, setUser] = useState({});
  const Router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch(`${server}/api/users/${props.username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json();
      setUser(data);
    }
    getUser()
  }, [])

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

    setIsModalVisible(false)
    Router.reload()
  }

  return (

    <>
      <div className={global.thread}>
        <div className='thread__header'>
          <div className='thread__header__title'>
            <h2>{props.title}</h2>
            {user.username === session.user.username && <button className='delete__button' onClick={() => setIsModalVisible(true)}><MdDeleteOutline size={20} color={colors.secondary} /></button>}
          </div>
          <div className='thread__header__date'>
            <p>Fecha de creación: {date.toLocaleDateString()}</p>
          </div>
          <div className="thread__header__username">
            <p>Creado por: {props.username}</p>
        </div>
      </div>
      </div>
      {isModalVisible && <Modal>
        <h2 className={global.title3}>Eliminar hilo</h2>
        <p className={global.text2}>¿Estás seguro de eliminar este hilo?</p>
        <div className='buttons'>
          <button className={global.buttonSecondary} onClick={() => deleteThread()}>Sí</button>
          <button className={global.buttonTertiary} onClick={() => setIsModalVisible(false)}>No</button>
        </div>
      </Modal>}

      <style jsx>{`

        .thread__header__title{

          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;

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
          margin-bottom: 0.5rem;

          /*Visuals*/

          border: none;
          background: transparent;
          cursor: pointer;

          }
      `}</style>

    </>

  )
}

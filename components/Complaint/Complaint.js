import global from '/styles/global.module.css'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import { useSession } from 'next-auth/react'
import {toast} from 'react-toastify'
import Image from 'next/image'
import {colors} from '/styles/frontend-conf.js'
import {server} from '/server'
import {MdDeleteOutline, MdCheckCircleOutline} from 'react-icons/md'
import Modal from '/components/Modal/Modal'


/**
 * It's a component that shows a complaint, and it has a button to delete it
 * @param props - The props that are passed to the component.
 * @returns A component that shows the complaints of the user.
 */
export default function Complaint (props) {

  const [user, setUser] = useState({});
  const [user2, setUser2] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const Router = useRouter();
  const {data: session} = useSession()

  /**
   * It deletes a complaint from the database
   */
  const denyComplaint = async () => {

    await fetch(`${server}/api/complaints/${session.user.username}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: props._id
      
      })})

    toast.error(`Se ha eliminado la denuncia`, { position: "bottom-right",
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

  const checkComplaint = async () => {



  }

  /**
   * This function is called when the component is mounted and it fetches the user data from the
   * database and sets the state of the component
   */
  async function getUsers () {

    const response = await fetch(`${server}/api/users/${props.usernameFrom}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const response2 = await fetch(`${server}/api/users/${props.usernameTo}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    const data2 = await response2.json()
    console.log(data)

    setUser(data);
    setUser2(data2);

  }


  /* It's a hook that is called when the component is mounted. */
  useEffect( () => {

    getUsers();

  }, []);

  return (
      <>
        <div className={global.complaint}>
          <div className="complaint__header">
            <div className="complaint__users">
              <p className={global.text}><strong>De:</strong> <Image src={user.image} alt='Imagen de usuario' style={{ borderRadius: '50px' }} width={40} height={40} />{props.usernameFrom}</p>

              <p className={global.text}><strong>Para:</strong> <Image src={user2.image} alt='Imagen de usuario' style={{ borderRadius: '50px' }} width={40} height={40}/>{props.usernameTo}</p>
              
            </div>
            <div className="complaint__date">
              <p className={global.text}><strong>Fecha</strong> {new Date(props.createdAt).toLocaleDateString().slice(0,10)}</p>
              <button className='check__button' onClick={() => checkComplaint()}><MdCheckCircleOutline size={20} color={colors.secondary} /></button>
              <button className='deny__button' onClick={() => setIsModalVisible(true)}><MdDeleteOutline size={20} color={colors.secondary} /></button>   
            </div>
            
          </div>
          <div className="complaint__body">
            <p className={global.text}><strong>Descripción: </strong>{props.description}</p>
          </div>
        </div>
        {isModalVisible && <Modal>
          <h2 className={global.title3}>Denegar denuncia</h2>
          <p className={global.text2}>¿Estás seguro de anular el trámite de esta denuncia?</p>
          <div className='buttons'>
            <button className={global.buttonSecondary} onClick={() => denyComplaint()}>Sí</button>
            <button className={global.buttonTertiary} onClick={() => setIsModalVisible(false)}>No</button>
          </div>
        </Modal>}
        <style jsx>{`
        
          .complaint__header{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

          }

          .complaint__users{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 2rem;
            justify-content: center;
            margin-left: 1rem;

          }

          .complaint__date{

            /*Box model*/

            margin-right: 1rem;

          }
          .complaint__body{


            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            margin-left: 1rem;

          }

          .buttons{

          /*Box model*/

          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          gap: 1rem;
        }

        .check__button, .deny__button{

          /*Visuals*/

          border: none;
          background: transparent;
          cursor: pointer;
        }
        
        `}</style>
      </>

  )
}

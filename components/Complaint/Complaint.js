import global from '/styles/global.module.css'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import { useSession } from 'next-auth/react'
import {toast} from 'react-toastify'
import FallbackImage from '/components/FallbackImage/FallbackImage'
import {colors} from '/styles/frontend-conf.js'
import {server} from '/server'
import { MdCheckCircle, MdCancel} from 'react-icons/md'
import { HiOutlineClock } from 'react-icons/hi'
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

    await fetch(`${server}/api/complaints/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: props.id,
        adminUsername: session.user.username
      
      })})

    toast.error(`Se ha denegado la denuncia`, { position: "bottom-right",
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

  await fetch(`${server}/api/complaints/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: props.id,
        adminUsername: session.user.username
      })})

    toast.success(`Se ha aprobado la denuncia`, { position: "bottom-right",
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
              <div className="userFrom">
                <p className={global.text2__bold}>De:</p>
                <FallbackImage src={user.image} alt='Imagen de usuario' style={{ borderRadius: '50px' }} width={40} height={40} />
                <p className={global.text}>@{props.usernameFrom}</p>
              </div>       
              <div className="userTo">
                <p className={global.text2__bold}>Para:</p>
                <FallbackImage src={user2.image} alt='Imagen de usuario' style={{ borderRadius: '50px' }} width={40} height={40}/>
                <p className={global.text}>@{props.usernameTo}</p>
              </div>           
            </div>
            
            <div className="complaint__type">
                <div className="action__buttons">
                  <button className='check__button' onClick={() => checkComplaint()}><MdCheckCircle size={25} color={colors.secondary} /></button>
                  <button className='deny__button' onClick={() => setIsModalVisible(true)}><MdCancel size={25} color={colors.secondary} /></button>   
                </div> 
                <div className="complaint__reason">
                  <p className={global.text2}><strong>Motivo:</strong>{props?.typeComplaint}</p>
                </div>
                <div className="complaint__date">
                  <p className={global.text2__bold}>Fecha:</p>
                  <HiOutlineClock size={17}/>
                  <p className={global.text}>{new Date(props.createdAt).toLocaleDateString().slice(0,10)}</p>
                </div>
                <div className="complaint__status">
                  <p className={global.text2__bold}>Estado:</p>
                  {props.isChecked === true && <p className={global.text2}>{props.isApproved ? 'Aprobada' : 'Denegada'}</p>}
                  <p className={global.text2}>{props.isChecked ? 'Comprobada' : 'No comprobada'}</p>
                </div>
            </div>
            </div>
          <hr className={global.white__line}></hr>
          <div className="complaint__body">
            <p className={global.text2__bold}>Motivo de la denuncia: </p>
            <p className={global.text}>{props.description}</p>
          </div>
        
        </div>
        {isModalVisible && <Modal>
          <h2 className={global.title3}>Denegar denuncia</h2>
          <p className={global.text2}>Está a punto de denegar la denuncia que ha interpuesto @{props.usernameFrom} a @{props.usernameTo}</p>
          <p className={global.text2__bold}>¿Estás seguro de anular el trámite de esta denuncia?</p>
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

          .complaint__date{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;

          }

          .complaint__status{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;

          }

          .complaint__users{

            /*Box model*/

            display: flex;
            flex-direction: column;
            gap: 0.5rem;

          }

          .complaint__type{

            /*Box model*/

            display: flex;
            flex-direction: column;
            align-self: flex-end;

          }

          .userFrom{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.5rem;

          }

          .userTo{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.5rem;

          }


          .complaint__body{


            /*Box model*/

            display: flex;
            flex-direction: column;

          }

          .buttons{

          /*Box model*/

          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          gap: 1rem;

          }

        .action__buttons{

          /*Box model*/

          display: flex;
          align-self: flex-end;

        }

        .check__button, .deny__button{


          /*Visuals*/

          border: none;
          background: transparent;
          cursor: pointer;

        }

        hr{

          /*Box model*/
          
          width: 100%;

        }
        

        `}</style>

      </>

  )
}



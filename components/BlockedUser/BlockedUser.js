import global from '/styles/global.module.css'
import {useState} from 'react'
import Image from 'next/image'
import {server} from '/server'
import Modal from '/components/Modal/Modal'


/**
 * It renders a div with a complaint, and a modal that appears when the user clicks on the button
 * @param props - The props that are passed to the component.
 * @returns A component that shows the user who has been blocked and the reason why.
 */
export default function BlockedUser (props) {

  const [user, setUser] = useState({});
  const [user2, setUser2] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);


  /**
   * It sends a request to the server to update the user's status to "checked" and then reloads the
   * page
   */
  const checkBlock = async () => {

    await fetch(`${server}/api/users/${session.user.username}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _id: props._id
      })})


    toast.success(`Se ha revisado el bloqueo`, { position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
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
        <div className={global.complaint}>
            <div className="blocked__user">
              <p className={global.text}><Image src={user.image} alt='Imagen de usuario' style={{ borderRadius: '50px' }} width={40} height={40} />{props.usernameFrom}</p>
            </div>
          <div className="blocked__body">
            <p className={global.text}><strong>Este usuario ha sido denunciado {props.numComplaints} veces </strong>{props.description}</p>
          </div>
          <button className={global.buttonPrimary} onClick={() => setIsModalVisible(true)}>Bloquear</button>
        </div>
        {isModalVisible && <Modal>
          <h2 className={global.title3}>Bloquear al usuario</h2>
          <p className={global.text2}>¿Estás seguro de bloquear a este usuario?</p>
          <div className='buttons'>
            <button className={global.buttonSecondary} onClick={() => checkBlock()}>Sí</button>
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

        button{

          /*Visuals*/

          border: none;
          background: transparent;
          cursor: pointer;
        }
        
        `}</style>
      </>

  )
}


/* Static imports */

import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import { useSession } from 'next-auth/react'
import {toast} from 'react-toastify'
import {colors} from '/styles/frontend-conf.js'
import {server} from '/server'
import { MdCheckCircle, MdCancel, MdDeleteOutline} from 'react-icons/md'
import { HiOutlineClock } from 'react-icons/hi'
import global from '/styles/global.module.css'
import dynamic from 'next/dynamic'

/* Dynamic imports */


const Modal = dynamic(() => import('/components/Modal/Modal'))
const FallbackImage = dynamic(() => import('/components/FallbackImage/FallbackImage'))
const LazyLoad = dynamic(() => import('react-lazyload'))



export default function Complaint (props) {

  const [user, setUser] = useState({});
  const [user2, setUser2] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const Router = useRouter();
  const {data: session} = useSession()

  const [isAdmin, setIsAdmin] = useState(session.user.role === "administrador" ? true : false)


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


    const deleteComplaint = async () => {

      await fetch(`${server}/api/complaints/${session.user.username}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: props.id,
        
        })})
  
      toast.error(`Se ha eliminado la denuncia`, { position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored", })
  
      setIsModalVisible2(false)

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
                {isAdmin && <div className="action__buttons">
                  <button className='check__button' onClick={() => checkComplaint()}><MdCheckCircle size={25} color={colors.secondary} /></button>
                  <button className='deny__button' onClick={() => setIsModalVisible(true)}><MdCancel size={25} color={colors.secondary} /></button>   
                </div> }
                {!isAdmin && <button className='delete__button' onClick={() => setIsModalVisible2(true)}><MdDeleteOutline size={20} color={colors.secondary} /></button>}

               
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
                <div className="complaint__reason">
                  <p className={global.text2}><strong>Motivo:</strong> {props?.typeComplaint}</p>
                </div>
            </div>
            </div>
          <hr className={global.white__line}></hr>
          <div className="complaint__body">
            <p className={global.text2__bold}>Motivo de la denuncia: </p>
            <p className={global.text}> {props.description}</p>
          </div>
        
        </div>
        {isModalVisible && <LazyLoad><Modal>
          <h2 className={global.title3}>Denegar denuncia</h2>
          <p className={global.text2}>Está a punto de denegar la denuncia que ha interpuesto @{props.usernameFrom} a @{props.usernameTo}</p>
          <p className={global.text2__bold}>¿Estás seguro de anular el trámite de esta denuncia?</p>
          <div className='buttons'>
            <button className={global.buttonSecondary} onClick={() => denyComplaint()}>Sí</button>
            <button className={global.buttonTertiary} onClick={() => setIsModalVisible(false)}>No</button>
          </div>
        </Modal></LazyLoad>}
        {isModalVisible2 && <LazyLoad><Modal>
          <h2 className={global.title3}>Eliminar denuncia</h2>
          <p className={global.text2}>Está a punto de eliminar la denuncia que ha interpuesto a @{props.usernameTo}</p>
          <p className={global.text2__bold}>¿Estás seguro de eliminar esta denuncia?</p>
          <div className='buttons'>
            <button className={global.buttonSecondary} onClick={() => deleteComplaint()}>Sí</button>
            <button className={global.buttonTertiary} onClick={() => setIsModalVisible(false)}>No</button>
          </div>
        </Modal></LazyLoad>}
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

          .delete__button{

          /*Box model*/

          display: flex;
          align-items: center;
          justify-content: flex-end;
          
          /*Visuals*/

          border: none;
          background: transparent;
          cursor: pointer;

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



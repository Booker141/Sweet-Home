
/* Static imports */

import {useState} from 'react'
import {useRouter} from 'next/router'
import {server} from '/server'
import {colors} from '/styles/frontend-conf.js'
import { BsPatchCheckFill } from 'react-icons/bs'
import { MdHealthAndSafety, MdClose } from 'react-icons/md'
import {toast} from 'react-toastify'
import global from '/styles/global.module.css'
import dynamic from 'next/dynamic'

/* Dynamic imports */


const Modal = dynamic(() => import('/components/Modal/Modal'))
const FallbackImage = dynamic(() => import('/components/FallbackImage/FallbackImage'))
const LazyLoad = dynamic(() => import('react-lazyload'))


/**
 * It renders a div with a complaint, and a modal that appears when the user clicks on the button
 * @param props - The props that are passed to the component.
 * @returns A component that shows the user who has been blocked and the reason why.
 */
export default function BlockedUser (props) {

  const [user, setUser] = useState({});
  const [user2, setUser2] = useState({});
  const [isShelter, setIsShelter] = useState(props?.role.name === "protectora" ? true : false)
  const [isVet, setIsVet] = useState(props?.role.name === "veterinaria" ? true : false)
  const [isModalVisible, setIsModalVisible] = useState(false);

  const Router = useRouter()


  const checkBlock = async () => {

    await fetch(`${server}/api/blockedUsers`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _id: props?.id
      })})


    toast.success(`Se ha revisado el bloqueo`, { position: "bottom-right",
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
        <div className={global.complaint}>
            <div className="blocked__user">
              <FallbackImage src={props?.image} alt='Imagen de usuario' style={{ borderRadius: '50px' }} width={40} height={40} />
              <a className={global.text__bold} href={`/profile/${props?.username}`} aria-label={`Ir a perfil de ${props?.username}`}>{props?.username}{isShelter && <BsPatchCheckFill size={20} color={colors.secondary}/>}{isVet && <MdHealthAndSafety size={20} color={colors.secondary}/>}</a>
            </div>
            <hr className={global.white__line}></hr>
          <div className="blocked__body">
            <p className={global.text}>Este usuario ha sido denunciado <strong>{props?.complaints.length}</strong> veces</p>
          </div>
          <button className={global.buttonPrimary} onClick={() => setIsModalVisible(true)}>Bloquear</button>
        </div>
        {isModalVisible && <Modal>
          <button className="close__modal" onClick={() => setIsModalVisible(false)}><MdClose size={30} color={`${colors.secondary}`}/></button>
          <h2 className={global.title3}>Bloquear al usuario</h2>
          <p className={global.text2__bold}>Esta acción no es irreversible, podrá activar de nuevo al usuario si es necesario</p>
          <p className={global.text2}>¿Estás seguro de bloquear a este usuario?</p>
          <div className='buttons'>
            <button className={global.buttonSecondary} onClick={() => checkBlock()}>Sí</button>
            <button className={global.buttonTertiary} onClick={() => setIsModalVisible(false)}>No</button>
          </div>
        </Modal>}
        <style jsx>{`
          
          .blocked__user{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;

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

          .blocked__body{

            /*Box model*/

            margin-bottom: 1rem;
          }
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
          margin-top: 1rem;
        }

        button{

          /*Visuals*/

          border: none;
          cursor: pointer;
        }

        a{

          /*Text*/

          color: ${colors.secondary};

          /*Visuals*/

          text-decoration: none;

        }

        hr{

          /*Box model*/

          width: 100%;
          margin-bottom: 2rem;
        }
        
        `}</style>
      </>

  )
}

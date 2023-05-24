/* Static imports */

import { server } from '../../server'
import {MdDeleteOutline, MdClose} from 'react-icons/md'
import {useSession} from 'next-auth/react'
import {colors} from '../../styles/frontend-conf'
import {toast} from 'react-toastify'
import{useState} from 'react'
import {useRouter} from 'next/router'
import dynamic from 'next/dynamic'
import global from '../../styles/global.module.css'

/*Dynamic imports*/

const Modal = dynamic(() => import('/components/Modal/Modal'))
const FallbackImage = dynamic(() => import('/components/FallbackImage/FallbackImage'))
const LazyLoad = dynamic(() => import('react-lazyload'))

export default function Pet (props) {


  const { data: session, status } = useSession({ required: true })
  const [isModalVisible, setIsModalVisible] = useState(false)

  const Router = useRouter()


   const deletePet = async () => {

    const res = await fetch(`${server}/api/pets/${session.user.username}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: props.id
      })
    })

    if (res.status === 200) {

      toast.error(`Se ha eliminado la mascota`, { position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored", })

      setIsModalVisible(false)

      Router.reload()

    }else{

      toast.error(`No se ha podido eliminar la mascota`, { position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored", })

    }
  }

  return (
    <>
      <div key={props.id} className={global.pet}>
        <div className='pet__row1'>
          <div className='pet__column1'>
            <FallbackImage src={props.image} style={{ borderRadius: '10px', maxWidth: '20vw'}} width={800} height={500} alt="Imagen de la mascota"/>    
          </div>
          <div className='pet__column2'>
            <div className='pet__name'>
                <h1 className={global.text2}><strong>Nombre:</strong> {props.name}</h1>
            </div>
            <hr className={global.white__line}/>
              <div className='pet__animal'>
                <h1 className={global.text2}><strong>Animal:</strong> {props.animal}</h1>
              </div>
              <hr className={global.white__line}/>
              <div className='pet__breed'>
                <h1 className={global.text2}><strong>Raza:</strong> {props.breed}</h1>
              </div>
              <hr className={global.white__line}/>
              <div className='pet__age'>
                <h1 className={global.text2}><strong>Fecha de nacimiento:</strong> {new Date(props.birthdate).toLocaleDateString().slice(0, 10)}</h1>
              </div>
              <hr className={global.white__line}/>
              <div className='pet__weight'>
                <h1 className={global.text2}><strong>Peso:</strong> {props.weight} Kg</h1>
              </div>
              <hr className={global.white__line}/>
              <div className='pet__owner'>
                <h1 className={global.text2}><strong>Dueño:</strong> @{props.ownerUsername}</h1>
              </div>
          </div>
          <div className="pet__column3">
          {(props.ownerUsername === session.user.username) && <button className='delete__button' onClick={() => setIsModalVisible(true)}><MdDeleteOutline size={20} color={colors.secondary} /></button>}
          </div>
        </div>
        
      </div>
      {isModalVisible && <LazyLoad><Modal>
        <button className="close__modal" onClick={() => setIsModalVisible(false)}><MdClose size={30} color={`${colors.secondary}`}/></button>
        <h2 className={global.title3}>Eliminar mascota</h2> 
        <p className={global.text2}>Una vez lleves a cabo esta acción, todos los datos de esta mascota serán eliminados de forma permanente</p>
        <p className={global.text2}>¿Estás seguro de eliminar esta mascota?</p>
        <div className='buttons'>
          <button className={global.buttonSecondary} onClick={() => deletePet()}>Sí</button>
          <button className={global.buttonTertiary} onClick={() => setIsModalVisible(false)}>No</button>
        </div>
      </Modal></LazyLoad>}
      <style jsx>{`
      
        .pet__row1{

          /*Box model*/

          display: flex;
          flex-direction: row;
          gap: 4rem;
          align-items: center;

        }

        .pet__column1{

          /*Box model*/

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

        }

        .pet__column2{

          /*Box model*/

          display: flex;
          flex-direction: column;
          justify-content: center;

        }

        .pet__column3{

          /*Box model*/ 

          display: flex;
          align-self: flex-start;
        }

        .pet__name{

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
          gap: 1rem;

        }

        .delete__button{

          /*Visuals*/

          background: transparent;
        }

        button{

          /*Visuals*/

          border: none;
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

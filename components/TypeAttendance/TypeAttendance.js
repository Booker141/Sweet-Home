import global from 'styles/global.module.css'
import { fonts, colors } from 'styles/frontend-conf.js'
import { MdDeleteOutline, MdOutlineEdit } from 'react-icons/md'
import { useState, useEffect } from 'react'
import { server } from 'server'
import { useSession } from 'next-auth/react'
import {toast} from 'react-toastify'
import Modal from 'components/Modal/Modal'
import {useRouter} from 'next/router'

export default function TypeAttendance (props) {

  const router = useRouter();
  const { data: session } = useSession();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (session.user.role === "admin" ) {
      setIsAdmin(true);
    }
}, []);

  const deleteTypeAttendance = async () => {

    await fetch(`${server}/api/typeAttendance/${props.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    setIsModalVisible(false)
    toast.error('Se ha eliminado el tipo de cuidado', { position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored", })
      Router.push(`${server}/faq`)
  }


  return (
    <>
      <div className={global.typeAttendance}>
        <div className="typeAttendance__header">
          <h1 className={global.tertiary}>{props.name}</h1>
          {isAdmin && <div className="header__buttons"><button className='delete__button' onClick={() => setIsModalVisible(true)}><MdDeleteOutline size={20} color={colors.secondary} /></button><button className='edit__button' onClick={() => Router.push("/editQuestion/")}><MdOutlineEdit size={20} color={colors.secondary} /></button></div>}
        </div>
        <hr className={global.white__line2} />
        <p className={global.text}>{props.description}</p>
        <button id="access__button" className={global.buttonTertiary} onClick={() => router.push(`/attendances/${props.name}`)} aria-label={'Ir a ' + `${props.name}`}>Entrar</button>
      </div>
      {isModalVisible && <Modal>
        <h2 className={global.title3}>Eliminar tipo de cuidado</h2>
        <p className={global.text2}>¿Estás seguro de eliminar este tipo de cuidado?</p>
        <div className='buttons'>
          <button className={global.buttonSecondary} onClick={() => deleteTypeAttendance()}>Sí</button>
          <button className={global.buttonTertiary} onClick={() => setIsModalVisible(false)}>No</button>
        </div>
      </Modal>}
      <style jsx>{`

        #access__button{

          /*Box model*/

          margin-top: 1rem;
          margin-bottom: 1rem;
          margin-left: 2rem;
        }
        .typeAttendance__header{

          /*Box model*/ 

          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

          margin-top: 1rem;
          margin-bottom: 1rem;

        }

        .header__buttons{


          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;

          margin-top: 0.5rem;
          margin-right: 1rem;


        }

        .delete__button{

          /*Visuals*/

          border: none;
          background: transparent;
          cursor: pointer;

        }

        .edit__button{

          /*Visuals*/

          border: none;
          background: transparent;
          cursor: pointer;

        }


                h1{

                    /*Box model*/

                    margin-right: 2rem;
                    margin-left: 2rem;
                    margin-top: 2rem;
                    margin-bottom: 2rem;

                    /*Text*/

                    font-size: 1.4rem;
                    font-weight: 600;

                }

                p{

                    /*Box model*/

                    margin-right: 2rem;
                    padding: 2rem;
                }

                .buttons{

                    /*Box model*/

                    display: flex;
                    gap: 1rem;

                    
                }

    
                a:hover{

                    /*Text*/

                    color: ${colors.tertiary};
                    
                    /*Visuals*/

                    transition: 0.3s ease all;
                }
            
            
            `}
      </style>
    </>
  )
}

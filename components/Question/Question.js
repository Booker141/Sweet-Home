import global from 'styles/global.module.css'
import { fonts, colors } from 'styles/frontend-conf.js'
import { MdDeleteOutline, MdOutlineEdit } from 'react-icons/md'
import { useState, useEffect } from 'react'
import { server } from 'server'
import { useSession } from 'next-auth/react'
import {toast} from 'react-toastify'
import Modal from 'components/Modal/Modal'
import Router from 'next/router'


/**
 * This function takes in a question object and returns a div with the question's title and description
 * @param props - This is the object that contains all the data that was passed to the component.
 * @returns A function that returns a JSX element.
 */
export default function Question (props) {

  const { data: session } = useSession();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
      if (session.user.role === "admin" ) {
        setIsAdmin(true);
      }
  }, []);

  const deleteQuestion = async () => {

    await fetch(`${server}/api/questions/${props.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    setIsModalVisible(false)
    toast.error('Se ha eliminado la pregunta', { position: "bottom-right",
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

      <div key={props._id} className={global.question}>

          <div className="question__header">
            <h2 className={global.secondary2}>{props.title}</h2>
            {isAdmin && <div className="header__buttons"><button className='delete__button' onClick={() => setIsModalVisible(true)}><MdDeleteOutline size={20} color={colors.secondary} /></button><button className='edit__button' onClick={() => Router.push("/editQuestion/")}><MdOutlineEdit size={20} color={colors.secondary} /></button></div>}
          </div>
        <p className={global.text2}>{props.answer}</p>
      </div>
      {isModalVisible && <Modal>
        <h2 className={global.title3}>Eliminar pregunta</h2>
        <p className={global.text2}>¿Estás seguro de eliminar esta pregunta?</p>
        <div className='buttons'>
          <button className={global.buttonSecondary} onClick={() => deleteQuestion()}>Sí</button>
          <button className={global.buttonTertiary} onClick={() => setIsModalVisible(false)}>No</button>
        </div>
      </Modal>}

      <style jsx>{`


        .question__header{

          /*Box model*/

          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

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

        .edit__button{

          /*Box model*/

          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;

          /*Visuals*/

          border: none;
          background: transparent;
          cursor: pointer;

        }

        .header__buttons{


          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          
          margin-top: 0.5rem;
          
        
        }

        .buttons{

          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1rem;
        }

            `}
      </style>
    </>

  )
}

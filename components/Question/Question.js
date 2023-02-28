import global from 'styles/global.module.css'
import { fonts, colors } from 'styles/frontend-conf.js'
import { MdDeleteOutline, MdOutlineEdit } from 'react-icons/md'
import { useState } from 'react'
import { server } from 'server'
import { useSession } from 'next-auth/react'
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

  const deleteQuestion = async () => {
    const res = await fetch(`${server}/api/news/${props.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
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

      <div key={props._id} className={global.question}>
        <h2 className={global.secondary2}>{props.title}</h2>
        {session.user.role === "admin" && <div className="buttons"><button className='delete__button' onClick={() => setIsModalVisible(true)}><MdDeleteOutline size={20} color={colors.secondary} /></button><button className='edit__button' onClick={() => Router.push("/editNew")}><MdOutlineEdit size={20} color={colors.secondary} /></button></div>}
        <p className={global.text2}>{props.description}</p>
      </div>
      {isModalVisible && <Modal>
        <h2 className={global.title3}>Eliminar noticia</h2>
        <p className={global.text2}>¿Estás seguro de eliminar esta noticia?</p>
        <div className='buttons'>
          <button className={global.buttonSecondary} onClick={() => deleteNew()}>Sí</button>
          <button className={global.buttonTertiary} onClick={() => setIsModalVisible(false)}>No</button>
        </div>
      </Modal>}

      <style jsx>{`

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

            `}
      </style>
    </>

  )
}

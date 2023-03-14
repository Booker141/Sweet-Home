import global from 'styles/global.module.css'
import { colors } from 'styles/frontend-conf.js'
import { MdDeleteOutline, MdOutlineEdit} from 'react-icons/md'
import { useState, useEffect } from 'react'
import { server } from 'server'
import { useSession } from 'next-auth/react'
import { toast } from 'react-toastify'
import Router from 'next/router'
import Modal from "/components/Modal/Modal"

export default function New (props) {

  const { data: session } = useSession();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);


  useEffect(() => {
    if (session !== undefined){
      if (session.user.role === "admin" ) {
        setIsAdmin(true);
      }
    }
  }, []);

  const deleteNew = async () => {

    await fetch(`${server}/api/news/${props.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })


    setIsModalVisible(false)
    toast.error('Se ha eliminado la noticia', { position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored", })
      Router.push(`${server}/news`)
    Router.reload()
  }

  return (
    <>

      <div key={props._id} className={global.new}>
        <article>
          <div className="new__header">
            <h2 className={global.secondary}>{props.title}</h2>
            {isAdmin && <div className="buttons"><button className='edit__button' onClick={() => Router.push("/editNew")}><MdOutlineEdit size={20} color={colors.secondary} /></button><button className='delete__button' onClick={() => setIsModalVisible(true)}><MdDeleteOutline size={20} color={colors.secondary} /></button></div>}
          </div>
          <h3 className={global.tertiary__bold}>{new Date(props.date).toLocaleDateString().slice(0,10)}</h3>
          <h3 className={global.tertiary__bold}>{props.author}</h3>
          <p className={global.text}>{props.introduction}</p>
          <p className={global.text}>{props.body}</p>
          <p className={global.text}>{props.conclusion}</p>
        </article>
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

                
                .buttons{


                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    gap: 1rem;
                }

                .new__header{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                }
                .text{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
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

                p{
                    white-space: pre-wrap;
                }

            
            `}
      </style>

    </>

  )
}

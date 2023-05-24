/* Static imports */

import {useEffect, useState} from 'react'
import {MdDeleteOutline, MdClose} from 'react-icons/md'
import {server} from '/server'
import {colors} from '/styles/frontend-conf'
import { HiOutlineClock } from 'react-icons/hi'
import { toast } from 'react-toastify'
import global from '/styles/global.module.css'
import dynamic from 'next/dynamic'

/*Dynamic imports*/

const Modal = dynamic(() => import('/components/Modal/Modal'))
const FallbackImage = dynamic(() => import('/components/FallbackImage/FallbackImage'))
const LazyLoad = dynamic(() => import('react-lazyload'))




export default function Report(props){

    const [user, setUser] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)
    const date = new Date(props.createdAt)

    const getUser = async () => {

        const res = await fetch(`${server}/api/users/${props.username}`, {method: 'GET', headers: {'Content-Type': 'application/json'}})

        const data = await res.json()
        const userList = JSON.parse(JSON.stringify(data))
        setUser(userList)
    }

 
  const deleteReport = async () => {

    const res = await fetch(`${server}/api/reports/${props.id}`, {method: 'DELETE', headers: {'Content-Type': 'application/json'}})

    if(res?.error){

        toast.error("Ha ocurrido un error", { position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored", })
        return

    }
    
    toast.error(`Se ha eliminado el informe correctamente`, { position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored", })

    setIsModalVisible(false)

    setTimeout(() => {
        Router.reload()
      }, 5000)
  }


  const getFull = (num) => {

    if (num < 10) {
      return '0' + num
    } else {
      return num
    }
  }

    useEffect(() => {
        getUser()
    }, [])

    return(

        <>
            <div key={props.id} className={global.report}>
                <div className="report__header">
                    <div className="report__username">
                        <FallbackImage src={user.image} width={50} height={50} style={{borderRadius: '70px'}}/>
                        <p className={global.text2}><strong>@{user.username}</strong></p>
                    </div>
                   
                    <div className="report__createdAt">
                        <HiOutlineClock size={18} color={colors.secondary}/>
                        <p className={global.date2}>{date.toLocaleDateString().slice(0, 20)}</p>
                        <p className={global.date2}>{getFull(date.getHours())}:{getFull(date.getMinutes())}:{getFull(date.getSeconds())}</p>
                        <button className='delete__button' onClick={() => setIsModalVisible(true)}><MdDeleteOutline size={20} color={colors.secondary} /></button>
                    </div>
                </div>
                <hr className={global.white__line2}></hr>
                <p className={global.text2}>{props.reason}</p>
                <figure className="report__image">
                    {props.image && <FallbackImage src={props.image} width={1300} height={700} style={{borderRadius: '20px'}}/>}
                </figure>
            </div>
            {isModalVisible && <LazyLoad><Modal>
                <button className="close__modal" onClick={() => setIsModalVisible(false)}><MdClose size={30} color={`${colors.secondary}`}/></button>
                <h2 className={global.title3}>Eliminar informe</h2>
                <p className={global.text2__bold}>¿Estás seguro de eliminar este informe?</p>
                <div className='buttons'>
                <button className={global.buttonSecondary} onClick={() => deleteReport()}>Sí</button>
                <button className={global.buttonTertiary} onClick={() => setIsModalVisible(false)}>No</button>
                </div>
            </Modal></LazyLoad>}
            
            <style jsx>{`
            
            .delete__button{

                /*Box model*/

                display: flex;
                align-items: center;


                /*Visuals*/

                border: none;
                background: transparent;
                cursor: pointer;

                }

                .report__username{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 1rem;
                }

                .report__header{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 1rem;
                    gap: 1rem;
                }

                .report__createdAt{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 1rem;
                }

                .report__image{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    height: 100%;
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
                    align-items: center;
                    gap: 1rem;
                }

            `}</style>
        </>
    )
}
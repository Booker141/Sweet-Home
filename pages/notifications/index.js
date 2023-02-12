import {useState, useEffect} from 'react'
import {useSession} from 'next-auth/react'
import global from "/styles/global.module.css"
import {colors} from "/styles/frontend-conf"
import {fonts} from "/styles/frontend-conf"
import Layout from 'components/Layout/Layout'
import Notification from "components/Notification/Notification"
import {server} from "/server"

export default function Notifications() {

    const {data: session, status} = useSession({required: true});

    const [notifications, setNotifications] = useState([]);

    console.log(notifications)
    useEffect(async () => {
        if(session){
            const res = await fetch(`${server}/api/notifications/${session.user.username}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const notifications = await res.json();
            setNotifications(notifications);
        }
    }, [])

    if(status == "loading"){
        return <div className={global.loading}><p className={global.title}>Cargando..</p></div>
    }
    if(session){

        return (
            <Layout>
                <div className="container">
                    <p className={global.title}>Notificaciones</p>
                    {notifications.length === 0 && <div><p className={global.loading2}>No tiene ninguna notificación</p></div>}
                    {notifications.map(({_id, typeNotification, userIdFrom, userIdTo}) => {
                        return (
                            <>
                                <Notification key={_id} id={_id} typeNotification={typeNotification} userIdFrom={userIdFrom} userIdTo={userIdTo}/>
                            </>
                    )})}
                </div>
            </Layout>
        )
    } else {
      return(
        <Layout>
            <>
                <div className={global.content}>
                    <div className="message">
                        <h1 className={global.title}>Para acceder a esta página debe iniciar sesión</h1>
                        <button className={global.buttonPrimary} onClick={() => signIn()}>Iniciar sesión</button>
                    </div>
                </div>
                <style jsx>{`
  
                    .message{
  
                        /*Box model*/
  
                        display: flex
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        
                        
                    }
  
                    
                `}</style>
            </>
        </Layout>
    )
  
    }

}

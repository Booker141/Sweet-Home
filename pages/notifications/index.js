import {useSession} from 'next-auth/react'
import global from "/styles/frontend-conf"
import {colors} from "/styles/frontend-conf"
import {fonts} from "/styles/frontend-conf"
import Layout from 'components/Layout/Layout'
import Notification from "components/Notification/Notification"

export default function Notifications({notifications}) {

    const {data: session, status} = useSession({required: true});

    if(status == "loading"){
        return <div className={global.loading}><p className={global.title}>Cargando..</p></div>
    }
    if(session){

        return (
            <Layout>
                <div className="container">
                    <p className={global.title}>Notificaciones</p>
                    {notifications.length === 0 && <div><p className={global.loading}>Cargando..</p></div>}
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

export async function getServerSideProps(context){ 

  
  const res = await fetch("http://localhost:3000/api/notifications/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })

    const notifications = await res.json();

    return {
        props: {
            notifications: JSON.parse(JSON.stringify(notifications))
        }
    }

}
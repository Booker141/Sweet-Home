import {useSession} from 'next-auth/react'
import global from "/styles/frontend-conf"
import {colors} from "/styles/frontend-conf"
import {fonts} from "/styles/frontend-conf"
import Layout from 'components/Layout/Layout'
import Notification from "components/Notification/Notification"

export default function Notifications({notifications}) {

    const {data: session, status} = useSession({required: true});

    return (
        <Layout>
            <div className="container">
                <p className={global.title}>Notificaciones</p>
                {notifications.map()}
            </div>
        </Layout>
    )


}

export async function getServerSideProps(context){ 

    
  let res = await fetch("http://localhost:3000/api/notifications", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })

    const notifications = await res.json();

    return {
        props: {
            notifications
        }
    }

}
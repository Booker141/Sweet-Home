import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Layout from 'components/Layout/Layout'
import global from '/styles/global.module.css'
import Message from '/components/Message/Message'
import Sidebar from 'components/Sidebar/Sidebar'
import Loader from 'components/Loader/Loader'
import { useEffect, useState } from 'react'
import { server } from '/server'

export default function Search () {

  const { data: session, status } = useSession({ required: true })
  const [message, setMessage] = useState({});

  async function getMessages(){

    const res = await fetch('${server}/api/messages', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    setMessage(data);
    console.log(data);


  }

  useEffect(() => {

    getMessages();
  
  }, [])



  if (status == 'loading') {
    return (
      <>
        <div className={global.loading}><p>Cargando..</p></div>
        <Loader />
      </>
    )
  }
  if (session) {
    return (
      <Layout>
        <Head><title>Chat</title></Head>
        <p className={global.title}>Chat</p>
        <Sidebar user={session.user.username}/>
        <div className={global.chat}>
            <Message/>
        </div>
      </Layout>
    )
  } else {

  }
}

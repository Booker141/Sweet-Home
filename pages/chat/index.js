import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Layout from 'components/Layout/Layout'
import global from '/styles/global.module.css'
import Message from '/components/Message/Message'
import Sidebar from 'components/Sidebar/Sidebar'
import Loader from 'components/Loader/Loader'
import { useEffect, useState } from 'react'
import { server } from '/server'


export default function Chat ({messages}) {

  const { data: session, status } = useSession({ required: true })
  const [messages, setMessages] = useState({});
  const [chatMessage, setChatMessage] = useState('')

  useEffect(() => {

    setMessage(messages);
  
  }, [])

  /**
   * It sends a POST request to the server, which then sends a response back to the client. 
   * 
   * The response is then logged to the console. 
   * 
   * The chatMessage is then set to an empty string, and the getMessages function is called.
   * @param e - event
   */
  async function sendMessage(e) {

    e.preventDefault();

    const res = await fetch(`${server}/api/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chatId: 1,
        description: chatMessage,
        createdAt: new Date()
      })
    });

    const data = await res.json();
    console.log(data);
    setChatMessage('');
    getMessages();

  }



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
            {message.length === 0 && <div className={global.text}>No hay mensajes</div>}
            {message.map((_id, chatId, description, createdAt) => {
              <Message key={_id} chatId={chatId} description={description} createdAt={createdAt}/>
            })}
            <div className="message__input">
            <input
                    title='Introducir mensaje'
                    type='text'
                    name='message'
                    value={chatMessage}
                    id='message'
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder='p. ej.: Javier'
            />
            <input type='submit' value='Enviar' className='message__button' onClick={(e) => sendMessage(e)} />
            </div>
            
        </div>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <div className={global.content}>
          <div className='message'>
            <h1 className={global.title}>Para acceder a esta página debe ser administrador de Sweet Home</h1>
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
                        
                    `}
        </style>
      </Layout>
    )
  }
}

/**
 * It fetches the data from the API and returns it as props to the page.
 * @returns An object with a property called props.
 */
export async function getServerSideProps(){

  const res = await fetch(`${server}/api/messages`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = await res.json();

  return {
    props: {
      messages: JSON.parse(JSON.stringify(data))
    }
  }
}



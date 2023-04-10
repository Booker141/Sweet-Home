import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import {colors} from '/styles/frontend-conf'
import Head from 'next/head'
import global from 'styles/global.module.css'
import Layout from 'components/Layout/Layout'
import Follower from 'components/Follower/Follower'
import Loader from 'components/Loader/Loader'
import { server } from '/server'

export default function FollowersUser ({ user }) {
  const { data: session, status } = useSession({ required: true })
  const [followers, setFollowers] = useState([])
  const numFollowers = followers.length

  useEffect(() => {
    if (session) {
      if (user.followers.length !== 0) { setFollowers(user.followers) }
    }
  }, [])

  console.log(user)
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
        <Head><title>Seguidores</title></Head>
        <h1 className="title">Seguidores</h1>
        <p className={global.text}>Te siguen {numFollowers} personas</p>
        <div className='followers'>
          {followers.map((_id) => (
            <Follower key={_id} id={_id} />
          ))}
        </div>
        <style jsx>{`
                
             .title{

               /*Text*/

               font-size: 3.5rem;
                        font-weight: 600;
                        background-color: ${colors.primary};
                        font-family: "Archivo Black", sans-serif;
                        background-image: linear-gradient(180deg, #f0810f, #ffe45c 170%);
                        background-repeat: repeat;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent; 
                        background-size: 100%
                        text-align: center;
             }           
                        
                        
                        
                        
                        
      
      `}</style>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <>
          <div className={global.content}>
            <div className='message'>
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
                        
                    `}
          </style>
        </>
      </Layout>
    )
  }
}

export async function getServerSideProps (context) {
  const res = await fetch(`${server}/api/users/${context.query.username}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

  const user = await res.json()

  return {
    props: {
      user
    }
  }
}

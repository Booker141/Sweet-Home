/* Static imports */

import { useSession, signIn } from 'next-auth/react'
import { useState } from 'react'
import {colors} from '/styles/frontend-conf'
import { server } from '/server'
import Head from 'next/head'
import global from 'styles/global.module.css'


/* Dynamic imports */

const Loader = dynamic(() => import('/components/Loader/Loader'))
const Layout = dynamic(() => import('/components/Layout/Layout'))
const Following = dynamic(() => import('/components/Following/Following'))
const LazyLoad = dynamic(() => import('react-lazyload'))


export default function FollowingUser ({ user }) {

  const { data: session, status } = useSession({ required: true })
  const [following, setFollowing] = useState(user.following)
  const numFollowing = following.length


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
        <Head><title>Siguiendo | Sweet Home</title></Head>
        <h1 className="title">Usuarios seguidos</h1>
        {numFollowing === 0 && <p className={global.text}>No sigue a ningún usuario</p>}
        <p className={global.text}>Sigue actualmente a {numFollowing} usuarios.</p>
        <div className='following'>
          {following.map((_id) => (
            <Following key={_id} id={_id} />
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

          p{

            /*Box model*/

            margin-bottom: 4rem;
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

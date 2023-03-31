import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import global from 'styles/global.module.css'
import { colors, fonts } from 'styles/frontend-conf'
import { BsPatchCheckFill } from 'react-icons/bs'
import Layout from 'components/Layout/Layout'
import Post from 'components/Post/Post'
import Loader from 'components/Loader/Loader'
import { server } from '/server'

export default function MyProfile ({ posts }) {

  const { data: session, status } = useSession()
  const [followers, setFollowers] = useState([])
  const [following, setFollowing] = useState([])
  const [isCaretaker, setIsCaretaker] = useState(false)

  const router = useRouter()

  useEffect(() => {
    if (session) {
      setFollowers(session.user.followers)
      setFollowing(session.user.following)
      setIsCaretaker(session.user.isCaretaker)
    }
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
    const numFollowers = followers.length
    const numFollowing = following.length

    return (
      <Layout>

        <Head><title>Mi perfil</title></Head>

        <div className='container__profile'>
          <Image src={session.user.image} style={{ borderRadius: '50px' }} width={100} height={100} />
          <div className='profile__text'>

            <div className='text__username'>
              <div className={global.title2}>@{session.user.username}</div>
              {isCaretaker && <BsPatchCheckFill size={30} color={colors.primary} />}
              <button className={global.buttonTertiary} onClick={() => router.push('/settings')}>Editar perfil</button>
            </div>

            <div className='profile__followers'>
              <div className='followers'>
                <a href='/profile/myprofile/followers' aria-label={`Ir a los seguidores de ${session.user.username}`} className={global.text}>Seguidores</a>
                <div className={global.text__bold}>{numFollowers}</div>
              </div>
              <div className='following'>
                <a href='/profile/myprofile/following' aria-label={`Ir a los usuarios seguidos por ${session.user.username}`} className={global.text}>Siguiendo</a>
                <div className={global.text__bold}>{numFollowing}</div>
              </div>
            </div>
            <p className={global.text}>{session.user.biography}</p>
          </div>
          <div className='profile__functions'>
            <div className='function__title'>Publicaciones</div>
            <div className='function__title'> Guardados </div>
            <div className='function__title'> Mascotas </div>
          </div>

          <div className='posts'>

            {posts.map(({ _id, userImage, username, location, mediaUrl, description, comments }) => {
              return (
                <>
                  <Post id={_id} userImage={userImage} username={username} location={location} mediaUrl={mediaUrl} description={description} comments={comments} />
                </>
              )
            })}
          </div>
        </div>

        <style jsx>{`

                    .container__profile{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        
                        /*Visuals*/

                        border: 1px solid ${colors.primary};
                        border-radius: 10px;
                    
                    }
                    
                    .profile__text{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        margin-top: 1rem;
                        align-items: center;

                    }

                    .profile__text > div {

                        /*Box model*/

                        margin-bottom: 2rem;
                    }

                    .text__username{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        gap: 1rem;
                     

                    }

                    .text__username{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        
                    }

                 

                    .profile__followers{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        gap: 2rem;
                        align-items: center;
                        margin-bottom: 2rem;

                    }

                    .followers{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;

                    }

                    .following{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;

                    }

                    .posts{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;

                    }

                    .profile__functions{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        gap: 2rem;
                        margin-top: 1.5rem;
                        align-items: center;
                        justify-content: center;

                    }

                    .function__title{

                        /*Box model*/
                        

                        margin-bottom: 2rem;

                        /*Text*/
                        
                        font-family: ${fonts.default};
                        font-size: 1rem;
                        font-weight: 500;
                        color: ${colors.primary};

                        /*Visuals*/

                        border-bottom: 2px solid ${colors.primary}
                    }

                    button{

                        /*Box model*/

                        margin: 2rem 2rem 2rem 0;
                    }

                    a{

                        /*Visuals*/

                        text-decoration: none;
                        color: ${colors.quaternary};
                    }
                `}
        </style>
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
  const { username } = context.query

  const post = await fetch(`${server}/api/posts/${username}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const posts = await post.json()

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts))
    }
  }
}

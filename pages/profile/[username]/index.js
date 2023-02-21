import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import global from 'styles/global.module.css'
import { colors, fonts } from 'styles/frontend-conf'
import { AiOutlineCheck } from 'react-icons/ai'
import { BsPatchCheckFill } from 'react-icons/bs'
import { MdOutlineBlock } from 'react-icons/md'
import Layout from 'components/Layout/Layout'
import Post from 'components/Post/Post'
import Loader from 'components/Loader/Loader'
import { server } from '/server'

export default function Username ({ posts, user, pets }) {
  const { data: session, status } = useSession()
  const [followers, setFollowers] = useState([])
  const [following, setFollowing] = useState([])
  const [isFollowing, setIsFollowing] = useState(false)
  const [isCaretaker, setIsCaretaker] = useState(false)
  const [profileUser, setProfileUser] = useState(user)
  const [isPosts, setIsPosts] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [isPets, setIsPets] = useState(false)
  const router = useRouter()

  const followUser = () => {
    setIsFollowing(!isFollowing)

    if (isFollowing) {

    }
  }

  const handleClick = (e) => {
    const posts = document.querySelector('.posts')
    const saved = document.querySelector('.saved')
    const pets = document.querySelector('.pets')

    if (e === 'Publicaciones') {
      setIsPosts(!isPosts)
      setIsSaved(false)
      setIsPets(false)
      const button = document.querySelector('#posts')
      posts.style.display = 'flex'
      saved.style.display = 'none'
      pets.style.display = 'none'
      button.addEventListener('click', () => {
        button.focus()
      })
    } else if (e === 'Guardados') {
      setIsSaved(!isSaved)
      setIsPosts(false)
      setIsPets(false)
      const button = document.querySelector('#saved')
      posts.style.display = 'none'
      saved.style.display = 'flex'
      pets.style.display = 'none'
      button.addEventListener('click', () => {
        button.focus()
      })
    } else if (e === 'Mascotas') {
      setIsPets(!isPets)
      setIsSaved(false)
      setIsPosts(false)
      const button = document.querySelector('#pets')
      posts.style.display = 'none'
      saved.style.display = 'none'
      pets.style.display = 'flex'
      button.addEventListener('click', () => {
        button.focus()
      })
    }
  }

  useEffect(() => {
    if (session) {
      setFollowers(profileUser.followers)
      setFollowing(profileUser.following)
      setIsCaretaker(profileUser.isCaretaker)
    }
  }, [])

  if (status == 'loading') {
    return (
      <>
        <div className={global.loading}><p className={global.title}>Cargando..</p></div>
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

          <div className='profile__text'>

            <div className='text__username'>
              <Image src={profileUser.image} style={{ borderRadius: '50px' }} width={100} height={100} alt='Imagen de perfil' priority />
              <div className={global.title2}>@{profileUser.username}</div>
              {isCaretaker && <BsPatchCheckFill size={30} color={colors.primary} />}
              {isFollowing ? <button className={global.buttonTertiary2} onClick={() => followUser()}>Seguir <AiOutlineCheck /></button> : <button className={global.buttonFollowed} onClick={() => followUser()}>Seguido</button>}
              <a className='profile__block' href={`/profile/${router.query.username}/createComplaint`} aria-label={`Ir a poner una denuncia a ${router.query.username}`}><MdOutlineBlock size={25} color={colors.primary} /></a>
            </div>
            <p className={global.text}>{profileUser.biography}</p>
            <div className='profile__followers'>
              <div className='followers'>
                <a href='/profile/${profileUser.username}/followers' aria-label={`Ir a los seguidores de ${profileUser.username}`} className={global.link}>Seguidores</a>
                <div className={global.text__bold}>{numFollowers}</div>
              </div>
              <div className='following'>
                <a href='/profile/${profileUser.username}/following' aria-label={`Ir a los usuarios seguidos por ${profileUser.username}`} className={global.link}>Siguiendo</a>
                <div className={global.text__bold}>{numFollowing}</div>
              </div>
            </div>

          </div>
          <div className='profile__functions'>
            <button id='posts' className='function__title' onClick={() => handleClick('Publicaciones')}>Publicaciones</button>
            <button id='saved' className='function__title' onClick={() => handleClick('Guardados')}> Guardados </button>
            <button id='pets' className='function__title' onClick={() => handleClick('Publicaciones')}> Mascotas </button>
          </div>

          <div className='posts'>
            {isPosts && posts.length === 0 && <p className={global.text}>No hay publicaciones en este momento</p>}
            {isPosts && posts.map(({ _id, userImage, username, location, mediaUrl, description, comments }) => {
              return (
                <>
                  <Post id={_id} userImage={userImage} username={username} location={location} mediaUrl={mediaUrl} description={description} comments={comments} />
                </>
              )
            })}
          </div>
          <div className='saved'>
            {isSaved && saved.length === 0 && <p className={global.text}>No hay publicaciones guardadas en este momento</p>}
            {isSaved && saved.map(({ _id, userImage, username, location, mediaUrl, description, comments }) => {
              return (
                <>
                  <Post id={_id} userImage={userImage} username={username} location={location} mediaUrl={mediaUrl} description={description} comments={comments} />
                </>
              )
            })}
          </div>

          <div className='pets'>
            {isPets && pets.length === 0 && <p className={global.text}>No tiene mascotas en este momento</p>}
            {isPets && pets.map(({ _id, animal, name, breed, weight, birthYear, image, ownerId, ownerUsername }) => {
              return (
                <>
                  <Pet key={_id} animal={animal} name={name} breed={breed} weight={weight} birthYear={birthYear} image={image} ownerId={ownerId} ownerUsername={ownerUsername} />
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

                    .profile__block{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;

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

                    .saved{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;

                    }

                    .pets{

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

                        border: none;
                        background: transparent;
                        border-bottom: 2px solid ${colors.primary}
                    }

                    

                    .function__title:hover{

                        /*Box model*/

                        padding: 0.8rem;

                        /*Visuals*/

                        cursor: pointer;

                        background: ${colors.primary};
                        border-radius: 10px;
                        color: ${colors.secondary};
                        transition: 0.5s ease all;

                    }

                    .function__title:focus{

                        /*Box model*/

                        padding: 0.8rem;

                        /*Visuals*/

                        background: ${colors.primary};
                        border-radius: 10px;
                        color: ${colors.secondary};
                        transition: 0.3s ease all;

                    }

                    a{

                        /*Visuals*/

                        text-decoration: none;
                        
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

  const res = await fetch(`${server}/api/users/${username}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const pet = await fetch(`${server}/api/pets/${username}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const posts = await post.json()
  const user = await res.json()
  const pets = await pet.json()

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)), user: JSON.parse(JSON.stringify(user)), pets: JSON.parse(JSON.stringify(pets))
    }
  }
}

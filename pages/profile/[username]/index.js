/* Static imports */

import { useSession, getSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { colors, fonts } from 'styles/frontend-conf'
import { BsPatchCheckFill} from 'react-icons/bs'
import {FaUserAlt} from 'react-icons/fa'
import {MdCake, MdLocationPin, MdHealthAndSafety, MdOutlineBlock} from 'react-icons/md'
import {HiOutlineArrowRight} from 'react-icons/hi'
import { server } from '/server'
import Head from 'next/head'
import global from 'styles/global.module.css'
import dynamic from 'next/dynamic'

/* Dynamic imports */

const Loader = dynamic(() => import('/components/Loader/Loader'))
const Layout = dynamic(() => import('/components/Layout/Layout'))
const Post = dynamic(() => import('/components/Post/Post'))
const FallbackImage = dynamic(() => import('/components/FallbackImage/FallbackImage'))
const FollowButton = dynamic(() => import('/components/FollowButton/FollowButton'))
const LazyLoad = dynamic(() => import('react-lazyload'))



export default function Username ({ posts, users}) {
  
  const { data: session, status } = useSession()
  const [followers, setFollowers] = useState(users.followers)
  const [following, setFollowing] = useState(users.following)
  const [isShelter, setIsShelter] = useState(users.role.name === "protectora" ? true : false)
  const [isVet, setIsVet] = useState(users.role.name === "veterinaria" ? true : false)
  const [profileUser, setProfileUser] = useState(users)
  const [userImage, setUserImage] = useState(users.image)
  const [userBanner, setUserBanner] = useState(users.banner)
  const [isPosts, setIsPosts] = useState(false)
  const [isLocation, setIsLocation] = useState(users.location === "" ? false : true)
  const router = useRouter()

  const handleClick = (e) => {

    const posts = document.querySelector('.posts')


    if (e === 'Publicaciones') {
      setIsPosts(!isPosts)

      const button = document.querySelector('#posts')
      posts.style.display = 'flex'
      button.addEventListener('click', () => {
        button.focus()
      })
    }
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
    const numFollowers = followers.length
    const numFollowing = following.length

    return (
      <Layout>

        <Head><title>Perfil de {router.query.username} | Sweet Home</title></Head>

        <div className='container__profile'>

          <div className="profile__banner">  
            <FallbackImage src={userBanner} style={{ borderRadius: '20px 20px 0 0', marginBottom: '1rem'}} width={2500} height={600} alt="Imagen del banner"/>
          </div>
          <div className='profile__text'>

          <div className='text__username'>

              <div className="profile__profilePic">
                <FallbackImage src={userImage} style={{ borderRadius: '100px' }} width={150} height={150} alt='Imagen de perfil' priority />
              </div>
              <div className={global.title2}>@{router.query.username}</div>
              {isShelter && <BsPatchCheckFill size={30} color={colors.primary} />}
              {isVet && <MdHealthAndSafety size={30} color={colors.primary} />}              
              <FollowButton idFrom={session.user.id} usernameFrom={session.user.username} idTo={profileUser.id} usernameTo={profileUser.username}/>
              <a className='profile__block' href={`/profile/${router.query.username}/createComplaint`} aria-label={`Ir a poner una denuncia a ${router.query.username}`}><MdOutlineBlock size={25} color={colors.primary} /></a>
            </div>
            <div className="profile__biography">
              <p className={global.text}>{profileUser.biography}</p>
            </div>
            <div className="profile__dates">
                <div className={global.text}><strong className={global.strong}>Miembro desde:</strong> {new Date(profileUser.createdAt).toLocaleDateString().slice(0, 10)}<FaUserAlt color={`${colors.primary}`}/></div>
                <div className={global.text}><strong className={global.strong}>Cumpleaños:</strong> {new Date(profileUser.birthdate).toLocaleDateString().slice(0, 10)}<MdCake color={`${colors.primary}`}/></div>
            </div>
            {isLocation && <div className="profile__location">
              <div className={global.text}><strong className={global.strong}></strong>{profileUser.location}<MdLocationPin color={`${colors.primary}`}/></div>
            </div>}
            <div className="profile__pets">
              <a className={global.link} href={`/profile/${router.query.username}/pets`} aria-label={`Ir a sus mascotas`}>Sus mascotas<HiOutlineArrowRight size={15} color={colors.primary} /></a>
            </div>
            <div className='profile__followers'>
              <div className="numPosts">
                <div className={global.link}>Publicaciones</div>
                <p className={global.text__bold}>{posts.length}</p>
              </div>
              <div className='followers'>
                <a href={`/profile/${profileUser.username}/followers`} aria-label={`Ir a los seguidores de ${profileUser.username}`} className={global.link}>Seguidores</a>
                <p className={global.text__bold}>{numFollowers}</p>
              </div>
              <div className='following'>
                <a href={`/profile/${profileUser.username}/following`} aria-label={`Ir a los usuarios seguidos por ${profileUser.username}`} className={global.link}>Siguiendo</a>
                <p className={global.text__bold}>{numFollowing}</p>
              </div>
            </div>

          </div>
          <div className='profile__functions'>
            <button id='posts' className='function__title' onClick={() => handleClick('Publicaciones')}>Publicaciones</button>
          </div>

          <div className='posts'>
            {isPosts && posts.length === 0 && <p className={global.text}>No hay publicaciones en este momento</p>}
            {isPosts && posts.map(({ _id, username, location, image, description, createdAt, comments, likes, saves, type }) => {
              return (
                <>
                  <Post key={_id} id={_id} username={username} location={location} image={image} description={description} createdAt={createdAt} comments={comments} likes={likes} saves={saves} type={type} />
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
                        margin-right: 3rem;

                        border: 2px solid #f0810f;
                        border-radius: 20px;
                        
                    
                    }

                    .profile__pets a{

                      /*Box model*/
                      
                      display: flex;
                      flex-direction: row;
                      gap: 0.5rem;
                    }


                    .profile__biography{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        margin-top: 1rem;
                        margin-bottom: 1rem;

                    }

                    .profile__banner{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
          
                    }


                    .profile__banner button{


                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: 0.5rem;

                    }

                    

                    .edit__banner{

                      /*Position*/

                      position: relative;
                      bottom: 2rem;
                      left: 35rem;


                    }

                    .edit__profilePic{

                      /*Position*/

                      position: relative;
                      bottom: 3rem;
                      right: 1.5rem;
                      
                    }
                    
                    .profile__text{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        align-items: center;

                    }

                    .profile__dates{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        gap: 2rem;
                        align-items: center;
                    }

                    .profile__dates div{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: 1rem;
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
                        margin-top: 2rem;
                        
                    }

                 

                    .profile__followers{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        gap: 2rem;
                        margin-bottom: 2rem;

                    }

                    .numPosts{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

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
                        padding: 0.8rem;

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

                    input[type="file"]{

                          /*Box model*/

                          width: 15vw;
                          height: 5vh;
                          display: none;
                          align-items: center;
                          margin-top: 1rem;

                          /*Visuals*/

                          border-radius: 100px;
                          cursor: pointer;
                          background-color: ${colors.primary};
                          color: ${colors.secondary};

                          }

                          input[type="file"]::before{

                          /*Box model*/

                          display: flex;
                          align-items: center;
                          justify-content: center;
                          padding: 1rem;
                          margin-right: 1rem;

                          /*Visuals*/

                          cursor: pointer;
                          background-color: ${colors.primary};
                          color: ${colors.secondary};
                          border-radius: 50px;

                          }

                          input[type="file"]::-webkit-file-upload-button {

                          display: none;

                          }

                    a{

                        /*Visuals*/

                        text-decoration: none;
                        
                    }

                    a:hover{

                        /*Visuals*/

                        cursor: pointer;
                        color: ${colors.tertiary};
                        transition: 0.5s ease all;
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


  const post = await fetch(`${server}/api/posts/${context.query.username}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  

    const res = await fetch(`${server}/api/users/${context.query.username}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })




  const posts = await post.json()
  const user = await res.json()


  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)), users: JSON.parse(JSON.stringify(user))
    }
  }
}


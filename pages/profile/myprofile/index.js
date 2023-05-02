import { useSession, getSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import global from 'styles/global.module.css'
import { colors, fonts } from 'styles/frontend-conf'
import { BsPatchCheckFill, BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs'
import {HiCamera} from 'react-icons/hi'
import {FaUserAlt} from 'react-icons/fa'
import { MdOutlineEdit, MdCake, MdLocationPin} from 'react-icons/md'
import Layout from 'components/Layout/Layout'
import Post from 'components/Post/Post'
import Loader from 'components/Loader/Loader'
import { server } from '/server'

export default function Username ({ posts, users, pets }) {
  
  const { data: session, status } = useSession()
  const [followers, setFollowers] = useState([])
  const [following, setFollowing] = useState([])
  const [isCaretaker, setIsCaretaker] = useState(false)
  const [profileUser, setProfileUser] = useState(users)
  const [userImage, setUserImage] = useState("")
  const [userBanner, setUserBanner] = useState("")
  const [isPosts, setIsPosts] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [isPets, setIsPets] = useState(false)
  const router = useRouter()

  const changeBanner = async (e) => {

    if (e.target.files && e.target.files[0]) {

      const imageUploaded = e.target.files[0]

      const reader = new FileReader()

      reader.readAsDataURL(imageUploaded)

      reader.onload = () => {

        const imageData = reader.result

        setUserBanner(imageData)
  
      }



  await fetch(`${server}/api/users/${session.user.username}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify({
      image: profileUser.image,
      banner: userBanner,
      firstname: profileUser.firstname,
      lastname: profileUser.lastname,
      phone: profileUser.phone,
      gender: profileUser.gender,
      birthdate: profileUser.birthdate,
      biography: profileUser.biography,
      location: profileUser.location,
      links: profileUser.links


    })
  })
}
  }

  const changeProfilePic = async (e) => {

    if (e.target.files && e.target.files[0]) {

      const imageUploaded = e.target.files[0]

      const reader = new FileReader()

      reader.readAsDataURL(imageUploaded)

      reader.onload = () => {

        const imageData = reader.result

        setUserImage(imageData)
  
      }



  await fetch(`${server}/api/users/${session.user.username}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify({
      image: userImage,
      banner: profileUser.banner,
      firstname: profileUser.firstname,
      lastname: profileUser.lastname,
      phone: profileUser.phone,
      gender: profileUser.gender,
      birthdate: profileUser.birthdate,
      biography: profileUser.biography,
      location: profileUser.location,
      links: profileUser.links
      
    })
  })

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

          <div className="profile__banner">  
            <Image src={profileUser.banner} style={{ borderRadius: '20px', marginBottom: '1rem'}} width={2500} height={600} alt="Imagen del banner"/>
            <div className="edit__banner">
              <label className={global.buttonEdit}><MdOutlineEdit size={20} color={`${colors.secondary}`}/>Cambiar banner
              <input
                              title='Introducir imagen de perfil'
                              type='file'
                              name='image'
                              id='image__input'
                              onChange={(e) => changeProfilePic(e)}
                              accept='image/png, image/jpeg, image/jpg'
                            ></input>
              </label>
              
            </div>
          </div>
          <div className='profile__text'>

            <div className='text__username'>
              <Image src={profileUser.image} style={{ borderRadius: '100px' }} width={150} height={150} alt='Imagen de perfil' priority />
              <div className="edit__profilePic">
                <label className={global.buttonEdit}><HiCamera size={20} color={`${colors.secondary}`}/>Cambiar foto
                <input
                              title='Introducir imagen de perfil'
                              type='file'
                              name='image'
                              id='image__input'
                              onChange={(e) => changeProfilePic(e)}
                              accept='image/png, image/jpeg, image/jpg'
                            ></input>
                </label>
                
              </div>
              <div className={global.title2}>@{session.user.username}</div>
              {isCaretaker && <BsPatchCheckFill size={30} color={colors.primary} />}
              <button className={global.buttonTertiary4} onClick={() => router.push("/settings")}>Editar perfil</button>
            </div>
            <div className="profile__biography">
              <p className={global.text}>{profileUser.biography}</p>
            </div>
            <div className="profile__dates">
                <div className={global.text}><strong className={global.strong}>Miembro desde:</strong> {new Date(profileUser.createdAt).toLocaleDateString().slice(0, 10)}<FaUserAlt color={`${colors.primary}`}/></div>
                <div className={global.text}><strong className={global.strong}>Cumpleaños:</strong> {new Date(profileUser.birthdate).toLocaleDateString().slice(0, 10)}<MdCake color={`${colors.primary}`}/></div>
            </div>
            <div className="profile__location">
              <div className={global.text}><strong className={global.strong}></strong>{profileUser.location}<MdLocationPin color={`${colors.primary}`}/></div>
            </div>
            <div className="profile__links">
              <div className={global.text}><a href={profileUser.links?.Instagram} target="_blank"><BsInstagram color={`${colors.primary}`}/></a></div>
              <div className={global.text}><a href={profileUser.links?.Twitter} target="_blank"><BsTwitter color={`${colors.primary}`}/></a></div>
              <div className={global.text}><a href={profileUser.links?.Facebook} target="_blank"><BsFacebook color={`${colors.primary}`}/></a></div>
            </div>
            <div className='profile__followers'>
              <div className='followers'>
                <a href={`/profile/${profileUser.username}/followers`} aria-label={`Ir a los seguidores de ${profileUser.username}`} className={global.link}>Seguidores</a>
                <div className={global.text__bold}>{numFollowers}</div>
              </div>
              <div className='following'>
                <a href={`/profile/${profileUser.username}/following`} aria-label={`Ir a los usuarios seguidos por ${profileUser.username}`} className={global.link}>Siguiendo</a>
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
            {isPosts && posts.map(({ _id, username, location, image, description, likes, saves, comments }) => {
              return (
                <>
                  <Post id={_id} username={username} location={location} image={image} likes={likes} saves={saves} description={description} comments={comments} />
                </>
              )
            })}
          </div>
          <div className='saved'>
            {isSaved && saved.length === 0 && <p className={global.text}>No hay publicaciones guardadas en este momento</p>}
            {isSaved && saved.map(({ _id, username, location, image, description, comments, likes, saves }) => {
              return (
                <>
                  <Post id={_id} username={username} location={location} image={image} likes={likes} saves={saves} description={description} comments={comments} />
                </>
              )
            })}
          </div>

          <div className='pets'>
            {isPets && pets.length === 0 && <p className={global.text}>No tiene mascotas en este momento</p>}
            {isPets && pets.map(({ _id, animal, name, breed, weight, birthdate, image, ownerId, ownerUsername }) => {
              return (
                <>
                  <Pet key={_id} animal={animal} name={name} breed={breed} weight={weight} birthdate={birthdate} image={image} ownerId={ownerId} ownerUsername={ownerUsername} />
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
                        border-radius: 0 0 20px 20px;
                        
                    
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
                        

                        /*Visuals*/

                        border-radius: 20px;
                    }

                    .profile__banner button{

                        /*Position*/

                        position: relative;
                        bottom: 0;
                        right: 0;

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: 0.5rem;




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
                        
                    }

                    .profile__links{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        gap: 2rem;
                        align-items: center;
                        margin-bottom: 2rem;

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


  const session = await getSession(context)

  const post = await fetch(`${server}/api/posts/${session.user.username}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  

    const res = await fetch(`${server}/api/users/${session.user.username}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })





  const pet = await fetch(`${server}/api/pets/${session.user.username}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const posts = await post.json()
  const pets = await pet.json()
  const user = await res.json()


  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)), users: JSON.parse(JSON.stringify(user)), pets: JSON.parse(JSON.stringify(pets))
    }
  }
}

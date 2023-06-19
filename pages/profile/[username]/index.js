/* Static imports */

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { colors, fonts } from "styles/frontend-conf";
import { BsPatchCheckFill, BsFillChatFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import {
  MdCake,
  MdLocationPin,
  MdHealthAndSafety,
  MdOutlineBlock,
  MdReport,
} from "react-icons/md";
import { HiOutlineArrowRight } from "react-icons/hi";
import { server } from "/server";
import {toast} from "react-toastify"
import Head from "next/head";
import global from "styles/global.module.css";
import dynamic from "next/dynamic";

/* Dynamic imports */

const Loader = dynamic(() => import("/components/Loader/Loader"));
const Layout = dynamic(() => import("/components/Layout/Layout"));
const Post = dynamic(() => import("/components/Post/Post"));
const FallbackImage = dynamic(() =>
  import("/components/FallbackImage/FallbackImage")
);
const FollowButton = dynamic(() =>
  import("/components/FollowButton/FollowButton")
);
const LazyLoad = dynamic(() => import("react-lazyload"));

/**
 * @author Sergio García Navarro
 * @returns Other user profile page
 * @version 1.0
 * @description Other user profile page
 */
export default function Username({ posts, users }) {
  const { data: session, status } = useSession();
  const [followers, setFollowers] = useState(users?.followers);
  const [following, setFollowing] = useState(users?.following);
  const [isShelter, setIsShelter] = useState(
    users?.role.name === "protectora" ? true : false
  );
  const [isVet, setIsVet] = useState(
    users?.role.name === "veterinaria" ? true : false
  );
  const [userImage, setUserImage] = useState(users?.image);
  const [userBanner, setUserBanner] = useState(users?.banner);
  const [isBlocked, setIsBlocked] = useState(
    users?.status.name === "bloqueado" ? true : false
  );
  const [isPosts, setIsPosts] = useState(false);
  const [isLocation, setIsLocation] = useState(
    users?.location === "" ? false : true
  );
  const router = useRouter();

  const createChat = async() => {


    const chatExist = await fetch(`${server}/api/chats/${session.user.id}/${users._id}`, 
      {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        },  
      }
    )

    const data = await chatExist.json()

    console.log(data)


    if(data.message === 'No existe el chat'){

      const res = await fetch(`${server}/api/chats`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderId: session?.user.id,
          receiverId: users?._id,
        })
      })

      const data = await res.json()


    if(data.message === "Error al crear el chat"){
      toast.error(`Error al crear chat`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

    }else{

      const chatAfterPost = await fetch(`${server}/chats/${session.user.id}/${users._id}`, 
      {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        },  
      }
     )
     const chat = await chatAfterPost.json()
     console.log(chat)
     router.push(`${server}/chat/${chat.channel}?username=${users?.username}`)
    }
    
  }else{

    router.push(`${server}/chat/${data.channel}?username=${users?.username}`)

  }

   
  }

  const handleClick = (e) => {
    const posts = document.querySelector(".posts");

    if (e === "Publicaciones") {
      setIsPosts(!isPosts);

      const button = document.querySelector("#posts");
      posts.style.display = "flex";
      button.addEventListener("click", () => {
        button.focus();
      });
    }
  };

  if (status == "loading") {
    return (
      <>
        <div className={global.loading}>
          <p>Cargando..</p>
        </div>
        <Loader />
      </>
    );
  }
  if (session) {
    const numFollowers = followers?.length;
    const numFollowing = following?.length;

    return (
      <Layout>
        <Head>
          <title>Perfil de {router.query.username} | Sweet Home</title>
        </Head>

        <div className="container__profile">
          <div className="profile__banner">
            <FallbackImage
              src={isBlocked ? "" : userBanner}
              style={{ borderRadius: "20px 20px 0 0", marginBottom: "1rem" }}
              width={2500}
              height={600}
              alt="Imagen del banner"
            />
          </div>
          <div className="profile__text">
            <div className="text__username">
              <div className="profile__profilePic">
                <FallbackImage
                  src={isBlocked ? "" : userImage}
                  style={{ borderRadius: "100px" }}
                  width={150}
                  height={150}
                  alt="Imagen de perfil"
                  priority
                />
              </div>
              <div className={global.title2}>
                @{isBlocked ? "Usuario bloqueado" : router.query.username}
              </div>
              {isShelter && (
                <BsPatchCheckFill size={30} color={colors.primary} />
              )}
              {isVet && <MdHealthAndSafety size={30} color={colors.primary} />}
              {users && !isBlocked && (
                <FollowButton
                  idFrom={session?.user.id}
                  usernameFrom={session?.user.username}
                  idTo={users?._id}
                  usernameTo={users?.username}
                />
              )}
              {!isBlocked && <button
                  onClick={() => createChat()}
                  aria-label={`Crear chat con ${router.query.username}`}
                >
                  <BsFillChatFill size={30} color={colors.primary} />
                </button>}
              {!isBlocked && (
                <a
                  className="profile__block"
                  href={`/profile/${router.query.username}/createComplaint`}
                  aria-label={`Ir a poner una denuncia a ${router.query.username}`}
                >
                  <MdReport size={35} color={colors.primary} />
                </a>
              )}

            </div>
            {!isBlocked && (
              <div className="profile__biography">
                <p className={global.text}>{users?.biography}</p>
              </div>
            )}
            {!isBlocked && (
              <div className="profile__dates">
                <div className={global.text}>
                  <strong className={global.strong}>Miembro desde:</strong>
                  {new Date(users?.createdAt).toLocaleDateString().slice(0, 10)}
                  <FaUserAlt color={`${colors.primary}`} />
                </div>
                <div className={global.text}>
                  <strong className={global.strong}>Cumpleaños:</strong>
                  {new Date(users?.birthdate).toLocaleDateString().slice(0, 10)}
                  <MdCake color={`${colors.primary}`} />
                </div>
              </div>
            )}
            {isLocation && !isBlocked && (
              <div className="profile__location">
                <MdLocationPin color={`${colors.primary}`} />
                <p className={global.text}>{users.location}</p>
              </div>
            )}
            {!isBlocked && (
              <div className="profile__pets">
                <a
                  className={global.link}
                  href={`/profile/${router.query.username}/pets`}
                  aria-label={`Ir a sus mascotas`}
                >
                  Sus mascotas
                  <HiOutlineArrowRight size={15} color={colors.primary} />
                </a>
              </div>
            )}
            <div className="profile__followers">
              <div className="numPosts">
                <div className={global.link}>Publicaciones</div>
                <p className={global.text__bold}>
                  {isBlocked ? 0 : posts?.length}
                </p>
              </div>
              <div className="followers">
                <a
                  href={`/profile/${users?.username}/followers`}
                  aria-label={`Ir a los seguidores de ${users?.username}`}
                  className={global.link}
                >
                  Seguidores
                </a>
                <p className={global.text__bold}>
                  {isBlocked ? 0 : numFollowers}
                </p>
              </div>
              <div className="following">
                <a
                  href={`/profile/${users?.username}/following`}
                  aria-label={`Ir a los usuarios seguidos por ${users?.username}`}
                  className={global.link}
                >
                  Siguiendo
                </a>
                <p className={global.text__bold}>
                  {isBlocked ? 0 : numFollowing}
                </p>
              </div>
            </div>
          </div>
          <div className="profile__functions">
            <button
              id="posts"
              className="function__title"
              onClick={() => handleClick("Publicaciones")}
            >
              Publicaciones
            </button>
          </div>
          {isBlocked && (
            <div className="posts">
              <p className={global.text}>
                No puede ver las publicaciones, este usuario ha sido bloqueado
              </p>
            </div>
          )}
          {!isBlocked && (
            <div className="posts">
              {isPosts && posts?.length === 0 && (
                <p className={global.text}>
                  No hay publicaciones en este momento
                </p>
              )}
              {isPosts &&
                posts.map(
                  ({
                    _id,
                    username,
                    location,
                    image,
                    description,
                    createdAt,
                    comments,
                    likes,
                    saves,
                    type,
                  }) => {
                    return (
                      <>
                        <Post
                          key={_id}
                          id={_id}
                          username={username}
                          location={location}
                          image={image}
                          description={description}
                          createdAt={createdAt}
                          comments={comments}
                          likes={likes}
                          saves={saves}
                          type={type}
                        />
                      </>
                    );
                  }
                )}
            </div>
          )}
        </div>

        <style jsx>
          {`

                    .container__profile{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        margin-right: 3rem;

                        border: 2px solid #f0810f;
                        border-radius: 20px;
                        
                    
                    }

                    .profile__location{

                      /*Box model*/

                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      gap: 0.5rem;
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
                        flex-direction: row;a
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

                    button{

                      /*Visuals*/

                      cursor: pointer;
                      background: transparent;
                      border: none;
                    }
                `}
        </style>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <>
          <div className={global.content}>
            <div className="message">
              <h1 className={global.title7}>
                Para acceder a esta página debe iniciar sesión
              </h1>
              <button className={global.buttonPrimary} onClick={() => signIn()}>
                Iniciar sesión
              </button>
            </div>
          </div>
          <style jsx>
            {`

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
    );
  }
}

export async function getServerSideProps(context) {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const post = await fetch(`${server}/api/posts/${context.query.username}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const res = await fetch(`${server}/api/users/${context.query.username}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const posts = await post.json();
  const user = await res.json();

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
      users: JSON.parse(JSON.stringify(user)),
    },
  };
}

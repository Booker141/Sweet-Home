import Head from 'next/head'
import { useSession, signIn} from 'next-auth/react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import global from 'styles/global.module.css'
import { colors, fonts } from 'styles/frontend-conf'
import { HiOutlineRefresh } from 'react-icons/hi'
import Layout from 'components/Layout/Layout'
import Sidebar from 'components/Sidebar/Sidebar'
import Post from 'components/Post/Post'
import User from 'components/UserCard/UserCard'
import Loader from 'components/Loader/Loader'
import { server } from '/server'

/*
    * @author Sergio García Navarro
    * @returns Posts page
    * @version 1.0
    * @date 13/12/2020
    * @description Posts page
*/
/**
 * It returns a React fragment that contains a Head component with a title of "Reciente" and a div
 * that contains a list of posts
 * @returns An array of objects.
 */
export default function Saved () {
  
  const { data: session, status } = useSession({ required: true })
  const [savedPostsList, setSavedPostsList] = useState([])
  const Router = useRouter()



  const fetchSavedPosts = async () => {

    const res = await fetch(`${server}/api/savedPosts/${session.user.username}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  
  
    const posts = await res.json()
    setSavedPostList(posts)
  }

  useEffect(() => {

    fetchSavedPosts()

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
        <Head><title>Publicaciones guardadas | Sweet Home</title></Head>
        <div className='container'>

          <div className='container__column1'>

            <div className='column1__header'>
              <h1 className={global.title}>Publicaciones guardadas</h1>
            </div>

            {savedPostsList.length === 0 && <div><p className={global.text}>No hay ninguna publicación</p></div>}
            {savedPostsList.sort((post1, post2) => { return new Date(post2.createdAt) - new Date(post1.createdAt) }).map(({ _id, username, location, image, description, createdAt, comments, likes, saves }) => {
              return (
                <>
                  <Post key={_id} id={_id} username={username} location={location} image={image} description={description} createdAt={createdAt} comments={comments} likes={likes} saves={saves} />
                </>
              )
            })}
          </div>


        </div>

        <style jsx>{`

              .container{

                /*Box model*/

                display: flex;
                flex-direction: row;
           

              }


              .container__column1{

                /*Box model*/

                display: flex;
                flex-direction: column;
                width: 70%;

              }

              .column1__header{

                /*Box model*/

                display: flex;
                flex-direction: row;
                gap: 1rem;
                width: 50rem;
                align-items: center;
              }





              .column1__buttons{

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                margin-bottom: 1rem;
                
               
              }

              .column1__buttons button{

                /*Box model*/

                margin-right: 1rem;

              }



              .column1__search{

                /*Box model*/

                display: flex;
                flex-direction: row;
                width: 26rem;

              }

              .search__icon{

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                margin-right: 0.5rem;

              }



              h1{
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



                ::placeholder{

                /*Text*/

                color: ${colors.primary};

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

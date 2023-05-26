/* Static imports */


import { useSession, signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { colors, fonts } from 'styles/frontend-conf'
import { server } from '/server'
import global from 'styles/global.module.css'
import Head from 'next/head'
import Layout from '/components/Layout/Layout'
import CreatePostCard from '/components/CreatePostCard/CreatePostCard'
import dynamic from 'next/dynamic'


/* Dynamic imports */

const Loader = dynamic(() => import('/components/Loader/Loader'))
const Post = dynamic(() => import('/components/Post/Post'))
const LazyLoad = dynamic(() => import('react-lazyload'))




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
export default function Home ({ posts }) {

  console.log(posts)
  
  const { data: session, status } = useSession({ required: true })
  const [postList, setPostList] = useState(posts)
  const [isSortedByUsername, setIsSortedByUsername] = useState(false)
  const [isSortedByLikes, setIsSortedByLikes] = useState(false)
  const Router = useRouter()

  const sortByFilters = (e) => {


    if(e === 'activity'){
      
    setIsSortedByLikes(!isSortedByLikes)
    const sortedPosts = posts.sort((a, b) => (a.likes.length < b.likes.length) ? 1 : ((b.likes.length < a.likes.length) ? -1 : 0))
    setPostList(sortedPosts)

    }else if(e === 'user'){

    setIsSortedByUsername(!isSortedByUsername)
    const sortedPosts = posts.sort((a, b) => (a.username > b.username) ? 1 : ((b.username > a.username) ? -1 : 0))
    setPostList(sortedPosts)

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
    return (
      <Layout>
        <Head><title>Reciente | Sweet Home</title></Head>
        <div className='column1__header'>
              <h1 className={global.title}>Reciente</h1>
        </div>
        <div className='column1__buttons'>
          <button className={global.buttonPrimary} onClick={() => Router.push('/createPost')} aria-label='Crear nuevo post'>Crear publicación</button>
          <div className='filter__list'>
                  <select name="filters" onChange={(e) => sortByFilters(e.target.value)}>
                      <option default value="default">Selecciona un filtro</option>
                      <option value="activity">Ordenar por popularidad</option>
                      <option value="user">Ordenar por usuario</option>
                  </select>
                </div>
        </div>
        <CreatePostCard/>
        <div className='container'>

          <div className='container__column1'>

            
            {((isSortedByUsername || isSortedByLikes) && posts.length === 0) && <div><p className={global.loading2}>No hay ninguna publicación.</p></div>}
            {(isSortedByUsername || isSortedByLikes) && postList.map(({ _id, username, location, image, description, createdAt, comments, likes, saves, type }) => {
              return (
                <>
                  <Post key={_id} id={_id} username={username} location={location} image={image} description={description} createdAt={createdAt} comments={comments} likes={likes} saves={saves} type={type} />
                </>
              )
            })}
            {((!isSortedByUsername && !isSortedByLikes) && posts.length === 0) && <div><p className={global.loading2}>No hay ninguna publicación.</p></div>}
            {(!isSortedByUsername && !isSortedByLikes) && posts.sort((post1, post2) => { return new Date(post2.createdAt) - new Date(post1.createdAt) }).map(({ _id, username, location, image, description, createdAt, comments, likes, saves, type }) => {
              return (
                <>
                  <Post key={_id} id={_id} username={username} location={location} image={image} description={description} createdAt={createdAt} comments={comments} likes={likes} saves={saves} type={type}/>
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

              .filter__list{

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                align-self: flex-end;

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
                align-items: center;
                margin-bottom: 2rem;
              }


              .column1__buttons{

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 2rem;
                
               
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

                  select{

                  /*Box model*/

                  width: 10vw;
                  height: 2rem;
                  align-self: flex-end;

                  /*Text*/

                  font-family: ${fonts.default};
                  color: ${colors.secondary};
                  font-size: 0.8rem;

                  /*Visuals*/

                  border-radius: 20px;
                  border: none;
                  background-color: ${colors.primary};
                  box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);

                  }

                  select:focus{

                  /*Visuals*/

                  border: 2px solid #4d97f7;
                  outline: none;
                  box-shadow: 10px 10px 20px 0px rgba(176,176,176,0.66);

                  }

                  select::part(listbox){

                    /*Visuals*/

                    border-radius: 20px;
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

export async function getServerSideProps (context) {

  context.res.setHeader('Cache-Control','public, s-maxage=10, stale-while-revalidate=59')

  const res = await fetch(`${server}/api/posts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const posts = await res.json()

  return {
    props: { posts: JSON.parse(JSON.stringify(posts))}
  }
}

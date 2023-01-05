import Head from 'next/head'
import {useSession} from 'next-auth/react'
import {useRouter} from 'next/router'
import { getToken } from "next-auth/jwt"
import Link from 'next/link'
import global from "styles/global.module.css"
import {colors} from "styles/frontend-conf"
import Layout from "components/Layout/Layout"
import BasicFooter from "components/BasicFooter/BasicFooter"
import Post from "components/Post/Post"
import User from "components/User/User"

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
export default function Home ({posts, users}){

  const {status} = useSession();
  
  const Router = useRouter();

    if(status == "loading"){
      return <div className={global.loading}><p className={global.title}>Cargando..</p></div>
    }

      return (
          <Layout>
              <Head><title>Reciente</title></Head>
                  <div className="container">
                    <div className="container__column1">
                      <div className="column1__buttons">
                        <button className={global.buttonPrimary} onClick={() => Router.push("/newPost")} aria-label="Crear nuevo post">Crear post</button>
                        <button className={global.buttonPrimary} onClick={() => Router.push("/search")} aria-label="Ir a búsqueda">Buscar</button>
                      </div>
                      <h1 className={global.title}>Reciente</h1>
                      {posts.length === 0 && <div><p className={global.loading}>Cargando..</p></div>}

                        {posts.map(({_id, user, location, mediaUrl, description, comments}) => {
                          return (
                            <>
                              <Post key={_id} user={user} location={location} mediaUrl={mediaUrl} description={description} comments={comments}/>
                            </>
                          )
                        })}
                      
                    </div>
                    <div className="container__column2">
                      <h1 className={global.title}>Seguir</h1>
                      {users.length === 0 && <div><p className={global.loading}>Cargando..</p></div>}
                      {users.slice(0,5).map(({_id, userImage, username}) => {
                        return (
                          <>
                            <User key={_id} userImage={userImage} username={username}/>
                          </>
                        )
                      })}
                      <div className="users__link">
                        <Link href="/allUsers"><a className={global.link} aria-label="Ir a ver más usuarios">Ver todos →</a></Link>
                      </div>
                  </div>
                </div>
            
            <style jsx>{`

              .container{

                /*Box model*/

                display: flex;
                flex-direction: row;
                justify-content: space-between;

              }

              .container__column2{


                /*Box model*/

                display: flex;
                flex-direction: column;
                width: 30%;

              }



              .users__link{

                /*Box model*/

                margin-bottom: 2rem;

              }

              .column1__buttons{

                /*Box model*/

                display: flex;
                flex-direction: row;
               
                
              }

              .column1__buttons button{

                /*Box model*/

                margin-right: 1rem;

              }


            `}</style>
        </Layout>

      )
  }


export async function getServerSideProps(context){ 

  const token = await getToken(context);

  if(!token){
    return {
      redirect: {
        destination: "/auth/signIn",
        permanent: false
      }
    }
  }
  
  let res = await fetch("http://localhost:3000/api/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });


  let user = await fetch("http://localhost:3000/api/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })

  let posts = await res.json();
  let users = await user.json();

  return {
    props: { posts: JSON.parse(JSON.stringify(posts)), users: JSON.parse(JSON.stringify(users)) },
  };
}



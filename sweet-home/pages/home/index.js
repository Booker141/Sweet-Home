import Head from 'next/head'
import {useSession} from 'next-auth/react'
import Router from 'next/router'
import Link from 'next/link'
import global from "styles/global.module.css"
import Layout from "components/Layout/Layout"
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

      const { data: session, status } = useSession({required: true});
      if (status === "loading") return (
        <Loading/>
      );
      return (
          <Layout>
            <>
              <Head><title>Reciente</title></Head>
              <a name="top"></a>
              <div className={global.content}>
                <div className="container">
                  <div className="container__column1">
                    <h1 className={global.title}>Reciente</h1>
                    {posts.length === 0 && <div className={global.loading}><p>Cargando</p></div>}
                    {posts.map(({_id, userImage, username, location, mediaUrl, description, comments}) => {
                      return (
                        <>
                          <Post key={_id} userImage={userImage} username={username} location={location} mediaUrl={mediaUrl} description={description} comments={comments}/>
                        </>
                      )
                    })}
                  </div>
                  <div className="container__column2">
                    <h1 className={global.title}>Seguir</h1>
                    {users.length === 0 && <div className={global.loading}><p>Cargando..</p></div>}
                    {users.slice(0,5).map(({_id, userImage, username}) => {
                      return (
                        <>
                          <User key={_id} userImage={userImage} username={username}/>
                        </>
                      )
                    })}
                    <Link href="/allUsers"><a className={global.link} aria-label="Ir a ver más usuarios">Ver todos →</a></Link>
                </div>
              </div>
            </div>
            <a title="Volver arriba" aria-label="Ir al inicio de página" href="#top" className={global.buttonTo}>↑</a>

            <style jsx>{`

              .container{

                /*Box model*/

                display: flex;
                flex-direction: row;
                justify-content: space-between;
              }

            `}</style>
          </>
        </Layout>
      )
  }


export async function getServerSideProps(){ 

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
    props: { posts: posts, users: users },
  };
}



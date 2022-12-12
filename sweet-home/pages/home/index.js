import Head from 'next/head'
import {useSession} from 'next-auth/react'
import Router from 'next/router'
import {MongoClient} from 'mongodb'
import global from "styles/global.module.css"
import Layout from "components/Layout/Layout"

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
export default function PostList ({posts}){

      const { status } = useSession({required: true, onUnauthenticated(){ Router.push("/signIn")}});

      return (
          <Layout>
            <>
              <Head><title>Reciente</title></Head>
              <a name="top"></a>
              <div className={global.content}>
                {posts.map(({_id, userImage, username, location, mediaUrl, description, comments}) => {
                  return (
                    <>
                      <div key={_id}>
                        {username}
                      </div>
                      <div>
                        {location}
                      </div>
                      <div>
                        {mediaUrl}
                      </div>
                      <div>
                        {description}
                      </div>
                      <div>
                        {comments}
                      </div>
                    </>
                  )
                })}
            </div>
            <a title="Volver arriba" aria-label="Ir al inicio de página" href="#top" className={global.buttonTo}>↑</a>
          </>
        </Layout>
      )
    }


export async function getServerSideProps(){ 

    const client = await MongoClient.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
    const db = client.db();
    const posts = await db.collection("posts").find().toArray();

    
    return {
        props: {
            posts: JSON.parse(JSON.stringify(posts))
        }
    }
}

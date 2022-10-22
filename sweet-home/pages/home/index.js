import Head from 'next/head'
import styles from "styles/global.module.css"
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
export default function PostList () {
    return (
        <>
          <Head><title>Reciente</title></Head>
          <a name="top"></a>
          <div>
          {/*
            posts.map(({_id, userImage, username, location, mediaUrl, description, comments}) => {
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
            })*/
          }
        </div>
        <a title="Volver arriba" href="#top" className={styles.buttonTo}>↑</a>
      </>
    )
}
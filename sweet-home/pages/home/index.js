import Head from 'next/head'
/* 
    * @author Sergio García Navarro
    * @returns Posts page
    * @version 1.0
    * @date 13/12/2020
    * @description Posts page
*/
export default function PostList () {
    return (
        <>
          <Head><title>Reciente</title></Head>
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
      </>
    )
}
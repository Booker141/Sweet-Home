/* Static imports */

import { useSession, getSession, signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { colors } from "styles/frontend-conf";
import { server } from "/server";
import global from "styles/global.module.css";
import dynamic from "next/dynamic";
import Head from "next/head";

/* Dynamic imports */

const Loader = dynamic(() => import("/components/Loader/Loader"));
const Layout = dynamic(() => import("/components/Layout/Layout"));
const Post = dynamic(() => import("/components/Post/Post"));
const SettingsLayout = dynamic(() =>
  import("/components/SettingsLayout/SettingsLayout")
);
const LazyLoad = dynamic(() => import("react-lazyload"));

/**
 * @author Sergio García Navarro
 * @returns Posts page
 * @version 1.0
 * @description Posts page
 */
export default function Posts({ myPosts }) {
  const { data: session, status } = useSession({ required: true });
  const [postList, setPostList] = useState(myPosts);
  const [isSortedByLikes, setIsSortedByLikes] = useState(false);
  const Router = useRouter();

 
  const sortPostByLikes = () => {
    setIsSortedByLikes(!isSortedByLikes);
    const sortedPosts = posts?.sort((a, b) =>
      a.likes > b.likes ? 1 : b.likes > a.likes ? -1 : 0
    );
    setPostList(sortedPosts);
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
    return (
      <Layout>
        <Head>
          <title>Mis publicaciones | Sweet Home</title>
        </Head>

        <div className="container">
          <div className="container__column1">
            <div className="column1__header">
              <h1 className={global.title}>Mis publicaciones</h1>
            </div>
            <div className="column1__buttons">
              <button
                className={global.buttonPrimary}
                onClick={() => Router.push("/createPost")}
                aria-label="Crear nuevo post"
              >
                Crear post
              </button>
              <button
                className={global.buttonPrimary}
                onClick={() => sortPostByLikes()}
                aria-label="Ordenar publicaciones por likes"
              >
                Ordenar por popularidad
              </button>
            </div>
            {isSortedByLikes && postList?.length === 0 && (
              <div>
                <p className={global.loading2}>No hay ninguna publicación.</p>
              </div>
            )}
            {isSortedByLikes &&
              postList.map(
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
            {!isSortedByLikes && postList?.length === 0 && (
              <div>
                <p className={global.loading2}>No hay ninguna publicación.</p>
              </div>
            )}
            {!isSortedByLikes &&
              postList
                .sort((post1, post2) => {
                  return new Date(post2.createdAt) - new Date(post1.createdAt);
                })
                .map(
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
        </div>

        <style jsx>
          {`

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
                margin-bottom: 3rem;
                
               
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

  const session = await getSession(context);

  const res = await fetch(`${server}/api/posts/${session.user.username}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const posts = await res.json();

  return {
    props: {
      myPosts: JSON.parse(JSON.stringify(posts)),
    },
  };
}

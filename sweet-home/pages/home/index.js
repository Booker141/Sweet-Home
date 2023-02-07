import Head from 'next/head'
import {useSession} from 'next-auth/react'
import {useState} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import global from "styles/global.module.css"
import {colors} from "styles/frontend-conf"
import {fonts} from "styles/frontend-conf"
import {RiSearchLine} from "react-icons/ri"
import {HiOutlineRefresh} from "react-icons/hi"
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

  const {data: session, status} = useSession({required: true});
  const [postList, setPostList] = useState(posts);
  const [search, setSearch] = useState("");
  const [isSortedByUsername, setIsSortedByUsername] = useState(false);
  const [isSortedByLikes, setIsSortedByLikes] = useState(false);
  const Router = useRouter();

  const refresh = () => {



  }
  const sortPostByUsername = () => {
    setIsSortedByUsername(!isSortedByUsername);
    const sortedPosts = posts.sort((a,b) => (a.username > b.username) ? 1 : ((b.username > a.username) ? -1 : 0))
    setPostList(sortedPosts);
  }

  const sortPostByLikes = () => {

    setIsSortedByLikes(!isSortedByLikes);
    const sortedPosts = posts.sort((a,b) => (a.likes > b.likes) ? 1 : ((b.likes > a.likes) ? -1 : 0));
    setPostList(sortedPosts);

  }

  console.log(session);

  const searchPost = (e) =>{

    e.preventDefault();
    setSearch(e.target.value);

    if(search.length > 0 && search !== " "){
      const filteredPosts = posts.filter(post => post.username.toLowerCase().includes(search.toLowerCase()));
      setPostList(filteredPosts);
    }

  }

    if(status == "loading"){
      return <div className={global.loading}><p className={global.title}>Cargando..</p></div>
    }
    if(session){
      return (
          <Layout>
              <Head><title>Reciente</title></Head>
                  <div className="column1__buttons">
                        <button className={global.buttonPrimary} onClick={() => Router.push("/createPost")} aria-label="Crear nuevo post">Crear post</button>
                        <button className={global.buttonPrimary} onClick={() => sortPostByUsername()} aria-label="Ordenar publicaciones por usuario">Ordenar por usuario</button>
                        <button className={global.buttonPrimary} onClick={() => sortPostByLikes()} aria-label="Ordenar publicaciones por likes">Ordenar por popularidad</button>
                    </div>
                      <div className="column1__search">
                          <div className="search__icon">
                            <RiSearchLine size={20} color={colors.primary}/>
                          </div>
                          <input type="search" 
                                name="search" 
                                value={search}
                                placeholder="Buscar.."
                                onBlur={(e) => searchPost(e)}
                                onKeyUp={(e) => searchPost(e)}
                                onChange={(e) => setSearch(e.target.value)}
                                />
                    </div>
                  <div className="container">
                  
                    <div className="container__column1">
                     
                      <div className="column1__header">
                        <h1 className={global.title}>Reciente</h1>
                        <button className="refresh__button" onClick={() => refresh()}><HiOutlineRefresh size={30} color={colors.primary}/></button>
                      </div>
                      {((isSortedByUsername || isSortedByLikes) && posts.length === 0) && <div><p className={global.loading}>Cargando..</p></div>}
                      {(isSortedByUsername || isSortedByLikes) && postList.map(({_id, username, location, mediaUrl, description, comments, likes, saves}) => {
                          return (
                            <>
                              <Post key={_id} id={_id} username={username} location={location} mediaUrl={mediaUrl} description={description} comments={comments} likes={likes} saves={saves}/>
                            </>
                          )
                        })}
                      {((!isSortedByUsername && !isSortedByLikes) && posts.length === 0) && <div><p className={global.loading}>Cargando..</p></div>}
                        {(!isSortedByUsername && !isSortedByLikes) && posts.sort((post1, post2) => { return new Date(post2.createdAt) - new Date(post1.createdAt)}).map(({_id, username, location, mediaUrl, description, comments, likes, saves}) => {
                          return (
                            <>
                              <Post key={_id} id={_id} username={username} location={location} mediaUrl={mediaUrl} description={description} comments={comments} likes={likes} saves={saves}/>
                            </>
                          )
                        })}
                      </div>
                    
                    <div className="container__column2">
                      <div className="column2__follow">
                        <h1 className={global.title}>Seguir</h1>
                        {users.length === 0 && <div><p className={global.loading}>Cargando..</p></div>}
                        {users.filter(user => user.username !== (session.user.username)).slice(0,5).map(({_id, userImage, username, isCaretaker}) => {
                          return (
                            <>
                              <User key={_id} id={_id} userImage={userImage} username={username} isCaretaker={isCaretaker}/>
                            </>
                          )
                        })}
                        <div className="users__link">
                          <Link href="/allUsers"><a className={global.link} aria-label="Ir a ver más usuarios">Ver todos →</a></Link>
                        </div>
                      </div>
                      <div className="footer">
                        <div className="footer__links">
                          <Link className={global.link} href="/use" passHref><a aria-label='Ir a Información'>Información</a></Link>
                          <Link className={global.link} href="/privacy" passHref><a aria-label='Ir a Privacidad'>Privacidad</a></Link>
                          <Link className={global.link} href="/conditions" passHref><a aria-label='Ir a Condiciones'>Condiciones</a></Link>
                          <Link className={global.link} href="/accessibility" passHref><a aria-label='Ir a Accesibilidad'>Accesibilidad</a></Link>
                          <Link className={global.link} href="/rules" passHref><a aria-label='Ir a Reglas y Políticas'>Reglas y Políticas</a></Link>
                        <div className="copyright">
                          <p>&copy; 2022 Sweet Home Corporation</p>
                      </div>
                </div>
            </div>
                  </div>
                </div>
            
            <style jsx>{`

              .container{

                /*Box model*/

                display: flex;
                flex-direction: row;
           

              }

              .footer{

                /*Box model*/ 

                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;

              }

              .footer__links{

                    /*Box model*/

                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: row;

                    gap: 1rem;
                    align-items: center;
                    


                }

                .footer__links a{

                  /*Text*/

                  font-family: ${fonts.default};
                  text-decoration: none;
                  color: ${colors.primary};

                }

                .footer__links a:hover{

                  /*Text*/

                  font-family: ${fonts.default};
                  color: ${colors.tertiary};
                  transition: 0.3s ease all;

                }

                .copyright{

                  /*Text*/

                  font-family: ${fonts.default};
                  text-decoration: none;
                  color: ${colors.primary};

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
              }

              .container__column2{


                /*Box model*/

                display: flex;
                flex-direction: column;
                width: 30%;

              }

              .column2__follow{

                /*Box model*/

                display: flex;
                flex-direction: column;
                margin-bottom: 3rem;
              }



              .users__link{

                /*Box model*/

                margin-bottom: 2rem;

              }

              .column1__buttons{

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                
               
              }

              .column1__buttons button{

                /*Box model*/

                margin-right: 1rem;

              }

              .refresh__button{

                /*Visuals*/

                background: transparent;
                border: none;
                cursor: pointer;

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

              input[type="search"]{

                /*Box model*/

                width: 100%;
                height: 2rem;
                padding: 0.4rem;

                /*Text*/

                font-family: ${fonts.default};
                font-size: 1rem;

                /*Visuals*/

                border-radius: 5px;
                border: 1px solid ${colors.primary};
                background: transparent;
                transition: 0.2s ease all;


              }

                input[type="search"]:focus{


                /*Visuals*/

                border: 2px solid ${colors.primary};
                outline: none;
                box-shadow: 10px 10px 20px 0px rgba(176,176,176,0.66);

                }



                ::placeholder{

                /*Text*/

                color: ${colors.primary};

                }



            `}</style>
        </Layout>

      )
} else {
  return(
      <Layout>
          <>
              <div className={global.content}>
                  <div className="message">
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

                  
              `}</style>
          </>
      </Layout>
  )

}
}

export async function getServerSideProps(context){ 

  
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


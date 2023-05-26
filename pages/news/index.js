/* Static imports */

import { useSession, getSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { fonts, colors } from 'styles/frontend-conf.js'
import { server } from '../../server'
import global from 'styles/global.module.css'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import BasicLayout from '/components/BasicLayout/BasicLayout'

/* Dynamic imports */

const Loader = dynamic(() => import('/components/Loader/Loader'))
const New = dynamic(() => import('/components/New/New'))
const Link = dynamic(() => import('next/link'))
const LazyLoad = dynamic(() => import('react-lazyload'))


/*
    * @author Sergio García Navarro
    * @returns Conditions page
    * @version 1.0
    * @date 13/12/2022
    * @description This page is the conditions page of the application
*/

export default function News ({ news, users }) {

  const [isAdmin, setIsAdmin] = useState(users.role.name === "administrador" ? true : false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const {data: session} = useSession({required: false});
  const router = useRouter();


  return (
    <BasicLayout>

      <Head><title>Noticias | Sweet Home</title></Head>

      <section>
        <div className="news__header">
          <h1 className={global.title}>¡Últimas noticias de Sweet Home!</h1>
          <p className={global.text}>¡En este apartado podrá encontrar las últimas noticias relacionadas con nuestra plataforma!</p>
          {isAdmin && <button className={global.buttonPrimary} onClick={() => router.push(`${server}/dashboard/createNew`)}>Crear</button>}
        </div>

        {news.length === 0 && <div><p className={global.loading2}>No hay ninguna noticia publicada.</p></div>}

        <div className="news__list">
          {news.sort((new1, new2) => { return new Date(new2.date) - new Date(new1.date) }).map(({ _id, title, date, author, introduction }) => {
            return (
              <>
                <div className='new'>     
                  <New key={_id} id={_id} title={title} date={date} author={author} introduction={introduction} />
                  <Link href={`/news/${_id}`} as={`/news/${_id}`} prefetch={false}><a aria-label='Enlace a noticia' className={global.link3}>Leer más →</a></Link>
                </div>
              </>
            )
          })}
        </div>
      </section>
      
      <style jsx>{`

                    .news__list{


                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;

                    }

                     
                    .news__header{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    .new{

                         /*Box model*/

                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        width: 70vw;
                        margin-bottom: 1rem;
                        padding: 2rem;

                        /*Text*/

                        font-family: 'Poppins', sans-serif;
                        color: #fafafa;

                        /*Visuals*/

                        border-radius: 20px;
                        background: linear-gradient(45deg, rgba(240,129,15,1) 35%, rgba(249,166,3,1) 100%);
                    }

                    .list{

                        /*Box model*/

                        margin-bottom: 5rem;
                        
                        /*Text*/

                        font-family: ${fonts.secondary};

                        /*Visuals*/

                        list-style-type: circle;
                    }

                    h1{

                        /*Box model*/

                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-bottom: 5rem;

                        /*Text*/

                        font-size: 4rem;
                        font-weight: 600;
                        background-color: ${colors.primary};
                        font-family: "Archivo Black", sans-serif;
                        background-image: linear-gradient(45deg, #f0810f, #ffe45c);
                        background-repeat: repeat;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent; 
                        background-size: 100%
                        text-align: center;
                        
                    
                    }

                    button{

                        /*Box model*/

                        margin-bottom: 2rem;
                    }

                    h1 > span{

                        /*Box model*/

                        margin-left: 0.7rem;

                        /*Text*/

                        font-size: 2.2rem;

                    }
                    hr{
                        /*Box model*/

                        width: 100%;
                        margin-bottom: 5rem;
                    }

                    p{
                        /*Box model*/

                        margin-bottom: 4rem;
                    }


                    li{

                        /*Box model*/

                        margin-bottom: 1.5rem;
                    }

                    li:last-child {

                        /*Box model*/

                        margin-bottom: 3.5rem;
                    }

                    a{

                        /*Box model*/

                        margin-bottom: 3rem;

                        /*Visuals*/

                        transition: 0.3s all ease;

                    }

                    a:hover{

                        /*Visuals*/

                        color: ${colors.tertiary};
                    }
                    
                    
                `}
      </style>

    </BasicLayout>
  )
}

export async function getServerSideProps (context) {

  context.res.setHeader('Cache-Control','public, s-maxage=10, stale-while-revalidate=59')

  const session = await getSession(context)

  const res = await fetch(`${server}/api/news`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const res2 = await fetch(`${server}/api/users/${session.user.username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

  const data = await res2.json()

  const news = await res.json()

  return {
    props: {
      news, users: JSON.parse(JSON.stringify(data))
    }
  }
}

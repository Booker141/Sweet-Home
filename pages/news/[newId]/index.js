/* Static imports */


import { useRouter } from 'next/router'
import { colors, fonts } from 'styles/frontend-conf.js'
import { server } from '/server'
import global from 'styles/global.module.css'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Layout from '/components/BasicLayout/BasicLayout'

/* Dynamic imports */

const Loader = dynamic(() => import('/components/Loader/Loader'))
const New = dynamic(() => import('/components/New/New'))
const LazyLoad = dynamic(() => import('react-lazyload'))


export default function NewsId ({ news }) {

  const router = useRouter()

  return (

    <Layout>
      <Head><title>{news.title} | Sweet Home</title></Head>
      <div className="new">
        <New key={news._id} title={news.title} date={news.date} author={news.author} introduction={news.introduction} body={news.body} conclusion={news.conclusion} />
        <button className={global.buttonTertiary} onClick={() => router.back()}>Volver</button>
      </div>
     
      <style jsx>{`

                    .new{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        padding: 2rem;
                        justify-content: center;

                        /*Visuals*/

                        border-radius: 20px;
                        background-color: #f0810f;
                    }
                    .dialog{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                    }


                    .dialog__name{

                        /*Text*/

                        font-family: 'Poppins', sans-serif;
                        font-weight: 450;
                    }
                    
                    .dialog__italic{

                        /*Text*/
                        
                        font-family:'Poppins', sans-serif;
                        font-style: italic;

                    }
                    .highlighted {
                        
                        /*Box model*/

                        margin-bottom: 3rem;

                        /*Text*/

                        font-weight: 400;
                        font-family: 'Poppins', sans-serif;
                        font-size: 1.2rem;
                        color: ${colors.primary};
                    }

                    .list{

                        /*Box model*/

                        margin-bottom: 5rem;
                        
                        /*Text*/

                        font-family: ${fonts.secondary};

                        /*Visuals*/

                        list-style-type: circle;
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

                    h1{
                        /*Text*/

                        font-size: 3.5rem;
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

                    h2{

                        /*Visuals*/

                        font-weight: 400;
                        color: ${colors.primary};
                    }

                    li{

                        /*Box model*/

                        margin-bottom: 1.5rem;
                    }

                    li:last-child {

                        /*Box model*/

                        margin-bottom: 3.5rem;
                    }
                    
                    
                `}
      </style>

    </Layout>
  )
}

export async function getServerSideProps (context) {

  const { newId } = context.query;

  const res = await fetch(`${server}/api/news/${newId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const news = await res.json();

  return {
    props: {
      news: JSON.parse(JSON.stringify(news))
    }

  }
}

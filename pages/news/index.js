import Head from 'next/head'
import Link from 'next/link'
import global from "styles/global.module.css"
import {fonts} from "styles/frontend-conf.js"
import {colors} from "styles/frontend-conf.js"
import Layout from "components/Layout/Layout"
import New from "components/New/New"
import {server} from "../../server"





/*
    * @author Sergio García Navarro
    * @returns Conditions page
    * @version 1.0
    * @date 13/12/2020
    * @description This page is the conditions page of the application
*/
/**
 * It returns a Layout component with a Head component inside it, which sets the title of the page to
 * "Condiciones", and a bunch of other components inside it, which display the terms and conditions of
 * the app
 * @returns the Layout component with the children props being the <> component.
 */
export default function News({news}) {
    return (
        <Layout>

            <Head><title>Noticias</title></Head>

                <section>
                        <h1 className={global.title2}>¡Últimas noticias de <span className={global.colorized}>Sweet Home</span>!</h1>
                        {news.length === 0 && <div><p className={global.loading}>Cargando..</p></div>}
                        
                            {news.map(({_id, id, title, date, author, introduction}) => {
                            return (
                                <>
                                    <div className="new">
                                        <New key={_id} id={id} title={title} date={date} author={author} introduction={introduction}/>
                                        <Link href={`/news/${id}`} as={`/news/${id}`}><a aria-label="Enlace a noticia" className={global.link3}>Leer más →</a></Link>
                                    </div>
                                </>
                            )
                            })}
                        

                </section>

            
            <style jsx>{`


                    .new{

                         /*Box model*/

                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        width: 68rem;
                        margin-bottom: 1rem;
                        padding: 1rem;

                        /*Text*/

                        font-family: 'Poppins', sans-serif;
                        color: #fafafa;

                        /*Visuals*/

                        border-radius: 10px;
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

                        font-size: 2rem;
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
                    
                    
                `}</style>
         
        </Layout>
    )
}

export async function getServerSideProps(){

    const res = await fetch(`${server}/api/news`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

    const news = await res.json();

    return {
        props: {
            news
        }
    }
}
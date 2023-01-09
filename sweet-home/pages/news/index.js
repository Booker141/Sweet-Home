import Head from 'next/head'
import Link from 'next/link'
import global from "styles/global.module.css"
import {fonts} from "styles/frontend-conf.js"
import {colors} from "styles/frontend-conf.js"
import Layout from "components/Layout/Layout"
import New from "components/New/New"





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
                   
                    <div className="container__column1">
                        <h1 className={global.title}>Últimas noticias ✧</h1>
                        {news.length === 0 && <div><p className={global.loading}>Cargando..</p></div>}

                        {news.map(({_id, id, title, date, author, introduction}) => {
                          return (
                            <>
                              <New key={_id} id={id} title={title} date={date} author={author} introduction={introduction}/>
                              <Link href='/news/{id}'><a className={global.link}>Leer más →</a></Link>
                              <hr className={global.line}></hr>
                            </>
                          )
                        })}
                    </div>

                </section>

            
            <style jsx>{`


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
                    }
                    
                    
                `}</style>
         
        </Layout>
    )
}

export async function getServerSideProps(){

    const res = await fetch("http://localhost:3000/api/news", {
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
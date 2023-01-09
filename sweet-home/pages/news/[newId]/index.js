import Layout from "components/Layout/Layout"
import Head from 'next/head'
import {useRouter} from 'next/router'
import global from "styles/global.module.css"
import {colors} from "styles/frontend-conf.js"
import {fonts} from "styles/frontend-conf.js"
import New from "components/New/New"

export default function NewsId(news){

    const router = useRouter();

    return(

        <Layout>
        <Head><title>Noticia {router.query.newId}</title></Head>
                <h1 className={global.title}>Noticia {router.query.newId} ✧</h1>

                <New key={news._id} title={news.title} date={news.date} author={news.author} introduction={news.introduction} body={news.body} body2={news.body2} body3={news.body3} conclusion={news.conclusion}/>


            
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
                    
                    
                `}</style>
         
        </Layout>
    )
}

export async function getServerSideProps(context) { 
    
    const { params } = context;
    const res = await fetch(`http://localhost:3000/api/news/${params.newId}`, {
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
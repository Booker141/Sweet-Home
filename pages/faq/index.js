import Head from 'next/head'
import Image from 'next/image'
import global from "styles/global.module.css"
import Layout from "components/Layout/Layout"
import Question from "components/Question/Question"
import faq1 from "../../public/faq-1.svg"


/*
    * @author Sergio García Navarro
    * @returns Use page
    * @version 1.0
    * @date 13/12/2020
    * @description Use page
*/
/**
 * It returns a div with a title
 * @returns A React element.
 */
export default function Use({questions}){
    return(
            <Layout>
                <Head><title>Preguntas frecuentes</title></Head>

                    <div className="faq">
                        <h1 id="title" className={global.title}>Preguntas frecuentes</h1>
                        <div className="top__image">
                            <Image src={faq1} alt="Imagen de un perro mirando al frente" priority/>
                        </div>
                        
                        {questions.length === 0 && <div><p className={global.loading}>Cargando..</p></div>}

                            {questions.map(({_id, title, description}) => {
                            return (
                                <>
                                    <Question key={_id} title={title} description={description}/>
                                </>
                            )
                            })}

                    </div>

                <style jsx>{`

                    #title{

                        /*Box model*/
                            margin-bottom: 4rem;
                    }

                
                    
                    .faq{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                    
                    }

                        
                    .top__image{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        height: 100%;
                        margin-bottom: 3rem;

                        /*Visuals*/

                        border-radius: 10px;

                    }
                    
                    
                `}</style>
            </Layout>

        )
    }



export async function getServerSideProps(){

    const res = await fetch("/api/questions", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

    const questions = await res.json();

    return {
        props: {
            questions
        }
    }
}

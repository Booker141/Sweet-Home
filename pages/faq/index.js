import Head from 'next/head'
import Image from 'next/image'
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import global from 'styles/global.module.css'
import { colors } from 'styles/frontend-conf.js'
import BasicLayout from 'components/BasicLayout/BasicLayout'
import Question from 'components/Question/Question'
import faq1 from '../../public/faq-1.svg'
import { server } from '/server'

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
export default function FAQ ({ questions }) {

  const {data: session} = useSession({});

  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState({});
  const router = useRouter();

  const getUser = async () => {

    if(session){

      const res = await fetch(`${server}/api/users/${session.user.username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const user = await res.json()

      setUser(user)

      if(user.role.name === 'administrador'){

        setIsAdmin(true)

      }

    }

  }

  useEffect(() => {

    if(session != undefined)

      getUser()
    
  },[]);

  return (
    <BasicLayout>
      <Head><title>Preguntas frecuentes | Sweet Home</title></Head>
      <div className='faq'>
        <h1 id='title' className={global.title}>Preguntas frecuentes</h1>
        <div className='top__image'>
          <Image src={faq1} alt='Imagen de un perro mirando al frente' priority />
        </div>
        {isAdmin && <button className={global.buttonPrimary} onClick={() => router.push('/dashboard/createQuestion')}>Crear pregunta</button>}

        {questions.length === 0 && <div><p className={global.loading}>Cargando..</p></div>}

        {questions.map(({ _id, title, answer }) => {
          return (
            <>
              <Question key={_id} id={_id} title={title} answer={answer} isAdmin={isAdmin} />
            </>
          )
        })}

      </div>

      <style jsx>{`

                    #title{

                        /*Box model*/

                            margin-bottom: 4rem;
                          
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

                    button{

                        /*Box model*/

                        margin-top: 1rem;
                        margin-bottom: 3rem;
                    }
                    
                    
                `}
      </style>
    </BasicLayout>

  )
}

export async function getServerSideProps () {
  const res = await fetch(`${server}/api/questions`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const questions = await res.json()

  return {
    props: {
      questions
    }
  }
}

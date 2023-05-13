import { useSession, signIn } from 'next-auth/react'
import {useRouter} from 'next/router'
import { useState, useEffect } from 'react'
import {colors, fonts} from '/styles/frontend-conf'
import Head from 'next/head'
import Layout from 'components/Layout/Layout'
import global from '/styles/global.module.css'
import Loader from 'components/Loader/Loader'
import {server} from "/server"


export default function Search () {

  const { data: session, status } = useSession({ required: true })

  const router = useRouter()

  console.log(router)

  const [search, setSearch] = useState(router.query.search)
  const [results, setResults] = useState([])
  console.log(results)
  console.log(search)




  const searchKeyword = async () => {

    const res = await fetch(`${server}/api/search/${search}`, 
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
        }
        })

    const data = await res.json()
    
    setResults(data)

    

  }


  useEffect(() => {
    searchKeyword()
  }, [search])


  if (status === 'loading') {
    return (
      <>
        <div className={global.loading}><p>Cargando..</p></div>
        <Loader />
      </>
    )
  }
  if (session) {
    return (
      <Layout>
        <Head><title>Búsqueda</title></Head>
        <h1 className={global.title}>Búsquedas relacionadas</h1>
        <h2 className={global.secondary}>Usuarios</h2>
        <p className={global.secondary}>Publicaciones</p>
        <p className={global.secondary}>Cuidados</p>
        <p className={global.secondary}>Tipos de cuidado</p>
        <p className={global.secondary}>Páginas</p>
        <p className={global.secondary}>Noticias</p>
        <p className={global.secondary}>Preguntas frecuentes</p>
        <style jsx>{`

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
      
      
       `}</style>
      </Layout>
      
    )
  } else {
    return (
      <Layout>
        <>
          <div className={global.content}>
            <div className='message'>
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

                        
                    `}
          </style>
        </>
      </Layout>
    )
  }
}


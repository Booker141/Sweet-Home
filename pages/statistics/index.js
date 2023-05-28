
/* Static imports */

import {useState, useEffect} from 'react'
import {colors} from '/styles/frontend-conf'
import { useSession, signIn } from 'next-auth/react'
import Head from 'next/head'
import global from '/styles/global.module.css'
import dynamic from 'next/dynamic'



/* Dynamic imports */

const Loader = dynamic(() => import('/components/Loader/Loader'))
const Layout = dynamic(() => import('/components/Layout/Layout'))
const BarChart = dynamic(() => import('/components/BarChart/BarChart'))
const RadarChart = dynamic(() => import('/components/RadarChart/RadarChart'))
const PolarAreaChart = dynamic(() => import('/components/PolarAreaChart/PolarAreaChart'))
const FallbackImage = dynamic(() => import('/components/FallbackImage/FallbackImage'))
const LazyLoad = dynamic(() => import('react-lazyload'))


export default function Statistics () {

  const { data: session, status } = useSession({ required: true })
  const [data, setData] = useState({})

  /**
   * It fetches the data from the server and returns it as a JSON object
   * @returns The data is being returned as a JSON object.
   */
  async function getData () {
    const res = await fetch('/api/statistics', { 
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await res.json()
    return data
  }

  useEffect(() => {
    getData()
  }, [])

  const barData = {
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    datasets: [
      {
        label: 'Registros',
        data: [12, 19, 3, 5, 2, 3, 10],
        backgroundColor: [
          '#f0810f',
          '#f0810f',
          '#f0810f',
          '#f0810f',
          '#f0810f',
          '#f0810f',
          '#f0810f',
        ],
        borderColor: [
          '#f0810f',
          '#f0810f',
          '#f0810f',
          '#f0810f',
          '#f0810f',
          '#f0810f',
          '#f0810f',
        ],
        borderWidth: 1,
      },
    ],    
  }

  const barOptions = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Registros por día',
      },
    },
  }

  const radarData = {
    labels: ['Alimentación', 'Higiene', 'Ocio', 'Salud', 'Educación'],
    datasets: [
      {
        label: 'Cantidad de hilos por tipo de cuidado',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          '#f0810f',
          '#f0810f',
          '#f0810f',
          '#f0810f',
          '#f0810f',
        ],
        borderColor: [
          '#f0810f',
          '#f0810f',
          '#f0810f',
          '#f0810f',
          '#f0810f',
        ],
        borderWidth: 1,
      },
    ],
  }

  const radarOptions = {

    elements: {
      line: {
        borderWidth: 3
      }
    }
  }

  const polarData = {
    labels: ['Alimentación', 'Higiene', 'Ocio', 'Salud', 'Educación'],
    datasets: [
      {
        label: 'Cantidad de hilos por tipo de cuidado',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          '#f0810f',
          '#f0810f',
          '#f0810f',
          '#f0810f',
          '#f0810f',
        ],
        borderColor: [
          '#f0810f',
          '#f0810f',
          '#f0810f',
          '#f0810f',
          '#f0810f',
        ],
        borderWidth: 1,
      },
    ],
  }

  const polarOptions = {

    elements: {
      line: {
        borderWidth: 3
      }
    }
  }




  if (status == 'loading') {
    return (
      <>
        <div className={global.loading}><p>Cargando..</p></div>
        <Loader />
      </>
    )
  }
  if (session.user.role === 'gerente') {
    return (
      <Layout>
        <Head><title>Estadísticas | Sweet Home</title></Head>
        <h1 className="title">Estadísticas</h1>
        <style jsx>{`
          .title{

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
              <h1 className={global.title7}>Para acceder a esta página debe ser tener el rol de gerente</h1>
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

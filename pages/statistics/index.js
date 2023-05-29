
/* Static imports */

import {useState, useEffect} from 'react'
import {colors} from '/styles/frontend-conf'
import { useSession, signIn } from 'next-auth/react'
import Head from 'next/head'
import global from '/styles/global.module.css'
import dynamic from 'next/dynamic'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



/* Dynamic imports */

const Loader = dynamic(() => import('/components/Loader/Loader'))
const Layout = dynamic(() => import('/components/Layout/Layout'))
const BarChart = dynamic(() => import('/components/BarChart/BarChart'))
const RadarChart = dynamic(() => import('/components/RadarChart/RadarChart'))
const LazyLoad = dynamic(() => import('react-lazyload'))

export default function Statistics () {

  const { data: session, status } = useSession({ required: true })
  const [dataset, setDataset] = useState({})


  async function getData () {

    const res = await fetch('/api/statistics', { 
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const statisticsData = await res.json()

    setDataset(statisticsData)
  }



const barData = {
    labels: ['Jun', 'Jul', 'Aug'],
    datasets: [
      {
        id: 1,
        label: '',
        data: [5, 6, 7],
      },
      {
        id: 2,
        label: '',
        data: [3, 2, 1],
      },
    ],
}


const barOptions = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Statistics'
      },
      responsive: true,
      maintainAspectRatio: false,
      
    }

}




  
  useEffect(() => {
    getData()
  }, [])



  if (status == 'loading') {
    return (
      <>
        <div className={global.loading}><p>Cargando..</p></div>
        <Loader />
      </>
    )
  }
  if (session?.user.role === 'gerente') {
    return (
      <Layout>
        <Head><title>Estadísticas | Sweet Home</title></Head>
        <div className="statistics__header">
          <h1 className="title">Estadísticas de la aplicación</h1>
          <p className={global.text}>¡Bienvenido al panel de estadísticas! A continuación, podrá acceder a representacios visuales de los datos 
          que se han almacenado en la aplicación.</p>
        </div>
        <div className="statistics__container">
          <BarChart data={barData} options={barOptions} />
        </div>
        
        <style jsx>{`

          .statistics__header{

            /*Box model*/
            
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

          }

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
              <h1 className={global.title7}>Para acceder a esta página debe iniciar sesión como gerente</h1>
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

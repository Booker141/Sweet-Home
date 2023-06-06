
/* Static imports */

import {useState, useEffect} from 'react'
import {colors, fonts} from '/styles/frontend-conf'
import { useSession, signIn } from 'next-auth/react'
import {server} from '/server'
import Head from 'next/head'
import global from '/styles/global.module.css'
import dynamic from 'next/dynamic'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  RadialLinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  RadialLinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend
);



/* Dynamic imports */

const Loader = dynamic(() => import('/components/Loader/Loader'))
const Layout = dynamic(() => import('/components/Layout/Layout'))
const BarChart = dynamic(() => import('/components/BarChart/BarChart'))
const RadarChart = dynamic(() => import('/components/RadarChart/RadarChart'))
const LineChart = dynamic(() => import('/components/LineChart/LineChart'))
const PieChart = dynamic(() => import('/components/PieChart/PieChart'))
const LazyLoad = dynamic(() => import('react-lazyload'))
const FallbackImage = dynamic(() => import('/components/FallbackImage/FallbackImage'))

export default function Statistics ({dataset}) {

  const { data: session, status } = useSession({ required: true })
  const [data, setData] = useState(dataset)
  const [postsPerDay, setPostsPerDay] = useState([])
  const [barData, setBarData] = useState({})
  const [barOptions, setBarOptions] = useState({})
  const [verticalBarData, setVerticalBarData] = useState({})
  const [verticalBarOptions, setVerticalBarOptions] = useState({})
  const [radarData, setRadarData] = useState({})
  const [radarOptions, setRadarOptions] = useState({})
  const [lineData, setLineData] = useState({})
  const [lineOptions, setLineOptions] = useState({})
  const [pieData, setPieData] = useState({})
  const [pieOptions, setPieOptions] = useState({})
  const [userMostPosts, setUserMostPosts] = useState(dataset?.userMostPosts)
  const [user, setUser] = useState({})


  console.log(data)


  async function getUserMostPosts(){

    const res = await fetch(`${server}/api/usersById/${userMostPosts._id}`, { 
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await res.json()

    setUser(data)

  }




  useEffect(() => {

    getUserMostPosts()

    if(dataset != {}){
      setBarData({
        labels: postsPerDay.map((entry) => entry._id),
        datasets: [
          {
            label: 'Número de publicaciones por día',
            data: postsPerDay.map((entry) => entry.count),
          },
        ],
        backgroundColor: '#f0810f',
      })


      setBarOptions( {
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Número de publicaciones por día'
          },

        },
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2,

      })

      setVerticalBarData({
      labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
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
        backgroundColor: '#f0810f',
      })

      setVerticalBarOptions({
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
          text: 'Tipos de publicaciones más populares',
        },
      },
      maintainAspectRatio: true,
      aspectRatio: 2,
      })

      setRadarData({
      labels: dataset.typeAttendances?.map((typeAttendance) => typeAttendance.name),
      datasets: [
        {
          label: 'Datos',
          data: [65, 59, 90, 81, 56, 55, 40],
          fill: true,
          backgroundColor: '#f0810f',
          borderColor: '#f0810f',
          pointBackgroundColor: '#f0810f',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#f0810f',
        },
      ],

      })

      setRadarOptions({
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Radar Chart'
          }
      },
      maintainAspectRatio: true,
      aspectRatio: 2,
      })

      setLineData({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          fill: true,
          label: 'Dataset 2',
          data: [65, 59, 90, 81, 56, 55, 40],
          borderColor: '#f0810f',
          backgroundColor: '#f0810f',
        },
      ],
      })

      setLineOptions({
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Line Chart',
        },
      },
      maintainAspectRatio: true,
      aspectRatio: 2,
      })

      setPieData({
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
      })

      setPieOptions({
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2,

      })

      
    }
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
        <div className="numbers__container">
          <div className="numbers__container__item">
            <h2 className={global.title8}>Número de publicaciones</h2>
            <h1 className="number__text">{data.posts}</h1>
            <p className={global.text2}>publicaciones</p>
          </div>
          <div className="numbers__container__item">
            <h2 className={global.title8}>Número de hilos</h2>
            <h1 className="number__text">{data.threads}</h1>
            <p className={global.text2}>hilos</p>
          </div>
          <div className="numbers__container__item">
            <h2 className={global.title8}>Número de informes</h2>
            <h1 className="number__text">{data.reports}</h1>
            <p className={global.text2}>informes</p>
          </div>
          <div className="numbers__container__item">
            <h2 className={global.title8}>Número de denuncias</h2>
            <h1 className="number__text">{data.complaints}</h1>
            <p className={global.text2}>denuncias</p>
          </div>
          <div className="numbers__container__item">
            <h2 className={global.title8}>Número de usuarios</h2>
            <h1 className="number__text">{data.users}</h1>
            <p className={global.text2}>usuarios</p>
          </div>
          <div className="numbers__container__item">
            <h2 className={global.title8}>Número de mascotas</h2>
            <h1 className="number__text">{data.pets}</h1>
            <p className={global.text2}>mascotas</p>
          </div>
          <div className="numbers__container__item">
            <h2 className={global.title8}>Número de noticias</h2>
            <h1 className="number__text">{data.news}</h1>
            <p className={global.text2}>noticias</p>
          </div>
          <div className="numbers__container__item">
            <h2 className={global.title8}>Número de cuidados</h2>
            <h1 className="number__text">{data.attendances}</h1>
            <p className={global.text2}>cuidados</p>
          </div>
          <div className="numbers__container__item">
            <h2 className={global.title8}>Número de notificaciones</h2>
            <h1 className="number__text">{data.notifications}</h1>
            <p className={global.text2}>notificaciones</p>
          </div>
          <div className="numbers__container__item">
            <h2 className={global.title8}>Número de mensajes</h2>
            <h1 className="number__text">{data.messages}</h1>
            <p className={global.text2}>mensajes</p>
          </div>
        </div>
        <h2 className={global.title7}>Promedios</h2>
        <div className="average__container">
          <div className="average__container__item">
            <h2 className={global.title8}>Publicaciones por día</h2>
            <h1 className="number__text">{data.averagePostsPerDay}</h1>
            <p className={global.text2}>publicaciones</p>
          </div>
          <div className="average__container__item">
            <h2 className={global.title8}>Comentarios por publicación</h2>
            <h1 className="number__text">{data.averageCommentsPerPost}</h1>
            <p className={global.text2}>comentarios</p>
          </div>
          <div className="average__container__item">
            <h2 className={global.title8}>Hilos por tipo de cuidado</h2>
            <h1 className="number__text">{data.averageThreadsPerTypeAttendance}</h1>
            <p className={global.text2}>hilos</p>
          </div>
          <div className="average__container__item">
            <h2 className={global.title8}>Denuncias por usuario</h2>
            <h1 className="number__text">{data.averageComplaintsPerUser}</h1>
            <p className={global.text2}>denuncias</p>
          </div>
          <div className="average__container__item">
            <h2 className={global.title8}>Cuidados por hilo</h2>
            <h1 className="number__text">{data.averageAttendancesPerThread}</h1>
            <p className={global.text2}>cuidados</p>
          </div>
          <div className="average__container__item">
            <h2 className={global.title8}>Likes por publicación</h2>
            <h1 className="number__text">{data.averageLikesPerPost}</h1>
            <p className={global.text2}>likes</p>
          </div>
          <div className="average__container__item">
            <h2 className={global.title8}>Mascotas por usuario</h2>
            <h1 className="number__text">{data.averagePetsPerUser}</h1>
            <p className={global.text2}>mascotas</p>
          </div>
          <div className="average__container__item">
            <h2 className={global.title8}>Publicaciones guardadas por usuario</h2>
            <h1 className="number__text">{data.averageSavesPerUser}</h1>
            <p className={global.text2}>publicaciones guardadas</p>
          </div>
          <div className="average__container__item">
            <h2 className={global.title8}>Seguidores por usuario</h2>
            <h1 className="number__text">{data.averageFollowersPerUser}</h1>
            <p className={global.text2}>seguidores</p>
          </div>
          <div className="average__container__item">
            <h2 className={global.title8}>Informes por usuario</h2>
            <h1 className="number__text">{data.averageReportsPerUser}</h1>
            <p className={global.text2}>informes</p>
          </div>
        </div>
        <div className="statistics__postUser">
          <h2 className={global.title7}>Usuario que más ha publicado</h2>
          <div className="user__card">
            <FallbackImage className='user__image' src={user?.image} alt='Imagen de usuario' style={{ borderRadius: '50px'}} width={60} height={60} priority />
            <h2 className={global.text2__bold}>{user?.username}</h2>
            <p className={global.date2}>{new Date(user?.createdAt).toLocaleDateString().slice(0, 10)}</p>
            <div className="user__posts">
              <h2 className={global.text2__bold}>Número de publicaciones:</h2>
              <p className={global.text2}>{userMostPosts?.postCount}</p>
            </div>     
          </div>
        </div>
        <h2 className={global.title7}>Tipos de publicaciones más populares</h2>
        <div className="mostPopularPosts__container">
          <BarChart data={verticalBarData} options={verticalBarOptions}/>
        </div>
        <div className="statistics__postsPerDay">
          <h2 className={global.title7}>Número de publicaciones por día</h2>
          <BarChart data={barData} options={barOptions} />
        </div>
        <div className="statistics__typeAttendanceThreads">
          <h2 className={global.title7}>Tipos de cuidado con más hilos</h2>
          <RadarChart data={radarData} options={radarOptions} />
        </div>
        
        <div className="statistics__popularUser">
          <h2 className={global.title7}>Usuarios con más seguidores</h2>
          <PieChart data={pieData} options={pieOptions}/>
        </div>
        <div className="statistics__newUsers">
          <h2 className={global.title7}>Nuevos usuarios durante la semana</h2>
          <LineChart data={lineData} option={lineOptions}/>
        </div>

        
        <style jsx>{`

          .user__card{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;
            width: 30vw;
            padding: 1rem;

            /*Visuals*/

            background: linear-gradient(45deg, rgba(240, 129, 15, 1) 35%, rgba(249, 166, 3, 1) 100%);
            border-radius: 20px;

          }


          .user__posts{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.5rem;

          }

          .statistics__header{

            /*Box model*/
            
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 4rem;

          }

          .numbers__container, .average__container{

            /*Box model*/

            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            gap: 1rem;
            margin-bottom: 2rem;


          }

          .numbers__container__item, .average__container__item{

            /*Box model*/

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 15rem;
            height: 30rem;
            padding: 1rem;


            /*Visuals*/

            background: linear-gradient(45deg, rgba(240, 129, 15, 1) 35%, rgba(249, 166, 3, 1) 100%);
            border-radius: 20px;
          }

          .number__text{

            /*Text*/

            font-size: 5rem;
            font-weight: 700;
            color: ${colors.secondary};
            font-family: ${fonts.default};


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

export async function getServerSideProps(){

  const res = await fetch(`${server}/api/statistics`, { 
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const statisticsData = await res.json()

  return{
    props: {
      dataset: statisticsData
  }
}
}
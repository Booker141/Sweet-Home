import Layout from '/components/Layout/Layout'
import Head from 'next/head'
import global from '/styles/global.module.css'
import {colors} from '/styles/frontend-conf'
import { useSession } from 'next-auth/react'
import {Chart} from 'chart.js';
import Loader from '/components/Loader/Loader'

export default function Statistics () {

  const { data: session, status } = useSession({ required: true })

  function Charts(){

    const ctx1 = document.getElementById('numPosts');
    const ctx2 = document.getElementById('numLikes');
    const ctx3 = document.getElementById('numThreads');
    const ctx4 = document.getElementById('numComments');
    const ctx5 = document.getElementById('numUsers');
    const ctx6 = document.getElementById('numComplaints');
    const ctx7 = document.getElementById('postUser');
    const ctx8 = document.getElementById('followersUser');
    const ctx9 = document.getElementById('newUsers');
    const ctx10 = document.getElementById('threadsTypeAttendance');
    

    new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  if (status == 'loading') {
    return (
      <>
        <div className={global.loading}><p className={global.title}>Cargando..</p></div>
        <Loader />
      </>
    )
  }
  if (session.user.role === 'gerente') {
    return (
      <Layout>
        <Head><title>Estadísticas</title></Head>
        <h1 className="title">Estadísticas</h1>
        {Charts()}
        <canvas id="numPosts"></canvas>
        <canvas id="numLikes"></canvas>
        <canvas id="numThreads"></canvas>
        <canvas id="numComments"></canvas>
        <canvas id="numUsers"></canvas>
        <canvas id="numComplaints"></canvas>
        <canvas id="postUser"></canvas>
        <canvas id="followersUser"></canvas>
        <canvas id="newUsers"></canvas>
        <canvas id="threadsTypeAttendance"></canvas>
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
              <h1 className={global.title}>Para acceder a esta página debe ser tener el rol de gerente</h1>
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

import global from '/styles/global.module.css'
import Layout from 'components/Layout/Layout'
import Head from 'next/head'

export default function AdminManual () {
  return (

    <Layout>
      <Head><title>Manual de administrador</title></Head>
      <div className='manual'>
        <h1 className={global.title4}>Manual de administrador</h1>
        <aside />
      </div>

      <style jsx>{`

                    .manual{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                      
                    

                    }
                `}
      </style>
    </Layout>
  )
}

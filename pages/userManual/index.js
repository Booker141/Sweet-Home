import global from '/styles/global.module.css'
import Layout from 'components/Layout/Layout'
import Head from 'next/head'

export default function UserManual () {
  return (

    <Layout>
      <Head><title>Manual de usuario | Sweet Home</title></Head>
      <div className='manual'>
        <h1 className={global.title4}>Manual de usuario</h1>
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

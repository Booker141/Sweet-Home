/* Static imports */

import { SessionProvider, useSession } from 'next-auth/react'
import { useState } from 'react'
import { ToastContainer, Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from 'next/router'
import dynamic from 'next/dynamic'


/* Dynamic imports */

const Loader = dynamic(() => import('/components/Loader/Loader'))
const LazyLoad = dynamic(() => import('react-lazyload'))





function MyApp ({ Component, pageProps: { session, ...pageProps } }) {

  const [loading, setLoading] = useState(false)
  const [isNotification, setIsNotification] = useState(false)
  const [notifications, setNotifications] = useState({})

  console.log(session)

  const getNotifications = async () => {

    if(session){

      const res = await fetch(`${server}/api/notifications/${session?.user.username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
          }
        })

        const data = await res.json();

        setNotifications(data);

        console.log(data)

        if(data?.length > 0)
        toast(`🔔 Tienes ${data?.length} notificaciones nuevas`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
  
    }

  }

  getNotifications()


  Router.events.on('routeChangeStart', (url) => {
    setLoading(true)
  })

  Router.events.on('routeChangeComplete', (url) => {
    setLoading(false)
  })





  return (
    <>
        <SessionProvider session={session}>
          {loading && <Loader />}
          <Component {...pageProps} />
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            transition={Slide}
            theme="colored"
          />
        </SessionProvider>
    </>

  )
}

export default MyApp

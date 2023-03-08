import { SessionProvider } from 'next-auth/react'
import { useState } from 'react'
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from 'next/router'
import Loader from '/components/Loader/Loader'

/*
 * The MyApp function is a component that takes in a Component and pageProps as props. It then returns
 * a SessionProvider component that takes in the session prop and returns a Loading component and the
 * Component prop
 */


function MyApp ({ Component, pageProps: { session, ...pageProps } }) {
  const [loading, setLoading] = useState(false)

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

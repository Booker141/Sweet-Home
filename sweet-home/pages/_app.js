import {SessionProvider} from 'next-auth/react'
import {useState} from 'react'
import Router from 'next/router'
import Loader from '/components/Loader/Loader'

/*
 * The MyApp function is a component that takes in a Component and pageProps as props. It then returns
 * a SessionProvider component that takes in the session prop and returns a Loading component and the
 * Component prop
 */

function MyApp({ Component, pageProps: {session, ...pageProps} }) {

  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) =>{

    console.log("Empieza...")
    setLoading(true);
    
  })

  Router.events.on("routeChangeComplete", (url) =>{
    console.log("Termina...")
    setLoading(false);
   
  })


  return(
    <>
 
      <SessionProvider session={session}>
          
          <Component {...pageProps} />

          {loading && <Loader />}
      </SessionProvider>
      
    </>

  );
}

export default MyApp;

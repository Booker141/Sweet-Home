import {SessionProvider} from 'next-auth/react'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import {useState} from 'react'
import styles from "styles/global.module.css"

/**
 * It's a React Hook that listens to the router events and sets the loading state to true when a route
 * change starts and to false when it ends
 * @returns A div with a class of loading.
 */
function Loading(){
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleStart = (url) => (url !== router.asPath) && setLoading(true);
    const handleEnd = (url) => (url === router.asPath) && setLoading(false);
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleEnd);
    router.events.on('routeChangeError', handleEnd);

    return() => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleEnd);
      router.events.off('routeChangeError', handleEnd);
    }

  })
  return loading ? <div className={styles.loading}>
      <span className={styles.loader}></span>
  </div> : null;
}
/**
 * The MyApp function is a component that takes in a Component and pageProps as props. It then returns
 * a SessionProvider component that takes in the session prop and returns a Loading component and the
 * Component prop
 */
function MyApp({ Component, pageProps: {session, ...pageProps} }) {

  return(
    
      <SessionProvider session={session}>
        <Loading/>
          <Component {...pageProps} />
      </SessionProvider>

  );
}

export default MyApp;

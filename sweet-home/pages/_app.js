import {SessionProvider} from 'next-auth/react'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import {useState} from 'react'

/* Animación de carga entre páginas*/
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
  /* Bloque logo*/
  return loading ? <div className="loading">
    <div className="loading">
    </div>
  </div> : null;
}
function MyApp({ Component, pageProps: {session, ...pageProps} }) {

  return(
    
      <SessionProvider session={session}>
        <Loading/>
          <Component {...pageProps} />
      </SessionProvider>
      
  );
}

export default MyApp;

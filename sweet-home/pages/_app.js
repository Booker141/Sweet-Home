import Layout from 'components/Layout/Layout';
import 'styles/styles.module.css'
import {SessionProvider} from 'next-auth/react'

function MyApp({ Component, pageProps: {session, ...pageProps} }) {

  return(
    
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
      
  );
}

export default MyApp;

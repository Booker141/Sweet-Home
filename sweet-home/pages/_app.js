import {SessionProvider} from 'next-auth/react'

/*
 * The MyApp function is a component that takes in a Component and pageProps as props. It then returns
 * a SessionProvider component that takes in the session prop and returns a Loading component and the
 * Component prop
 */

function MyApp({ Component, pageProps: {session, ...pageProps} }) {

  return(
    
      <SessionProvider session={session}>
          <Component {...pageProps} />
      </SessionProvider>

  );
}

export default MyApp;

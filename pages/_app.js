/* Static imports */

import { SessionProvider } from "next-auth/react";
import { useState } from "react";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "next/router";
import dynamic from "next/dynamic";

/* Dynamic imports */

const Loader = dynamic(() => import("/components/Loader/Loader"));
const LazyLoad = dynamic(() => import("react-lazyload"));

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

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
  );
}

export default MyApp;

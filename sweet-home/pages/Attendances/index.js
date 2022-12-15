import Head from 'next/head'
import global from "styles/global.module.css"
import Layout from "/components/Layout/Layout"
import {getSession} from 'next-auth/react'


/*
    * @author Sergio García Navarro
    * @returns Attendances page
    * @version 1.0
    * @date 13/12/2020
    * @description This page is the attendances page of the application
*/
/**
 * It returns a Layout component, which contains a Head component, a Header component, and a Footer
 * component
 * @returns the Layout component, which is a wrapper for the Header, Footer and the content of the
 * page.
 */
export default function Attendances(session) {

        return (
        <Layout>
            <>
                <Head>
                    <title>Cuidados</title>
                </Head>
                <a name="top"></a>
                <a href="#top" className={global.buttonTo}>↑</a>
            </>
        </Layout>      
    )   
        

}

export async function getServerSideProps(context) {
   
  const session = await getSession(context);

  if(!session){
    return {
      redirect: {
        destination: "/signIn",
        permanent: false,
      }
    }
  }
    return {
        props: {
            session
        }
    }
}
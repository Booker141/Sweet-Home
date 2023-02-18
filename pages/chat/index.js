import {useSession} from 'next-auth/react'
import Head from 'next/head'
import Layout from "components/Layout/Layout"
import global from "/styles/global.module.css"
import Loader from "components/Loader/Loader"

export default function Search(){

    const {data: session, status} = useSession({required: true});

    if(status == "loading"){
        return (
          <>
            <div className={global.loading}><p className={global.title}>Cargando..</p></div>
            <Loader/>
          </>
          )
    }
    if(session){
        return(
            <Layout>
                <Head><title>Chat</title></Head>
                <p className={global.title}>Chat</p>
            </Layout>
        )
    } else {

    }
}
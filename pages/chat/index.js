import Head from 'next/head'
import Layout from "components/Layout/Layout"
import global from "/styles/global.module.css"

export default function Search(){

    return(
        <Layout>
            <Head><title>Chat</title></Head>
            <p className={global.title}>Chat</p>
        </Layout>
    )


}
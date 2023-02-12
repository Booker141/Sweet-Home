import Head from 'next/head'
import Layout from "components/Layout/Layout"
import global from "/styles/global.module.css"
import {server} from "/server"

export default function Search(){

    return(
        <Layout>
            <Head><title>Buscar</title></Head>
            <p className={global.title}>Buscar</p>
        </Layout>
    )


}
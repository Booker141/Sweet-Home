import Head from 'next/head'
import styles from "styles/global.module.css"
import Layout from "/components/Layout/Layout"
import {useSession} from 'next-auth'


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
export default function Attendances() {
    const {data: session, status} = useSession({required: true});
    return (
        <Layout>
            <>
                <Head>
                    <title>Cuidados</title>
                </Head>
                <a name="top"></a>
                <a href="#top" className={styles.buttonTo}>↑</a>
            </>
        </Layout>      
    )   
}
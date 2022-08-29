import Head from 'next/head'
import Layout from "/components/Layout/Layout"


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
    return (
        <Layout>
            <>
                <Head>
                    <title>Cuidados</title>
                </Head>
            </>
        </Layout>      
    )   
}
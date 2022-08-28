import Head from 'next/head'
/*
    * @author Sergio García Navarro
    * @returns Use page
    * @version 1.0
    * @date 13/12/2020
    * @description Use page
*/
/**
 * It returns a div with a title
 * @returns A React element.
 */
export default function Use(){
    return(
        <>
            <Head><title>Uso de la aplicación</title></Head>
            <div className="use">
                <h1>Uso de la aplicación</h1>
            </div>
        </>
    )
}
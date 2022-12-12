import Head from 'next/head'
import global from "styles/global.module.css"
import {colors} from "styles/frontend-conf.js"
import {fonts} from "styles/frontend-conf.js"
import Layout from "components/Layout/Layout"



/* 
    * @author Sergio García Navarro
    * @returns Change password page
    * @version 1.0
    * @date 13/12/2020
    * @description Change password page
*/
/**
 * It returns a div with a form inside of it
 * @returns A form with two inputs and a submit button.
 */
export default function CPassword(){
    return(

        <Layout>
        <>
            <Head><title>Cambiar contraseña</title></Head>
            
            <div className={global.content}>
            <h1 className={global.title}>Cambiar contraseña</h1>
                <div className="form">
                    <form>
                        <input 
                            title="Introducir contraseña antigua"
                            type="password" 
                            name="Contraseña" 
                            placeholder="Contraseña actual"
                            className="input"> 
                        </input>
                        <input  
                            title="Introducir contraseña nueva"
                            type="password" 
                            name="Contraseña" 
                            placeholder="Contraseña nueva"
                            className="input">       
                        </input>
                        <input  
                            title="Repetir contraseña nueva"
                            type="password" 
                            name="Contraseña" 
                            placeholder="Confirmar contraseña nueva"
                            className="input">       
                        </input>
                        <input className={global.buttonPrimary} type="submit" value="Confirmar"></input>
                    </form>    
                </div>
            </div>
            <style jsx>{`

                .form{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    width: 30%;
                    
                }
                
                .input{

                    /*Box model*/

                    width: 75%;
                    height: 2rem;
                    padding: 0.4rem;
                    margin-bottom: 1rem;
                    margin-left: 1rem;

                    /*Text*/

                    font-family: ${fonts.default};
                    font-size: 1rem;

                    /*Visuals*/

                    border-radius: 5px;
                    border: 1px solid ${colors.primary};
                }

                input[type="submit"]{

                    /*Box model*/

                    margin-top: 2rem;


                h1{

                    /*Box model*/

                    margin-bottom: 3rem;
                }


            `}</style>
        </>
        </Layout>
    )

}
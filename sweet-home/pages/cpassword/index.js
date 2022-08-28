import Head from 'next/head'
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
        <>
            <Head><title>Cambiar contraseña</title></Head>
            <div className="form-cpassword">
                <form className="form-vertical">
                    <input type="password" name="Contraseña" placeholder="Contraseña"></input>
                    <input type="password" name="Contraseña" placeholder="Confirmar contraseña"></input>
                    <input type="submit" value="Cambiar contraseña"></input>
                </form>    
            </div>
        </>
    )

}
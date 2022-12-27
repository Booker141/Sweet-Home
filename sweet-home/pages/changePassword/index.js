import Head from 'next/head'
import {useState} from "react"
import global from "styles/global.module.css"
import {colors} from "styles/frontend-conf.js"
import {fonts} from "styles/frontend-conf.js"
import Layout from "components/Layout/Layout"
import {MdEmail} from "react-icons/md"
import {BsFillLockFill} from "react-icons/bs"
import {AiFillEye, AiFillEyeInvisible, AiFillInfoCircle} from "react-icons/ai"


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
export default function ChangePassword(){

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPassword2, setNewPassword2] = useState("");
    const [email, setEmail] = useState("");
    const showPassword = () => {

        let passwordInput = document.getElementById("password");
        
        if (passwordInput.type === "password") {
    
          document.getElementById("show__icon1").style.display = "none";
          document.getElementById("show__icon2").style.display = "inline";
          passwordInput.type = "text";
    
        }
        else {
    
          document.getElementById("show__icon1").style.display = "inline";
          document.getElementById("show__icon2").style.display = "none";
          passwordInput.type = "password";
    
        }
      }

    return(

        <Layout>
        <>
            <Head><title>Cambiar contraseña</title></Head>
            
            <h1 className={global.title}>Cambiar contraseña</h1>
                <div className="form">
                    <form>
                    <div className="form-vertical__email">
                        <div className="label">
                            <p className={global.text}>Email</p>
                            <MdEmail size={20} color={colors.primary} />
                        </div>
                        <input
                            title="Introducir email"
                            type="email"
                            name="Correo"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="p. ej.: javier@gmail.com"
                            className="input">
                        </input>
                    </div>
                    <div className="form-vertical__old">
                        <div className="label">
                            <p className={global.text}>Contraseña antigua</p>
                            <BsFillLockFill size={25} color={colors.primary} />
                        </div> 
                        <input 
                            title="Introducir contraseña antigua"
                            type="password" 
                            id="password"
                            name="Contraseña" 
                            value={oldPassword}
                            required
                            onChange={(e) => setOldPassword(e.target.value)}
                            placeholder="Contraseña actual"
                            className="input"> 
                        </input>
                        <a className="password--visibility" onClick={() => showPassword()}><AiFillEye id="show__icon1" size={20} color={colors.primary}/><div style={{display: "none"}} id="show__icon2"><AiFillEyeInvisible size={20} color={colors.primary}/></div></a>
                    </div>
                    <div className="form-vertical__new">
                        <div className="label">
                            <p className={global.text}>Contraseña nueva</p>
                            <BsFillLockFill size={25} color={colors.primary} />
                        </div> 
                        <input  
                            title="Introducir contraseña nueva"
                            type="password" 
                            id="password"
                            name="ContraseñaN"
                            value={newPassword} 
                            required
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="Contraseña nueva"
                            className="input">       
                        </input>
                        <a className="password--visibility" onClick={() => showPassword()}><AiFillEye id="show__icon1" size={20} color={colors.primary}/><div style={{display: "none"}} id="show__icon2"><AiFillEyeInvisible size={20} color={colors.primary}/></div></a>
                    </div>
                    <div className="form-vertical__new2">
                        <div className="label">
                            <p className={global.text}>Repetir contraseña nueva</p>
                            <BsFillLockFill size={25} color={colors.primary} />
                        </div> 
                        <input  
                            title="Repetir contraseña nueva"
                            type="password" 
                            id="password"
                            name="Contraseña" 
                            value={newPassword2}
                            required
                            onChange={(e) => setNewPassword2(e.target.value)}
                            placeholder="Confirmar contraseña nueva"
                            className="input">       
                        </input>
                        <a className="password--visibility" onClick={() => showPassword()}><AiFillEye id="show__icon1" size={20} color={colors.primary}/><div style={{display: "none"}} id="show__icon2"><AiFillEyeInvisible size={20} color={colors.primary}/></div></a>
                    </div>
                        <input className={global.buttonPrimary} type="submit" value="Confirmar"></input>
                    </form>  
                    <div className="tooltip">
                        <div className="tooltip__icon">
                            <AiFillInfoCircle size={20} color={colors.primary} />
                            <p className={global.text}> Información contraseña</p>
                        </div>
                        <div className="tooltiptext">
                            <p> - La contraseña debe tener al menos 8 caracteres.</p>
                            <p> - La contraseña debe tener al menos una letra mayúscula.</p>
                            <p> - La contraseña debe tener al menos un número.</p>
                        </div>
                </div>  
                </div>
            <style jsx>{`

                .form{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    width: 30%;
                    
                }


                .label{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;

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

                .tooltip{

                /*Position*/

                position: relative;

                /*Box model*/

                display: inline-block;
                margin-bottom: 1rem;

                }

                .tooltip__icon{

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                width: 100%;

                }

                .tooltip__icon p{

                /*Box model*/

                margin-left: 1.6rem;

                }

                .tooltip .tooltiptext{

                /*Position*/

                position: absolute;
                z-index: 100;


                /*Box model*/

                width: 20rem;
                padding: 1rem;

                /*Text*/

                text-align: center;

                /*Visuals*/

                border-radius: 10px;
                visibility: hidden;
                background-color: ${colors.quaternary};
                color: ${colors.secondary};

                }

                .tooltip:hover .tooltiptext {

                /*Visuals*/

                visibility: visible;

                }

                .form-vertical__old {

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                width: 100%;

                }

                .form-vertical__new {

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                width: 100%;

                }

                .form-vertical__new2 {

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                width: 100%;

                }

                input[type="submit"]{

                    /*Box model*/

                    margin-top: 2rem;

                }


                h1{

                    /*Box model*/

                    margin-bottom: 3rem;
                }


            `}</style>
        </>
        </Layout>
    )

}
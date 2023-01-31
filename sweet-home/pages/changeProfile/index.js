import Head from 'next/head'
import {useState} from "react"
import global from "styles/global.module.css"
import {colors} from "styles/frontend-conf.js"
import {fonts} from "styles/frontend-conf.js"
import {FaUserPlus, FaBirthdayCake} from "react-icons/fa"
import {AiFillPhone} from "react-icons/ai"
import {BsGenderAmbiguous, BsFillFileTextFill} from "react-icons/bs"
import Layout from "/components/Layout/Layout"

export default function changeProfile(){

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [biography, setBiography] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [maxDate, setMaxDate] = useState("");
    const [gender, setGender] = useState("");
    const [message, setMessage] = useState("");

    const calcDate = () => {

        let date = new Date();
        let year = date.getFullYear() - 4;
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let maxDate = year + "-" + month + "-" + day;
        
        return maxDate;

    }


    return(
        <Layout>
            <Head><title>Editar perfil</title></Head>
            <div className={global.content}>
            <div className="settings">
              <aside className="settings__links">
                  <a className="config__style" aria-label="Ir a Editar Perfil">Editar perfil</a>
                  <a className="config__style" aria-label="Ir a Guardados">Guardados</a>
              </aside>
              <div className="form-page">
                <h1 className={global.title}>Configuración</h1>
                <form className="form-vertical" action="/api/auth/signIn/email">
                  
                  <div className="form-vertical__name">
                    <div className="label">
                      <p className={global.text}>Nombre</p>
                      <FaUserPlus size={20} color={colors.primary} />
                    </div>
                    <input
                      title="Introducir nombre"
                      type="text"
                      name="Nombrec"
                      value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                      placeholder="p. ej.: Javier"
                    ></input>
                  </div>
                  <div className="form-vertical__lastname">
                    <div className="label">
                      <p className={global.text}>Apellidos</p>
                      <FaUserPlus size={20} color={colors.primary} />
                    </div>
                    <input
                      title="Introducir apellidos"
                      type="text"
                      name="lastName"
                      value={lastname}
                      required
                      onChange={(e) => setLastname(e.target.value)}
                      placeholder="p. ej.: García Navarro"
                    ></input>
                  </div>
                  <div className="form-vertical__phone">
                    <div className="label">
                      <p className={global.text}>Teléfono</p>
                      <AiFillPhone size={20} color={colors.primary} />
                    </div>
                    <input
                      title="Introducir teléfono"
                      type="text"
                      name="Teléfono"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="p. ej.: 654897612"
                    ></input>
                  </div>
                  <div className="form-vertical__biography">
                      <div className="label">
                        <p className={global.text}>Biografía</p>
                        <BsFillFileTextFill size={20} color={colors.primary} />
                      </div>
                      <textarea
                        title="Introducir biografía"
                        name="Biography"
                        value={biography}
                        onChange={(e) => setBiography(e.target.value)}
                        placeholder="p. ej.: Soy un estudiante de 4º de ESO."
                      ></textarea>
                    </div>
                  <div className="form-vertical__gender">
                    <div className="label">
                      <p className={global.text}>Género</p>
                      <BsGenderAmbiguous size={20} color={colors.primary} />
                    </div>
                    <select name="gender" id="gender" className="selector" onChange={(e) => setGender(e)}>
                        <option value="male">Masculino</option>
                        <option value="woman">Femenino</option>
                        <option value="other">Otro</option>
                    </select>
                  </div>
                  <div className="form-vertical__birthdate">
                    <div className="label">
                      <p className={global.text}>Fecha de nacimiento</p>
                      <FaBirthdayCake size={20} color={colors.primary} />
                    </div>
                    <input
                      title="Introducir nombre"
                      type="date" 
                      max={calcDate()}
                      name="Birthdate"
                      value={birthdate}
                      onChange={(e) => setBirthdate(e.target.value)}
                    ></input>
                  </div>
                  <button className={global.buttonPrimary} ><a href="/changePassword" title="Ir a la página para cambiar la contraseña" aria-label="Ir a cambiar contraseña">Cambiar contraseña</a></button>   
                </form>
                <div className={global.error}>{message}</div>
                <button className={global.buttonPrimary} onClick={(e) => edit(e)}>Guardar</button>
              </div>
              </div>
            </div>

            <style jsx>{`

                .settings{


                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    gap: 2rem;

                   

                }

                .settings__links{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }

                .config__style{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin-bottom: 1rem;

                    /*Text*/

                    color: #1c1c1c;
                    font-size: 1.5rem;
                    font-weight: 600;
                    font-family: "Poppins", sans-serif;
                    text-decoration: none;

                }

                

            .form__text{

              /*Box model*/

              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-top: 2rem;
              margin-bottom: 2rem;

            }


            .form-page{

              /*Box model*/
              
              display: flex;
              flex-direction: column;


            }



            .form-vertical {


                  /*Box model*/

                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  margin-top: 15rem;
                  margin-bottom: 15rem;
                  width: 20rem;
                  height: 30rem;

            }

            .form-vertical__username {

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;

            }

            .form-vertical__password {

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                width: 100%;

            }


          .form__link{

              /*Text*/

              font-family: ${fonts.default};
              color: ${colors.secondary};
              text-decoration: none;
              font-size: 1rem;
              font-weight: 400;
          }

          .form__link:hover{

              /*Text*/

              color: ${colors.tertiary};
              transition: all 0.5s ease-in-out;
            }
        

            .label{

              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;

            }

            .selector{

              /*Box model*/

              width: 100%;

              /*Text*/

              font-family: ${fonts.default};
              font-size: 1rem;
              color: ${colors.quaternary};
              background-color: ${colors.secondary};

              /*Visuals*/

              border: 1px solid ${colors.primary};
              border-radius: 5px;

            }



            h2{

                /*Text*/

                color: ${colors.primary};
                font-family: ${fonts.secondary};
                font-weight: 600;
                font-size: 2rem;
            }

            p {

                /*Box model*/

                margin-right: 1rem;

                /*Text*/

                font-size: 1rem;
                font-family: ${fonts.default};
                color: ${colors.primary};
                
            }

            h6{

                /*Box model*/

                margin-right: 1rem;

                /*Text*/

                font-size: 0.8rem;
                font-weight: 500;
                font-family: ${fonts.default};
                color: ${colors.primary};
            }


              ::placeholder {

                /*Text*/

                color: ${colors.primary};
              }

              input[type="text"] {

                /*Box model*/

                width: 100%;
                height: 2rem;
                padding: 0.4rem;
                margin-bottom: 2rem;

                /*Text*/

                font-family: ${fonts.default};
                font-size: 1rem;

                /*Visuals*/

                border-radius: 5px;
                border: 1px solid ${colors.primary};

              }

              input[type="date"] {

                /*Box model*/

                width: 100%;
                height: 2rem;
                padding: 0.4rem;
                margin-bottom: 2rem;

                /*Text*/

                font-family: ${fonts.default};
                font-size: 1rem;

                /*Visuals*/

                border-radius: 5px;
                border: 1px solid ${colors.primary};

              }

              textarea{

                /*Box model*/

                width: 100%;
                height: 3rem;
                padding: 0.4rem;
                margin-bottom: 2rem;

                /*Text*/

                font-family: ${fonts.default};
                font-size: 1rem;

                /*Visuals*/

                border-radius: 5px;
                border: 1px solid ${colors.primary};

              }
              a{

                /*Text*/

                text-decoration: none;
                color: ${colors.secondary};
              }

              h1{

                  /*Box model*/

                  display: flex;
                  justify-content: center;
                  align-items: center;
                }


                
            
            `}</style>
        </Layout>
    )



}
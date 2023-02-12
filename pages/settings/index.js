import Head from 'next/head'
import {useSession} from "next-auth/react"
import {useState, useEffect} from "react"
import global from "styles/global.module.css"
import {colors} from "styles/frontend-conf.js"
import {fonts} from "styles/frontend-conf.js"
import {FaUserPlus, FaBirthdayCake} from "react-icons/fa"
import {AiFillPhone} from "react-icons/ai"
import {BsGenderAmbiguous, BsFillFileTextFill} from "react-icons/bs"
import Layout from "/components/Layout/Layout"
import Modal from "/components/Modal/Modal"
import {server} from "/server"

export default function Settings(){

    const {data: session, status} = useSession({required: true});
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [biography, setBiography] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [maxDate, setMaxDate] = useState("");
    const [gender, setGender] = useState("");
    const [message, setMessage] = useState("");
    const [complaintsList, setComplaintsList] = useState([]);
    const [petsList, setPetsList] = useState([]);

    useEffect(async () => {

      if(session){

        const complaints = await fetch(`${server}/api/complaints/${session.user.username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).catch(err => console.log(err));
 
        
        const pets = await fetch(`${server}/api/pets/${session.user.username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).catch(err => console.log(err));

        const complaintsList = await complaints.json();
        const petsList = await pets.json();

        setComplaints(complaintsList);
        setPets(petsList);

      }

    }, [])

    const calcDate = () => {

        let date = new Date();
        let year = date.getFullYear() - 4;
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let maxDate = year + "-" + month + "-" + day;
        
        return maxDate;

    }

    const deleteAccount = async (e) => {

      e.preventDefault();

        await fetch(`${server}/api/users`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: sessionStorage.user.username
            })
        }).catch(err => console.log(err));

            setMessage("Se ha eliminado la cuenta correctamente");
            router.push("/");
    }

      const handleClick = (e) => {

        const edit = document.querySelector('.form-page');
        const saved = document.querySelector('.saved');
        const complaints = document.querySelector('.complaints');
        const pets = document.querySelector('.pets');

        if(e === 'Editar'){

            const button = document.querySelector('#edit');
            edit.style.display = 'block';
            saved.style.display = 'none';
            complaints.style.display = 'none';
            pets.style.display = 'none';
            button.addEventListener("click", () =>{
                button.focus();
            })
            
        }else if(e === 'Guardados'){

            const button = document.querySelector('#saved');
            edit.style.display = 'none';
            saved.style.display = 'block';
            complaints.style.display = 'none';
            pets.style.display = 'none';
            button.addEventListener("click", () =>{
                button.focus();
            })

        }else if(e === 'Denuncias'){

          const button = document.querySelector('#complaints');
          edit.style.display = 'none';
          saved.style.display = 'none';
          complaints.style.display = 'block';
          pets.style.display = 'none';
          button.addEventListener("click", () =>{
              button.focus();
          })
      }else if(e === 'Mascotas'){

        const button = document.querySelector('#pets');
        edit.style.display = 'none';
        saved.style.display = 'none';
        complaints.style.display = 'none';
        pets.style.display = 'block';
        button.addEventListener("click", () =>{
            button.focus();
        })
    }
    }

    const edit = () => {

      
    }

    if(status == "loading"){
      return <div className={global.loading}><p className={global.title}>Cargando..</p></div>
    }
    if(session){
      return(
          <Layout>
              <Head><title>Configuración</title></Head>
              <div className={global.content}>
              <div className="settings">
                <nav className="settings__links">
                    <button id="edit" className="config__style" onClick={() => handleClick("Editar")} aria-label="Ir a Editar Perfil">Editar perfil</button>
                    <button id="saved" className="config__style" onClick={() => handleClick("Guardados")} aria-label="Ir a Guardados">Guardados</button>
                    <button id="complaints" className="config__style" onClick={() => handleClick("Denuncias")} aria-label="Ir a Denuncias">Denuncias</button>
                    <button id="pets" className="config__style" onClick={() => handleClick("Mascotas")} aria-label="Ir a Mascotas">Mascotas</button>
                </nav>
                <div className="form-page">
                  <h1 className={global.title}>Editar perfil</h1>
                  <form className="form-vertical" action="/api/user">
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
                    <div className="settings__buttons">
                      <button className={global.buttonPrimary} ><a href="/changePassword" title="Ir a la página para cambiar la contraseña" aria-label="Ir a cambiar contraseña">Cambiar contraseña</a></button>  
                      <button className={global.buttonDelete} onClick={() => setIsModalVisible(true)}>Eliminar cuenta</button> 
                    </div>
                  </form>
                  <div className={global.error}>{message}</div>
                  <input type="submit" value="Guardar" className={global.buttonPrimary} onClick={(e) => edit(e)}/>
                  {isModalVisible && <Modal>
                      <h2 className={global.title3}>Eliminar cuenta</h2>
                      <p className={global.text2}>¿Estás seguro de que quieres eliminar tu cuenta?</p>
                              <div className="buttons">
                                      <button className={global.buttonSecondary} onClick={(e) => deleteAccount(e)}>Sí</button>
                                      <button className={global.buttonTertiary} onClick={() => setIsModalVisible(false)}>No</button>
                              </div>
                  </Modal>}
                </div>

                <div className="saved">
                  <h1 className={global.title}>Guardados</h1>
                  <div className="saved__content">
                  </div>
                </div>

                <div className="complaints">
                  <h1 className={global.title}>Denuncias</h1>
                  <div className="complaints__content">
                  </div>
                </div>

                <div className="pets">
                  <h1 className={global.title}>Mascotas</h1>
                  <div className="pets__content">
                    <button className={global.buttonPrimary} ><a href="/profile/myprofile/pets" title="Ir a la página para añadir mascotas" aria-label="Ir a cambiar contraseña">Añadir mascotas</a></button> 
                  </div>
                </div>
                </div>
              </div>

            <style jsx>{`
                  
                #edit:active{

                  /*Box model*/

                  padding: 0.5rem;

                  /*Text*/

                  color: ${colors.secondary};
                  cursor: pointer;

                  /*Visuals*/

                  background-color: ${colors.primary};
                  border-radius: 10px;
                  transition: 0.3s ease all;

                }

                #save:active{

                  /*Box model*/

                  padding: 0.5rem;

                  /*Text*/

                  color: ${colors.secondary};
                  cursor: pointer;

                  /*Visuals*/

                  background-color: ${colors.primary};
                  border-radius: 10px;
                  transition: 0.3s ease all;
                }

                #complaint:active{

                  /*Box model*/

                  padding: 0.5rem;

                  /*Text*/

                  color: ${colors.secondary};
                  cursor: pointer;

                  /*Visuals*/

                  background-color: ${colors.primary};
                  border-radius: 10px;
                  transition: 0.3s ease all;

                }

                .settings{


                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    gap: 2rem;

                    /*Visuals*/

                    border: 1px solid ${colors.primary};
                    border-radius: 10px;
                    box-shadow: 10px 10px 5px 0px rgba(214,214,214,0.42);

                   

                }

                .settings__links{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;

                }

                .config__style{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    margin-bottom: 1rem;

                    /*Text*/

                    font-size: 1.5rem;
                    font-weight: 600;
                    border: none;
                    color: ${colors.primary};
                    background-color: transparent;
                    font-family: "Poppins", sans-serif;
                    text-decoration: none;

                }

                .config__style:hover{

                    /*Box model*/

                    padding: 0.5rem;

                    /*Text*/

                    color: ${colors.secondary};
                    cursor: pointer;

                    /*Visuals*/

                    background-color: ${colors.primary};
                    border-radius: 10px;
                    transition: 0.3s ease all;


                }

                .config__style:focus{

                      /*Box model*/

                      padding: 0.5rem;

                      /*Text*/

                      color: ${colors.secondary};
                      cursor: pointer;

                      /*Visuals*/

                      background-color: ${colors.primary};
                      border-radius: 10px;
                      transition: 0.3s ease all;


                }

                .settings__buttons{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 1rem;

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
              justify-content: center;

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
              color: ${colors.primary};
              
              /*Visuals*/

              border: 1px solid ${colors.primary};
              border-radius: 5px;
              background: transparent;

            }


            .saved{

              /*Box model*/

              display: none;

            }

            .complaints{

              /*Box model*/

              display: none;

            }

            .pets{

              /*Box model*/

              display: none;

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
                background: transparent;

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
                color: ${colors.primary};

                /*Visuals*/

                border-radius: 5px;
                border: 1px solid ${colors.primary};
                background: transparent;

              }

              input[type="date"]::-webkit-calendar-picker-indicator {

                /*Visuals*/

                cursor: pointer;

              }

              input[type="submit"]{

                /*Box model*/

                margin-bottom: 2rem;

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
                background: transparent;

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

  }else {
    return(
        <Layout>
            <>
                <div className={global.content}>
                    <div className="message">
                        <h1 className={global.title}>Para acceder a esta página debe iniciar sesión</h1>
                        <button className={global.buttonPrimary} onClick={() => signIn()}>Iniciar sesión</button>
                    </div>
                </div>
                <style jsx>{`
  
                    .message{
  
                        /*Box model*/
  
                        display: flex
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        
                        
                    }
  
                    
                `}</style>
            </>
        </Layout>
    )
  
  }
              
}
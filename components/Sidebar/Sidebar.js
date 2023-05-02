
import {HiHome, HiUser, HiBookmark, HiNewspaper, HiQuestionMarkCircle, HiDocumentSearch, HiHand, HiEnvelope} from 'react-icons/hi'
import {MdPets, MdContactMail, MdHealthAndSafety, MdReport, MdClose} from 'react-icons/md'
import {BsFillFilePostFill} from 'react-icons/bs'
import {GiDogHouse, GiDogBowl, GiSittingDog} from 'react-icons/gi'
import {colors} from '/styles/frontend-conf'
import {fonts} from '/styles/frontend-conf'
import global from '/styles/global.module.css'
import Link from 'next/link'
import UserSidebar from '/components/UserSidebar/UserSidebar'
import {useSession} from 'next-auth/react'
import {useEffect, useState} from 'react'
import {server} from '/server'
import {useRouter} from 'next/router'
import {toast} from 'react-toastify'
import Trademark from '/components/Trademark/Trademark'
import Modal from '/components/Modal/Modal'


/**
 * This is a React component that renders a sidebar with links to various sections of a website, as
 * well as lists of suggested users and types of care.
 * @returns The Sidebar component is being returned.
 */
export default function Sidebar(){


    const [users, setUsers] = useState([])
    const [shelters, setShelters] = useState([])
    const [vets, setVets] = useState([])
    const [following, setFollowing] = useState([])
    const [typeAttendances, setTypeAttendances] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [report, setReport] = useState("")
    const [reportImage, setReportImage] = useState("")
    const {data: session, status} = useSession()
    const router = useRouter()


    const uploadImage = async (e) => {


        if (e.target.files && e.target.files[0]) {
    
    
              const imageUploaded = e.target.files[0]
    
              const reader = new FileReader()
    
              reader.readAsDataURL(imageUploaded)
    
              reader.onload = () => {
    
                const imageData = reader.result
    
                setReportImage(imageData)
          
              }
    
        }
      }

    const sendReport = async (e) => {

        e.preventDefault();

        if(report.trim() === '') {
                toast.error('Es necesario que escriba el informe', { position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored", })
            return
        }
        const res = await fetch(`${server}/api/reports`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                report: report,
                image: reportImage,
                username: session.user.username
            })
        })

        const data = await res.json()

        if (data.error) {
            toast.error('Introduzca el informe', { position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored", })
          } else {
            toast.success('Se ha enviado correctamente', { position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored", })
          }
          setIsModalVisible(false)

    }

    /**
     * The function fetches a list of users from a server and sets the retrieved data to a state
     * variable.
     */
    const fetchUsers = async () => {

        const res = await fetch(`${server}/api/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json()
        setUsers(data)

    }

    const fetchShelters = async () => {

        const res = await fetch(`${server}/api/shelters`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json()
        setShelters(data)

    }

    const fetchVets = async () => {

        const res = await fetch(`${server}/api/vets`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json()
        setVets(data)

    }

    /**
     * This function fetches data of type attendances from a server and sets it to a state variable.
     */
    const fetchTypeAttendances = () => {
        fetch(`${server}/api/typeAttendance`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            setTypeAttendances(data)
        })
    }

/**
 * This function fetches data about the user's following list from a server and sets it to a state
 * variable.
 */
    const fetchFollowing = async () => {

        const res = await fetch(`${server}/api/following/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json()
        setFollowing(data)
    }

    useEffect(() => {
 
        fetchUsers()
        {/*fetchFollowing()*/}
        fetchTypeAttendances()
        fetchShelters()
        fetchVets()

    }, [])


    return(
        <>
        
            <aside className="sidebar-layout">

                <div className="sidebar-layout__container1">
                    <a className="sidebar__link" href={`${server}/home`} alt="Ir a apartado de reciente en home"><HiHome size={20} color={`${colors.primary}`}/>Reciente</a>
                    <a className="sidebar__link" href={`${server}/followingPosts`} alt="Ir a publicaciones de usuarios seguidos"><HiUser size={20} color={`${colors.primary}`}/>Seguidos</a>
                    <a className="sidebar__link" href={`${server}/allShelters`} alt="Ir a apartado de protectoras"><MdPets size={20} color={`${colors.primary}`}/>Protectoras</a>
                    <a className="sidebar__link" href={`${server}/allVets`} alt="Ir a apartado de veterinarias"><MdHealthAndSafety size={20} color={`${colors.primary}`}/>Veterinarias</a>
                    <hr className={global.divider}/>
                </div>

                
                <div className="sidebar-layout__container2">
                    <a className="sidebar__link" href={`${server}/myPosts`}alt="Ir a publicaciones propias"><BsFillFilePostFill size={20} color={`${colors.primary}`}/>Mis publicaciones</a>
                    <a className="sidebar__link" href={`${server}/pets/${session.user.username}`} alt="Ir a mascotas"><GiDogHouse size={20} color={`${colors.primary}`}/>Mis mascotas</a>
                    <a className="sidebar__link" href={`${server}/saved`} alt="Ir a publicaciones propias"><HiBookmark size={20} color={colors.primary} styles={{fontWeight: 'bold'}}/>Guardados</a>
                    <button className="sidebar__link" onClick={() => setIsModalVisible(true)} alt="Enviar informe"><MdReport size={20} color={colors.primary} styles={{fontWeight: 'bold'}}/>Enviar informe</button>    
                    <hr className={global.divider}/>
                </div>

                <div className="sidebar-layout__container3">
                    <h1 className="title__sidebar">Explorar</h1>
                    <a className="sidebar__link" href={`${server}/news`} alt="Ir a apartado de noticias"><HiNewspaper size={20} color={`${colors.primary}`}/>Noticias</a>
                    <a className="sidebar__link" href={`${server}/contact`} alt="Ir a apartado de contacto"><MdContactMail size={20} color={`${colors.primary}`}/>Contacto</a>
                    <a className="sidebar__link" href={`${server}/about`} alt="Ir a apartado de sobre nosotros"><HiHand size={20} color={`${colors.primary}`}/>Quiénes somos</a>
                    <a className="sidebar__link" href={`${server}/adoption`} alt="Ir a apartado de adopción de mascotas"><GiDogBowl size={20} color={`${colors.primary}`}/>Adopción</a>
                    <a className="sidebar__link" href={`${server}/lost`} alt="Ir a apartado de mascotas perdidas"><GiSittingDog size={20} color={`${colors.primary}`}/>Mascotas perdidas</a>
                    <a className="sidebar__link" href={`${server}/faq`} alt="Ir a apartado de preguntas frecuentes"><HiQuestionMarkCircle size={20} color={`${colors.primary}`}/>FAQ</a>
                    <a className="sidebar__link" href={`${server}/userManual`} alt="Ir a apartado de manual"><HiDocumentSearch size={20} color={`${colors.primary}`}/>Ayuda</a>
                </div>

                <hr className={global.divider}/>

                <div className="sidebar-layout__container4">
                    <h1 className="title__sidebar">Cuentas seguidas</h1>
                    {following.length === 0 && <p className={global.text}>No ha seguido a ningún usuario.</p>}
                    {following.filter(following => following.username !== (session.user.username) && user.role.name !== "admin" && user.role.name !== "gerente").slice(0, 5).map(({ _id, image, username, isCaretaker, createdAt }) => {
                        return (
                        <>
                            <UserSidebar key={_id} id={_id} image={image} username={username} isCaretaker={isCaretaker} createdAt={createdAt}/>
                        </>
                        )
                    })}
                    <div className='users__link'>

                        {following.length !== 0 && <Link href='/allUsers'><a className={global.link} aria-label='Ir a ver más usuarios'>Ver todos →</a></Link>}

                    </div>
                </div>
                <hr className={global.divider}/>
                <div className="sidebar-layout__container5">
                    <h1 className="title__sidebar">Cuentas sugeridas</h1>
                    {users.length === 0 && <p className={global.text}>No existe ningún usuario.</p>}
                    {users.filter(user => user.username !== (session.user.username) && user.role.name !== "admin" && user.role.name !== "gerente").slice(0, 5).map(({ _id, image, username, isCaretaker, createdAt }) => {
                        return (
                        <>
                            <UserSidebar key={_id} id={_id} image={image} username={username} isCaretaker={isCaretaker} createdAt={createdAt}/>
                        </>
                        )
                    })}
                    <div className='users__link'>
                        <Link href={`${server}/allUsers`}><a className={global.link} aria-label='Ir a ver más usuarios'>Ver todos →</a></Link>
                    </div>
                </div>
                <hr className={global.divider}/>
                <div className="sidebar-layout__container6">
                    <h1 className="title__sidebar">Cuentas de protectoras</h1>
                    {shelters.length === 0 && <p className={global.text}>No hay ninguna protectora.</p>}
                    {shelters.filter(shelter => shelter.username !== (session.user.username)).slice(0, 5).map(({ _id, image, username, isCaretaker, createdAt }) => {
                        return (
                        <>
                            <UserSidebar key={_id} id={_id} image={image} username={username} isCaretaker={isCaretaker} createdAt={createdAt}/>
                        </>
                        )
                    })}
                    <div className='users__link'>

                        {shelters.length !== 0 && <Link href={`${server}/allShelters`}><a className={global.link} aria-label='Ir a ver más protectoras'>Ver todos →</a></Link>}

                    </div>
                </div>
                <hr className={global.divider}/>
                <div className="sidebar-layout__container7">
                    <h1 className="title__sidebar">Cuentas de veterinarias</h1>
                    {vets.length === 0 && <p className={global.text}>No hay ninguna veterinaria.</p>}
                    {vets.filter(vet => vet.username !== (session.user.username)).slice(0, 5).map(({ _id, image, username, isCaretaker, createdAt }) => {
                        return (
                        <>
                            <UserSidebar key={_id} id={_id} image={image} username={username} isCaretaker={isCaretaker} createdAt={createdAt}/>
                        </>
                        )
                    })}
                    <div className='users__link'>

                        {vets.length !== 0 && <Link href={`${server}/allVets`}><a className={global.link} aria-label='Ir a ver más veterinarias'>Ver todos →</a></Link>}

                    </div>
                </div>
                <hr className={global.divider}/>
                <div className="sidebar-layout__container8">
                    <h1 className="title__sidebar">Cuidados</h1>
                    {typeAttendances.length === 0 && <p className={global.text}>No existe ningún cuidado.</p>}
                    {typeAttendances.map(({ name }) => {
                        return (
                        <>
                            <button className="attendance__tag" onClick={() => router.push(`${server}/attendances/${name}`)}>#{`${name}`}</button>
                        </>
                        )
                    })}
                </div>
                <hr className={global.divider}/>
                <div className='footer'>
                    <div className='footer__links'>
                        <Link className={global.link} href={`${server}/userManual`} passHref><a aria-label='Ir a Información'>Información</a></Link>
                        <Link className={global.link} href={`${server}/privacy`} passHref><a aria-label='Ir a Privacidad'>Privacidad</a></Link>
                        <Link className={global.link} href={`${server}/conditions`} passHref><a aria-label='Ir a Condiciones'>Condiciones</a></Link>
                        <Link className={global.link} href={`${server}/accessibility`} passHref><a aria-label='Ir a Accesibilidad'>Accesibilidad</a></Link>
                        <Link className={global.link} href={`${server}/rules`} passHref><a aria-label='Ir a Reglas y Políticas'>Reglas y Políticas</a></Link>
                        <div className='copyright'>
                        
                        <p><Trademark/>&copy; 2022 Sweet Home Corporation. Todos los derechos reservados.</p>
                        </div>
                    </div>
                </div>
            </aside>
            
            {isModalVisible && <Modal>
            <button className="close__modal" onClick={() => setIsModalVisible(false)}><MdClose size={30} color={`${colors.secondary}`}/></button>
            <h2 className={global.title5}>Enviar informe</h2>
            <p className={global.text2}>Escriba a continuación el informe que quiera enviar:</p>
            <div className='report'>
                  <div className='report__input'>
                    <textarea
                          title='Introducir informe'
                          name='report'
                          value={report}
                          required
                          onChange={(e) => setReport(e.target.value)}
                          placeholder='Escribe aquí el informe...'
                        />
                  </div>
            </div>
            <div className='buttons'>
                <div className='image'>
                    <div className='image__input'>
                          <input
                            title='Introducir imagen'
                            type='file'
                            name='image'
                            id='image__input'
                            onChange={(e) => uploadImage(e)}
                            accept='image/png, image/jpeg'
                            placeholder='Ningún archivo seleccionado'
                            className='input'
                          >
                          </input>
                        </div>
                  </div>
                <button className="report__button" onClick={(e) => sendReport(e)}>Enviar</button>
            </div>
            </Modal>}
            <style jsx>{`

                
                .sidebar-layout{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    width: 12%;
                    height: 100%;
                    min-width: 12%;
                    max-width: 12%;
                    padding: 2rem;
                    margin-top: 0;
                    margin-left: 0;
                    margin-right: 0;

                    /*Text*/

                    font-family: ${fonts.default};
              
                    /*Visuals*/

                    border-right: 1px solid ${colors.primary};
                    border-bottom: 1px solid ${colors.primary};
                    border-radius: 0 0 20px 0;

                }

                .attendance__tag{

                      /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 1rem;
                    gap: 0.5rem;
                    width: 7vw;
                    padding: 1rem;

                    /*Text*/

                    color: #f0810f;
                    font-family: 'Poppins', sans-serif;

                    /*Visuals*/

                    border-radius: 70px;
                    border: 1px solid #f0810f;
                    transition: 0.3s ease all;
                    cursor: pointer;
                    background: transparent;

                }

                .attendance__tag:hover{

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                margin-bottom: 1rem;
                gap: 0.5rem;
                width: 7vw;
                padding: 1rem;

                /*Text*/

                color: #fafafa;

                /*Visuals*/

                border-radius: 70px;
                background-color: #f9a603;


                }


                .report{

                /*Box model*/

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-top: 1rem;
                width: 100%;

                }

                .report__input{

                /*Box model*/

                display: flex;
                flex-direction: row;
                justify-content: center;
                width: 115%;


                }

                .image__input{

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;

                }

                .close__modal{

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-self: flex-end;
                margin-right: 2rem;

                /*Visuals*/

                border: none;
                background: transparent;
                cursor: pointer;

                }

                .buttons{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 2rem;
                    margin-top: 2rem;
                    margin-bottom: 2rem;
                }

                .report__button{

                                        
                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 50px;
                    min-width: 150px;
                    max-width: 200px;
                    padding: 1rem;
                    
                    /*Text*/
                    
                    color: #f0810f;
                    font-family: "Poppins", sans-serif;
                    font-style: bold;
                    
                    /*Visuals*/
                    
                    cursor: pointer;
                    background-color: white;
                    border-radius: 40px;
                    
                    /*Misc*/
                    
                    transition: all 0.3s ease-in-out;
                }

                .report__button:hover {

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                height: 50px;
                min-width: 150px;
                max-width: 200px;
                padding: 1rem;

                /*Text*/

                color: #ffff;
                font-family: "Poppins", sans-serif;
                font-style: 500;

                /*Visuals*/

                cursor: pointer;

                background-color: #f9a603;
                border-radius: 40px;
                border: 1px solid #ffff;

                /*Misc*/

                transition: all 0.3s ease-in-out;

                }



                .title__sidebar{

                    /*Text*/

                    font-size: 1.4rem;
                    font-weight: 600;
                    font-family: ${fonts.default};

                }

                .sidebar__link{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    padding: 0;
                    gap: 1rem;

                    /*Text*/

                    font-family: ${fonts.default};
                    text-decoration: none;
                    color: ${colors.primary};
                    font-size: 1rem;


                    /*Visuals*/

                    transition: all 0.3s ease-in-out;
                }

                .sidebar__link:hover{

                    /*Text*/

                    color: ${colors.tertiary};

                }

                .sidebar-layout__container1{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    margin-bottom: 2rem;


                }

                .sidebar-layout__container2{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    margin-bottom: 1rem;

                }

                .sidebar-layout__container3{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    margin-bottom: 1rem;

                }

                .sidebar-layout__container4{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    margin-bottom: 1rem;

                }

                .sidebar-layout__container5{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    gap: 1rem;

                }

                .sidebar-layout__container6{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    gap: 1rem;

                }

                .sidebar-layout__container7{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    gap: 1rem;

                }

                .sidebar-layout__container8{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    gap: 1rem;

                }

                

                .sidebar-layout a{

                    /*Text*/

                    font-family: ${fonts.default};
                    text-decoration: none;
                    color: ${colors.primary};

                }

                .sidebar-layout a:hover{

                    /*Text*/

                    font-family: ${fonts.default};

                    color: ${colors.tertiary};

                }

                
            .footer{

                /*Box model*/ 

                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                margin-top: 2rem;

            }

            .footer__links{

                    /*Box model*/

                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: row;

                    gap: 1rem;
                    align-items: center;
                    


                }

                .users__link{

                /*Box model*/

                margin-bottom: 2rem;

                }

                .footer__links a{

                /*Text*/

                font-family: ${fonts.default};
                text-decoration: none;
                color: ${colors.primary};

                }

                .footer__links a:hover{

                /*Text*/

                font-family: ${fonts.default};
                color: ${colors.tertiary};
                transition: 0.3s ease all;

                }

                .copyright{

                    /*Text*/

                    font-family: ${fonts.default};
                    text-decoration: none;
                    color: ${colors.primary};

                }

                h1{
                        /*Text*/

                        font-size: 3.5rem;
                        font-weight: 600;
                        background-color: ${colors.primary};
                        font-family: "Archivo Black", sans-serif;
                        background-image: linear-gradient(180deg, #f0810f, #ffe45c 170%);
                        background-repeat: repeat;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent; 
                        background-size: 100%
                        text-align: center;
                        
                  }

                a{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 1rem;

                    /*Text*/

                    font-family: ${fonts.default};
                    text-decoration: none;

                }

                a:hover{

                    /*Text*/

                    font-family: ${fonts.default};
                    color: ${colors.tertiary};

                }

                input[type="file"]{

                /*Box model*/

                width: 20vw;
                height: 3vh;

                /*Text*/

                font-family: ${fonts.default};
                font-size: 1rem;

                /*Visuals*/

                border-radius: 20px;
                background-color: transparent;
                border: 1px solid ${colors.secondary};
                color: ${colors.secondary};

                }

                input[type="file"]::before{

                /*Box model*/

                padding: 0.5rem;
                margin-right: 1rem;

                /*Visuals*/

                cursor: pointer;
                content: 'Subir imagen..';
                background-color: ${colors.primary};
                color: ${colors.secondary};
                border-radius: 5px;



                }

                input[type="file"]::-webkit-file-upload-button {

                display: none;

                }

                ::placeholder{

                /*Text*/

                color: ${colors.primary};
                }

                textarea{

                /*Box model*/

                width: 30vw;
                height: 10vh;
                padding: 0.4rem;
                margin-bottom: 2rem;

                /*Text*/

                font-family: ${fonts.default};
                font-size: 1rem;

                /*Visuals*/

                border-radius: 5px;
                border: 1px solid ${colors.primary};

                }

                textarea:focus {

                /*Visuals*/

                border: 2px solid #4d97f7;
                outline: none;
                box-shadow: 10px 10px 20px 0px rgba(176,176,176,0.66);

                }

                button{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;

                    /*Visuals*/

                    border: none;
                    background: transparent;
                    cursor: pointer;
                }




            
            `}</style>


        </>  
    )


}
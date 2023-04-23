
import {HiHome, HiUser, HiBookmark, HiNewspaper, HiQuestionMarkCircle, HiDocumentSearch, HiHand} from 'react-icons/hi'
import {MdPets, MdContactMail} from 'react-icons/md'
import {BsFillFilePostFill} from 'react-icons/bs'
import {GiDogHouse} from 'react-icons/gi'
import {colors} from '/styles/frontend-conf'
import {fonts} from '/styles/frontend-conf'
import global from '/styles/global.module.css'
import Link from 'next/link'
import UserSidebar from '/components/UserSidebar/UserSidebar'
import {useEffect, useState} from 'react'
import {server} from '/server'
import {useRouter} from 'next/router'


export default function Sidebar(){


    const [users, setUsers] = useState([])
    const [following, setFollowing] = useState([])
    const [typeAttendances, setTypeAttendances] = useState([])
    const router = useRouter()

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

    }, [])


    return(
        <>
        
            <aside className="sidebar-layout">

                <div className="sidebar-layout__container1">
                    <a className="sidebar__link" href="/home" alt="Ir a apartado de reciente en home"><HiHome size={20} color={`${colors.primary}`}/>Reciente</a>
                    <a className="sidebar__link" href="/followingPosts" alt="Ir a publicaciones de usuarios seguidos"><HiUser size={20} color={`${colors.primary}`}/>Seguidos</a>
                    <a className="sidebar__link" href="/allCaretakers" alt="Ir a apartado de cuidadoras"><MdPets size={20} color={`${colors.primary}`}/>Cuidadoras</a>
                    <hr className={global.divider}/>
                </div>

                
                <div className="sidebar-layout__container2">
                    <a className="sidebar__link" href="/myPosts" alt="Ir a publicaciones propias"><BsFillFilePostFill size={20} color={`${colors.primary}`}/>Mis publicaciones</a>
                    <a className="sidebar__link" href={`${server}/pets/${session.user.username}`} alt="Ir a mascotas"><GiDogHouse size={20} color={`${colors.primary}`}/>Mis mascotas</a>
                    <a className="sidebar__link" href="/saved" alt="Ir a publicaciones propias"><HiBookmark size={20} color={colors.primary} styles={{fontWeight: 'bold'}}/>Guardados</a>
                    <hr className={global.divider}/>
                </div>

                <div className="sidebar-layout__container3">
                    <h1 className="title__sidebar">Explorar</h1>
                    <a className="sidebar__link" href="/news" alt="Ir a apartado de noticias"><HiNewspaper size={20} color={`${colors.primary}`}/>Noticias</a>
                    <a className="sidebar__link" href="/contact" alt="Ir a apartado de contacto"><MdContactMail size={20} color={`${colors.primary}`}/>Contacto</a>
                    <a className="sidebar__link" href="/about" alt="Ir a apartado de sobre nosotros"><HiHand size={20} color={`${colors.primary}`}/>Quiénes somos</a>
                    <a className="sidebar__link" href="/faq" alt="Ir a apartado de preguntas frecuentes"><HiQuestionMarkCircle size={20} color={`${colors.primary}`}/>FAQ</a>
                    <a className="sidebar__link" href="/userManual" alt="Ir a apartado de manual"><HiDocumentSearch size={20} color={`${colors.primary}`}/>Ayuda</a>
                </div>

                <hr className={global.divider}/>

                <div className="sidebar-layout__container4">
                    <h1 className="title__sidebar">Cuentas seguidas</h1>
                    {following.length === 0 && <p className={global.text}>No ha seguido a ningún usuario</p>}
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
                    {users.length === 0 && <p className={global.text}>No existe ningún usuario</p>}
                    {users.filter(user => user.username !== (session.user.username) && user.role.name !== "admin" && user.role.name !== "gerente").slice(0, 5).map(({ _id, image, username, isCaretaker, createdAt }) => {
                        return (
                        <>
                            <UserSidebar key={_id} id={_id} image={image} username={username} isCaretaker={isCaretaker} createdAt={createdAt}/>
                        </>
                        )
                    })}
                    <div className='users__link'>
                        <Link href='/allUsers'><a className={global.link} aria-label='Ir a ver más usuarios'>Ver todos →</a></Link>
                    </div>
                </div>
                <hr className={global.divider}/>
                <div className="sidebar-layout__container6">
                    <h1 className="title__sidebar">Cuidados</h1>
                    {typeAttendances.length === 0 && <p className={global.text}>No existe ningún cuidado</p>}
                    {typeAttendances.map(({ name }) => {
                        return (
                        <>
                            <button className={global.attendance__tag} onClick={() => router.push(`${server}/attendances/${name}`)}>#{`${name}`}</button>
                        </>
                        )
                    })}
                </div>
                <hr className={global.divider}/>
                <div className='footer'>
                    <div className='footer__links'>
                        <Link className={global.link} href='/userManual' passHref><a aria-label='Ir a Información'>Información</a></Link>
                        <Link className={global.link} href='/privacy' passHref><a aria-label='Ir a Privacidad'>Privacidad</a></Link>
                        <Link className={global.link} href='/conditions' passHref><a aria-label='Ir a Condiciones'>Condiciones</a></Link>
                        <Link className={global.link} href='/accessibility' passHref><a aria-label='Ir a Accesibilidad'>Accesibilidad</a></Link>
                        <Link className={global.link} href='/rules' passHref><a aria-label='Ir a Reglas y Políticas'>Reglas y Políticas</a></Link>
                        <div className='copyright'>
                        <p>&copy; 2022 Sweet Home Corporation. Todos los derechos reservados.</p>
                        </div>
                    </div>
                </div>
            </aside>
            <style jsx>{`

                
                .sidebar-layout{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    width: 10%;
                    padding: 2rem;
                    margin-top: 0;
                    margin-left: 0;
                    margin-right: 0;

                    /*Text*/

                    font-family: ${fonts.default};
              
                    /*Visuals*/

                    border-right: 1px solid ${colors.primary};
                    border-bottom: 1px solid ${colors.primary};

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
                    gap: 1rem;

                    /*Text*/

                    font-family: ${fonts.default};
                    text-decoration: none;
                    color: ${colors.primary};

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




            
            `}</style>


        </>  
    )


}
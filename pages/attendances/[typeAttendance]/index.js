import Head from 'next/head';
import {useRouter} from 'next/router'
import {useSession} from 'next-auth/react'
import {useState, useEffect} from 'react';
import global from '../../../styles/global.module.css';
import Layout from '../../../components/Layout/Layout';


export default function TypeAttendance({threads}){

    const {data: session, status} = useSession({required: true});

    const [isSortedByName, setIsSortedByName] = useState(false);
    const [isSortedByDate, setIsSortedByDate] = useState(false);
    const [isSortedByNumPosts, setIsSortedByNumPosts] = useState(false);
    const [sortedThreads, setSortedThreads] = useState(threads);
    const [typeAttendance, setTypeAttendance] = useState({nutrition: false, hygiene: false, leisure: false, health: false, education: false, physichalActivity: false, attendance: ""})
    const [numPosts, setNumPosts] = useState(0);

 
    const router = useRouter();

    useEffect(() => {
        if(router.query.typeAttendance == "nutrition"){
            setTypeAttendance({nutrition: true, hygiene: false, leisure: false, health: false, education: false, physichalActivity: false, attendance: "Nutrición"})
        }
        if(router.query.typeAttendance == "hygiene"){
            setTypeAttendance({nutrition: false, hygiene: true, leisure: false, health: false, education: false, physichalActivity: false, attendance: "Higiene"})
        }
        if(router.query.typeAttendance == "leisure"){
            setTypeAttendance({nutrition: false, hygiene: false, leisure: true, health: false, education: false, physichalActivity: false, attendance: "Ocio"})
        }
        if(router.query.typeAttendance == "health"){
            setTypeAttendance({nutrition: false, hygiene: false, leisure: false, health: true, education: false, physichalActivity: false, attendance: "Salud"})
        }
        if(router.query.typeAttendance == "education"){
            setTypeAttendance({nutrition: false, hygiene: false, leisure: false, health: false, education: true, physichalActivity: false, attendance: "Educación"})
        }
        if(router.query.typeAttendance == "physichalActivity"){
            setTypeAttendance({nutrition: false, hygiene: false, leisure: false, health: false, education: false, physichalActivity: true, attendance: "Actividad física"})
        }
    }, [])

    const sortThreadByName = () => {
        const sortedThreads = threads.sort((a, b) => {
            if(a.name > b.name){
                return 1;
            }
            if(a.name < b.name){
                return -1;
            }
            return 0;
        })
        setIsSortedByName(!isSortedByName);
        setSortedThreads(sortedThreads);
    }

    const sortThreadByDate = () => {
        const sortedThreads = threads.sort((a, b) => {
            if(a.createdAt > b.createdAt){
                return 1;
            }
            if(a.createdAt < b.createdAt){
                return -1;
            }
            return 0;
        })
        setIsSortedByDate(!isSortedByDate);
        setSortedThreads(sortedThreads);
    }

    const sortThreadByNumPosts = () => {
        const sortedThreads = threads.sort((a, b) => {
            if(a.numPosts > b.numPosts){
                return 1;
            }
            if(a.numPosts < b.numPosts){
                return -1;
            }
            return 0;
        })
        setIsSortedByNumPosts(!isSortedByNumPosts);
        setSortedThreads(sortedThreads);
    }

    if(status === "loading"){
        return <div className={global.loading}><p className={global.title}>Cargando..</p></div>
    }
    if(session){
        return(
            <Layout>
                <Head>
                    <title>Hilos sobre {typeAttendance.attendance}</title>
                </Head>
                <h1 className={global.title}>Hilos sobre {typeAttendance.attendance}</h1>
                <div className="sort__buttons">
                    <button className={global.buttonPrimary} onClick={() => router.push(`/attendances/${router.query.typeAttendance}/createThread`)} aria-label="Crear nuevo hilo">Crear hilo</button>
                    <button className={global.buttonPrimary} onClick={() => sortThreadByName()} aria-label="Ordenar categorías por nombre">Ordenar por nombre</button>
                    <button className={global.buttonPrimary} onClick={() => sortThreadByDate()} aria-label="Ordenar categorías por nombre">Ordenar por fecha</button>
                    <button className={global.buttonPrimary} onClick={() => sortThreadByNumPosts()} aria-label="Ordenar por actividad">Ordenar por actividad</button>
                </div>
                {threads.length === 0 && <div className={global.loading}><p>Cargando..</p></div>}
                {isSortedByName && sortedThreads.map(({_id, name, typeAttendanceId, createdAt, userId}) => {
                    return (
                        <>
                            <Thread key={_id} name={name} typeAttendanceId={typeAttendance} createdAt={createdAt} userId={userId}/>
                        </>
                    )
                })}
                {isSortedByDate && sortedThreads.map(({_id, name, typeAttendanceId, createdAt, userId}) => {
                    return (
                        <>
                            <Thread key={_id} name={name} typeAttendanceId={typeAttendance} createdAt={createdAt} userId={userId}/>
                        </>
                    )
                })}
                {isSortedByNumPosts && sortedThreads.map(({_id, name, typeAttendanceId, createdAt, userId}) => {
                    return (
                        <>
                            <Thread key={_id} name={name} typeAttendanceId={typeAttendance} createdAt={createdAt} userId={userId}/>
                        </>
                    )
                })}
                {!isSortedByNumPosts && threads.map(({_id, name, typeAttendanceId, createdAt, userId}) => {
                    return (
                        <>
                            <Thread key={_id} name={name} typeAttendanceId={typeAttendance} createdAt={createdAt} userId={userId}/>
                        </>
                    )
                })}
            <style jsx>{`
                
                .sort__buttons{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    gap: 1rem;
                    align-items: center;
                }
            `}</style>
            </Layout>
            
        )
    } else {
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

export async function getServerSideProps(context) {

    const {typeAttendance} = context.params;

    const res = await fetch(`/api/threads/${typeAttendance}`, {
      method: 'GET',
      headers: {
          "Content-Type": "application/json"
      }
    });

    const threads = await res.json();

    return {
        props: {
            threads: JSON.parse(JSON.stringify(threads))
        }
    }
}
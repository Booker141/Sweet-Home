import Head from 'next/head'
import {useSession} from 'next-auth/react'
import {useRouter} from 'next/router'
import {useState} from 'react'
import {MdOutlineSubtitles} from 'react-icons/md'
import {colors} from '/styles/frontend-conf'
import {fonts} from '/styles/frontend-conf'
import {statusColors} from '/styles/frontend-conf'
import global from '/styles/global.module.css'
import Layout from '/components/Layout/Layout'


export default function CreateThread(){

    const {data: session, status} = useSession({required: true});
    const Router = useRouter();
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    
    const createThread = async (e) =>{

        e.preventDefault();

        const res = await fetch('/api/threads', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                typeAttendanceId: session.user.id,
                title: title
            })
        }).catch(err => console.log(err));

        const data = await res.json()

        if(data.error){
            console.log(data.error);
            setMessage("Introduzca los campos obligatorios")
        }else{
            setMessage("Hilo creado correctamente");
            Router.push(`/attendances/${data.typeAttendance}/${data.threadId}`);
        }

    }

    if(status == "loading"){
        return <div className={global.loading}><p className={global.title}>Cargando..</p></div>
    }
    if(session){

        return (
            <Layout>
                <Head><title>Crear hilo</title></Head>
                <div className={global.content}>
                    <div className="form">
                        <h1 className="form__title">Crear hilo</h1>
                        <p className={global.text2}>Introduzca el título del hilo:</p>
                        <form action="/api/posts" id="form">
                            <div className="form-vertical__email">
                                <div className="label">
                                    <p className={global.text}>Título</p>
                                    <MdOutlineSubtitles size={25} color={colors.secondary} />
                                </div>
                                <div className="title__input">
                                    <input
                                        title="Introducir título"
                                        type="text"
                                        name="title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        placeholder="p. ej.: 10 consejos para el cuidado de mi mascota"
                                        className="input">
                                    </input>
                            </div>
                            </div>
                            
                            </form>  
                                <input className={global.buttonPrimary} type="submit" onClick={(e) => createThread(e)} value="Crear"/> 
                            </div>
                    </div>
                <style jsx>{`

                    .form{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    
                        width: 100%;

                        /*Visuals*/

                        background-image: linear-gradient(45deg, rgba(240,129,15, 0.8) 35%, rgba(249,166,3, 0.8) 100%);
                        background-size: 100% 110%;
                        border-radius: 20px;
                        
                    }

                    .form__title{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        margin-top: 2rem;
                        margin-bottom: 1rem;

                        /*Text*/

                        font-family: 'Satisfy';
                        font-size: 4rem;
                        font-weight: 500;
                        color: ${colors.secondary};
                    }

                    .label{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;

                    }

                    .label p{

                        /*Box model*/

                        margin-right: 1rem;

                        /*Visuals*/

                        color: ${colors.secondary};

                    }
                    
                    .input{

                        /*Box model*/

                        width: 100%;
                        height: 2rem;
                        padding: 0.4rem;
                        margin-bottom: 1rem;
                        

                        /*Text*/

                        font-family: ${fonts.default};
                        font-size: 1rem;

                        /*Visuals*/

                        border-radius: 5px;
                        border: 1px solid ${colors.primary};
                    }

        

                    .title__input{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                    }


                    input[type="text"] {

                        /*Box model*/

                        width: 30rem;
                        height: 2rem;
                        padding: 0.4rem;
                        margin-bottom: 2rem;

                        /*Text*/

                        font-family: ${fonts.default};
                        font-size: 1rem;

                        /*Visuals*/

                        border-radius: 5px;
                        border: 0;
                        transition: 0.2s ease all;

                    }

                    input[type="text"]:focus {

                        /*Visuals*/

                        border: 2px solid #4d97f7;
                        outline: none;
                        box-shadow: 10px 10px 20px 0px rgba(176,176,176,0.66);

                    }

                    
                    input[type="submit"]{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        margin-top: 2rem;
                        margin-bottom: 2rem;

                    }



                    ::placeholder{

                        /*Text*/

                        color: ${colors.primary};
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

                    h1{

                        /*Box model*/

                        margin-top: 2rem;
                        margin-bottom: 3rem;
                    }

                    a{

                        /*Misc*/

                        cursor: pointer;
                    }

                `}</style>
            </Layout>
        )
  

    }else {
        return(
            <Layout>
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
            </Layout>
        )
    }
}
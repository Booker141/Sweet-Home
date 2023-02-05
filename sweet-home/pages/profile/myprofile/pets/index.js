import { useSession } from 'next-auth/react'
import { useEffect, useState} from 'react'
import Head from 'next/head'
import Layout from "../../../../components/Layout/Layout"
import Pet from "../../../../components/Pet/Pet"
import global from "../../../styles/global.module.css"

export default function Pets(){

    const {data: session, status} = useSession({required: true});
    const [pets, setPets] = useState ([{}]);

    useEffect(async () => {
        if(session){
            const res = await fetch(`http://localhost:3000/api/pets/${session.user.username}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const pets = await res.json();
            setPets(pets);
        }
    
    }, []);

    if(status == "loading"){
        return <div className={global.loading}><p className={global.title}>Cargando..</p></div>
      }
    if(session){
        return(

            <Layout>
                <Head><title>Mascotas</title></Head>
                <h1 className={global.title}>Mis mascotas</h1>
                {pets.length === 0 && <div><p className={global.loading}>Cargando..</p></div>}

                            {pets.map(({_id, animal, breed, name, weight, birthYear, image}) => {
                            return (
                                <>
                                    <Pet key={_id} animal={animal} breed={breed} name={name} weight={weight} bithYear={birthYear} image={image}/>
                                </>
                            )
                            })}
                        
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


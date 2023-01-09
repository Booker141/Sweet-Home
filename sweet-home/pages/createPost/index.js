import Head from 'next/head'
import {useSession} from 'next-auth/react'
import {useRouter} from 'next/router'
import {useState} from 'react'
import Layout from '/components/Layout/Layout'


export default function createPost(){

    const session = useSession({required: true});
    const Router = useRouter();
    const [mediaUrl, setMediaUrl] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    
    const createPost = async(e) =>{

        e.preventDefault();

        const res = await fetch("http://localhost:3000/api/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                mediaUrl,
                description
            })
        })

        const data = await res.json()

        if(data.error){
            console.log(data.error)
        }else{
            console.log(data)
        }

    }
    return (

        <Layout>
            <Head><title>Crear publicación</title></Head>
            <div className="newPost">
                <form onSubmit={createPost}>

                </form>
            </div>

            <style jsx>{``}</style>
        </Layout>
  
    )


}
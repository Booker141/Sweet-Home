import {getSession} from 'next-auth/react'
import global from "styles/global.module.css"
import User from "components/User/User"
import Layout from "components/Layout/Layout"

export default function allUsers({users}){ 
    
    return(
        <Layout>
        
                    <h1 className={global.title}>Usuarios</h1>
                        {users.map(({_id, userImage, username}) => {
                            return(
                                <>
                                    <User key={_id} userImage={userImage} username={username}/>
                                </>
                            )
                        })}
                

        </Layout>
    )

}

export async function getServerSideProps(context){

        const session = await getSession(context);
        
        let res = await fetch("http://localhost:3000/api/users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
    
        let users = await res.json();
    
        return {
            props: { users: JSON.parse(JSON.stringify(users)) },
        };
}

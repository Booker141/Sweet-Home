import global from "styles/global.module.css"
import User from "components/User/User"
import Layout from "components/Layout/Layout"

export default function allUsers({users}){ 
    
    return(
        <Layout>
            <>
                <div className={global.content}>
                    <h1 className={global.title}>Usuarios</h1>
                        {users.map(({_id, userImage, username}) => {
                            return(
                                <>
                                    <User key={_id} userImage={userImage} username={username}/>
                                </>
                            )
                        })}
                </div>
            </>
        </Layout>
    )

}

export async function getServerSideProps(context){
        
        let user = await fetch("http://localhost:3000/api/users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
    
        let users = await user.json();
    
        return {
            props: { users: users },
        };
}

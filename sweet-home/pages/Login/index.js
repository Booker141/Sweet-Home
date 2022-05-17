import {useSession, signIn, signOut} from "next-auth/react"

/**
 * Login - 
 */
export default function Login(){

    const { data: session} = useSession()

    if (session) {
        return(
            <>
                <div>{session.user.name} </div>
                <button onClick={() => signOut()}>Cerrar sesión</button>
            </>
        )
    }

    return(

        <>
            <button onClick={() => signIn()}>Iniciar sesión</button>
        </>

    );

}
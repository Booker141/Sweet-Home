import { useSession, signIn, signOut, getSession} from "next-auth/react"


export default function Profile(){

    const {data: session, status} = useSession({required: true});

    if (status === 'authenticated'){
        return(
            <>
                <h1>Has iniciado sesión</h1>
                <div>{session.user.email}</div>
                <button onClick={() => signOut()}>Cerrar sesión</button>
            </>
        )
    } else {
        return(
            <>
                <h1>No has iniciado sesión</h1>
                <button onClick={() => signIn()}>Iniciar sesión</button>
            </>
        )
    }



}

export const getServerSideProps = async(context) => {
    const session = await getSession(context);
    if (!session){
        return {
            redirect: {
                destination: '/signIn',
                permanent: false,
            },
        
        };
    
    }
    return {
        props: {session},
    };
};
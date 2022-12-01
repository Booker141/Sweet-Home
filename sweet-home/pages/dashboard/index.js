import {useSession} from "next-auth/react"

export default function AdminDashboard({props}){

    const {status} = useSession({required: true})

    if (status === "loading"){

        return "Cargando.."

    }

    return "No ha iniciado sesión"

}


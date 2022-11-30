import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"


export default async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions)
  if (session) {
    res.send({
      content:
        "Has iniciado sesión",
    })
  } else {
    res.send({
      error: "Debes iniciar sesión",
    })
    /*Redirigir a página de inicio de sesión*/
  }
}
import { useSession } from 'next-auth/react'
import global from 'styles/global.module.css'
import {colors} from 'styles/frontend-conf'
import User from 'components/User/User'
import Layout from 'components/Layout/Layout'
import Loader from 'components/Loader/Loader'
import { server } from '/server'

/**
 * It's a function that returns a layout component with a title and a list of users
 * @returns the Layout component with the title "Usuarios" and the User component.
 */
export default function AllCaretakers ({ users }) {

  const { data: session, status } = useSession({ required: true })

  if (status == 'loading') {
    return (
      <>
        <div className={global.loading}><p>Cargando..</p></div>
        <Loader />
      </>
    )
  }
  if (session) {
    return (
      <Layout>

        <h1 className="title">Cuidadoras</h1>
        {users.filter(user => user.username !== (session.user.username) && user.isCaretaker === true && user.role.name !== "admin" && user.role.name !== "gerente").map(({ _id, image, username, isCaretaker }) => {
          return (
            <>
              <User key={_id} image={image} username={username} isCaretaker={isCaretaker} />
            </>
          )
        })}
      <style jsx>{`

          .title{

            /*Text*/

            font-size: 3.5rem;
                        font-weight: 600;
                        background-color: ${colors.primary};
                        font-family: "Archivo Black", sans-serif;
                        background-image: linear-gradient(180deg, #f0810f, #ffe45c 170%);
                        background-repeat: repeat;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent; 
                        background-size: 100%
                        text-align: center;
          }

          `}</style>
      </Layout>
    )
  }
}

export async function getServerSideProps () {

  const res = await fetch(`${server}/api/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const users = await res.json()

  return {
    props: { users: JSON.parse(JSON.stringify(users)) }
  }
}

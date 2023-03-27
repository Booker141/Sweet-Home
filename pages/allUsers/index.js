import { useSession } from 'next-auth/react'
import global from 'styles/global.module.css'
import User from 'components/User/User'
import Layout from 'components/Layout/Layout'
import Loader from 'components/Loader/Loader'
import { server } from '/server'

/**
 * It's a function that returns a layout component with a title and a list of users
 * @returns the Layout component with the title "Usuarios" and the User component.
 */
export default function allUsers ({ users }) {
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

        <h1 className={global.title}>Usuarios</h1>
        {users.filter(user => user.username !== (session.user.username) && user.role.name !== "admin" && user.role.name !== "gerente").map(({ _id, image, username, isCaretaker }) => {
          return (
            <>
              <User key={_id} image={image} username={username} isCaretaker={isCaretaker} />
            </>
          )
        })}

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

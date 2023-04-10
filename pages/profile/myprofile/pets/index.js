import { useSession, getSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import {colors, fonts} from '/styles/frontend-conf'
import Head from 'next/head'
import Layout from '/components/Layout/Layout'
import Pet from '/components/Pet/Pet'
import global from '/styles/global.module.css'
import { server } from '/server'

export default function Pets({petsList}) {

  const { data: session, status } = useSession({ required: true })

  const [isSortedByBreed, setIsSortedByBreed] = useState(false);
  const [isSortedByAnimal, setIsSortedByAnimal] = useState(false);
  const [isSortedByName, setIsSortedByName] = useState(false);
  const [pets, setPets] = useState(petsList)


  const sortPetByBreed = () => {

    setIsSortedByBreed(!isSortedByBreed)
    const sortedPets = pets.sort((a, b) => (a.breed > b.breed) ? 1 : ((b.breed > a.breed) ? -1 : 0))
    setPets(sortedPets)

  }

  const sortPetByAnimal = () => {

    setIsSortedByAnimal(!isSortedByAnimal)
    const sortedPets = pets.sort((a, b) => (a.animal > b.animal) ? 1 : ((b.animal > a.animal) ? -1 : 0))
    setPets(sortedPets)

  }

  const sortPetByName = () => {

    setIsSortedByName(!isSortedByName)
    const sortedPets = pets.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    setPets(sortedPets)

  }

  if (status == 'loading') {
    return <div className={global.loading}><p>Cargando..</p></div>
  }
  if (session) {
    return (

      <Layout>
        <Head><title>Mascotas</title></Head>
        <h1 className="title">Mis mascotas</h1>
        <div className="pet__buttons">
          <button className={global.buttonPrimary}><a href='/profile/myprofile/pets/createPet' title='Ir a la página para añadir mascotas' aria-label='Ir a la página para añadir mascotas'>Añadir mascotas</a></button>
          <button className={global.buttonPrimary} onClick={() => sortPetByBreed()} aria-label='Ordenar publicaciones por raza'>Ordenar por raza</button>
          <button className={global.buttonPrimary} onClick={() => sortPetByAnimal()} aria-label='Ordenar publicaciones por animal'>Ordenar por animal</button>
          <button className={global.buttonPrimary} onClick={() => sortPetByName()} aria-label='Ordenar publicaciones por nombre'>Ordenar por nombre</button>
        </div>
        {pets.length === 0 && <div><p className={global.text}>No tienes mascotas registradas</p></div>}
        {}
        {pets.map(({ _id, animal, breed, name, weight, birthdate, image, ownerUsername }) => {
          return (
            <>
              <Pet key={_id} animal={animal} breed={breed} name={name} weight={weight} bithdate={birthdate} image={image} ownerUsername={ownerUsername} />
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

                .pet__buttons{

                  /*Box model*/

                  display: flex;
                  flex-direction: row;
                  gap: 1rem;
                  align-items: center;
                  margin-bottom: 1rem;

                }

                a{
                    /*Text*/
                    
                    text-decoration: none;
                    color: white;
                }

                button{

                    /*Box model*/

                    margin-bottom: 1rem;
                }
            
            
            
            
            `}
        </style>
      </Layout>

    )
  } else {
    return (
      <Layout>
        <>
          <div className={global.content}>
            <div className='message'>
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
  
                    
                `}
          </style>
        </>
      </Layout>
    )
  }
}

export async function getServerSideProps(context){

    const session = await getSession(context)

    const res = await fetch(`${server}/api/pets/${session.user.username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const pets = await res.json()

      return {
          props: {
              petsList: JSON.parse(JSON.stringify(pets))
          }
        }

}



import Head from 'next/head'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { MdLocationOn } from 'react-icons/md'
import global from '/styles/global.module.css'
import Layout from '/components/Layout/Layout'
import { server } from '/server'

export default function CreatePet () {
  const { data: session, status } = useSession({ required: true })
  const Router = useRouter()
  const [name, setName] = useState('')
  const [animal, setAnimal] = useState('')
  const [breed, setBreed] = useState('')
  const [weight, setWeight] = useState('')
  const [birthYear, setBirthYear] = useState('')
  const [message, setMessage] = useState('')

  const createPet = async (e) => {
    e.preventDefault()

    const res = await fetch(`${server}/api/pets/${session.user.username}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: session.user.id,
        location,
        description,
        username: session.user.username
      })
    }).catch(err => console.log(err))

    const data = await res.json()

    if (data.error) {
      console.log(data.error)
      setMessage('Introduzca los campos obligatorios')
    } else {
      setMessage('Mascota creada correctamente')
      Router.push('/profile/myprofile/pets')
    }
  }

  if (status == 'loading') {
    return <div className={global.loading}><p>Cargando..</p></div>
  }
  if (session) {
    return (
      <Layout>
        <Head><title>Crear mascota</title></Head>
        <div className={global.content}>
          <div className={global.dots}>
            <div className='form'>
              <h1 className='form__title'>Crear mascota</h1>
              <p className={global.text2}>Introduzca los datos de la mascota. Los campos obligatorios vienen indicados con un asterisco *:</p>
              <form action='/api/posts' id='form'>
                <div className='form-vertical__name'>
                  <div className='label'>
                    <p className={global.text}>Nombre</p>
                    <MdLocationOn size={25} color={colors.secondary} />
                  </div>
                  <div className='animal__input'>
                    <input
                          title='Introducir nombre'
                          type='text'
                          name='name'
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder='p. ej.: Hank'
                          className='input'
                         />
                  </div>
                </div>

                <div className='form-vertical__animal'>
                  <div className='label'>
                    <p className={global.text}>Animal</p>
                    <MdLocationOn size={25} color={colors.secondary} />
                  </div>
                  <div className='animal__input'>
                    <input
                          title='Introducir tipo de animal'
                          type='text'
                          name='animal'
                          value={animal}
                          onChange={(e) => setAnimal(e.target.value)}
                          placeholder='p. ej.: Perro'
                          className='input'
                         />
                  </div>
                </div>
                <div className='form-vertical__breed'>
                  <div className='label'>
                    <p className={global.text}>Raza</p>
                    <MdLocationOn size={25} color={colors.secondary} />
                  </div>
                  <div className='breed__input'>
                    <input
                          title='Introducir raza'
                          type='text'
                          name='breed'
                          value={breed}
                          onChange={(e) => setBreed(e.target.value)}
                          placeholder='p. ej.: Retriever'
                          className='input'
                         />
                  </div>
                </div>
                <div className='form-vertical__weight'>
                  <div className='label'>
                    <p className={global.text}>Peso</p>
                    <MdLocationOn size={25} color={colors.secondary} />
                  </div>
                  <div className='weight__input'>
                    <input
                          title='Introducir peso'
                          type='text'
                          name='weight'
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                          placeholder='p. ej.: 16'
                          className='input'
                         />
                    <p className={global.text2}>Kg</p>
                  </div>
                </div>
                <div className='form-vertical__birthYear'>
                  <div className='label'>
                    <p className={global.text}>Año de nacimiento</p>
                    <MdLocationOn size={25} color={colors.secondary} />
                  </div>
                  <div className='birthYear__input'>
                    <input
                          title='Introducir año de nacimiento'
                          type='text'
                          name='birthYear'
                          value={birthYear}
                          onChange={(e) => setBirthYear(e.target.value)}
                          placeholder='p. ej.: Cádiz'
                          className='input'
                         />
                  </div>
                </div>
              </form>
              <input className={global.buttonPrimary} type='submit' onClick={(e) => createPet(e)} value='Crear' />
            </div>

          </div>
        </div>
        <style jsx>{`

                    .form{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    
                        width: 100%;

                        /*Visuals*/

                        background-image: linear-gradient(45deg, rgba(240,129,15, 0.8) 35%, rgba(249,166,3, 0.8) 100%);
                        background-size: 100% 110%;
                        border-radius: 20px;
                        
                    }

                    .form__title{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        margin-top: 2rem;
                        margin-bottom: 1rem;

                        /*Text*/

                        font-family: 'Satisfy';
                        font-size: 4rem;
                        font-weight: 500;
                        color: ${colors.secondary};
                    }

                    .label{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;

                    }

                    .label p{

                        /*Box model*/

                        margin-right: 1rem;

                        /*Visuals*/

                        color: ${colors.secondary};

                    }
                    
                    .input{

                        /*Box model*/

                        width: 100%;
                        height: 2rem;
                        padding: 0.4rem;
                        margin-bottom: 1rem;
                        

                        /*Text*/

                        font-family: ${fonts.default};
                        font-size: 1rem;

                        /*Visuals*/

                        border-radius: 5px;
                        border: 1px solid ${colors.primary};
                    }

                

                    .form-vertical__image {

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        width: 100%;

                    }

                    .form-vertical__description {

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        width: 100%;

                    }

                    .weight__input{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: 1rem;
                    }


                    .description__input{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        width: 115%;
                        

                    }

                    .location__input{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                    }

                    .image__input{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;

                    }

                    
                    input[type="submit"]{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        margin-top: 2rem;
                        margin-bottom: 2rem;

                    }

                    input[type="file"]{

                        /*Box model*/

                        width: 100%;
                        height: 100%;

                        /*Visuals*/

                        border-radius: 10px;
                        background-color: transparent;
                        border: 1px solid ${colors.secondary};
                        color: ${colors.secondary};

                    }

                    input[type="file"]::before{

                        /*Box model*/

                        padding: 0.5rem;
                        margin-right: 1rem;

                        /*Visuals*/

                        cursor: pointer;
                        content: 'Subir imagen..';
                        background-color: ${colors.primary};
                        color: ${colors.secondary};
                        border-radius: 5px;
                    


                    }

                    input[type="file"]::-webkit-file-upload-button {

                        display: none;

                    }


                    input[type="email"]:focus {

                        /*Visuals*/

                        border: 2px solid #4d97f7;
                        outline: none;
                        box-shadow: 10px 10px 20px 0px rgba(176,176,176,0.66);

                    }

                    input[type="password"]:focus {

                        /*Visuals*/

                        border: 2px solid #4d97f7;
                        outline: none;
                        box-shadow: 10px 10px 20px 0px rgba(176,176,176,0.66);

                    }

                    ::placeholder{

                        /*Text*/

                        color: ${colors.primary};
                    }

                    textarea{

                    /*Box model*/

                    width: 100%;
                    height: 3rem;
                    padding: 0.4rem;
                    margin-bottom: 2rem;

                    /*Text*/

                    font-family: ${fonts.default};
                    font-size: 1rem;

                    /*Visuals*/

                    border-radius: 5px;
                    border: 1px solid ${colors.primary};

                    }

                    h1{

                        /*Box model*/

                        margin-top: 2rem;
                        margin-bottom: 3rem;
                    }

                    a{

                        /*Misc*/

                        cursor: pointer;
                    }

                `}
        </style>
      </Layout>
    )
  } else {
    return (
      <Layout>
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
      </Layout>
    )
  }
}

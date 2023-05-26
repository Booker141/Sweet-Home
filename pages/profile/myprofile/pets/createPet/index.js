/* Static imports */

import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { BsImageFill } from 'react-icons/bs'
import { FaUserPlus, FaWeight, FaBirthdayCake } from 'react-icons/fa'
import {MdPets} from 'react-icons/md'
import { GiSittingDog } from 'react-icons/gi'
import {colors, fonts} from '/styles/frontend-conf'
import { server } from '/server'
import {toast} from 'react-toastify'
import Head from 'next/head'
import global from '/styles/global.module.css'
import dynamic from 'next/dynamic'


/* Dynamic imports */

const Loader = dynamic(() => import('/components/Loader/Loader'))
const Layout = dynamic(() => import('/components/Layout/Layout'))
const LazyLoad = dynamic(() => import('react-lazyload'))
const FallbackImage = dynamic(() => import('/components/FallbackImage/FallbackImage'))


export default function CreatePet () {
  
  const { data: session, status } = useSession({ required: true })
  const Router = useRouter()
  const [name, setName] = useState('')
  const [animal, setAnimal] = useState('')
  const [petImage, setPetImage] = useState("")
  const [breed, setBreed] = useState('')
  const [weight, setWeight] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [previewImage, setPreviewImage] = useState('')
  const [isPreviewImage, setIsPreviewImage] = useState(false)
  const [isPosting, setIsPosting] = useState(false)



  const uploadImage = (e) => {

    if (e.target.files && e.target.files[0]) {

      const imageUploaded = e.target.files[0]

      setPetImage(imageUploaded)

      console.log(imageUploaded)

      setPreviewImage(URL.createObjectURL(imageUploaded))
      setIsPreviewImage(true)

      
      }
  }

  const createPet = async (e) => {

    e.preventDefault()

    if(name.trim() === ''){
      toast.error('El campo Nombre es obligatorio', { position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored", })
        return
    }

    if(animal.trim() === ''){
      toast.error('El campo Animal es obligatorio', { position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored", })
        return
    }

    if(breed.trim() === ''){
      toast.error('El campo Raza es obligatorio', { position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored", })
        return
    }

    if(birthdate.trim() === ''){
      toast.error('El campo Fecha de nacimiento es obligatorio', { position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored", })
        return
    }

    if(weight.trim() === ''){
      toast.error('El campo Peso es obligatorio', { position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored", })
        return
    }

    if(petImage != ""){

      const body = new FormData();

      body.append("image", petImage); 

      await fetch(`${server}/api/images/petPhotos`, {
        method: "POST",
        body
      });
    }
    setIsPosting(true)

    const res = await fetch(`${server}/api/pets/${session.user.username}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: session.user.id,
        name: name,
        animal: animal,
        breed: breed,
        weight: weight,
        birthdate: birthdate,
        username: session.user.username,
        image: petImage ? `/petPhotos/${petImage?.name}` : ""
      })
    }).catch(err => toast.error(`${err}`, { position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored", }))

    

    const data = await res.json()

    if (data.error) {
      toast.error(`Introduzca los campos obligatorios`, { position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored", })
      setIsPosting(false)
    } else {
      toast.success(`La mascota ha sido creada correctamente`, { position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored", })
      Router.push('/profile/myprofile/pets')

    }
  }

  if (status == 'loading') {
    return(
      <>
        <div className={global.loading}><p>Cargando..</p></div>
        <Loader/>
      </>
    ) 
  }
  if (session) {
    return (
      <Layout>
        <Head><title>Crear mascota | Sweet Home</title></Head>
        <div className={global.content}>
          
            <div className='container__form'>
              <div className='form'>
              <div className="container__header">
                <h1 className='title'>Crear mascota</h1>
                <p className={global.text2}>Introduzca los datos de la mascota. Los campos obligatorios vienen indicados con un asterisco *:</p>
              </div>
                <form action='/api/pets' id='form'>
                  <div className='form-vertical__name'>
                    <div className='label'>
                      <p className={global.text}>Nombre (*)</p>
                      <FaUserPlus size={18} color={colors.secondary} />
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
                      <p className={global.text}>Animal (*)</p>
                      <MdPets size={18} color={colors.secondary} />
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
                      <p className={global.text}>Raza (*)</p>
                      <GiSittingDog size={18} color={colors.secondary} />
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
                  <div className='form-vertical__image'>
                    <div className='label'>
                          <p className={global.text}>Seleccionar imagen:</p>
                          <BsImageFill size={18} color={colors.secondary} />
                        </div>
                    <div className='image__input'>
                          <input
                            title='Introducir imagen'
                            type='file'
                            name='image'
                            id='image__input'
                            onChange={(e) => uploadImage(e)}
                            accept='image/png, image/jpeg'
                            placeholder='Ningún archivo seleccionado'
                            className='input'
                          >
                          </input>
                        </div>
                  </div>
                  {isPreviewImage && <FallbackImage src={previewImage} alt="Imagen de previsualización" style={{borderRadius: '20px'}} width={1000} height={700} />}
                  <div className='form-vertical__weight'>
                    <div className='label'>
                      <p className={global.text}>Peso (*)</p>
                      <FaWeight size={18} color={colors.secondary} />
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
                  <div className='form-vertical__birthdate'>
                    <div className='label'>
                      <p className={global.text}>Año de nacimiento (*)</p>
                      <FaBirthdayCake size={18} color={colors.secondary} />
                    </div>
                    <div className='birthdate__input'>
                      <input
                            title='Introducir fecha de nacimiento'
                            type='date'
                            name='birthdate'
                            value={birthdate}
                            onChange={(e) => setBirthdate(e.target.value)}
                            className='input'
                          />
                    </div>
                  </div>
                </form>
                <input className={global.buttonPrimary} type='submit' onClick={(e) => createPet(e)} value={isPosting ? 'Creando..' : 'Crear'} />
              </div>
            </div>
          </div>
        <style jsx>{`

                    .title{

                        /*Box model*/

                        margin-top: 2rem;
                        margin-bottom: 3rem;

                        /*Text*/

                        font-size: 3.5rem;
                        font-weight: 500;
                        font-family: "Satisfy", sans-serif;
                        color: white;
                        text-align: center;
                    }

                    .container__header{

                        /*Box model*/ 

                        display: flex;

                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 2rem;

                    }

                    .container__form{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;

                    }

                    .form{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    
                        width: 65vw;

                        /*Visuals*/

                        background-image: linear-gradient(45deg, rgba(240,129,15, 1) 35%, rgba(249,166,3, 1) 100%);
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

                        border-radius: 20px;
                        border: 1px solid ${colors.primary};
                    }

                    .form-vertical__name{

                        /*Box model*/

                        margin-top: 2rem;
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

                    input[type="text"]:focus {

                    /*Visuals*/

                    border: 2px solid #4d97f7;
                    outline: none;
                    box-shadow: 10px 10px 20px 0px rgba(176,176,176,0.66);

                    }

                    input[type="file"]{

                        /*Box model*/

                        width: 100%;
                        height: 100%;

                        /*Visuals*/

                        border-radius: 20px;
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
                        border-radius: 20px;
                    


                    }

                    input[type="file"]::-webkit-file-upload-button {

                        display: none;

                    }



                    input[type="date"] {

                      /*Box model*/

                      height: 2rem;
                      width: 20rem;
                      padding: 0.4rem;
                      margin-bottom: 2rem;

                      /*Text*/

                      font-family: ${fonts.default};
                      font-size: 1rem;
                      color: ${colors.secondary};

                      /*Visuals*/

                      border-radius: 20px;
                      border: 1px solid ${colors.secondary};
                      background: transparent;

                      }

                      input[type="date"]:focus {

                      /*Visuals*/

                      border: 2px solid #4d97f7;
                      outline: none;
                      box-shadow: 10px 10px 20px 0px rgba(176,176,176,0.66);

                      }

                      input[type="date"]::-webkit-calendar-picker-indicator {

                      /*Visuals*/

                      cursor: pointer;

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

                    border-radius: 20px;
                    border: 1px solid ${colors.primary};

                    }

                    textarea:focus {

                    /*Visuals*/

                    border: 2px solid #4d97f7;
                    outline: none;
                    box-shadow: 10px 10px 20px 0px rgba(176,176,176,0.66);

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

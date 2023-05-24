/* Static imports */

import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { MdLocationOn } from 'react-icons/md'
import { BsImageFill, BsFillChatLeftTextFill } from 'react-icons/bs'
import { colors, fonts } from '../../styles/frontend-conf'
import { toast } from 'react-toastify'
import { server } from '/server'
import Head from 'next/head'
import global from '../../styles/global.module.css'
import dynamic from 'next/dynamic'

/*Dynamic imports*/

const Loader = dynamic(() => import('/components/Loader/Loader'))
const Layout = dynamic(() => import('/components/Layout/Layout'))
const LazyLoad = dynamic(() => import('react-lazyload'))
const FallbackImage = dynamic(() => import('/components/FallbackImage/FallbackImage'))

export default function CreatePost () {

  const { data: session, status } = useSession({ required: true })
  const Router = useRouter()
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [postImage, setPostImage] = useState("")
  const [IsPreviewImage, setIsPreviewImage] = useState(false)
  const [previewImage, setPreviewImage] = useState("")
  const [typePost, setTypePost] = useState('Normal')
  const [isPosting, setIsPosting] = useState(false)
  const [message, setMessage] = useState('')

 
  /**
   * The function uploads an image and sets it as the post image.
   * @param e - The parameter "e" is an event object that is passed to the function when it is called.
   * It represents the event that triggered the function, in this case, the "change" event of an input
   * element that allows the user to upload an image file.
   */
  const uploadImage = async (e) => {


    if (e.target.files && e.target.files[0]) {


          const imageUploaded = e.target.files[0]

          const reader = new FileReader()

          reader.readAsDataURL(imageUploaded)

          reader.onload = () => {

            const imageData = reader.result

            setPostImage(imageData)
            setPreviewImage(imageData)
      
          }
          console.log(previewImage)
          setIsPreviewImage(true)
    }
  }


  /**
   * It creates a post in the database
   * @param e - the event object
   */
  const createPost = async (e) => {
    
    e.preventDefault()

    if(description.trim() === ''){
      toast.error('El campo descripción es obligatorio', { position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored", })
        return
    }

    const res = await fetch(`${server}/api/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: session.user.id,
        location,
        description,
        username: session.user.username,
        image: postImage,
        type: typePost
      })
    }).catch(err => console.log(err))

    const data = await res.json()

    if (data.error) {
      console.log(data.error)
      setMessage('Introduzca los campos obligatorios')
    } else {
      toast.success('Se ha publicado correctamente', { position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored", })
      setMessage('Publicación creada correctamente')

        Router.push(`${server}/home`)

    }
  }

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
        <Head><title>Crear publicación | Sweet Home</title></Head>
          
          <div className="form__position">
            <div className='form'>

              <div className="create__header">
                <h1 className="form__title">Crear publicación</h1>
                <p className={global.text2}>Introduzca los datos de la publicación. Los campos obligatorios vienen indicados con un asterisco *:</p>
              </div>
              <form action='/api/posts' id='form' enctype='multipart/form-data'>
                <div className='form-vertical__location'>
                  <div className='label'>
                    <p className={global.text}>Ubicación</p>
                    <MdLocationOn size={25} color={colors.secondary} />
                  </div>
                  <div className='location__input'>
                    <input
                          title='Introducir ubicación'
                          type='text'
                          name='location'
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          placeholder='p. ej.: Cádiz'
                          className='input'
                         />
                  </div>
                </div>
                <div className='form-vertical__description'>
                  <div className='label'>
                    <p className={global.text}>Descripción (*)</p>
                    <BsFillChatLeftTextFill size={25} color={colors.secondary} />
                  </div>
                  <div className='description__input'>
                    <textarea
                          title='Introducir descripción'
                          name='Description'
                          value={description}
                          required
                          onChange={(e) => setDescription(e.target.value)}
                          placeholder='p. ej.: Esta es mi mascota...'
                        />
                  </div>
                  </div>
                  <div className='form-vertical__image'>
                    <div className='label'>
                          <p className={global.text}>Seleccionar imagen:</p>
                          <BsImageFill size={25} color={colors.secondary} />
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
                  {IsPreviewImage && <FallbackImage src={previewImage} alt="Imagen de previsualización" style={{borderRadius: '20px'}} width={1000} height={700} />}
                  <div className='form-vertical__typePost'>
                    <label className="label">
                      <p className={global.text}>Elige el tipo de publicación:</p>
                    </label>
                    <select name="type" onChange={(e) => setTypePost(e.target.value)} required>
                        <option default value="Normal">Normal</option>
                        <option value="Fauna silvestre">Fauna silvestre</option>
                        <option value="Adopción">Adopción</option>
                        <option value="Animal abandonado">Animal abandonado</option>
                        <option value="Animal perdido">Animal perdido</option>
                    </select>
                </div>
              </form>
              <input className={global.buttonPrimary} type='submit' onClick={(e) => createPost(e)} value={isPosting ? 'Creando..' : 'Crear'} />
            </div>
          </div>
        <style jsx>{`

                    .form{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        width: 70vw;

                        /*Visuals*/

                        background-image: linear-gradient(180deg, rgba(240,129,15, 1) 35%, rgba(249,166,3, 1) 200%);
                        border-radius: 20px;
                        
                    }

                    .form__position{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }

                    .create__header{

                        /*Box model*/

                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 3rem;
                    }

                    .form__title{

                        /*Box model*/

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;

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
                        border: 2px solid ${colors.primary};
                    }

                    .form-vertical__location {

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

                    h1{
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

                   select{

                      /*Box model*/

                      width: 40rem;
                      height: 2rem;
                      margin-bottom: 2rem;

                      /*Text*/

                      font-family: ${fonts.default};
                      font-size: 1rem;

                      /*Visuals*/

                      border-radius: 20px;
                      border: 1px solid ${colors.primary};

                    }

                    input[type="text"]:focus {

                        /*Visuals*/

                        border: 2px solid #4d97f7;
                        outline: none;
                        box-shadow: 10px 10px 20px 0px rgba(176,176,176,0.66);

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

                        border-radius: 20px;
                        background-color: transparent;
                        border: 2px solid ${colors.secondary};
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

                    border-radius: 20px;
                    border: 2px solid ${colors.primary};

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

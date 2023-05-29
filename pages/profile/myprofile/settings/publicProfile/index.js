/* Static imports */

import { useSession, getSession, signIn, signOut } from 'next-auth/react'
import { useState } from 'react'
import {useRouter} from 'next/router'
import { colors, statusColors, fonts } from 'styles/frontend-conf.js'
import { FaUserPlus, FaBirthdayCake } from 'react-icons/fa'
import { MdOutlineError, MdLocationOn, MdClose } from 'react-icons/md'
import { BsFillFileTextFill, BsFillCheckCircleFill, BsImageFill} from 'react-icons/bs'
import { server } from '/server'
import {toast} from 'react-toastify'
import Head from 'next/head'
import global from 'styles/global.module.css'
import dynamic from 'next/dynamic'

/* Dynamic imports */

const Loader = dynamic(() => import('/components/Loader/Loader'))
const Layout = dynamic(() => import('/components/Layout/Layout'))
const DatePicker = dynamic(() => import("react-multi-date-picker"))
const FallbackImage = dynamic(() => import('/components/FallbackImage/FallbackImage'))
const SettingsLayout = dynamic(() => import('/components/SettingsLayout/SettingsLayout'))
const LazyLoad = dynamic(() => import('react-lazyload'))
const Modal = dynamic(() => import('/components/Modal/Modal'))

export default function PublicProfile ({users}) {

  const { data: session, status } = useSession({ required: true })


  const [name, setName] = useState(users?.firstname)
  const [lastname, setLastname] = useState(users?.lastname)
  const [biography, setBiography] = useState(users?.biography)
  const [birthdate, setBirthdate] = useState(new Date(users?.birthdate))
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [location, setLocation] = useState(users?.location)
  const [image, setImage] = useState(users?.image)
  const [banner, setBanner] = useState(users?.banner)
  const [imageURL, setImageURL] = useState(users?.image)
  const [bannerURL, setBannerURL] = useState(users?.banner)
  const [isValidate, setIsValidate] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [previewImage, setPreviewImage] = useState(users?.image)
  const [previewBanner, setPreviewBanner] = useState(users?.banner)
  const [isPreviewImage, setIsPreviewImage] = useState(users?.image != "" ? true : false)
  const [isPreviewBanner, setIsPreviewBanner] = useState(users?.banner != "" ? true : false)

  let today = new Date()


 
 
  const uploadImage = async (e) => {


    if (e.target.files && e.target.files[0]) {

      const imageUploaded = e.target.files[0]

      setImage(imageUploaded)

      setImageURL(`/userPhotos/${imageUploaded?.name}`)


      setPreviewImage(URL.createObjectURL(imageUploaded))

    }
  }

  const uploadBanner = async (e) => {

    if (e.target.files && e.target.files[0]) {

      const bannerUploaded = e.target.files[0]

      setBanner(bannerUploaded)

      setBannerURL(`/bannerPhotos/${bannerUploaded?.name}`)

      setPreviewBanner(URL.createObjectURL(bannerUploaded))

    }
  }


  const validate = (e) => {
    // Regular expressions

    const regName = /^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/
    const regLastname = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/
    


      if (!name.match(regName)) {
        document.getElementById('name__error').classList.add('form__input-nameError--active')
        document.getElementById('success__name').classList.remove('form__success-icon--active')
        setIsValidate(false)
      } else {
        document.getElementById('name__error').classList.remove('form__input-nameError--active')
        document.getElementById('success__name').classList.add('form__success-icon--active')
        setIsValidate(true)
      }
    


      if (!regLastname.test(lastname)) {
        document.getElementById('lastname__error').classList.add('form__input-lastnameError--active')
        document.getElementById('success__lastname').classList.remove('form__success-icon--active')
        setIsValidate(false)
      } else {
        document.getElementById('lastname__error').classList.remove('form__input-lastnameError--active')
        document.getElementById('success__lastname').classList.add('form__success-icon--active')
        setIsValidate(true)
      }




  }

  /**
   * It deletes the user's account from the database and signs them out
   * @param e - the event object
   */
  const deleteAccount = async (e) => {


    await fetch(`${server}/api/users/${session?.user.username}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).catch(err => console.log(err))

    toast.error(`Se ha eliminado la cuenta correctamente`, { position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored", })
    
      signOut()
  }




  const edit = async (e) => {

    e.preventDefault()

    if (isValidate) {

      setIsEditing(true)

      if (e.target.files && e.target.files[0]) {

        const body = new FormData();

        const formBanner = new FormData();
  
        formBanner.append("banner", banner);

        body.append("image", image); 
          
        await fetch(`${server}/api/images/userPhotos`, {
          method: "POST",
          body
        }); 

  
        await fetch(`${server}/api/images/bannerPhotos`, {
          method: "POST",
          body: formBanner
        });

      }

      await fetch(`${server}/api/users/${session?.user.username}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstname: name ,
          lastname: lastname,
          biography: biography ,
          location: location ,
          birthdate: birthdate ,
          image: imageURL,
          banner: bannerURL
        })
      })

      

      toast.success(`Se han guardado los datos`, { position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored", })
      setIsEditing(false)
    } else {

      toast.error(`Introduzca los datos correctamente`, { position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored", })
    }

  }





  if (status === 'loading') {
    return (
      <>
        <div className={global.loading}><p>Cargando..</p></div>
        <Loader />
      </>
    )
  }
  if(session){
    return (
      <SettingsLayout>
      <Head><title>Editar perfil público | Sweet Home</title></Head>
      <div className='settings'>
        <div className='form-page'>
          <h1 className={global.title}>Editar perfil público </h1>
          <p className={global.text}>Los usuarios que visiten tu perfil público podrán ver la siguiente información:</p>
          <form className='form-vertical' action='/api/users' enctype='multipart/form-data'>
            <div className="profilePic">
              {isPreviewImage && <FallbackImage src={previewImage} alt="Imagen de previsualización" style={{borderRadius: '100px'}} width={150} height={150} />}
            
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
                  </div>
                  <div className='form-vertical__banner'>
                    <div className='label'>
                          <p className={global.text}>Seleccionar banner:</p>
                          <BsImageFill size={18} color={colors.secondary} />
                        </div>
                    <div className='banner__input'>
                          <input
                            title='Introducir imagen'
                            type='file'
                            name='image'
                            id='image__input'
                            onChange={(e) => uploadBanner(e)}
                            accept='image/png, image/jpeg'
                            placeholder='Ningún archivo seleccionado'
                            className='input'
                          >
                          </input>
                        </div>
                  </div>
                  {isPreviewImage && <FallbackImage src={previewBanner} alt="Imagen de previsualización" style={{borderRadius: '20px'}} width={2500} height={600} />}
            <div className="form-vertical__nameBlock">
              <div className='form-vertical__name'>
                <div className='label'>
                  <p className={global.text}>Nombre</p>
                  <FaUserPlus size={18} color={colors.secondary} />
                </div>
                <div className='name__input'>
                  <input
                    title='Introducir nombre'
                    type='text'
                    name='name'
                    id='name'
                    value={name}
                    required
                    placeholder="Escriba su nombre"
                    onChange={(e) => setName(e.target.value)}
                    onKeyUp={(e) => validate(e)}
                    onBlur={(e) => validate(e)}
                    className='input'
                  />
                  <div id='success__name' className='form__success-icon'><BsFillCheckCircleFill size={20} color={statusColors.success} /></div>
                </div>
                
              </div>
              <div className='form-vertical__lastname'>
                <div className='label'>
                  <p className={global.text}>Apellidos</p>
                  <FaUserPlus size={20} color={colors.secondary} />
                </div>
                <div className='lastname__input'>
                  <input
                    title='Introducir apellidos'
                    type='text'
                    name='lastname'
                    id='lastname'
                    value={lastname}
                    placeholder="Escriba sus apellidos"
                    required
                    onChange={(e) => setLastname(e.target.value)}
                    onKeyUp={(e) => validate(e)}
                    onBlur={(e) => validate(e)}
                    className='input'
                  />
                  <div id='success__lastname' className='form__success-icon'><BsFillCheckCircleFill size={20} color={statusColors.success} /></div>
              </div>
              
            </div>
            </div>
            <div className="errors">
              <div id='name__error' className='form__input-nameError'>
                      <div className='error__icon'>
                        <MdOutlineError size={18} color={colors.secondary} />
                      </div>
                      <p className={global.text2}>No puede contener dígitos o caracteres especiales.</p>
                    </div>
              <div id='lastname__error' className='form__input-lastnameError'>
                      <div className='error__icon'>
                        <MdOutlineError size={18} color={colors.secondary} />
                      </div>
                      <p className={global.text2}>No puede contener dígitos o caracteres especiales.</p>
                    </div>
                </div>

            
           
            <div className='form-vertical__location'>
              <div className='label'>
                <p className={global.text}>Ubicación</p>
                <MdLocationOn size={20} color={colors.secondary} />
              </div>
              <div className='location__input'>
                <input
                  title='Introducir ubicación'
                  type='text'
                  name='location'
                  id='location'
                  placeholder="Escriba su ubicación"
                  value={location}
                  required
                  onChange={(e) => setLocation(e.target.value)}
                  className='input'
                />
                <div id='success__location' className='form__success-icon'><BsFillCheckCircleFill size={20} color={statusColors.success} /></div>
              </div>
              
            </div>
            <div id='location__error' className='form__input-locationError'>
                  <div className='error__icon'>
                    <MdOutlineError size={30} color={colors.secondary} />
                  </div>
                  <p className={global.text2}>No puede contener dígitos o caracteres especiales.</p>
                </div>
            <div className='form-vertical__biography'>
              <div className='label'>
                <p className={global.text}>Biografía</p>
                <BsFillFileTextFill size={20} color={colors.secondary} />
              </div>
              <textarea
                title='Introducir biografía'
                name='Biography'
                id='biography'
                value={biography}
                placeholder="Escriba su biografía"
                onChange={(e) => setBiography(e.target.value)}
              />
            </div>

            <div className='form-vertical__birthdate'>
                    <div className='label'>
                      <p className={global.text}>Fecha de nacimiento</p>
                      <FaBirthdayCake size={18} color={colors.secondary} />
                    </div>
                    <div className='birthdate__input'>
                      <DatePicker
                            title='Introducir fecha de nacimiento'
                            name='birthdate'
                            value={birthdate}
                            onChange={setBirthdate}
                            selected={birthdate}
                            format="DD/MM/YYYY"
                            maxDate={new Date(today.getFullYear() - 4, today.getMonth(), today.getDate())}
                            style={{
                              backgroundColor: `${colors.primary}`,
                              height: "2rem",
                              color: "#fafafa",
                              border: "2px solid #fafafa",
                              borderRadius: "20px",
                              fontFamily: "Poppins",
                              fontSize: "1rem",
                              padding: "3px 10px"
                            }}
                          />
                    </div>
                  </div>
          </form>
          <div className="action__buttons">
            <input className={global.buttonPrimary} type='submit' onClick={(e) => edit(e)} value={isEditing ? 'Aplicando..' : 'Aplicar cambios'} />   
            <button className={global.buttonDelete2} onClick={() => setIsModalVisible(true)}>Eliminar cuenta</button>
            </div>
          </div>
        </div>
        {isModalVisible && <Modal>
            <button className="close__modal" onClick={() => setIsModalVisible(false)}><MdClose size={30} color={`${colors.secondary}`}/></button>
            <h2 className={global.title3}>Eliminar cuenta</h2>
            <p className={global.text2}>Eliminando la cuenta, será eliminados todos sus datos de la aplicación</p>
            <p className={global.text2__bold}>¿Estás seguro de eliminar la cuenta?</p>
            <div className='buttons'>
              <button className={global.buttonSecondary} onClick={() => deleteAccount()}>Sí</button>
              <button className={global.buttonTertiary} onClick={() => setIsModalVisible(false)}>No</button>
            </div>
          </Modal>}


      <style jsx>{`


              .settings{


                  /*Box model*/

                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  gap: 2rem;

                  /*Visuals*/

                  border-radius: 20px;

              }

               .close__modal{

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-self: flex-end;
                margin-right: 2rem;

                /*Visuals*/

                border: none;
                background: transparent;
                cursor: pointer;

                }

              .action__buttons{

                /*Box model*/

                display: flex;
                flex-direction: row;
                gap: 1rem;
              }

              .banner__input{

                margin-bottom: 2rem;
              }

              .date__input{

                /*Visuals*/

                

              }

              .profilePic{

                  /*Box model*/

                  display: flex;
                  flex-direction: row;
                  gap: 2rem;
                  align-items: center;
              }

              .errors{

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 5rem;
              }


              .buttons{

                  /*Box model*/

                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  gap: 1rem;

              }

              .config__style{

                  /*Box model*/

                  display: flex;
                  flex-direction: column;
                  margin-bottom: 1rem;

                  /*Text*/

                  font-size: 1.5rem;
                  font-weight: 600;
                  border: none;
                  color: ${colors.primary};
                  background-color: transparent;
                  font-family: "Poppins", sans-serif;
                  text-decoration: none;

              }

              .active, .config__style:hover{

                  /*Box model*/

                  padding: 0.5rem;

                  /*Text*/

                  color: ${colors.secondary};
                  cursor: pointer;

                  /*Visuals*/

                  background-color: ${colors.primary};
                  border-radius: 20px;
                  transition: 0.3s ease all;


              }

              .config__style:focus{

                    /*Box model*/

                    padding: 0.5rem;

                    /*Text*/

                    color: ${colors.secondary};
                    cursor: pointer;

                    /*Visuals*/

                    background-color: ${colors.primary};
                    border-radius: 20px;
                    transition: 0.3s ease all;

              }

              .settings__buttons{

                  /*Box model*/

                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  gap: 1rem;

              }

              .name__input{


                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                width: 20rem;
                gap: 1rem;

              }

              .lastname__input{


                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                width: 20rem;
                gap: 1rem;

              }

              .phone__input{


              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
              width: 20rem;
              gap: 1rem;

            }
              

          .form__text{

            /*Box model*/

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 2rem;
            margin-bottom: 2rem;

          }


          .form-page{

            /*Box model*/
            
            display: flex;
            flex-direction: column;
            

          }

          .form-vertical {


                /*Box model*/

                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-top: 2rem;
                margin-bottom: 2rem;
                width: 50vw;
                padding: 5rem;

                /*Visuals*/

                background: linear-gradient(45deg, rgba(240,129,15,1) 35%, rgba(249,166,3,1) 100%);
                border-radius: 20px;
                
          }

          .input{

          /*Box model*/


          height: 2rem;
          padding: 0.4rem;
          margin-bottom: 1rem;


          /*Text*/

          font-family: ${fonts.default};
          font-size: 1rem;
          color: ${colors.secondary};

          /*Visuals*/

          border-radius: 20px;
          border: 2px solid ${colors.secondary};
          }

          .form-vertical__nameBlock{


            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
          }

          .form-vertical__image {

            /*Box model*/

            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            margin-bottom: 2rem;

          }


          .form-vertical__name {

              /*Box model*/

              display: flex;
              flex-direction: column;
              justify-content: center;

          }

          .form-vertical__lastname {

              /*Box model*/

              display: flex;
              flex-direction: column;
              justify-content: center;

          }

          .form-vertical__phone {

            /*Box model*/

            display: flex;
            flex-direction: column;
            justify-content: center;

            }

            .form-vertical__biography {

            /*Box model*/

            display: flex;
            flex-direction: column;
            justify-content: center; 

            /*Text*/


            color: ${colors.secondary};

            }

            .form-vertical__birthdate{

            /*Box model*/

            display: flex;
            flex-direction: column;
            justify-content: center;

            }



        .form__link{

            /*Text*/

            font-family: ${fonts.default};
            color: ${colors.secondary};
            text-decoration: none;
            font-size: 1rem;
            font-weight: 400;
        }

        .form__link:hover{

            /*Text*/

            color: ${colors.tertiary};
            transition: all 0.5s ease-in-out;
          }

          /*ERRORES*/

          .form__input-nameError{

            /*Position*/

            position: relative;

            /*Box model*/

            display: none;
            flex-direction: row;
            align-items: center;
            margin-bottom: 2rem;



            /*Text*/

            font-family: 'Poppins', sans-serif;
            color: #fafafa;

            /*Visuals*/

            border-radius: 20px;
            background-color: ${statusColors.error};
            opacity: 0;

            }


            .form__input-nameError p{

            /*Box model*/

            margin-left: 2rem;

            }

            .form__input-nameError--active{

            /*Position*/

            position: relative;

            

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            width: 15rem;
            margin-bottom: 2rem;


            /*Text*/

            font-family: 'Poppins', sans-serif;
            color: #fafafa;

            /*Visuals*/

            border-radius: 20px;
            background-color: ${statusColors.error};
            opacity: 1;

            }


            .form__input-lastnameError{

            /*Position*/

            position: relative;

            /*Box model*/

            display: none;
            flex-direction: row;
            align-items: center;
            margin-bottom: 2rem;


            /*Text*/

            font-family: 'Poppins', sans-serif;
            color: #fafafa;

            /*Visuals*/

            border-radius: 20px;
            background-color: ${statusColors.error};
            opacity: 0;

            }


            .form__input-lastnameError p{

            /*Box model*/

            margin-left: 2rem;

            }

            .form__input-lastnameError--active{

            /*Position*/

            position: relative;

            

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 2rem;


            /*Text*/

            font-family: 'Poppins', sans-serif;
            color: #fafafa;

            /*Visuals*/

            border-radius: 20px;
            background-color: ${statusColors.error};
            opacity: 1;

            }

            .form__input-locationError{

            /*Position*/

            position: relative;

            /*Box model*/

            display: none;
            flex-direction: row;
            align-items: center;
            margin-bottom: 2rem;



            /*Text*/

            font-family: 'Poppins', sans-serif;
            color: #fafafa;

            /*Visuals*/

            border-radius: 20px;
            background-color: ${statusColors.error};
            opacity: 0;

            }


              .form__input-locationError p{

              /*Box model*/

              margin-left: 2rem;

              }

              .form__input-locationError--active{

              /*Position*/

              position: relative;             

              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
              margin-bottom: 2rem;

              /*Text*/

              font-family: 'Poppins', sans-serif;
              color: #fafafa;

              /*Visuals*/

              border-radius: 20px;
              background-color: ${statusColors.error};
              opacity: 1;

              }

              .submit__error{

              /*Box model*/

              display: none;

              /*Text*/

              font-family: 'Poppins', sans-serif;
              color: ${colors.secondary};

              /*Visuals*/

              background-color: ${statusColors.error};

              }

              .submit__error--active{

              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: 0.5rem;
              width: 65%;

              /*Text*/

              font-family: 'Poppins', sans-serif;
              color: ${colors.secondary};

              /*Visuals*/

              border-radius: 20px;
              background-color: ${statusColors.error};

              }

              .submit__error--active2{

              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: 0.5rem;
              width: 65%;

              /*Text*/

              font-family: 'Poppins', sans-serif;
              color: ${colors.secondary};

              /*Visuals*/

              border-radius: 20px;
              background-color: ${statusColors.success};

              }


            .error__icon{

            /*Box model*/

            margin-left: 0.5rem;

            }

            .form__error-icon{

              /*Position*/

              position: relative;
              bottom: 0.9rem;
              left: 0.1rem;
              z-index: 999;

              /*Visuals*/

              opacity: 0;
              color: ${statusColors.error};


            }

          .form__success-icon{

          /*Position*/

          position: relative;
          right: 0.1rem;
          bottom: 0.9rem;
          z-index: 999;

          /*Visuals*/

          opacity: 0;
          color: ${statusColors.success};

          }

          .form__error-icon--active{

          /*Position*/

          position: relative;
          bottom: 0.9rem;
          z-index: 999;

          /*Visuals*/

          opacity: 1;
          color: ${statusColors.error};

          }

          .form__success-icon--active{

          /*Position*/

          position: relative;
          right: 0.1rem;
          bottom: 0.9rem;
          z-index: 999;

          /*Visuals*/

          opacity: 1;
          color: ${statusColors.success};

          }


          .label{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 1rem;
            
            /*Text*/

            font-family: ${fonts.default};
            color: ${colors.secondary};
            

          }

          .selector{

            /*Box model*/

            width: 100%;

            /*Text*/

            font-family: ${fonts.default};
            font-size: 1rem;
            color: ${colors.secondary};
            
            /*Visuals*/

            background: transparent;
            border-radius: 5px;
            border: 1px solid ${colors.secondary};

          }

          .image__input{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            height: 1.5rem;
            padding: 1rem;

          }

          .banner__input{

          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          height: 1.5rem;

          }


          p {

              /*Box model*/

              margin-right: 1rem;

              /*Text*/

              font-size: 1rem;
              font-family: ${fonts.default};
              
          }

          h6{

              /*Box model*/

              margin-right: 1rem;

              /*Text*/

              font-size: 0.8rem;
              font-weight: 500;
              font-family: ${fonts.default};
              color: ${colors.primary};
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


          h1{
                      /*Text*/

                      font-size: 3.5rem;
                      font-weight: 600;
                      background-color: ${colors.primary};
                      font-family: "Archivo Black", sans-serif;
                      background-image: linear-gradient(45deg, #f0810f, #ffe45c);
                      background-repeat: repeat;
                      -webkit-background-clip: text;
                      -webkit-text-fill-color: transparent; 
                      background-size: 100%
                      
                }


            ::placeholder {

              /*Text*/

              color: ${colors.secondary};
            }

            input[type="text"] {

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
              border: 2px solid ${colors.secondary};
              background: transparent;

            }

            input[type="text"]:focus {

            /*Visuals*/

            border: 2px solid #4d97f7;
            outline: none;
            box-shadow: 10px 10px 20px 0px rgba(176,176,176,0.66);

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

            input[type="submit"]{

              /*Box model*/

              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 2rem;

            }

            textarea{

              /*Box model*/

              height: 10rem;
              width: 25rem;
              padding: 0.4rem;
              margin-bottom: 2rem;

              /*Text*/

              font-family: ${fonts.default};
              font-size: 1rem;
              color: ${colors.secondary};


              /*Visuals*/

              border-radius: 20px;
              border: 2px solid ${colors.secondary};
              background: transparent;

            }

            textarea:focus {

            /*Visuals*/

            border: 2px solid #4d97f7;
            outline: none;
            box-shadow: 10px 10px 20px 0px rgba(176,176,176,0.66);

            }

            a{

              /*Text*/

              text-decoration: none;
              color: ${colors.secondary};
            }

   
          
          `}
      </style>
    </SettingsLayout>
    )
  } else {
    return (
      <Layout>
        <div className={global.content}>
          <div className='message'>
            <h1 className={global.title7}>Para acceder a esta página debe ser administrador de Sweet Home</h1>
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

export async function getServerSideProps (context) {

  context.res.setHeader('Cache-Control','public, s-maxage=10, stale-while-revalidate=59')


  const session = await getSession(context)

  
    const res = await fetch(`${server}/api/users/${session?.user.username}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

  const user = await res.json()


  return {
    props: {
      users: JSON.parse(JSON.stringify(user))
    }
  }
}
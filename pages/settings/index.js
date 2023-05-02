import Head from 'next/head'
import { useSession, signOut, signIn } from 'next-auth/react'
import { useState, useEffect } from 'react'
import global from 'styles/global.module.css'
import { colors, statusColors, fonts } from 'styles/frontend-conf.js'
import { FaUserPlus, FaBirthdayCake } from 'react-icons/fa'
import { AiFillPhone } from 'react-icons/ai'
import { MdOutlineError, MdLocationOn } from 'react-icons/md'
import { BsGenderAmbiguous, BsFillFileTextFill, BsFillXCircleFill, BsFillCheckCircleFill, BsImageFill, BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs'
import Layout from '/components/Layout/Layout'
import Modal from '/components/Modal/Modal'
import { server } from '/server'
import {toast} from 'react-toastify'
import Loader from '/components/Loader/Loader'

export default function Settings () {

  const { data: session, status } = useSession({ required: true })
  
  const [userImage, setUserImage] = useState('')
  const [bannerImage, setBannerImage] = useState('')
  const [user, setUser] = useState({})
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [phone, setPhone] = useState('')
  const [biography, setBiography] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [gender, setGender] = useState('')
  const [location, setLocation] = useState('')
  const [links, setLinks] = useState({Instagram: "", Twitter: "", Facebook: ""})
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isValidate, setIsValidate] = useState(true)
  const [maxDate, setMaxDate] = useState('')
  const [complaints, setComplaints] = useState([])
  const [pets, setPets] = useState([])

  const uploadImage = async (e) => {


    if (e.target.files && e.target.files[0]) {


          const imageUploaded = e.target.files[0]

          const reader = new FileReader()

          reader.readAsDataURL(imageUploaded)

          reader.onload = () => {

            const imageData = reader.result

            setUserImage(imageData)
      
          }

    }
  }

  const uploadBanner = async (e) => {


    if (e.target.files && e.target.files[0]) {


          const imageUploaded = e.target.files[0]

          const reader = new FileReader()

          reader.readAsDataURL(imageUploaded)

          reader.onload = () => {

            const imageData = reader.result

            setBannerImage(imageData)
      
          }

    }
  }

  /* The above code is fetching the user's complaints, pets, and user information from the database. */
  async function getData(){

      const complaints = await fetch(`${server}/api/complaints/${session.user.username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const pets = await fetch(`${server}/api/pets/${session.user.username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const currentUser = await fetch(`${server}/api/users/${session.user.username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      document.getElementById('birthdate').valueAsDate = new Date(currentUser.birthdate)

      const complaintsList = JSON.parse(JSON.stringify(complaints.json()));
      const petsList = JSON.parse(JSON.stringify(pets.json()));


      setComplaints(complaintsList)
      setPets(petsList)
      setUser(currentUser)
      setName(currentUser.firstname)
      setLastname(currentUser.lastname)
      setPhone(currentUser.phone)
      setBiography(currentUser.biography)
      setBirthdate(currentUser.birthdate)
      setGender(currentUser.gender)
  
  }
  useEffect(() => {
    if(session){
      getData()
    }
    
  }, [])

  /**
   * It returns the current date minus 4 years
   * @returns The current date minus 4 years.
   */
  const calcDate = () => {
    const date = new Date()
    const year = date.getFullYear() - 4
    const month = date.getMonth() + 1
    const day = date.getDate()
    const maxDate = year + '-' + month + '-' + day

    return maxDate
  }

  /**
   * It checks if the input is valid and if it is, it adds a class to the input and the icon to show
   * that it's valid. If it's not, it adds a class to the input and the icon to show that it's not
   * valid
   * @param e - event
   */
  const validate = (e) => {
    // Regular expressions

    const regName = /^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/
    const regLastname = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/
    const regPhone = /^(?:6[0-9]|7[1-9])[0-9]{7}$/

    if (e.target.name == 'name' && e.target.value != undefined && e.target.value!== '') {
      if (!name.match(regName)) {
        document.getElementById('name__error').classList.add('form__input-nameError--active')
        document.getElementById('error__name').classList.add('form__error-icon--active')
        document.getElementById('success__name').classList.remove('form__success-icon--active')
        setIsValidate(false)
      } else {
        document.getElementById('name__error').classList.remove('form__input-nameError--active')
        document.getElementById('error__name').classList.remove('form__error-icon--active')
        document.getElementById('success__name').classList.add('form__success-icon--active')
        setIsValidate(true)
      }
    }

    if (e.target.name == 'lastname' && e.target.value != undefined && e.target.value!== '') {
      if (!regLastname.test(lastname)) {
        document.getElementById('lastname__error').classList.add('form__input-lastnameError--active')
        document.getElementById('error__lastname').classList.add('form__error-icon--active')
        document.getElementById('success__lastname').classList.remove('form__success-icon--active')
        setIsValidate(false)
      } else {
        document.getElementById('lastname__error').classList.remove('form__input-lastnameError--active')
        document.getElementById('error__lastname').classList.remove('form__error-icon--active')
        document.getElementById('success__lastname').classList.add('form__success-icon--active')
        setIsValidate(true)
      }
    }

    if (e.target.name == 'phone' && e.target.value != undefined && e.target.value!== '') {
      if (phone.length < 9 || phone.length > 9 || !regPhone.test(phone)) {
        document.getElementById('phone__error').classList.add('form__input-phoneError--active')
        document.getElementById('error__phone').classList.add('form__error-icon--active')
        document.getElementById('success__phone').classList.remove('form__success-icon--active')
        setIsValidate(false)
      } else {
        document.getElementById('phone__error').classList.remove('form__input-phoneError--active')
        document.getElementById('error__phone').classList.remove('form__error-icon--active')
        document.getElementById('success__phone').classList.add('form__success-icon--active')
        setIsValidate(true)
      }
    }
  }

  /**
   * It deletes the user's account from the database and signs them out
   * @param e - the event object
   */
  const deleteAccount = async (e) => {
    e.preventDefault()

    await fetch(`${server}/api/users/${session.user.username}`, {
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

  /**
   * It's a function that changes the display of the different sections of the page depending on the
   * button that was clicked
   * @param e - The event that triggers the function.
   */
  const handleClick = (e) => {
    const edit = document.querySelector('.form-page')
    const saved = document.querySelector('.saved')
    const complaints = document.querySelector('.complaints')
    const pets = document.querySelector('.pets')

    document.getElementById('edit').classList.remove('active')

    if (e === 'Editar') {
      const button = document.querySelector('#edit')
      edit.style.display = 'block'
      saved.style.display = 'none'
      complaints.style.display = 'none'
      pets.style.display = 'none'
      button.addEventListener('click', () => {
        button.focus()
      })
    } else if (e === 'Guardados') {
      const button = document.querySelector('#saved')
      edit.style.display = 'none'
      saved.style.display = 'block'
      complaints.style.display = 'none'
      pets.style.display = 'none'
      button.addEventListener('click', () => {
        button.focus()
      })
    } else if (e === 'Denuncias') {
      const button = document.querySelector('#complaints')
      edit.style.display = 'none'
      saved.style.display = 'none'
      complaints.style.display = 'block'
      pets.style.display = 'none'
      button.addEventListener('click', () => {
        button.focus()
      })
    } else if (e === 'Mascotas') {
      const button = document.querySelector('#pets')
      edit.style.display = 'none'
      saved.style.display = 'none'
      complaints.style.display = 'none'
      pets.style.display = 'block'
      button.addEventListener('click', () => {
        button.focus()
      })
    }
  }

  /**
   * It's a function that sends a request to the server to update the user's information
   * @param e - the event object
   */
  const edit = async (e) => {

    e.preventDefault()

    if (isValidate) {

      await fetch(`${server}/api/users/${session.user.username}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstname: name !== user.firstname ? name : user.firstname,
          lastname: lastname !== user.lastname ? lastname : user.lastname,
          phone: phone !== user.phone ? phone : user.phone,
          biography: biography !== user.biography ? biography : user.biography,
          location: location !== user.location ? location : user.location,
          links: links !== user.links ? links : user.links,
          birthdate: birthdate !== user.birthdate ? birthdate : user.birthdate,
          gender: gender !== user.gender ? gender : user.gender,
          image: userImage
        })
      }).catch(err => console.log(err))

      toast.success(`Se han guardado los datos`, { position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored", })

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
  if (session) {
    return (
      <Layout>
        <Head><title>Configuración</title></Head>
        <div className='settings'>
          <div className='form-page'>
            <h1 className={global.title}>Editar perfil</h1>
            <form className='form-vertical' action='/api/users' enctype='multipart/form-data'>
            <div className='form-vertical__image'>
                    <div className='label'>
                          <p className={global.text}>Imagen de perfil:</p>
                          <BsImageFill size={20} color={colors.secondary} />
                        </div>
                    <div className='image__input'>
                          <input
                            title='Introducir imagen'
                            type='file'
                            name='image'
                            id='image__input'
                            onChange={(e) => uploadImage(e)}
                            accept='image/png, image/jpeg, image/jpg'
                            placeholder='Ningún archivo seleccionado'
                            className='input'
                          >
                          </input>
                        </div>
                  </div>
                  <div className='form-vertical__banner'>
                    <div className='label'>
                          <p className={global.text}>Banner:</p>
                          <BsImageFill size={20} color={colors.secondary} />
                        </div>
                    <div className='banner__input'>
                          <input
                            title='Introducir banner'
                            type='file'
                            name='banner'
                            id='banner__input'
                            onChange={(e) => uploadBanner(e)}
                            accept='image/png, image/jpeg, image/jpg'
                            placeholder='Ningún archivo seleccionado'
                            className='input'
                          >
                          </input>
                        </div>
                  </div>
              <div className='form-vertical__name'>
                <div className='label'>
                  <p className={global.text}>Nombre</p>
                  <FaUserPlus size={20} color={colors.secondary} />
                </div>
                <div className='name__input'>
                  <input
                    title='Introducir nombre'
                    type='text'
                    name='name'
                    id='name'
                    value={user.firstname}
                    required
                    onChange={(e) => setName(e.target.value)}
                    onKeyUp={(e) => validate(e)}
                    onBlur={(e) => validate(e)}
                    placeholder={`${name}`}
                    className='input'
                  >{user.firstname}</input>
                  <div id='error__name' className='form__error-icon'><BsFillXCircleFill size={20} color={statusColors.error} /></div>
                  <div id='success__name' className='form__success-icon'><BsFillCheckCircleFill size={20} color={statusColors.success} /></div>
                  <div id='name__error' className='form__input-nameError'>
                    <div className='error__icon'>
                      <MdOutlineError size={30} color={colors.secondary} />
                    </div>
                    <p className={global.text2}>No puede contener dígitos o caracteres especiales.</p>
                  </div>
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
                    required
                    onChange={(e) => setLastname(e.target.value)}
                    onKeyUp={(e) => validate(e)}
                    onBlur={(e) => validate(e)}
                    placeholder={`${lastname}`}
                    className='input'
                  />
                  <div id='error__lastname' className='form__error-icon'><BsFillXCircleFill size={20} color={statusColors.error} /></div>
                  <div id='success__lastname' className='form__success-icon'><BsFillCheckCircleFill size={20} color={statusColors.success} /></div>
                  <div id='lastname__error' className='form__input-lastnameError'>
                    <div className='error__icon'>
                      <MdOutlineError size={30} color={colors.secondary} />
                    </div>
                    <p className={global.text2}>No puede contener dígitos o caracteres especiales.</p>
                  </div>
                </div>
              </div>
              <div className='form-vertical__phone'>
                <div className='label'>
                  <p className={global.text}>Teléfono</p>
                  <AiFillPhone size={20} color={colors.secondary} />
                </div>
                <div className='phone__input'>
                  <input
                    title='Introducir teléfono'
                    type='tel'
                    name='phone'
                    id='phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onKeyUp={(e) => validate(e)}
                    onBlur={(e) => validate(e)}
                    placeholder={`${phone}`}
                    className='input'
                  />
                  <div id='error__phone' className='form__error-icon'><BsFillXCircleFill size={20} color={statusColors.error} /></div>
                  <div id='success__phone' className='form__success-icon'><BsFillCheckCircleFill size={20} color={statusColors.success} /></div>
                  <div id='phone__error' className='form__input-phoneError'>
                    <div className='error__icon'>
                      <MdOutlineError size={30} color={colors.secondary} />
                    </div>
                    <p className={global.text2}>Debe seguir el formato 6XXXXXXXX.</p>
                  </div>
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
                    value={user.location}
                    required
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder={`${location}`}
                    className='input'
                  >{user.location}</input>
                  <div id='error__location' className='form__error-icon'><BsFillXCircleFill size={20} color={statusColors.error} /></div>
                  <div id='success__location' className='form__success-icon'><BsFillCheckCircleFill size={20} color={statusColors.success} /></div>
                  <div id='location__error' className='form__input-locationError'>
                    <div className='error__icon'>
                      <MdOutlineError size={30} color={colors.secondary} />
                    </div>
                    <p className={global.text2}>No puede contener dígitos o caracteres especiales.</p>
                  </div>
                </div>
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
                  onChange={(e) => setBiography(e.target.value)}
                  placeholder={`${biography}`}
                  className='input'
                />
              </div>
              <div className='form-vertical__gender'>
                <div className='label'>
                  <p className={global.text}>Género</p>
                  <BsGenderAmbiguous size={20} color={colors.secondary} />
                </div>
                <select name='gender' id='gender' className='selector' onChange={(e) => setGender(e)}>
                  <option value='male'>Masculino</option>
                  <option value='woman'>Femenino</option>
                  <option value='other'>Otro</option>
                </select>
              </div>
              <div className='form-vertical__birthdate'>
                <div className='label'>
                  <p className={global.text}>Fecha de nacimiento</p>
                  <FaBirthdayCake size={20} color={colors.secondary} />
                </div>
                <input
                  title='Introducir fecha de nacimiento'
                  type='date'
                  id='birthdate'
                  max={calcDate()}
                  name='Birthdate'
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                  className='input'
                />
              </div>
              <div className='form-vertical__linkInstagram'>
                <div className='label'>
                  <p className={global.text}>Instagram</p>
                  <BsInstagram size={20} color={colors.secondary} />
                </div>
                <div className='linkInstagram__input'>
                  <input
                    title='Introducir link de Instagram'
                    type='url'
                    name='linkInstagram'
                    id='linkInstagram'
                    value={user.links?.Instagram}
                    required
                    onChange={(e) => setLinks(links.Instagram = e.target.value)}
                    onKeyUp={(e) => validate(e)}
                    onBlur={(e) => validate(e)}
                    placeholder={`${links.Instagram}`}
                    pattern="https://.*" 
                    size="30"
                    className='input'
                  >{user.links.Instagram}</input>
                  <div id='error__linkInstagram' className='form__error-icon'><BsFillXCircleFill size={20} color={statusColors.error} /></div>
                  <div id='success__linkInstagram' className='form__success-icon'><BsFillCheckCircleFill size={20} color={statusColors.success} /></div>
                  <div id='linkInstagram__error' className='form__input-linkInstagramError'>
                    <div className='error__icon'>
                      <MdOutlineError size={30} color={colors.secondary} />
                    </div>
                    <p className={global.text2}>Debe seguir el formato de un enlace.</p>
                  </div>
                </div>
              </div>
              <div className='form-vertical__linkTwitter'>
                <div className='label'>
                  <p className={global.text}>Twitter</p>
                  <BsTwitter size={20} color={colors.secondary} />
                </div>
                <div className='linkTwitter__input'>
                  <input
                    title='Introducir link de Twitter'
                    type='url'
                    name='linkTwitter'
                    id='linkTwitter'
                    value={user.links?.Twitter}
                    required
                    onChange={(e) => setLinks(links.Twitter = e.target.value)}
                    onKeyUp={(e) => validate(e)}
                    onBlur={(e) => validate(e)}
                    placeholder={`${links.Twitter}`}
                    pattern="https://.*" 
                    size="30"
                    className='input'
                  >{user.links?.Twitter}</input>
                  <div id='error__linkTwitter' className='form__error-icon'><BsFillXCircleFill size={20} color={statusColors.error} /></div>
                  <div id='success__linkTwitter' className='form__success-icon'><BsFillCheckCircleFill size={20} color={statusColors.success} /></div>
                  <div id='linkTwitter__error' className='form__input-linkTwitterError'>
                    <div className='error__icon'>
                      <MdOutlineError size={30} color={colors.secondary} />
                    </div>
                    <p className={global.text2}>Debe seguir el formato de un enlace.</p>
                  </div>
                </div>
              </div>
              <div className='form-vertical__linkFacebook'>
                <div className='label'>
                  <p className={global.text}>Facebook</p>
                  <BsFacebook size={20} color={colors.secondary} />
                </div>
                <div className='linkFacebook__input'>
                  <input
                    title='Introducir link de Facebook'
                    type='url'
                    name='linkFacebook'
                    id='linkFacebook'
                    value={user.links?.Facebook}
                    required
                    onChange={(e) => setLinks(links.Facebook = e.target.value)}
                    onKeyUp={(e) => validate(e)}
                    onBlur={(e) => validate(e)}
                    placeholder={`${links.Facebook}`}
                    pattern="https://.*" 
                    size="30"
                    className='input'
                  >{user.links?.Facebook}</input>
                  <div id='error__linkFacebook' className='form__error-icon'><BsFillXCircleFill size={20} color={statusColors.error} /></div>
                  <div id='success__linkFacebook' className='form__success-icon'><BsFillCheckCircleFill size={20} color={statusColors.success} /></div>
                  <div id='linkFacebook__error' className='form__input-linkFacebookError'>
                    <div className='error__icon'>
                      <MdOutlineError size={30} color={colors.secondary} />
                    </div>
                    <p className={global.text2}>Debe seguir el formato de un enlace.</p>
                  </div>
                </div>
              </div>
              <div className='settings__buttons'>
                <button className={global.buttonTertiary3}><a href='/changePassword' title='Ir a la página para cambiar la contraseña' aria-label='Ir a cambiar contraseña'>Cambiar contraseña</a></button>
                <button className={global.buttonDelete2} onClick={() => setIsModalVisible(true)}>Eliminar cuenta</button>
              </div>
            </form>
            <input type='submit' value='Guardar' className={global.buttonPrimary} onClick={(e) => edit(e)} />
            {isModalVisible && <Modal>
              <h2 className={global.title3}>Eliminar cuenta</h2>
              <p className={global.text2}>¿Estás seguro de que quieres eliminar tu cuenta?</p>
              <div className='buttons'>
                <button className={global.buttonSecondary} onClick={(e) => deleteAccount(e)}>Sí</button>
                <button className={global.buttonTertiary3} onClick={() => setIsModalVisible(false)}>No</button>
              </div>
            </Modal>}
          </div>


          <div className='complaints'>
            <h1 className={global.title}>Denuncias</h1>
            <div className='complaints__content'>
              {complaints.length === 0 && <div><p className={global.loading2}>No ha interpuesto ninguna denuncia</p></div>}
             {complaints.filter(complaint => complaint.usernameTo = session.user.username).map(({ _id, description, adminId, createdAt, isApproved, isChecked, usernameFrom, usernameTo }) => {
                return (
                  <>
                    <Complaint key={_id} description={description} adminId={adminId} createdAt={createdAt} isApproved={isApproved} isChecked={isChecked} usernameFrom={usernameFrom} usernameTo={usernameTo} />
                  </>
                )
              })}
            </div>
          </div>

          <div className='pets'>
            <h1 className={global.title}>Mascotas</h1>
            <div className='pets__content'>
              {pets.length === 0 && <div><p className={global.loading2}>No tienes mascotas registradas</p></div>}
              {pets.map(({ _id, animal, breed, name, weight, birthdate, image, ownerUsername }) => {
                return (
                  <>
                    <Pet key={_id} animal={animal} breed={breed} name={name} weight={weight} bithdate={birthdate} image={image} ownerUsername={ownerUsername} />
                  </>
                )
              })}
              <button className={global.buttonPrimary}><a href='/profile/myprofile/pets' title='Ir a la página para añadir mascotas' aria-label='Ir a cambiar contraseña'>Añadir mascotas</a></button>
            </div>
          </div>
        </div>

        <style jsx>{`


                .settings{


                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 2rem;

                    /*Visuals*/

                    border: 2px solid ${colors.primary};
                    border-radius: 10px;

                   

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
                    border-radius: 10px;
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
                      border-radius: 10px;
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
              justify-content: center;
              align-items: center;

            }

            .form-vertical {


                  /*Box model*/

                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  margin-top: 2rem;
                  margin-bottom: 2rem;
                  height: 100vh;
                  padding: 5rem;

                  /*Visuals*/

                  background: linear-gradient(45deg, rgba(240,129,15,1) 35%, rgba(249,166,3,1) 100%);
                  border-radius: 10px;
                  
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

              }

              .form-vertical__birthdate{

              /*Box model*/

              display: flex;
              flex-direction: column;
              justify-content: center;

              }

              .form-vertical__gender {

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

              position: absolute;

              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
              margin-bottom: 2rem;
              margin-left: 20rem;


              /*Text*/

              font-family: 'Poppins', sans-serif;
              color: #fafafa;

              /*Visuals*/

              border-radius: 10px;
              background-color: ${statusColors.error};
              opacity: 0;

              }


              .form__input-nameError p{

              /*Box model*/

              margin-left: 2rem;

              }

              .form__input-nameError--active{

              /*Position*/

              position: absolute;
              margin-left: 20rem;
              margin-bottom: 2rem;

              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;


              /*Text*/

              font-family: 'Poppins', sans-serif;
              color: #fafafa;

              /*Visuals*/

              border-radius: 10px;
              background-color: ${statusColors.error};
              opacity: 1;

              }


              .form__input-lastnameError{

              /*Position*/

              position: absolute;

              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
              margin-bottom: 2rem;
              margin-left: 20rem;

              /*Text*/

              font-family: 'Poppins', sans-serif;
              color: #fafafa;

              /*Visuals*/

              border-radius: 10px;
              background-color: ${statusColors.error};
              opacity: 0;

              }


              .form__input-lastnameError p{

              /*Box model*/

              margin-left: 2rem;

              }

              .form__input-lastnameError--active{

              /*Position*/

              position: absolute;
              margin-left: 20rem;
              margin-bottom: 2rem;

              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;


              /*Text*/

              font-family: 'Poppins', sans-serif;
              color: #fafafa;

              /*Visuals*/

              border-radius: 10px;
              background-color: ${statusColors.error};
              opacity: 1;

              }


              .form__input-phoneError{

                /*Position*/

                position: absolute;

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                margin-bottom: 2rem;
                margin-left: 20rem;

                /*Text*/

                font-family: 'Poppins', sans-serif;
                color: #fafafa;

                /*Visuals*/

                border-radius: 10px;
                background-color: ${statusColors.error};
                opacity: 0;

                }


                .form__input-phoneError p{

                /*Box model*/

                margin-left: 2rem;

                }

                .form__input-phoneError--active{

                /*Position*/

                position: absolute;
                margin-left: 20rem;
                margin-bottom: 2rem;

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;


                /*Text*/

                font-family: 'Poppins', sans-serif;
                color: #fafafa;

                /*Visuals*/

                border-radius: 10px;
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

                border-radius: 10px;
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

                border-radius: 10px;
                background-color: ${statusColors.success};

                }


              .error__icon{

              /*Box model*/

              margin-left: 1rem;

              }

              .form__error-icon{

                /*Position*/

                position: relative;
                right: -1.1rem;
                bottom: 0.9rem;
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
            right: -1.1rem;
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
              height: 2rem;

            }


            .saved{

              /*Box model*/

              display: none;

            }

            .complaints{

              /*Box model*/

              display: none;

            }

            .pets{

              /*Box model*/

              display: none;

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

                width: 5vw;
                height: 10vh;
                display: flex;
                align-items: center;
                margin-top: 1rem;

                /*Visuals*/

                border-radius: 100px;
                cursor: pointer;
                background-color: transparent;
                border: 1px solid ${colors.secondary};
                color: ${colors.secondary};

              }

              input[type="file"]::before{

                /*Box model*/

                display: flex;
                align-items: center;
                justify-content: center;
                padding: 1rem;
                margin-right: 1rem;

                /*Visuals*/

                cursor: pointer;
                background-color: ${colors.primary};
                color: ${colors.secondary};
                border-radius: 50px;

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
                        text-align: center;
                        
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

                border-radius: 5px;
                border: 1px solid ${colors.secondary};
                background: transparent;

              }

              input[type="tel"] {

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

              border-radius: 5px;
              border: 1px solid ${colors.secondary};
              background: transparent;

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

                border-radius: 5px;
                border: 1px solid ${colors.secondary};
                background: transparent;

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

                height: 3rem;
                width: 20rem;
                padding: 0.4rem;
                margin-bottom: 2rem;

                /*Text*/

                font-family: ${fonts.default};
                font-size: 1rem;

                /*Visuals*/

                border-radius: 5px;
                border: 1px solid ${colors.secondary};
                background: transparent;

              }
              a{

                /*Text*/

                text-decoration: none;
                color: ${colors.secondary};
              }


              h1{

                  /*Box model*/

                  display: flex;
                  justify-content: center;
                  align-items: center;
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

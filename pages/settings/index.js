import Head from 'next/head'
import { useSession, signOut } from 'next-auth/react'
import { useState, useEffect } from 'react'
import global from 'styles/global.module.css'
import { colors, statusColors, fonts } from 'styles/frontend-conf.js'
import { FaUserPlus, FaBirthdayCake } from 'react-icons/fa'
import { AiFillPhone } from 'react-icons/ai'
import { MdOutlineError } from 'react-icons/md'
import { BsGenderAmbiguous, BsFillFileTextFill, BsFillXCircleFill, BsFillCheckCircleFill } from 'react-icons/bs'
import Layout from '/components/Layout/Layout'
import Modal from '/components/Modal/Modal'
import { server } from '/server'
import Loader from '/components/Loader/Loader'

export default function Settings () {
  const { data: session, status } = useSession({ required: true })
  const [user, setUser] = useState({})
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [phone, setPhone] = useState('')
  const [biography, setBiography] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [gender, setGender] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isValidate, setIsValidate] = useState(false)
  const [maxDate, setMaxDate] = useState('')
  const [message, setMessage] = useState('')
  const [complaints, setComplaints] = useState([])
  const [pets, setPets] = useState([])

  useEffect(async () => {
    if (session) {
      const complaints = await fetch(`${server}/api/complaints/${session.user.username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).catch(err => console.log(err))

      const pets = await fetch(`${server}/api/pets/${session.user.username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).catch(err => console.log(err))

      const currentUser = await fetch(`${server}/api/users/${session.user.username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).catch(err => console.log(err))

      const complaintsList = await complaints.json()
      const petsList = await pets.json();

      console.log(currentUser);

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
  }, [])

  const calcDate = () => {
    const date = new Date()
    const year = date.getFullYear() - 4
    const month = date.getMonth() + 1
    const day = date.getDate()
    const maxDate = year + '-' + month + '-' + day

    return maxDate
  }

  const validate = (e) => {
    // Regular expressions

    const regName = /^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/
    const regLastname = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/
    const regPhone = /^(?:6[0-9]|7[1-9])[0-9]{7}$/

    if (e.target.name == 'name' && e.target.value != null) {
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

    if (e.target.name == 'lastname' && e.target.value != null) {
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

    if (e.target.name == 'phone' && e.target.value != null) {
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

  const deleteAccount = async (e) => {
    e.preventDefault()

    await fetch(`${server}/api/users/${session.user.username}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).catch(err => console.log(err))

    setMessage('Se ha eliminado la cuenta correctamente')
    signOut()
  }

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

  const edit = async (e) => {
    e.preventDefault()

    if (isValidate) {
      document.getElementById('submit__error').classList.add('submit__error--active')
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
          birthdate: birthdate !== user.birthdate ? birthdate : user.birthdate,
          gender: gender !== user.gender ? gender : user.gender
        })
      }).catch(err => console.log(err))
    } else {
      document.getElementById('submit__error').classList.remove('submit__error--active')
      document.getElementById('submit__error').classList.add('submit__error--active2')
    }
  }
  if (status == 'loading') {
    return (
      <>
        <div className={global.loading}><p className={global.title}>Cargando..</p></div>
        <Loader />
      </>
    )
  }
  if (session) {
    return (
      <Layout>
        <Head><title>Configuración</title></Head>
        <div className='settings'>
          <nav className='settings__links'>
            <button id='edit' className='config__style  active' onClick={() => handleClick('Editar')} aria-label='Ir a Editar Perfil'>Editar perfil</button>
            <button id='saved' className='config__style' onClick={() => handleClick('Guardados')} aria-label='Ir a Guardados'>Guardados</button>
            <button id='complaints' className='config__style' onClick={() => handleClick('Denuncias')} aria-label='Ir a Denuncias'>Denuncias</button>
            <button id='pets' className='config__style' onClick={() => handleClick('Mascotas')} aria-label='Ir a Mascotas'>Mascotas</button>
          </nav>
          <div className='form-page'>
            <h1 className={global.title}>Editar perfil</h1>
            <form className='form-vertical' action='/api/users'>
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
                    placeholder={`${user.firstname}`}
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
                    placeholder='p. ej.: García Navarro'
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
                    placeholder='p. ej.: 654897612'
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
                  placeholder='p. ej.: Soy un estudiante de 4º de ESO.'
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
              <div className='settings__buttons'>
                <button className={global.buttonTertiary3}><a href='/changePassword' title='Ir a la página para cambiar la contraseña' aria-label='Ir a cambiar contraseña'>Cambiar contraseña</a></button>
                <button className={global.buttonDelete2} onClick={() => setIsModalVisible(true)}>Eliminar cuenta</button>
              </div>
            </form>
            <div className={global.error}>{message}</div>
            <div id='submit__error' className='submit__error'>
              {message}
            </div>
            <div id='success__form' className='form__success-icon'><BsFillCheckCircleFill size={20} color={statusColors.success} /></div>
            <p className={global.text2}>Se han guardado los datos correctamente</p>
            <input type='submit' value='Guardar' className={global.buttonPrimary} onClick={(e) => edit(e)} />
            <div id='success__form' className='form__success-icon'><BsFillCheckCircleFill size={20} color={statusColors.success} /></div>
            <p className={global.text2}>Se han guardado los datos correctamente</p>
            {isModalVisible && <Modal>
              <h2 className={global.title3}>Eliminar cuenta</h2>
              <p className={global.text2}>¿Estás seguro de que quieres eliminar tu cuenta?</p>
              <div className='buttons'>
                <button className={global.buttonSecondary} onClick={(e) => deleteAccount(e)}>Sí</button>
                <button className={global.buttonTertiary3} onClick={() => setIsModalVisible(false)}>No</button>
              </div>
            </Modal>}
          </div>

          <div className='saved'>
            <h1 className={global.title}>Guardados</h1>
            <div className='saved__content'>
            </div>
          </div>

          <div className='complaints'>
            <h1 className={global.title}>Denuncias</h1>
            <div className='complaints__content'>
              {complaints.length === 0 && <div><p className={global.loading2}>No ha interpuesto ninguna denuncia</p></div>}
              {complaints.map(({ _id, description, adminId, createdAt, isApproved, isChecked, userIdFrom, userIdTo }) => {
                return (
                  <>
                    <Complaint key={_id} description={description} adminId={adminId} createdAt={createdAt} isApproved={isApproved} isChecked={isChecked} userIdFrom={userIdFrom} userIdTo={userIdTo} />
                  </>
                )
              })}
            </div>
          </div>

          <div className='pets'>
            <h1 className={global.title}>Mascotas</h1>
            <div className='pets__content'>
              {pets.length === 0 && <div><p className={global.loading2}>No tienes mascotas registradas</p></div>}
              {pets.map(({ _id, animal, breed, name, weight, birthYear, image, ownerUsername }) => {
                return (
                  <>
                    <Pet key={_id} animal={animal} breed={breed} name={name} weight={weight} bithYear={birthYear} image={image} ownerUsername={ownerUsername} />
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
                    flex-direction: row;
                    justify-content: space-around;
                    gap: 2rem;

                    /*Visuals*/

                    border: 1px solid ${colors.primary};
                    border-radius: 10px;
                    box-shadow: 10px 10px 5px 0px rgba(214,214,214,0.42);

                   

                }

                .settings__links{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    margin-left: 2rem;
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;

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
                  height: 25rem;
                  padding: 15rem;

                  /*Visuals*/

                  background: linear-gradient(45deg, rgba(240,129,15,1) 35%, rgba(249,166,3,1) 100%);
                  border-radius: 10px;
                  
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

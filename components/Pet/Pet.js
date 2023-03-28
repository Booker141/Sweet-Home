import global from '../../styles/global.module.css'

/**
 * It returns a div with a class of pet, which contains a div with a class of pet__header, which
 * contains a div with a class of pet__image, which contains the image prop, and a div with a class of
 * pet__info, which contains a div with a class of pet__name, which contains an h1 with a class of
 * text2, which contains the text "Nombre: " and the name prop, and a div with a class of pet__animal,
 * which contains an h1 with a class of text2, which contains the text "Animal: " and the animal prop,
 * and a div with a class of pet__breed, which contains an h1 with a class of text2, which contains the
 * text "Raza: " and the breed prop, and a div with a class of pet__age, which contains an h1 with a
 * class of text2, which contains the text "Año de nacimiento
 * @param props - {
 * @returns A component that shows the information of a pet.
 */
export default function Pet (props) {
  return (
    <>
      <div className={global.pet}>
        <div className='pet__header'>
          <div className='pet__image'>
            {props.image}
          </div>
          <div className='pet__info'>
            <div className='pet__name'>
              <h1 className={global.text2}>Nombre: {props.name}</h1>
            </div>
            <div className='pet__animal'>
              <h1 className={global.text2}>Animal: {props.animal}</h1>
            </div>
            <div className='pet__breed'>
              <h1 className={global.text2}>Raza: {props.breed}</h1>
            </div>
            <div className='pet__age'>
              <h1 className={global.text2}>Año de nacimiento: {props.birthYear}</h1>
            </div>
          </div>
        </div>
        <div className='pet__owner'>
          <h1 className={global.text2}>Dueño: @{props.ownerUsername}</h1>
        </div>
        <div className='pet__weight'>
          <h1 className={global.text2}>Peso: {props.weight}</h1>
        </div>
      </div>
    </>
  )
}

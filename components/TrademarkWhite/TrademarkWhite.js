import Image from 'next/image'
import Logo from '../../public/LogoWebBlanco.svg'

/*
    * @author Sergio García Navarro
    * @returns Trademark component
    * @version 1.0
    * @date 13/01/2020
    * @description Trademark component
*/
/**
 * This function returns an image that links to the link passed in as a prop
 * @returns A function that returns a JSX element.
 */

export default function Trademark ({ link }) {
  return (

    <>
      <div className='img'>
        <a href={link} aria-label='Ir a Inicio'><Image src={Logo} width={110} height={100} /></a>
      </div>
    </>

  )
}

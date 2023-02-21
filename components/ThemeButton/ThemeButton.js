import { useState, useEffect } from 'react'
import { theme, colors } from 'styles/frontend-conf.js'
import { BsSun, BsMoon } from 'react-icons/bs'

/**
 * It's a button that changes the theme of the page
 * @returns A button that changes the theme of the page.
 */
export default function ThemeButton () {
  const [actualTheme, setActualTheme] = useState('light')

  /**
    * If the actual theme is light, then set the actual theme to dark, otherwise set the actual theme
    * to light
    */
  const changeTheme = () => {
    if (actualTheme === 'light') {
      setActualTheme('dark')
    } else {
      setActualTheme('light')
    }
  }

  /* Changing the color of the text and the background color of the body when the actual theme
   changes. */
  useEffect(() => {
    document.body.style.color = theme[actualTheme].textColor
    document.body.style.backgroundColor = theme[actualTheme].backgroundColor
  }, [actualTheme])

  return (
    <>
      {actualTheme === 'dark' && <div className='centered'><button onClick={changeTheme} className='toggleButton'><BsSun color={colors.secondary} size={20} /></button></div>}
      {actualTheme === 'light' && <div className='centered'><button onClick={changeTheme} className='toggleButton'><BsMoon color={colors.secondary} size={20} /></button></div>}

      <style jsx>{`

                .centered{

                    display: flex;
                    align-items: center;

                }

                .toggleButton{

                    /*Position*/

                    position: relative;
                    top: 0;
                    right: 0;

                    /*Box model*/

                    width: 3rem;
                    height: 3rem;

                    /*Visuals*/

                    border: none;
                    background-color: transparent;
                    border-radius: 50px;
                    cursor: pointer;



            
            `}
      </style>
    </>
  )
}

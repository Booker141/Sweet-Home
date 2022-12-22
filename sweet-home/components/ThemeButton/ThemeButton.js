import {useState, useEffect} from 'react'
import {theme} from "styles/frontend-conf.js"
import {colors} from "styles/frontend-conf.js"
import {BsFillSunFill, BsMoonFill} from 'react-icons/bs'

/**
 * It's a button that changes the theme of the page
 * @returns A button that changes the theme of the page.
 */
export default function ThemeButton(){

    const [actualTheme, setActualTheme] = useState('light')

   /**
    * If the actual theme is light, then set the actual theme to dark, otherwise set the actual theme
    * to light
    */
    const changeTheme = () => {

        if(actualTheme === 'light'){

            setActualTheme('dark')

        }else{

            setActualTheme('light')

        }

    }
  
   /* Changing the color of the text and the background color of the body when the actual theme
   changes. */
    useEffect(() => {
        document.body.style.color = theme[actualTheme].textColor
        document.body.style.backgroundColor = theme[actualTheme].backgroundColor
    }, [actualTheme])

    return(
        <>
            {actualTheme === "dark" && <div className="centered"><button onClick={changeTheme} className="toggleButton"><BsFillSunFill color={colors.secondary} size={30}/></button></div>}
            {actualTheme === "light" && <div className="centered"><button onClick={changeTheme} className="toggleButton"><BsMoonFill color={colors.secondary} size={30}/></button></div>}

            <style jsx>{`

                .centered{

                    display: flex;
                    justify-content: flex-end;
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
                    margin-bottom: 2rem;

                    /*Visuals*/

                    border: none;
                    background-color: ${colors.primary};
                    border-radius: 50px;
                    cursor: pointer;



            
            `}</style>
        </>
    )

}
/* Static imports */

import { useState, useEffect } from "react";
import { theme, colors } from "styles/frontend-conf.js";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

/** 
  * @author Sergio García Navarro
  * @returns Theme button component
  * @version 1.0
  * @description Theme button component
*/

/**
 * This function is a theme button component for change into light/dark mode
 * @returns A theme button.
 */
export default function ThemeButton() {
  const [actualTheme, setActualTheme] = useState("light");

  const changeTheme = () => {
    if (actualTheme === "light") {
      setActualTheme("dark");
    } else {
      setActualTheme("light");
    }
  };

  useEffect(() => {
    document.body.style.color = theme[actualTheme].textColor;
    document.body.style.backgroundColor = theme[actualTheme].backgroundColor;
  }, [actualTheme]);

  return (
    <>
      {actualTheme === "dark" && (
        <div className="centered">
          <button onClick={changeTheme} className="toggleButton">
            <BsFillSunFill color={colors.secondary} size={18} />
          </button>
        </div>
      )}
      {actualTheme === "light" && (
        <div className="centered">
          <button onClick={changeTheme} className="toggleButton">
            <BsFillMoonFill color={colors.secondary} size={18} />
          </button>
        </div>
      )}

      <style jsx>
        {`

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
                    border-radius: 70px;
                    box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);
                    cursor: pointer;

                    transition: 0.3s ease all;



                }

                .toggleButton:hover{

                    /*Text*/

                    color: ${colors.secondary};
                    background-color: ${colors.primary};
                    box-shadow: 5px 2px 20px 0px rgba(255,206,59,1);
            `}
      </style>
    </>
  );
}

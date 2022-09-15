import styles from "styles/global.module.css"
/*
    * @author Sergio García Navarro
    * @returns Button component
    * @version 1.0
    * @date 13/01/2020
    * @description Button component
*/
/**
 * This function takes in an onClick function, a description, and a size, and returns a button with the
 * description, size, and onClick function
 * @param {onClick} - function with the action to do when the button is clicked
 * @param {description} - text of the button
 * @param {size} - size of the button
 * @returns A button with a description and size.
 */
export default function ButtonTertiary({onClick, children}) {
  return (
    <>
      <button className={styles.buttonTertiary} onClick={onClick}>{children}</button>
    </>
  );
}
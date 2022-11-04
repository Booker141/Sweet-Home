import styles from "styles/global.module.css"


/*
    * @author Sergio García Navarro
    * @returns Simple card component
    * @version 1.0
    * @date 13/01/2020
    * @description Simple card component
*/
/**
 * This function is a basic footer component that takes in three urls and three texts and displays them
 * in a footer
 * @param {props} icon - Card icon
 * @param {props} title - Card title
 * @param {props} text - Card description
 * @returns A Card with an icon, a title and a description.
 */


export default function SimpleCard ({icon, title, text}){

    return(
        <>
            <div className="card">
                <h2 className={styles.secondary}>{title}</h2>
                <p className={styles.text}>{text}</p>  
                <img src={icon} alt="icon"/> 
            </div>   

            <style jsx>{`
            
                .card{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    /*Visuals*/

                    box-shadow: 15px 19px 25px -1px rgba(191,191,191,0.62);

                }

            
            
            `}</style> 
        </>
    )

}
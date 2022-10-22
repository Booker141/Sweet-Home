import styles from "styles/global.module.css"


/**
 * This function returns a div with a class of card, which contains a h2, p, and img tag
 * @returns A card with an icon, title, and text.
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
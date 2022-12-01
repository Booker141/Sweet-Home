import Head from 'next/head'
import styles from "styles/global.module.css"

export default function SignOut(){


    return(
        <>
            <Head>Cerrar sesión</Head>
            <div className={styles.content}>
                <div className={styles.card__short}>
                    <h2 className={styles.title}>Cerrar sesión</h2>
                    <p className={styles.text}>¿Estás seguro de que quieres cerrar sesión?</p>
                    <div className="buttons">
                        <button className={styles.buttonPrimary}>Sí</button>
                        <button className="button_cancel">No</button>
                    </div>
                </div>
            </div>
            <style jsx>{`
            
                .buttons{

                    /* Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    width: 50%;
                }

                .button_cancel{

                    /* Box model*/

                }

            
            
            `}</style>
        </>
    )
}
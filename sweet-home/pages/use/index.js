import Head from 'next/head'
import styles from "styles/global.module.css"
import Layout from "components/Layout/Layout"
/*
    * @author Sergio García Navarro
    * @returns Use page
    * @version 1.0
    * @date 13/12/2020
    * @description Use page
*/
/**
 * It returns a div with a title
 * @returns A React element.
 */
export default function Use(){
    return(
        <>
            <Layout>
                <Head><title>Ayuda</title></Head>
                <div className={styles.content}>
                    <div className="faq">
                        <h1 className={styles.title}>Preguntas frecuentes ?</h1>

                        <div className="faq__item1">
                            <h2 classname={styles.subtitle}>¿Qué es Sweet Home?</h2>
                            <p classname={styles.text}>Sweet Home es una red social que abarca el mundo animal y trata de facilitar su adaptación a nuevos cuidados, a nuevos dueños y a una mejora diaria de su vida.</p>
                            <hr className={styles.line}></hr>
                        </div>

                        <div className="faq__item2">
                            <h2 className={styles.secondary}>¿Necesito registrarme para usar la aplicación?</h2>
                            <p className={styles.text}>Sí, si quiere utilizar la mayoría de funcionalidades 
                            e interactuar con otros usuarios debe tener una cuenta con acceso a la aplicación.</p>
                            <hr className={styles.line}></hr>
                        </div>

                        <div className="faq__item3">
                            <h2 className={styles.secondary}>¿Cómo puedo publicar en la aplicación?</h2>
                            <p className={styles.text}>Para publicar, debes haber iniciado sesión con tu cuenta.
                            Una vez dentro de la aplicación, basta con pulsar en “Crear publicación” para 
                            acceder a una nueva página donde puedes escribir todos los detalles que va a 
                            tener tu publicación.</p>
                            <hr className={styles.line}></hr>
                        </div>

                        <div className="faq__item4">
                            <h2 className={styles.secondary}>¿Cómo guardo una publicación que me gusta?</h2>
                            <p className={styles.text}>En todas las publicaciones, en la parte inferior aparece 
                            el icono “poner imagen de huella” que debes pulsar para guardar la publicación en la
                            sección “Guardados” de tu perfil.</p>
                            <hr className={styles.line}></hr>
                        </div>

                        <div className="faq__item5">
                            <h2 className={styles.secondary}>¿Qué es seguir a un usuario?</h2>
                            <p className={styles.text}>“Seguir a un usuario” sirve para crear un estrecho enlace
                            con ese usuario día a día, es decir, mantenerte informado de todas las publicaciones 
                            que ha publicado y publica ese usuario así como poder relacionarte con él vía chat.</p>
                            <hr className={styles.line}></hr>
                        </div>

                        <div className="faq__item6">
                            <h2 className={styles.secondary}>¿Cómo puedo avisar del comportamiento negativo de un usuario?</h2>
                            <p className={styles.text}>Para avisar del comportamiento no deseado de un usuario 
                            solo debe acceder a su perfil y pulsar “Denunciar”. Esto le redigirirá a una página 
                            donde puede formalizar la denuncia detallando la causa.</p>
                            <hr className={styles.line}></hr>
                        </div>

                        <div className="faq__item7">
                            <h2 className={styles.secondary}>¿Cómo puedo denunciar a un usuario que hace spam?</h2>
                            <p className={styles.text}>De la misma forma que ha explicado en la anterior pregunta
                            (incluir un enlace que enfoque la página en esa pregunta).</p>
                            <hr className={styles.line}></hr>
                        </div>

                        <div className="faq__item8">
                            <h2 className={styles.secondary}>¿Cómo puedo contactar con Sweet Home para enviar feedback sobre la aplicación o avisar del mal funcionamiento de la misma?</h2>
                            <p className={styles.text}>En la sección “Contacto” encontrarás todas las maneras para 
                            contactar con nosotros, desde enviarnos un correo hasta contactar a través de las redes
                            sociales.</p>
                            <hr className={styles.line}></hr>
                        </div>

                        <div className="faq__item9">
                            <h2 className={styles.secondary}>¿Cuándo bloqueáis una cuenta?</h2>
                            <p className={styles.text}>Una cuenta será bloqueada una vez que ese usuario tenga más 
                            de cinco denuncias, estudiadas previamente por nosotros.</p>
                            <hr className={styles.line}></hr>
                        </div>
                    </div>

                </div>

                <style jsx>{`
                
                
                
                
                `}</style>
            </Layout>
        </>
    )
}
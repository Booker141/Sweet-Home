import Layout from "components/Layout/Layout"
import Head from 'next/head'
/* 
    * @author Sergio García Navarro
    * @returns Contact page
    * @version 1.0
    * @date 13/12/2020
    * @description Contact page
*/
/**
 * It returns the layout of the contact page.
 * @returns the Layout component, which is a component that contains the header, footer and the content
 * of the page.
 */
export default function Contact(){

    return(
        <Layout>
            <>
                <Head>
                    <title>Contacto</title>
                </Head>
                <h1 className="title">Contacto</h1>
                <h2 className="secondary">¿Quieres contactar con nosotros?</h2>
                <p className="text">Para contactar con Sweet Home y así recoger feedback para mejorar nuestro servicio, puedo hacerlo a través de las siguientes redes sociales:</p>
                <div className="social">
                    <a href="https://www.facebook.com/sweethome.es/" target="_blank" rel="noopener noreferrer">
                        Facebook
                    </a>
                    <a href="https://www.instagram.com/sweethome.es/" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                    <a href="https://www.twitter.es/sweethome" target="_blank" rel="noopener noreferrer">
                        Twitter
                    </a>
                    <p>O a través del siguiente correo electrónico: </p>
                    <a href="mailto:atenciónSH@gmail.com">atenciónSH@gmail.com</a>
                </div>
                <h2 className="secondary">Información personal</h2>
                <p className="text">Aquellos campos que sean precedidos por asteriscos son obligatorios</p>
                <form className="form-vertical">
                    <div className="correo">
                        <MdEmail size={20} color={colors.secondary} />
                        <input
                            type="email"
                            name="Correo*"
                            placeholder="E-mail"
                        ></input>
                        </div>
                        <div className="nombre">
                        <FaUser size={20} color={colors.secondary} />
                        <input
                            type="text"
                            name="Nombre*"
                            placeholder="Nombre"
                        ></input>
                        </div>
                        <div className="apellidos">
                        <FaUser size={20} color={colors.secondary} />
                        <input
                            type="text"
                            name="Apellidos*"
                            placeholder="Apellidos"
                        ></input>
                        </div>
                        <div className="direccion">
                        <input
                            type="text"
                            name="Dirección*"
                            placeholder="Dirección"
                        ></input>
                        </div>
                        <div className="comentario">
                        <FaUser size={20} color={colors.secondary} />
                        <input
                            type="phone"
                            name="Teléfono*"
                            placeholder="Teléfono"
                        ></input>
                        </div>
                        <div className="comentario">
                        <FaUser size={20} color={colors.secondary} />
                        <input
                            type="text"
                            name="Comentario*"
                            placeholder="Comentario"
                        ></input>
                        </div>
                        <div className="comentario">
                        <FaUser size={20} color={colors.secondary} />
                        <input
                            type="checkbox"
                        >Acepto la <a href="/privacy">Privacidad</a></input>
                        </div>

                
                        <FormButton class="buttom" name="Enviar" />
                </form>
            </>
        </Layout>
        
    )
}
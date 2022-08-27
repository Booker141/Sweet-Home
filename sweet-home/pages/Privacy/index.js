import Layout from "components/Layout/Layout"
import Head from 'next/head'

/*
    * @author Sergio García Navarro
    * @returns Privacy page
    * @version 1.0
    * @date 13/12/2020
    * @description Privacy page
*/
export default function Privacy() {
    return (
        <Layout>
            <>
                <Head>
                    <title>Privacidad</title>
                </Head>
                <h1 className="title">Privacidad</h1>
                <h2 className="secondary">Última actualización el 4 de agosto de 2022</h2>
                <p className="text">La política de privacidad de Sweet Home describe el modo de uso y recopilación de los datos personales de aquellos usuarios que hacen uso de la aplicación.
                Es usuario aquella persona que hace uso habitual de la aplicación, entendiéndose por uso, la modificación e inserción de datos así como la interacción con las funciones que ofrece la aplicación.
                La presente política de privacidad tiene una aplicación a nivel mundial.</p>
                <h2 className="secondary">Política de Privacidad de Sweet Home</h2>
                <p className="text">Sweet Home es responsable del tratamiento de los datos personales de los usuarios. Por favor lea detenidamente la correspondiente política para obtener más información.</p>
                <ul className="list">
                    <li>1. Información personal</li>
                    <li>2. Uso de la información</li>
                    <li>3. Información sobre la privacidad de los niños</li>
                    <li>4. Enlace a redes sociales</li>
                    <li>5. Seguridad de la información</li>
                    <li>6. Conservación</li>
                    <li>7. Cambios en la política de privacidad</li>
                </ul>

                <h2 className="secondary">1. Información personal</h2>
                <p className="text">La recopilación de información personal la realizamos una vez ingresa en la aplicación, a la hora del registro o bien la información publicada posteriormente. Esta información se divide en dos partes: a) información facilitada por el usuario y b) información recopilada mientras el usuario hace uso de la aplicación.
                La información personal del registro es obligatoria para el uso de la aplicación. Combinamos la información que usted nos proporciona con información que obtenemos más adelante con métodos automatizados.
                Podemos categorizar la información que nos proporciona mientras hace uso de la aplicación en:</p>
                <ul className="list2">
                    <li>Nombre, correo electrónico, teléfono, fecha de cumpleaños, género y otros datos que proporciona en el formulario de registro.</li>
                    <li>Información demográfica como edad o género.</li>
                    <li>Información relativa a su cuenta como nombre de usuario y contraseña.</li>
                    <li>Información sobre su perfil</li>
                </ul>
                <p className="text">Con métodos automatizados solo recogemos información relativa a su perfil y haya sido introducida en nuestra aplicación. No recogeremos información sobre su dirección IP, sistema operativo y dispositivo utilizados, etc.</p>
                
                <h2 className="secondary">2. Uso de la información</h2>
                <p className="text">Realizamos un uso sencillo con la información que nos proporciona. En general, utilizamos la información para realizar un análisis empresarial completo para evaluar y analizar las tendencias de los usuarios y así poder realizar una mejora completa de la aplicación en el futuro.
                Además, para garantizar la seguridad de nuestros servicios en línea y de la tecnología empleada en nuestra aplicación. Esto incluye el uso para proteger y prevenir fraudes o delitos que se han realizado dentro de la aplicación.
                Por último, anonimizaremos su información para su uso interno y externo de forma que no haya manera de ser identificado, así como cumplir con las obligaciones legales descritas en **“Enlace al apartado legal”.**
                Antes de realizar un uso distinto al aquí descrito, se lo comunicaremos en el momento de recopilarla.</p>

                <h2 className="secondary">3. Información sobre la privacidad de los niños</h2>
                <p className="text">Sabemos la importancia de proteger la privacidad de los niños que utilizan nuestra aplicación. Nos comprometemos a la protección total de la información que recogemos de estos usuarios.
                Pedimos a los padres o tutores legales que controlen el uso regular que realizan sus hijos en nuestros servicios en línea.</p>

                <h2 className="secondary">4. Enlace a redes sociales</h2>
                <p className="text">En nuestra aplicación hacemos uso de enlaces a sitios webs de terceros de los que no disponemos el control, por tanto si visita algunos de estos sitios web, debe leer con atención la política de privacidad y condiciones de dichos sitios.</p>

                <h2 className="secondary">5. Seguridad de la información</h2>
                <p className="text">Tomaremos todas las medidas necesarias y adecuadas para garantizar la seguridad y protección de los datos personales que nos ha proporcionado. Estas medidas se diseñaron en primera instancia para proteger la información contra la pérdida, acceso, uso ilegal o divulgación.</p>

                <h2 className="secondary">6. Conservación</h2>
                <p className="text">Conservaremos la información durante el tiempo necesario para realizar actividades descritas en esta política de seguridad. Sin embargo si el usuario pide expresamente que esta información sea eliminada, nos encargaremos de hacerlo inmediatamente.</p>

                <h2 className="secondary">7. Cambios en la política de privacidad</h2>
                <p className="text">Esta política de privacidad es posible que sufra modificaciones a lo largo del tiempo. Si se realiza alguna modificación, el usuario será informado y el cambio correspondiente se verá reflejado en esta página, así como la modificación de la fecha en la que entra en vigor dicha política.</p>
                <p>Si presenta alguna duda con respecto a la política de privacidad, tiene la información para contactar con nosotros en el siguiente enlace “incluir enlace a la información de contacto”</p>
            </> 
        </Layout>
    )
}
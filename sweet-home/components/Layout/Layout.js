import global from "/styles/global.module.css"
import Header from "/components/Header/Header";
import Footer from "/components/Footer/Footer";
import ThemeButton from "/components/ThemeButton/ThemeButton";
import {ImArrowUp2} from "react-icons/im"

/*
    * @author Sergio García Navarro
    * @returns Layout component
    * @version 1.0
    * @date 13/01/2020
    * @description Layout component
*/
/**
 * It's a function that returns a component that renders a header, a main and a footer
 * @returns The Header, Footer and the children of the Layout component.
 */
export default function Layout ({children}){

        return(

            <>
                <Header url1='/attendances' url2='/about' url3='/contact' url4='/auth/signIn' url5='/auth/signUp'
                        text1='Cuidados' text2='Quiénes somos' text3='Contacto' text4='Iniciar sesión' text5='Registrarse' />
                    
                    <div className={global.content}>
                        <a name="top"></a>
                        <ThemeButton/>
                        <main>{children}</main>
                        <a title="Volver arriba" aria-label="Ir al inicio de página" href="#top" className={global.buttonTo}><ImArrowUp2/></a>
                    </div>

                <Footer />
            </>

            
        );

}
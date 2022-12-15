import Header from "/components/Header/Header";
import Footer from "/components/Footer/Footer";

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
            <Header url1='/attendances' url2='/about' url3='/contact' url4='/signIn' url5='/signUp'
                    text1='Cuidados' text2='Quiénes somos' text3='Contacto' text4='Iniciar sesión' text5='Registrarse' />
                <div>
                    <main>{children}</main>
                </div>
            <Footer />
            </>
            
        );

}
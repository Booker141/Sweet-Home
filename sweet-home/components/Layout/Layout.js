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
            <Header url1='/' url2='pages/Attendances' url3='pages/Info' url4='pages/Contact'
                    text1='Inicio' text2='Cuidados' text3='Quiénes somos' text4='Contacto' />
                <div>
                    <main>{children}</main>
                </div>
            <Footer />
            </>
            
        );

}
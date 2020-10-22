const { Component } = require("react");
import LogoWeb from '../../public/LogoWeb.png'

export default class Header extends Component{
    render({ children }){

        return (
            <div>
                <ul>
                    //<li><a href  ='../../'><img src={LogoWeb}>Imagen LogoWeb</img></a></li>
                    <li><a href ='../pages/Home'>Inicio</a></li>
                    <li><a href ='../pages/Attendances'>Cuidados</a></li>
                    <li><a href ='../pages/AboutUs'>¿Quiénes somos?</a></li>
                    <li><a href ='../pages/Contact'>Contacto</a></li>
                    <li>
                        <a>
                            <img>Icono de búsqueda</img>
                        </a>
                    </li>
                </ul>
                <style jsx>{`
                
                
                
                
                
                
                
                
                
                
                `}</style>
            </div>

        );

    }
}


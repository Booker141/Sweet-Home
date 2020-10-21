const { Component } = require("react");
import HeaderStyle from '../styles/Header.css'

class Header extends Component{
    
    constructor(props){
        super(props);
    }

    render(){

        return (
            <div className = {HeaderStyle}>
                <ul>
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
            </div>

        );

    }

}


export default Header;
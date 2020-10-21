const { Component } = require("react");
import FooterStyle from '../styles/Footer.css'

class Footer extends Component{
    
    constructor(props){
        super(props);
        this.state = { year: new Date().getFullYear()};
    }

    render(){

        return (
            <div className = {FooterStyle}>
                <ul>
                    <li><a href ='../pages/Info'>Información</a></li>
                    <li><a href ='../pages/Privacy'>Privacidad</a></li>
                    <li><a href ='../pages/Conditions'>Condiciones</a></li>
                    <li><a href ='../pages/Language'>Idioma</a></li>
                    <div><li> &copy; {this.state.year} Sweet Home Corp </li></div>
                </ul>
            </div>

        );

    }

}


export default Footer;
//Style

import {fonts} from '../../styles/frontend-conf.js'
import {colors} from '../../styles/frontend-conf.js'

const { Component } = require("react");

export default class Header extends React.Component{
    
    constructor(props){
        super(props);
        this.props = props;
    }

    render(){
        return (
            <div class = "header">
                <ul>
                    <li><a href ='../pages/Home'>Inicio</a></li>
                    <li><a href ='../pages/Attendances'>Cuidados</a></li>
                    <li><a href ='../pages/AboutUs'>¿Quiénes somos?</a></li>
                    <li><a href ='../pages/Contact'>Contacto</a></li>
                </ul>
                <style jsx>{`

                    header{
                        display: flex;
                        flex-direction: row;
                        align-items: flex-start;
                    }

                    div li {
                        color: ${colors.primary};
                        font-family: ${fonts.default}
                    }
                
                
                `}</style>
            </div>

        );

    }
}


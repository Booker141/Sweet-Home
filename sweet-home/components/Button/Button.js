import { Component } from "react";
import { render } from "react-dom";
import ButtonStyle from "../styles/Button.css"

class Button extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <button className = {ButtonStyle}>Prueba</button>
        );
    }
}

export default Button;
//Style

import {fonts} from '../../styles/frontend-conf.js'
import {colors} from '../../styles/frontend-conf.js'

export default function Header(props){
    
        return (

            <div className = "header">
                <ul>
                    <div>
                        <img src="../public/LogoWeb.png" alt="Logo de la web" />
                    </div>
                    <li><a href ={props.url1}>{props.text1}</a></li>
                    <li><a href ={props.url2}>{props.text2}</a></li>
                    <li><a href ={props.url3}>{props.text3}</a></li>
                    <li><a href ={props.url4}>{props.text4}</a></li>
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


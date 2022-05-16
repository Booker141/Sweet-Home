import {fonts} from 'styles/frontend-conf.js'
import {colors} from 'styles/frontend-conf.js'

/**
 * @author Sergio García Navarro
 * @param {*} props - different params tag receives
 * @returns header of sweet home page
 */
export default function Header(props){
    
        return (

            <>
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

                            position: fixed;
                            top: 0;
                            min-height: 50px;

                        }

                        div li {
                            
                            list-style: none;
                            font-family: ${fonts.default};
                            color: ${colors.secondary}

                        }
                    
                    
                    `}</style>
                </div>
            </>
        );
}


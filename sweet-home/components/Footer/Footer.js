import {fonts} from 'styles/frontend-conf.js'
import {colors} from 'styles/frontend-conf.js'

/**
 * @author Sergio García Navarro
 * @param {*} props - different params tag receives
 * @returns footer of sweet home page
 */
export default function Footer (props){
    
        return (
            
            <>
                <nav>
                    <ul>
                        <li><a href ={props.url1}>{props.text1}</a></li>
                        <li><a href ={props.url2}>{props.text2}</a></li>
                        <li><a href ={props.url3}>{props.text3}</a></li>
                        <li><a href ={props.url4}>{props.text4}</a></li>
                        <li> &copy; 2021 Sweet Home Corp </li>
                    </ul>
                    <style jsx>{`

                            nav ul{
                                
                                display: flex;
                                flex-direction: row;
                                flex-wrap: wrap;
                                align-self: flex-end;
                                padding: 10px 10px 0px 10px;
                                height: 100px;
                                width: 100%;    
                            }

                            nav li{
                                
                                font-family: ${fonts.default};
                                color: ${colors.primary};
                                margin: 10px;
                                padding: 10px;
                                list-style: none;
                                text-decoration: none;

                            }

                        
                    `}
                    </style>
                </nav>
            </>                        
    )
       
}

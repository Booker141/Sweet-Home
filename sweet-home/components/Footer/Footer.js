import {fonts} from '../../styles/frontend-conf.js'
import {colors} from '../../styles/frontend-conf.js'

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
                        <div><li> &copy; 2021 Sweet Home Corp </li></div>
                    </ul>
                    <style jsx>{`

                            nav{

                                font-family: ${fonts.default};
                                color: ${colors.primary};
                                background-color: ${colors.secondary}

                            }

                            nav ul{
                                
                                position:fixed;
                                padding: 10px 10px 0px 10px;
                                bottom: 0;
                                height: 100px;
                                float: left;

                            }

                            nav li{
                                
                                margin: 10px;
                                padding: 10px;
                                display: inline-block;
                                list-style: none;

                            }
                        
                    `}
                    </style>
                </nav>
            </>                        
    )
       
}

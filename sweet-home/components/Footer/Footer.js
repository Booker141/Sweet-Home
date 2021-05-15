//Style
import {fonts} from '../../styles/frontend-conf.js'
import {colors} from '../../styles/frontend-conf.js'

export default function Footer (props){
    
        return (
            
            <>
                <div>
                    <ul>
                        <li><a href ={props.url1}>{props.text1}</a></li>
                        <li><a href ={props.url2}>{props.text2}</a></li>
                        <li><a href ={props.url3}>{props.text3}</a></li>
                        <li><a href ={props.url4}>{props.text4}</a></li>
                        <div><li> &copy; 2021 Sweet Home Corp </li></div>
                    </ul>
                    <style jsx>{`

                            div{

                                font-family: ${fonts.default};
                                color: ${colors.primary};
                                background-color: ${colors.secondary}

                                }

                                div ul{
                                
                                display: flex;
                                flex-direction: row;
                                min-height: 100vh;
                                flex-direction: row;
                                flex-shrink: 0;

                                }
                        
                    `}
                    </style>
                </div>
            </>                        
    )
       
}

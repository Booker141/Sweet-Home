import {fonts} from 'styles/frontend-conf.js'
import {colors} from 'styles/frontend-conf.js'

/**
 * @author Sergio García Navarro
 * @param {*} props - different params tag receives
 * @returns footer of sweet home page
 */
export default function Footer(props){
    
        return (
            
            <>
                <nav>
                    <ul>
                        <li><a href={props.url1}>{props.text1}</a></li>
                        <li><a href={props.url2}>{props.text2}</a></li>
                        <li><a href={props.url3}>{props.text3}</a></li>
                        <li><a href={props.url4}>{props.text4}</a></li>
                        <li><p>&copy; 2021 Sweet Home Corp </p></li>
                    </ul>
                </nav>
                    <style jsx>{`


                            nav{

                                display: flex;
                                flex-direction: row;
                                flex-wrap: wrap;
                                padding: 10px 10px 0px 10px;
                                height: 100px;
                                width: 100%; 
                                font-family: ${fonts.default};
                                color: ${colors.primary};
                                margin: 50px;
                                padding: 10px;
                                

                            }

                            li{
                                display: inline-block;
                                margin: 5vw;
                                list-style: none;
                            }
                            
                            a{
                                font-family: ${fonts.default};
                                color: ${colors.primary};
                            }

                            a:link{
                                text-decoration: none;
                            }

                        
                    `}
                    </style>
            </>                        
    )
       
}

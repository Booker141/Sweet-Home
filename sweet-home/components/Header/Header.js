import {fonts} from 'styles/frontend-conf.js'
import {colors} from 'styles/frontend-conf.js'
import Trademark from 'components/Trademark/Trademark'

/**
 * @author Sergio García Navarro
 * @param {*} props - different params tag receives
 * @returns header of sweet home page
 */
export default function Header(props){
    
        return (

            <>
                <header>
                    <nav class="header">
                        
                        <ul>
                            <Trademark class="logo"/>
                            <li><a href ={props.url1}>{props.text1}</a></li>
                            <li><a href ={props.url2}>{props.text2}</a></li>
                            <li><a href ={props.url3}>{props.text3}</a></li>
                            <li><a href ={props.url4}>{props.text4}</a></li>
                        </ul>
                    </nav>
                </header>
                <style jsx>{`

                        .logo{

                            margin-left: 50px;
                            
                        }

                        .header{

                            display: flex;
                            justify-content: flex-end;
                            align-items: center;
                            padding: 20px 50px;
                            

                        }

                        li {
                            
                            display: inline-block;
                            margin: 80px;
                            list-style: none;
                         
                        }

                        a{
                            font-family: ${fonts.default};
                            color: ${colors.secondary}
                            text-decoration: none;
                        }
                    
                    
                    `}</style>
            </>
        );
}


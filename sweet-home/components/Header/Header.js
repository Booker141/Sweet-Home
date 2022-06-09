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
                    <Trademark class="logo"/>
                    <nav class="header">
                        <ul>
                            <li><a href={props.url4}>{props.text4}</a></li>
                            <li><a href={props.url3}>{props.text3}</a></li>
                            <li><a href={props.url2}>{props.text2}</a></li>
                            <li><a href={props.url1}>{props.text1}</a></li>
                        </ul>
                    </nav>
                </header>
                <style jsx>{`
                
                    a {
                        text-decoration: none;
                        color: ${colors.primary};
                        font-family: ${fonts.default};
                    }

                    .logo{
                        margin-top: 20px;
                        margin-left: 20px;
                        float: left;
                    }


                    .header ul, li {
                        padding: 6vw;
                        list-style: none;
                        float: right;

                    }

                    .header li {
                        margin: 1.4em 1em 1em 1em;
                    }
                    
                    `}</style>
            </>
        );
}


//Style
import {fonts} from '../../styles/frontend-conf.js'
import {colors} from '../../styles/frontend-conf.js'

export default class Footer extends React.Component{
    
    constructor(props){
        super(props);
        this.props = props;
    }


    render(){
        return (
        <div>
            <ul>
                <li><a href ='../pages/Info'>Información</a></li>
                <li><a href ='../pages/Privacy'>Privacidad</a></li>
                <li><a href ='../pages/Conditions'>Condiciones</a></li>
                <li><a href ='../pages/Language'>Idioma</a></li>
                <div><li> &copy; 2021 Sweet Home Corp </li></div>
            </ul>
            <style jsx>{`

                    div{

                        display: flex;
                        font-family: ${fonts.default};
                        color: ${colors.primary};

                        }

                        div ul{

                        flex-direction: row;
                        justify-content: flex-start;

                        }

                        div ul div{

                        justify-content: flex-end;

                    }
                
            `}
            </style>
        </div>

    );}
       
}

const { Component } = require("react");

export default function Footer({ children }){
    
        return (
            <div>
                <ul>
                    <li><a href ='../pages/Info'>Información</a></li>
                    <li><a href ='../pages/Privacy'>Privacidad</a></li>
                    <li><a href ='../pages/Conditions'>Condiciones</a></li>
                    <li><a href ='../pages/Language'>Idioma</a></li>
                    <div><li> &copy; {this.state.year} Sweet Home Corp </li></div>
                </ul>
                <style jsx>{`

                        div{

                            display: flex;
                            font-family: 'Poppins', Arial, Helvetica, sans-serif;
                            color: #f0810f;

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

        );

}

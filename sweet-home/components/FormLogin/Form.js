import FormButton from '/components/FormButton/FormButton'
import {colors} from 'styles/frontend-conf.js'
import {fonts} from 'styles/frontend-conf.js'
export default function FormLogin(){

    return(
        <>
            <form className="form-vertical">   
                <input type="text" name="Nombre" class="nombre" placeholder="Nombre"></input>
                <input type="password" name="Contraseña" class="contraseña" placeholder="Contraseña"></input>        
                <FormButton class="buttom" name="Iniciar sesión"/>
            </form>
            <style jsx>{`
  
            
                input{

                    border-radius: 10px;
                    border: 0;
                    font-size: 15px;
                    weight: 2.5em;
                    height: 1em;
                    margin-bottom: 3vw;
                    font-family: ${fonts.default};
                    color: ${colors.primary};

                }

                .buttom{
                    margin-top: 10vw;
                }

                .form-vertical{

                    /*Style*/
                    border-radius: 10px;
                    background-color: ${colors.primary};
                    background: linear-gradient(90deg, rgba(240,129,15,1) 35%, rgba(249,166,3,1) 100%);

                    /*Size*/
                    height: 20vw;
                    width: 20vw;
                    padding: 3.5vw;

                    /*Text*/
                    font-family: ${fonts.default};
                    color: ${colors.secondary};

                }

            
            `}</style>
        </>
    )


}
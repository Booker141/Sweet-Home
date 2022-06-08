import FormButton from '/components/FormButton/FormButton'
import {colors} from 'styles/frontend-conf.js'
import {fonts} from 'styles/frontend-conf.js'
export default function FormLogin(){

    return(
        <>
            <form className="form-vertical">
                <label for="Nombre">Nombre</label>
                <input type="text" name="Nombre" id="Nombre" placeholder="Nombre"></input>
                <label for="Contraseña">Contraseña</label>
                <input type="text" name="Contraseña" id="Contraseña" placeholder="Contraseña"></input>         
                <FormButton name="Iniciar sesión"/>
            </form>
            <style jsx>{`
            
                .form-vertical{

                    display: flex;
                    flex-direction: column;
                    align-items: right;
                    background-color: ${colors.primary};
                    height: 200px;
                    /*Text*/
                    font-family: ${fonts.default};
                    color: ${colors.secondary};

                }
            
            `}</style>
        </>
    )


}
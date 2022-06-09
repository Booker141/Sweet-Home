import FormButton from '/components/FormButton/FormButton'

export default function FormRegister() {

    return(

        <>
            <form className="form-vertical">
                <label for="Correo">Correo</label>
                <input type="text" name="Correo" id="Correo"></input>
                <label for="Nombre">Nombre completo</label>
                <input type="text" name="Nombre" id="Nombre"></input>
                <label for="Usuario">Nombre de usuario</label>
                <input type="text" name="Usuario" id="Usuario"></input>
                <label for="Contraseña">Contraseña</label>
                <input type="text" name="Contraseña" id="Contraseña"></input>
                <p>Al confirmar, aceptará las condiciones de la empresa. En los apartados Privacidad 
                y Condiciones puede obtener información más detallada</p> 
                <FormButton name="Confirmar"/>
            </form>

            <style jsx>{`
            
                p{
                        font-size: 12px;
                        font-family: ${fonts.default};
                        color: ${colors.secondary};
                        justify-content: center;
                }

            
            
            
            
            
            
            `}</style>
        </>

    )
}
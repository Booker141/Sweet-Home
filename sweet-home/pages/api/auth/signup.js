import bcrypt from 'bcrypt'
import clientPromise from "../lib/MongoDB"

export default async function handler(req, res){

    if(req.method === 'POST'){

        const client = await clientPromise;
        const db = await client.db();
        const body = req.body;
        const userExist = await db.collection('users').findOne({email: body.email});

        let regEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        let regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ])$/;

        /**
         * Reglas de negocio
         */

        // Validación contraseña

        if((body.password).length < 8){
            
            res.status(200).json({message: 'La contraseña tiene menos de ocho caracteres'});
            return;

        }

        if(!regPassword.test(body.password)){
            
            res.status(200).json({message: 'La contraseña no sigue el formato indicado'});
            return;
        }

        // Validación del formato del email

        if(!regEmail.test(body.email)){
            
            res.status(200).json({message: 'El email no sigue el formato correcto'});
            return;
        }

        // Validación logitud del username

        if(username.length < 4){
            
            res.status(200).json({message: 'El nombre de usuario debe tener al menos cuatro caracteres'});
            return;
        }

        if(userExist){

            res.status(200).json({message: 'Ya está registrado con este email'});
            client.close();
            return;

        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(body.password, salt);
        
        await db.collection('users').insertOne({email: body.email, name: body.name, lastName: body.lastName, username: body.username, password: hashPassword});

        if(response.statusCode == 500)
            res.status(500).json({message: 'Error al registrar el usuario'});
        res.status(201).json({message: 'Registrado con éxito'});

    } 
    
}   
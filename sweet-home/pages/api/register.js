import bcrypt from 'bcrypt'
import {MongoClient} from 'mongodb'

export default async function handler(req, res){

        const client = await MongoClient.connect(process.env.MONGODB_URI, { useNewUrlParser:true, useUnifiedTopology:true });

        const db = await client.db();
        const body = req.body;
        const userExist1 = await db.collection('users').findOne({email: body.email});
        const userExist2 = await db.collection('users').findOne({username: body.username});

        if(userExist1 || userExist2){

            res.status(200).json({message: 'Ya está registrado con este email'});
            return;

        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(body.password, salt);
        
        await db.collection('users').insertOne({email: body.email, firstname: body.name, lastName: body.lastName, username: body.username, password: hashPassword});
        if(res.statusCode == 500)
            res.status(500).json({message: 'Error al registrar el usuario'});
        res.status(201).json({message: 'Registrado con éxito'});

     
    
}   
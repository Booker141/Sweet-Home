import bcrypt from 'bcrypt'
import {MongoClient} from 'mongodb'

export default async function handler(req, res){

        const client = await MongoClient.connect(process.env.MONGODB_URI, { useNewUrlParser:true, useUnifiedTopology:true });

        const db = await client.db();
        const body = req.body;
        const userExist1 = await db.collection('users').findOne({email: body.email});
        const userExist2 = await db.collection('users').findOne({username: body.username});
        const userRole = await db.collection('userRole').findOne({name: "usuario"});
        const userStatus = await db.collection('userStatus').findOne({name: "activo"})
        const account = await db.collection('accounts').findOne({userId: body._id});

        if(userExist1){

            res.status(200).json({message: 'Ya está registrado con este email.'});
            return;

        }

        if(userExist2){

            res.status(200).json({message: 'Ya está registrado con este nombre de usuario.'});
            return;
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(body.password, salt);
        
        await db.collection('users').insertOne({email: body.email, firstname: body.name, lastname: body.lastname, username: body.username, password: hashPassword, phone: "", gender: "", birthdate: new Date("<2012-12-12>"), image: "/public/userPhotos/default.png", status: userStatus, role: userRole, createdAt: new Date(), accountId: account._id});

        if(res.statusCode == 500){

            res.status(500).json({message: 'Error al registrar el usuario.'});

        }
        
        res.status(201).json({message: 'Registrado con éxito.'});

     
    
}   
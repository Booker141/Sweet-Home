import clientPromise from "../../lib/MongoDB"

export default async function handler(req, res){

    const client = await clientPromise;
    const db = await client.db();
    const body = req.body;
    
    const userFrom = await db.collection('users').findOne({username: body.usernameFrom});
    const userTo = await db.collection('users').findOne({username: body.usernameTo});

    if(req.method === 'POST'){
            
        await db.collection('complaints').insertOne({description: body.description, adminId: null, createdAt: new Date(), isApproved: false, isChecked: false, userIdFrom: userFrom._id, userIdTo: userTo._id});

        res.status(201).json({message: 'Creada con éxito.'});
        
    }

    if(req.method === 'DELETE'){

        await db.collection('complaints').findOne({_id: body.id}).removeOne();

        res.status(200).json({message: "Denuncia eliminada correctamente"});

    }
}
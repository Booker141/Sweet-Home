import clientPromise from "../lib/MongoDB"

export default async function handler(req, res){

    const client = await clientPromise;
    const db = await client.db();
    const body = req.body;

    if(req.method === 'GET'){

        const data = await db.collection('users').find({}).limit(50).toArray();
        
        const users = JSON.parse(JSON.stringify(data));

        res.status(200).json(users);
    }

    if(req.method === 'POST'){
        
        

        let data = await db.collection('users').insertOne(body);

        let user = JSON.parse(JSON.stringify(data));

        res.json(user.ops[0]);

    }

    if(req.method === 'DELETE'){

        await db.collection('users').findOne({username: body.username}).removeOne();

        res.status(200).json({message: "Usuario eliminado correctamente"});
    }
   
   
}
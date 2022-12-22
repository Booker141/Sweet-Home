import clientPromise from "../lib/MongoDB"

export default async function handler(req, res){

    const client = await clientPromise;
    const db = await client.db();

    if(req.method == "GET"){

        const data = await db.collection('users').find({}).limit(50).toArray();
        
        const users = JSON.parse(JSON.stringify(data));

        res.status(200).json(users);
    }

    if(req.method == "POST"){
        
        let body = JSON.parse(req.body);

        let data = await db.collection('users').insertOne(body);

        let user = JSON.parse(JSON.stringify(data));

        res.json(user.ops[0]);

    }
   
   
}
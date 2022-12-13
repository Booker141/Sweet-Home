import connectionDB from "./lib/MongoDB"

export default async function handler(req, res){

    const client = await connectionDB;
    const db = await client.db();

    if(req.method == "GET"){

        const data = await db.collection("users").find().toArray();
        
        const users = JSON.parse(JSON.stringify(data));

        res.status(200).json(users);
    }

    if(req.method == "POST"){
        
        let body = JSON.parse(req.body);

        let data = await db.collection("users").insertOne(body);

        let user = JSON.parse(JSON.stringify(data));

        res.json(user);

    }
   
   
}
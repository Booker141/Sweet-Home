import connectionDB from "./lib/MongoDB"

export default async function handler(req, res){

    const client = await connectionDB;
    const db = await client.db("SweetHomeDB");

    if(req.method == "GET"){

        const data = await db.collection("posts").find({}).limit(50).toArray();

        const posts = JSON.parse(JSON.stringify(data));

        res.status(200).json(posts);

    }
   
    if(req.method == "POST"){
        
        let body = JSON.parse(req.body);

        let data = await db.collection("posts").insertOne(body);

        let post = JSON.parse(JSON.stringify(data));
        
        res.json(post);

    }
    
}
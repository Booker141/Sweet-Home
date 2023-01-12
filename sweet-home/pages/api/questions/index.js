import clientPromise from "../lib/MongoDB"

export default async function handler(req, res){

    const client = await clientPromise;
    const db = await client.db();

    if(req.method == "GET"){

        const data = await db.collection('questions').find({}).limit(50).toArray();

        const questions = JSON.parse(JSON.stringify(data));

        res.status(200).json(questions);

    }
   
    if(req.method == "POST"){
        
        let body = JSON.parse(req.body);

        let data = await db.collection('questions').insertOne(body);

        let question = JSON.parse(JSON.stringify(data));
        
        res.json(question);

    }
    
}
import clientPromise from "../lib/MongoDB"

export default async function handler(req, res){

    const client = await clientPromise;
    const db = await client.db();

    if(req.method == "GET"){

        const data = await db.collection('comments').find({}).limit(50).toArray();
        
        const comments = JSON.parse(JSON.stringify(data));

        res.status(200).json(comments);
    }

    if(req.method == "POST"){
        
        let body = JSON.parse(req.body);

        let data = await db.collection('comments').insertOne(body);

        let comment = JSON.parse(JSON.stringify(data));

        res.json(comment.ops[0]);

    }
   
   
}
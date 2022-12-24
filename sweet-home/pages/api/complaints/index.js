import clientPromise from "../lib/MongoDB"

export default async function handler(req, res){

    const client = await clientPromise;
    const db = await client.db();

    if(req.method == "GET"){

        const data = await db.collection('complaints').find({}).limit(50).toArray();
        
        const complaints = JSON.parse(JSON.stringify(data));

        res.status(200).json(complaints);
    }

    if(req.method == "POST"){
        
        let body = JSON.parse(req.body);

        let data = await db.collection('complaints').insertOne(body);

        let complaint = JSON.parse(JSON.stringify(data));

        res.json(complaint.ops[0]);

    }
   
   
}
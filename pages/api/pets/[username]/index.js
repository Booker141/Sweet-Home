import clientPromise from "../../lib/MongoDB"

export default async function handler(req, res){

    const client = await clientPromise;
    const db = await client.db();

    if(req.method == "GET"){

        const data = await db.collection('pets').find({ownerUsername: req.query.username}).limit(50).toArray();

        const pets = JSON.parse(JSON.stringify(data));

        res.status(200).json(pets);

    }
   
    
}
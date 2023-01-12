import clientPromise from "../../lib/MongoDB"

export default async function handler(req, res){

    const client = await clientPromise;
    const db = await client.db();

    if(req.method == "GET"){

        const data = await db.collection('news').findOne({id: req.query.id});

        const news = JSON.parse(JSON.stringify(data));

        console.log(news);
        res.status(200).json(news);

    }
  
    
}
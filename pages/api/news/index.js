import clientPromise from "../lib/MongoDB"

export default async function handler(req, res){

    const client = await clientPromise;
    const db = await client.db();
    const body = req.body;

    if(req.method === 'GET'){

        const data = await db.collection('news').find({}).limit(50).toArray();

        const news = JSON.parse(JSON.stringify(data));

        res.status(200).json(news);

    }

    if(req.method === 'POST'){

        const data = await db.collection('news').insertOne(body);

        const news = JSON.parse(JSON.stringify(data));

        res.json(news.ops[0]);

    }

    if(req.method === 'DELETE'){

        await db.collection('news').findOne({_id: body.id}).removeOne();

        res.status(200).json({message: "Noticia eliminada correctamente"});

    }

  
    
}
import clientPromise from "../lib/MongoDB"

export default async function handler(req, res){

    const client = await clientPromise;
    const db = await client.db();
    const body = req.body;
    const user = await db.collection('users').findOne({username: body.username});

    if(req.method == "GET"){

        const data = await db.collection('posts').find({}).limit(50).toArray();

        const posts = JSON.parse(JSON.stringify(data));

        res.status(200).json(posts);

    }
   
    if(req.method === 'POST'){
        
        
        await db.collection('posts').insertOne({location: body.location, description: body.description, comments: [], likes: [], userId: user._id, username: body.username, createdAt: new Date(), image: ""});

        res.status(201).json({message: 'Creada con éxito.'});
        
        console.log(post);
        

    }
    
}
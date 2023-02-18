import clientPromise from "../../../lib/MongoDB"
import {ObjectId} from "mongodb"
export default async function handler(req, res){

    const client = await clientPromise;
    const db = await client.db();
    const id = new ObjectId(req.query.postId);

    if(req.method === 'GET'){

        const post = await db.collection('posts').findOne({_id: id});
        const data = await db.collection('posts').find({username: post.username}).limit(50).toArray();

        const posts = JSON.parse(JSON.stringify(data));

        res.status(200).json(posts);

    }

    if(req.method === 'DELETE'){

        
        await db.collection('posts').deleteOne({_id: id});

        res.status(200).json({message: "Post eliminado"});

        
    }
   
    
}
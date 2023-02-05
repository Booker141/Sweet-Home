import clientPromise from "../../lib/MongoDB"
import { ObjectId } from "mongodb";

export default async function handler(req, res){

    const client = await clientPromise;
    const db = await client.db();

    console.log(req.query.commentId);

    if(req.method === 'GET'){

        const data = await db.collection('comments').findOne({_id: ObjectId(req.query.commentId)});

        console.log(data);

        const user = await db.collection('users').findOne({_id: ObjectId(data.userId)})

        console.log(user);
        const comment = {...data, ...user};
        res.status(200).json(comment);

    }
   
    
}
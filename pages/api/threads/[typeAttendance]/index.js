import clientPromise from "../../lib/MongoDB"
import { ObjectId } from "mongodb";

export default async function handler(req, res){

    const client = await clientPromise;
    const db = await client.db();
    const {typeAttendance} = req.query;
    const body = req.body;
    const typeAttendanceThread = await db.collection('typeAttendance').findOne({urlName: typeAttendance});
    const user = await db.collection('user').findOne({username: body.username});

    if(req.method === 'GET'){

        const data = await db.collection('threads').find({typeAttendanceId: ObjectId(typeAttendanceThread._id)}).limit(50).toArray();

        console.log(data);

        const threads = JSON.parse(JSON.stringify(data));
        res.status(200).json(threads);

    }

    if(req.method === 'POST'){

        const data = await db.collection('threads').insertOne({
            name: body.name,
            typeAttendanceId: ObjectId(typeAttendanceThread._id),
            createdAt: new Date(),
            attendances: [],
            userId: ObjectId(user._id)
        });

        const thread = JSON.parse(JSON.stringify(data));
        res.status(200).json(thread);

    }

    
}
import clientPromise from "../../../lib/MongoDB";
import { ObjectId } from "mongodb";

export const config = {
  api: {
    responseLimit: false,
  },
};

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=10");

  const client = await clientPromise;
  const db = await client.db();

  if (req.method === "GET") {
    const data = await db.collection("chats").findOne({ $or: [{ senderId: ObjectId(req.query.senderId), receiverId: ObjectId(req.query.receiverId)}, 
      {senderId: ObjectId(req.query.receiverId), receiverId: ObjectId(req.query.senderId)}]});

    const chat = JSON.parse(JSON.stringify(data));

    console.log(chat)
    
    if(chat === null)

      return res.status(404).json({message: "No existe el chat"})

    return res.status(200).json(chat);
  }
}

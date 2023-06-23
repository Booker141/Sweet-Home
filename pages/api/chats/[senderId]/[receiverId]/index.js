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
    
      //Comprobar si existe en array del usuario y si no meterlo


    const chat = JSON.parse(JSON.stringify(data));

    const chatSender = await db.collection("users").findOne({ _id: ObjectId(chat?.senderId), chats: ObjectId(chat?._id)})

    const chatReceiver = await db.collection("users").findOne({ _id: ObjectId(chat?.receiverId), chats: ObjectId(chat?._id)})

    if(chatSender === null)
      await db.collection("users").updateOne({ _id: ObjectId(chat?.senderId)}, {$push: {chats: ObjectId(chat?._id)}})

    if(chatReceiver === null)
      await db.collection("users").updateOne({ _id: ObjectId(chat?.receiverId)}, {$push: {chats: ObjectId(chat?._id)}})


    if(chat === null)

      return res.status(404).json({message: "No existe el chat"})


    if(chat != null)

      return res.status(200).json(chat);
  }
}

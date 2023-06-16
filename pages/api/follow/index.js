import clientPromise from "../lib/MongoDB";
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
  const body = req.body;
  const chatId = new ObjectId()
  const isChat = await db.collection("chats").findOne({$or: [{receiverId: ObjectId(body.idTo)}, {senderId: ObjectId(body.idTo)}]})

  const user = await db
    .collection("users")
    .findOne({ username: body.usernameTo });

  const id = new ObjectId();
  const typeNotification = await db
    .collection("typeNotification")
    .findOne({ name: "seguir" });

  if (req.method === "PUT") {
    await db
      .collection("users")
      .updateOne(
        { _id: ObjectId(body.idFrom) },
        { $push: { following: ObjectId(body.idTo) } }
      );

      if(!isChat){

        await db
        .collection("users")
        .updateOne(
          { _id: ObjectId(body.idFrom) },
          { $push: { chats: chatId } }
        );
        await db
        .collection("chats")
        .insertOne(
          { _id: chatId, 
            senderId: ObjectId(body.idFrom),
            receiverId: ObjectId(body.idTo),
            messages: [],
            createdAt: new Date()},
        );
        
      }
     
    await db
      .collection("users")
      .updateOne(
        { _id: ObjectId(body.idTo) },
        { $push: { followers: ObjectId(body.idFrom) } }
      );

    await db
      .collection("notifications")
      .insertOne({
        _id: id,
        sender: ObjectId(body.idFrom),
        receiver: user._id,
        type: typeNotification,
        description: `@${body.usernameFrom} te ha seguido`,
        isChecked: false,
        createdAt: new Date(),
      });

    res.status(201).json({ message: "Seguimiento con éxito." });
  }
}

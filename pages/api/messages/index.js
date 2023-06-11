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
  const messageId = new ObjectId();

  if (req.method == "GET"){

    const data = await db.collection("messages").find({}).limit(50).toArray();

    const messages = JSON.parse(JSON.stringify(data));

    res.status(200).json(messages);
  }

  if (req.method == "POST") {
    await db
      .collection("messages")
      .insertOne({
        _id: messageId,
        chatId: ObjectId(body.chatId),
        description: body.description,
        senderId: ObjectId(body.senderId),
        createdAt: new Date(),
      });
    await db
      .collection("chat")
      .updateOne(
        { _id: ObjectId(body.chatId) },
        { $push: { messages: messageId } }
      );

    res.status(200).json({ message: "Mensaje creado correctamente" });
  }
}

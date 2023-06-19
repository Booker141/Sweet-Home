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
  const chat = await db.collection('chats').findOne({channel: body.channel})

  console.log(chat)

  const typeNotification = await db
  .collection("typeNotification")
  .findOne({ name: "mensaje" });

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
        chatId: chat._id,
        chatChannel: body.channel,
        description: body.description,
        senderId: ObjectId(body.senderId),
        createdAt: new Date(),
      });

    await db
      .collection("chats")
      .updateOne(
        { _id: chat._id },
        { $push: { messages: messageId } }
      );

      await db
      .collection("notifications")
      .insertOne({
        sender: ObjectId(body.senderId),
        receiver: ObjectId(body.receiverId),
        type: typeNotification,
        description: `@${body.username} te ha enviado un mensaje`,
        isChecked: false,
        createdAt: new Date(),
      });

    res.status(200).json({ message: "Mensaje creado correctamente" });
  }
}

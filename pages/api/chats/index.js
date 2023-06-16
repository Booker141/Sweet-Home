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

  if (req.method == "POST") {
    await db
      .collection("chats")
      .insertOne({
        senderId: ObjectId(body.senderId),
        receiverId: ObjectId(body.receiverId),
        channel: 'chat:' + body.senderId + body.receiverId,
        messages: [],
        createdAt: new Date(),
      });

    res.status(200).json({ message: "Chat creado correctamente" });
  }
}

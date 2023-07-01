import clientPromise from "../../lib/MongoDB";
import { ObjectId } from "mongodb";

export const config = {
  api: {
    responseLimit: false,
  },
};

export default async function handler(req, res) {

  const client = await clientPromise;
  const db = await client.db();

  if (req.method === "GET") {

    const data = await db.collection("chats").findOne({ _id: ObjectId(req.query.chatId)});

    const chat = JSON.parse(JSON.stringify(data));

    return res.status(200).json(chat);
  }
}

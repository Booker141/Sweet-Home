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

    const data = await db.collection("chats").findOne({$or: [{senderId: ObjectId(req.query.followingId), receiverId: ObjectId(req.query.sessionId)}, {senderId: ObjectId(req.query.sessionId), receiverId: ObjectId(req.query.followingId)} ]});

    const chat = JSON.parse(JSON.stringify(data));

    return res.status(200).json(chat);
  }
}

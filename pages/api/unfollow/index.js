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
  const isChat = await db.collection("chats").findOne({$or: [{receiverId: ObjectId(body.idTo), senderId: ObjectId(body.idFrom)}, {receiverId: ObjectId(body.idFrom), senderId: ObjectId(body.idTo)}]})

  if (req.method === "PUT") {
    await db
      .collection("users")
      .updateOne(
        { _id: ObjectId(body.idFrom) },
        { $pull: { following: ObjectId(body.idTo) } }
      );
    await db
      .collection("users")
      .updateOne(
        { _id: ObjectId(body.idTo) },
        { $pull: { followers: ObjectId(body.idFrom) } }
      );

      if(isChat){
        await db
        .collection("users")
        .updateOne(
          { _id: ObjectId(body.idFrom) },
          { $pull: { chats: ObjectId(isChat._id) } }
        );
        await db
        .collection("users")
        .updateOne(
          { _id: ObjectId(body.idTo) },
          { $pull: { chats: ObjectId(isChat._id) } }
        );
      }

    res.status(201).json({ message: "Eliminado con éxito." });
  }
}

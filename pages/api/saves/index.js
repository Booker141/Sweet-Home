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
  const idUser = new ObjectId(body.userId);
  const idPost = new ObjectId(body.postId);

  if (req.method === "PUT") {
    await db
      .collection("posts")
      .updateOne({ _id: ObjectId(body.postId) }, { $push: { saves: idUser } });
    await db
      .collection("users")
      .updateOne({ _id: ObjectId(body.userId) }, { $push: { saves: idPost } });

    res.status(201).json({ message: "Creado con éxito." });
  }
}

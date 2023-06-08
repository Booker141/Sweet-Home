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

    res.status(201).json({ message: "Eliminado con éxito." });
  }
}

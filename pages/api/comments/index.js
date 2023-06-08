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
  const id = new ObjectId();

  const typeNotification = await db
    .collection("typeNotification")
    .findOne({ name: "comentar" });
  const postOwner = await db
    .collection("posts")
    .findOne({ _id: ObjectId(body.postId) });

  const user = await db
    .collection("users")
    .findOne({ username: body.username });

  if (req.method === "GET") {
    const data = await db.collection("comments").find({}).limit(50).toArray();

    const comments = JSON.parse(JSON.stringify(data));

    res.status(200).json(comments);
  }

  if (req.method === "POST") {
    const data = await db
      .collection("comments")
      .insertOne({
        description: body.description,
        username: body.username,
        userId: user._id,
        postId: ObjectId(body.postId),
        createdAt: new Date(),
      });

    const comment = JSON.parse(JSON.stringify(data));

    await db
      .collection("posts")
      .updateOne(
        { _id: ObjectId(body.postId) },
        { $push: { comments: ObjectId(comment.insertedId) } }
      );

    await db
      .collection("notifications")
      .insertOne({
        _id: id,
        sender: user._id,
        receiver: postOwner.userId,
        type: typeNotification,
        description: `@${body.username} te ha comentado una publicación`,
        isChecked: true,
        createdAt: new Date(),
      });

    res.status(201).json({ message: "Comentario creado con éxito" });
  }
}

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
  const commentId = new ObjectId(req.query.commentId);

  if (req.method === "GET") {
    const data = await db
      .collection("comments")
      .findOne({ _id: ObjectId(req.query.commentId) });
    const user = await db
      .collection("users")
      .findOne({ _id: ObjectId(data.userId) });

    const comment = { ...data, ...user };
    res.status(200).json(comment);
  }

  if (req.method === "DELETE") {
    const comment = await db.collection("comments").findOne({ _id: commentId });
    const postId = comment.postId;

    await db
      .collection("posts")
      .update({ _id: postId }, { $pull: { comments: commentId } });

    await db.collection("comments").deleteOne({ _id: commentId });

    res.status(200).json({ message: "Comentario eliminado" });
  }
}

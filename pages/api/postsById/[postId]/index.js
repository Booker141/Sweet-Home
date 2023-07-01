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
  const id = new ObjectId(req.query.postId);

  if (req.method === "GET") {
    const data = await db.collection("posts").findOne({ _id: id });

    const post = JSON.parse(JSON.stringify(data));

    res.status(200).json(post);
  }
}

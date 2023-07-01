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
    const likes = await db.collection("posts").findOne({ _id: id });

    res.status(200).json(JSON.parse(JSON.stringify(likes)));
  }
}

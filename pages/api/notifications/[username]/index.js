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

  const user = await db
    .collection("users")
    .findOne({ username: req.query.username });

  if (req.method === "GET") {
    const data = await db
      .collection("notifications")
      .find({ receiver: user._id })
      .limit(50)
      .toArray();

    const notifications = JSON.parse(JSON.stringify(data));

    res.status(200).json(notifications);
  }
}

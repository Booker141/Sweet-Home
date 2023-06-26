import clientPromise from "../../lib/MongoDB";

export const config = {
  api: {
    responseLimit: false,
  },
};
export default async function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=10");

  const client = await clientPromise;
  const db = await client.db();

  if (req.method == "GET") {

    const data = await db
      .collection("messages")
      .find({ "data.chatChannel": req.query.chatChannel})
      .sort({ createdAt: 1 })
      .toArray();

    const messages = JSON.parse(JSON.stringify(data));

    res.status(200).json(messages);
  }
}

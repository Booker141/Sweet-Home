import clientPromise from "../lib/MongoDB";

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
    const data = await db
      .collection("users")
      .find({ "role.name": "protectora" })
      .limit(50)
      .toArray();

    const users = JSON.parse(JSON.stringify(data));

    res.status(200).json(users);
  }
}

import clientPromise from "../lib/MongoDB";

export const config = {
  api: {
    responseLimit: false,
  },
};
export default async function handler(req, res) {

  const client = await clientPromise;
  const db = await client.db();
  const body = req.body;

  if (req.method === "GET") {
    const data = await db.collection("questions").find({}).limit(50).toArray();

    const questions = JSON.parse(JSON.stringify(data));

    res.status(200).json(questions);
  }

  if (req.method === "POST") {
    await db
      .collection("questions")
      .insertOne({ title: body.title, answer: body.answer, adminId: body.adminId });

    res.status(201).json({ message: "Creada con éxito." });
  }
}

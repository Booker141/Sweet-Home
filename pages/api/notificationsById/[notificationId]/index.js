import clientPromise from "../../lib/MongoDB";
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

  const id = ObjectId(req.query.notificationId);

  if (req.method === "GET") {
    const data = await db.collection("notifications").findOne({ _id: id });

    res.status(200).json(JSON.parse(JSON.stringify(data)));
  }

  if (req.method === "PUT") {
    await db
      .collection("notifications")
      .updateOne({ _id: id }, { $set: { isChecked: true } });

    res.status(200).json({ message: "Se han actualizado las notificaciones" });
  }

  if (req.method === "DELETE") {
    await db.collection("notifications").deleteOne({ _id: id });

    res
      .status(200)
      .json({ message: "Se ha eliminado la notificación correctamente" });
  }
}

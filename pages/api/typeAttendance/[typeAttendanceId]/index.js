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
  const { typeAttendanceId } = req.query;
  const id = ObjectId(typeAttendanceId);
  const typeAttendances = await db
    .collection("typeAttendance")
    .find({})
    .toArray();

  if (req.method === "GET") {
    const data = await db.collection("typeAttendance").findOne({ _id: id });

    const typeAttendanceData = JSON.parse(JSON.stringify(data));

    return res.status(200).json(typeAttendanceData);
  }

  if (req.method === "PUT") {
    const { name, description } = req.body;

    typeAttendances.map((typeAttendance) => {
      if (typeAttendance.name.localeCompare(name)) {
        return res
          .status(400)
          .json({ message: "Ya existe este tipo de cuidado" });
      }
    });

    await db
      .collection("typeAttendance")
      .updateOne(
        { _id: id },
        { $set: { name: name, description: description } }
      );
    return res
      .status(200)
      .json({ message: "Tipo de cuidado actualizada correctamente" });
  }

  if (req.method === "DELETE") {
    await db.collection("typeAttendance").deleteOne({ _id: id });

    return res
      .status(200)
      .json({ message: "Categoría eliminada correctamente" });
  }
}

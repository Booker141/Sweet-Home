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

  const typeComplaint = await db
    .collection("typeComplaint")
    .findOne({ name: body.reason });

  const admin = await db
    .collection("users")
    .findOne({ username: body.adminUsername });

  if (req.method === "GET") {
    const data = await db.collection("complaints").find({}).limit(50).toArray();

    const complaints = JSON.parse(JSON.stringify(data));

    res.status(200).json(complaints);
  }

  if (req.method === "POST") {
    console.log(body)
    await db
      .collection("complaints")
      .insertOne({
        _id: id,
        description: body.description,
        adminId: null,
        createdAt: new Date(),
        isApproved: false,
        isChecked: false,
        usernameFrom: body.usernameFrom,
        usernameTo: body.usernameTo,
        typeComplaint: typeComplaint,
      });
    const complaint = await db.collection("complaints").findOne({ _id: id });
    await db
      .collection("users")
      .updateOne(
        { username: body.usernameTo },
        { $push: { complaints: complaint._id } }
      );

    res.status(201).json({ message: "Denuncia creada con éxito" });
  }

  if (req.method === "DELETE") {
    await db
      .collection("complaints")
      .updateOne(
        { _id: ObjectId(body.id) },
        { $set: { isChecked: true, isApproved: false, adminId: admin._id } }
      );

    res.status(200).json({ message: "Denuncia denegada correctamente" });
  }

  if (req.method === "PUT") {
    await db
      .collection("complaints")
      .updateOne(
        { _id: ObjectId(body.id) },
        { $set: { isChecked: true, isApproved: true, adminId: admin._id } }
      );

    res.status(200).json({ message: "Denuncia aprobada correctamente" });
  }
}

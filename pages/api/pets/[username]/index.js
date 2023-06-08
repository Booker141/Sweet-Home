import clientPromise from "../../lib/MongoDB";
import { ObjectId } from "mongodb";

export const config = {
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=10");

  const client = await clientPromise;
  const db = await client.db();
  const body = req.body;
  const petId = new ObjectId();

  if (req.method == "GET") {
    const data = await db
      .collection("pets")
      .find({ ownerUsername: req.query.username })
      .limit(50)
      .toArray();

    const pets = JSON.parse(JSON.stringify(data));

    res.status(200).json(pets);
  }

  if (req.method == "POST") {
    await db
      .collection("pets")
      .insertOne({
        _id: petId,
        animal: body.animal,
        breed: body.breed,
        name: body.name,
        weight: parseFloat(body.weight),
        image: body.image,
        ownerId: ObjectId(body.userId),
        ownerUsername: body.username,
        birthdate: new Date(body.birthdate),
      });
    await db
      .collection("users")
      .updateOne({ username: req.query.username }, { $push: { pets: petId } });

    res.status(200).json({ message: "Mascota creada correctamente" });
  }

  if (req.method === "DELETE") {
    const id = ObjectId(body.id);

    console.log(id.toString());

    await db.collection("pets").deleteOne({ _id: id });
    await db
      .collection("users")
      .updateOne({ username: req.query.username }, { $pull: { pets: id } });

    res.status(200).json({ message: "Mascota eliminada correctamente" });
  }
}

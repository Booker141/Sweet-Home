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
  const { typeAttendanceId } = req.query;
  const id = ObjectId(typeAttendanceId);
  let itExists = false;
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
    const { name, description, primaryName } = req.body;


    typeAttendances.map((typeAttendance) => {
      if (typeAttendance.name === name && name != primaryName) {
          res
          .status(400)
          .json({ message: "Ya existe este tipo de cuidado" });
          itExists = true;
      }else{
        itExists = false
      }
    });

    if(itExists === false){
      await db
      .collection("typeAttendance")
      .updateOne(
        { _id: id },
        { $set: { name: name, description: description } }
      );
      res
      .status(200)
      .json({ message: "Tipo de cuidado actualizada correctamente" });

    }
    
  }

  if (req.method === "DELETE") {
    await db.collection("typeAttendance").deleteOne({ _id: id });

    return res
      .status(200)
      .json({ message: "Categoría eliminada correctamente" });
  }
}

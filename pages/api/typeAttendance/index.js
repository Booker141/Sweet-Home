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
  let itExists = false;
  const typeAttendances = await db
    .collection("typeAttendance")
    .find({})
    .toArray();

  if (req.method === "GET") {
    const data = await db.collection("typeAttendance").find({}).toArray();

    const typeAttendance = JSON.parse(JSON.stringify(data));

    res.status(200).json(typeAttendance);
  }

  if (req.method === "POST") {
    const { name, description } = req.body;

    typeAttendances.map((typeAttendance) => {
      if (typeAttendance.name === name) {
          res
          .status(400)
          .json({ message: "Ya existe este tipo de cuidado" });
          itExists = true;
      }else{
          itExists = false;
      }
    });

    if(itExists === false){
      const data = await db
      .collection("typeAttendance")
      .insertOne({ name: name, description: description });

      res.status(200).json(data);
    }
    
  }
}

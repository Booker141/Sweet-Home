import bcrypt from "bcrypt";
import clientPromise from "./lib/MongoDB";

export default async function handler(req, res) {


  if (req.method === "POST") {
    const client = await clientPromise;
    const db = await client.db();
    const body = req.body;
    const userExist1 = await db
      .collection("users")
      .findOne({ email: body.email });
    const userExist2 = await db
      .collection("users")
      .findOne({ username: body.username });
    const userRole = await db
      .collection("userRole")
      .findOne({ name: "usuario" });
    const userStatus = await db
      .collection("userStatus")
      .findOne({ name: "activo" });

    if (userExist1) {
      res.status(200).json({ message: "Ya está registrado con este email." });
      return;
    }

    if (userExist2) {
      res
        .status(200)
        .json({ message: "Ya está registrado con este nombre de usuario." });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(body.password, salt);

    await db
      .collection("users")
      .insertOne({
        email: body.email,
        firstname: body.name,
        lastname: body.lastname,
        username: body.username,
        password: hashPassword,
        phone: "",
        gender: "",
        birthdate: new Date("<2012-12-12>"),
        biography: "",
        location: "",
        image: "/userPhotos/default.png",
        banner: "/bannerPhotos/defaultBanner.svg",
        status: userStatus,
        role: userRole,
        followers: [],
        following: [],
        likes: [],
        saves: [],
        pets: [],
        complaints: [],
        posts: [],
        chats: [],
        accountId: null,
        createdAt: new Date(),
      });

    if (res.statusCode == 500) {
      res.status(500).json({ message: "Error al registrar el usuario." });
    }

    res.status(201).json({ message: "Registrado con éxito." });
  }
}

import clientPromise from "../lib/MongoDB";
import sendEmail from "../lib/sendEmail";

export const config = {
  api: {
    responseLimit: false,
  },
};

export default async function handler(req, res) {

  const client = await clientPromise;
  const db = await client.db();
  const body = req.body;

  if (req.method === "POST") {
    await sendEmail(body.email, body.username, "¡Bienvenido a Sweet Home!");

    res.status(200).json({ message: "Correo enviado correctamente" });
  }
}

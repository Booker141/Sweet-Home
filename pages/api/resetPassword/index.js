import clientPromise from "../lib/MongoDB";
import jwt from "jsonwebtoken";
import sendResetEmail from "../lib/sendResetEmail";

export default async function handler(req, res) {

  if (req.method === "POST") {
    const client = await clientPromise;
    const db = await client.db();
    const body = req.body;

    // User must exist in the database

    const userExist = await db
      .collection("users")
      .findOne({ email: body.email });

    if (userExist) {
      if (userExist.status.name === "bloqueado") {
        return res.status(400).json({ message: "Esta cuenta está bloqueada." });
      }

      // Create one-time link for reset password

      const secret = process.env.JWT_SECRET + userExist.password;

      const token = jwt.sign(
        {
          id: userExist._id,
          email: userExist.email,
          username: userExist.username,
          role: userExist.role,
        },
        secret,
        { expiresIn: "30m" }
      );

      // Send email

      await sendResetEmail(
        body.email,
        token,
        "Enlace para restablecer contraseña"
      );

      return res
        .status(201)
        .json({
          message:
            "Se ha enviado un correo electrónico a su dirección con el enlace para restablecer su contraseña.",
        });
    } else {
      return res.status(400).json({ message: "No existe el usuario." });
    }
  }
}

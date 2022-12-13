import bcrypt from 'bcrypt'
import connectionDB from "./lib/MongoDB"

export default async function handler(req, res){

    const client = await connectionDB;
    const db = await client.db();
    const body = req.body;
    const userExist = await db.collection("users").findOneByEmail(body.email);

    if(userExist){
        res.status(200).json({message: 'Ya está registrado con este email'});
        return;
    }

    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(body.password, salt);

    let res = await fetch("http://localhost:3000/api/posts", {
    method: "POST",
    body: JSON.stringify({
      title: title,
      content: content,
    }),
  });

    const user = res.json({email: body.email, name: body.name, lastName: body.lastName, username: body.username, password: hashPassword});
    await user.save();
    res.status(200).json({message: 'Registrado con éxito'});
}   
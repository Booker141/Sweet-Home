import clientPromise from "../../lib/MongoDB";
import { ObjectId } from "mongodb";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "50mb",
    },
    responseLimit: false,
  },
};

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=10");

  const client = await clientPromise;
  const db = await client.db();
  const user = await db
    .collection("users")
    .findOne({ username: req.query.username });
  const account = await db
    .collection("accounts")
    .findOne({ username: req.query.username });
  const body = req.body;

  if (req.method === "GET") {
    const userData = JSON.parse(JSON.stringify(user));

    res.status(200).json(userData);
  }

  if (req.method === "PUT") {
    await db.collection("users").updateOne(
      { username: req.query.username },
      {
        $set: {
          _id: user._id,
          email: user.email,
          firstname: body.firstname,
          lastname: body.lastname,
          username: user.username,
          password: user.password,
          phone: user.phone,
          gender: user.gender,
          birthdate: new Date(body.birthdate),
          biography: body.biography,
          location: body.location,
          image: body.image,
          banner: body.banner,
          status: user.status,
          role: user.role,
          followers: user.followers,
          following: user.following,
          likes: user.likes,
          saves: user.saves,
          pets: user.pets,
          posts: user.posts,
          complaints: user.complaints,
          accountId: user.accountId,
          createdAt: user.createdAt,
        },
      }
    );
    await db.collection("accounts").updateOne(
      { username: req.query.username },
      {
        $set: {
          _id: account._id,
          provider: account.provider,
          type: account.type,
          access_token: account.access_token,
          expires_at: account.expires_at,
          scope: account.scope,
          token_type: account.token_type,
          refresh_token: account.refresh_token,
          providerAccountId: account.providerAccountId,
          email: user.email,
          firstname: body.firstname,
          lastname: body.lastname,
          username: user.username,
          createdAt: account.createdAt,
          userId: user._id,
        },
      }
    );

    res
      .status(201)
      .json({ message: "Se ha guardado la información correctamente" });
  }

  if (req.method === "DELETE") {
    await db.collection("users").deleteOne({ username: req.query.username });
    await db.collection("accounts").deleteOne({ userId: user._id });
    await db.collection("pets").remove({ ownerId: user._id });
    await db.collection("posts").remove({ userId: user._id });
    await db.collection("comments").remove({ userId: user._id });
    await db.collection("notifications").remove({ receiver: user._id });
    await db
      .collection("complaints")
      .remove({ usernameFrom: req.query.username });
    await db.collection("attendances").remove({ userId: user._id });

    res.status(200).json({ message: "Usuario eliminado correctamente" });
  }
}

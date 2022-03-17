// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  const EMBED_ID = process.env.EMBED_ID;
  const PRIVATE_KEY = process.env.PRIVATE_KEY;
  const token = await jwt.sign(
    {
      embed: EMBED_ID,
      sub: "mamtadesai007@gmail.com", // a unique identifier such as an id or email
    },
    PRIVATE_KEY
  );
  res.status(200).json({ token });
}

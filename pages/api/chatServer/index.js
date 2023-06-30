import Ably from "ably/promises";



export default async function handler (req, res) {

  res.setHeader('Cache-Control', 's-maxage=10'); 

  const rest = new Ably.Rest(process.env.ABLY_API_KEY);

  console.log(rest)
 
  const tokenParams = {
    clientId: "sweet-home-chat",
  };
  
  rest.auth.createTokenRequest(tokenParams, (err, tokenRequest) => {
    if (err) {
      res.status(500).send("Ha ocurrido un error solicitando el token");
    } else {
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify(tokenRequest));
    }
  });

}
